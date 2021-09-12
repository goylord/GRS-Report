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
      <el-header style="border-bottom: 1px solid #eee;height: 40px;"></el-header>
      <div class="designer-area">
        <slot name="container"></slot>
      </div>
    </el-container>
    <el-aside class="aside">
      <el-tabs stretch v-model="rightActiveTab">
        <el-tab-pane label="信息配置" name="info">
          <slot name="baseInfo"></slot>
        </el-tab-pane>
        <el-tab-pane label="数据配置" name="data">配置管理</el-tab-pane>
      </el-tabs>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let  activeTab = ref('components')
let  rightActiveTab = ref('info')

</script>

<style lang="less">
.layout-container {
  height: 100%;
  .aside {
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    height: 100%;
    overflow: hidden auto;
  }
  .designer-area {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
}

</style>