<template>
	<div class="widgetsContainer">
		<div
			class="widget"
			v-for="widget in widgets"
			:key="widget.widget"
			draggable="true"
			@dragstart="dragStart($event, widget.widget)"
		>
			<span>{{ widget.name }}</span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { widgets } from '@/config/index'

export default defineComponent({
	components: {
	},
	data() {
		return {
			widgets,
		}
	},
	methods: {
		dragStart(event: DragEvent, widget: string) {
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