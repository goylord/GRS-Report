<template>
  <div class="dataSourceContainer">
    <div class="dataSourceOperator">
      <el-button type="primary" size="mini" @click="handleAdd">添加</el-button>
    </div>
    <el-table border :data="tableData" size="mini" style="width: 100%">
      <!-- <el-table-column prop="dataSource" label="数据源名称"></el-table-column> -->
      <el-table-column prop="code" label="数据集编码"></el-table-column>
      <el-table-column prop="name" label="数据集名称"></el-table-column>
      <el-table-column prop="exec" label="SQL"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button size="mini" type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确认删除吗？" @confirm="handleRemove(scope.row)">
            <template #reference>
              <el-button size="mini" type="text">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="数据集配置" v-model="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="form" :rules="rules" label-width="150px" ref="formRef" v-if="dialogVisible">
        <el-form-item label="数据源" prop="dataSourceId">
          <el-select placeholder="请输入数据源" v-model="form.dataSourceId" style="width: 100%;">
            <el-option
              v-for="(item) in sourceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据集编码" prop="code">
          <el-input placeholder="数据集编码" v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="数据集名称" prop="name">
          <el-input placeholder="数据集名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="SQL" prop="exec">
          <el-input type="textarea" placeholder="请输入用SQL" v-model="form.exec" @blur="sqlChange"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="column" v-if="showParams">
          <el-select placeholder="请输入名称字段" v-model="form.column">
            <el-option
              v-for="(item) in columnOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="值" prop="value" v-if="showParams">
          <el-select placeholder="请输入值字段" v-model="form.value">
            <el-option
              v-for="(item) in columnOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类" prop="category" v-if="showParams">
          <el-select placeholder="请选择分类字段" v-model="form.category">
            <el-option
              v-for="(item) in columnOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input placeholder="请输入备注" type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number type="number" placeholder="请输入" v-model="form.sortNum"></el-input-number>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleOk">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const tableData = ref([])
const dialogVisible = ref(false)
const form = ref<any>({})
const sourceOptions = ref<any>([])
const columnOptions = ref<any>([])
const formRef = ref<any>(null)
const rules = reactive({
  dataSourceId: [
    { required: true, message: '请选择数据源', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入数据集编码', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入数据集名称', trigger: 'blur' },
  ],
  exec: [
    { required: true, message: '请输入SQL', trigger: 'blur' },
  ],
})
const showParams = ref<boolean>(false)

const getDataSetList = () => {
  fetch('/api/set/list').then(res => res.json()).then(res => {
    tableData.value = res.result
  })
}
const handleClose = () => {
  dialogVisible.value = false
}
const handleOk = () => {
  if (!formRef.value) return
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      form.value.params = JSON.stringify({
        column: form.value.column,
        value: form.value.value,
        category: form.value.category,
      })
      fetch(`/api/set/${form.value.id ? 'edit' : 'add'}`, {
        method: 'POST',
        body: JSON.stringify(form.value),
      }).then(res => res.json()).then(res => {
        // 创建成功
        dialogVisible.value = false
        getDataSetList()
        ElMessage.success('保存成功')
      })
    } else {
      ElMessage.error('保存失败')
      console.log('error submit!!')
      return false
    }
  })

}
const handleAdd = () => {
  form.value = {}
  dialogVisible.value = true
  columnOptions.value = []
  showParams.value = false
}
const handleEdit = (row: any) => {
  form.value = { ...row }
  columnOptions.value = []
  showParams.value = false
  dialogVisible.value = true
  if (form.value.params) {
    const params = JSON.parse(form.value.params)
    for (let i in params) {
      form.value[i] = params[i]
    }
    if (form.value.exec) {
      sqlChange()
    }
  }
}
const handleRemove = (row: any) => {
  fetch('/api/set/delete ', {
    method: 'POST',
    body: JSON.stringify({
      id: row.id
    }),
  }).then(res => res.json()).then(res => {
    // 创建成功
    ElMessage.success('删除成功')
    getDataSetList()
  })
}
const getDataSourceOptions = () => {
  fetch('/api/source/list?pageSize=10000').then(res => res.json()).then(res => {
    sourceOptions.value = res.result.map((item: any) => {
      return {
        label: item.name,
        value: item.id,
      }
    })
  })
}
onMounted(() => {
  getDataSetList()
  getDataSourceOptions()
})
const sqlChange = () => {
  console.log(form.value.exec)
  fetch('/api/sql/preview?sql=' + form.value.exec).then(res => res.json()).then(res => {
    columnOptions.value = res.result.map((item: string) => {
      return {
        label: item,
        value: item,
      }
    })
    showParams.value = true
  })
}
</script>
<style lang="less">
.dataSourceContainer {
  padding: 10px 20px;
  .dataSourceOperator {
    padding: 10px 0;
  }
}
</style>