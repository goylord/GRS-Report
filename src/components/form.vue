<template>
  <div class="formComponent">
    <el-form ref="form" :model="values" label-width="80px">
      <el-form-item v-for="(formItem, index) in props.formModel" :label="formItem.fieldName" :key="index">
        <el-input v-if="formItem.fieldType === 'input'" v-model="values[formItem.fieldCode]" placeholder="请输入" v-bind="generateProps(formItem)"></el-input>
        <el-input-number v-else-if="formItem.fieldType === 'number'" v-model="values[formItem.fieldCode]" placeholder="请输入" v-bind="generateProps(formItem)"></el-input-number>
        <el-switch v-else-if="formItem.fieldType === 'switch'" v-model="values[formItem.fieldCode]" v-bind="generateProps(formItem)"></el-switch>
        <el-select v-else-if="formItem.fieldType === 'select'" v-model="values[formItem.fieldCode]" placeholder="请选择">
          <el-option v-for="option in formItem.options" :key="option.value" :label="option.name" :value="option.value" v-bind="generateProps(formItem)"></el-option>
        </el-select>
        <el-color-picker v-else-if="formItem.fieldType === 'color'" v-model="values[formItem.fieldCode]" show-alpha v-bind="generateProps(formItem)"></el-color-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
const props = defineProps<{
  formModel: configItem[];
  defaultValue?: any
}>()
const generateProps = (formItemConfig: configItem) => {
  const { props } = formItemConfig
  if (typeof props === 'object') {
    return props
  }
  return {}
}
const values = ref<any>({})
onMounted(() => {
  if (typeof props.defaultValue === 'object') {
    Object.keys(props.defaultValue).forEach(key => {
      values[key] = props.defaultValue[key]
    })
  }
})


</script>

<style lang="less">
</style>