<template>
  <el-container class="layout-container">
    <el-aside class="aside">
      <el-tabs stretch v-model="activeTab">
        <el-tab-pane label="组件" name="components">
          <slot name="widgets"></slot>
        </el-tab-pane>
        <el-tab-pane label="图层" name="layouts">配置管理</el-tab-pane>
      </el-tabs>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <slot name="container"></slot>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let  activeTab = ref('components')
</script>

<style lang="less">
.layout-container {
  height: 100%;
  .aside {
    border-right: 1px solid #eee;
    height: 100%;
    overflow: hidden auto;
  }
}

</style>