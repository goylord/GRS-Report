<template>
  <div class="dataSourceContainer">
    <div class="dataSourceOperator">
      <el-button type="primary" size="mini" @click="handleAdd">添加</el-button>
    </div>
    <el-table border :data="tableData" size="mini" style="width: 100%">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="port" label="端口"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
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

    <el-dialog title="数据源配置" v-model="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="form" :rules="rules" label-width="150px" ref="formRef" v-if="dialogVisible">
        <el-form-item label="数据源名称" prop="name">
          <el-input placeholder="请输入数据源名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="数据库地址" prop="address">
          <el-input placeholder="请输入数据库地址" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="数据库端口" prop="port">
          <el-input-number placeholder="请输入数据库" v-model="form.port"></el-input-number>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="form.password"></el-input>
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
const formRef = ref<any>(null)
const rules = reactive({
  name: [
    { required: true, message: '请输入数据源名称', trigger: 'blur' },
  ],
  address: [
    { required: true, message: '请输入数据库地址', trigger: 'blur' },
  ],
  port: [
    { required: true, message: '请输入数据库端口号', trigger: 'blur' },
  ],
  username: [
    { required: true, message: '请输入连接用户', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入连接密码', trigger: 'blur' },
  ],
})

const getDataSourceList = () => {
  fetch('/api/source/list').then(res => res.json()).then(res => {
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
      fetch(`/api/source/${form.value.id ? 'edit' : 'add'}`, {
        method: 'POST',
        body: JSON.stringify(form.value),
      }).then(res => res.json()).then(res => {
        // 创建成功
        dialogVisible.value = false
        getDataSourceList()
        ElMessage.success('保存成功')
      })
    } else {
      console.log('error submit!!')
      return false
    }
  })

}
const handleAdd = () => {
  form.value = {}
  dialogVisible.value = true
}
const handleEdit = (row: any) => {
  form.value = {...row}
  dialogVisible.value = true
}
const handleRemove = (row: any) => {
  fetch('/api/source/delete ', {
    method: 'POST',
    body: JSON.stringify({
      id: row.id
    }),
  }).then(res => res.json()).then(res => {
    // 创建成功
    ElMessage.success('删除成功')
    getDataSourceList()
  })
}
onMounted(() => {
  getDataSourceList()
})
</script>
<style lang="less">
.dataSourceContainer {
  padding: 10px 20px;
  .dataSourceOperator {
    padding: 10px 0;
  }
}
</style>