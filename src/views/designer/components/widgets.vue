<template>
	<div class="widgetsContainer">
		<div class="widget" id="" v-for="widget in widgets" :key="widget.widget" draggable="true" @dragstart="dragStart($event, widget.widget)">
			<span>{{widget.name}}</span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	components: {
	},
	data() {
		return {
			widgets: [{
				name: '折线图',
				widget: 'line-charts'
			}]
		}
	},
	methods: {
		dragStart(event: DragEvent, widget: string) {
			console.log('complete', event)
			if (event.dataTransfer)
			event.dataTransfer.setData("widget-code", widget);
		},
	}
})
</script>

<style lang="less">
.widgetsContainer {
	.widget {
		color: #333;
		padding: 10px 20px;
		text-align: center;
		cursor: pointer;
	}
}
</style>