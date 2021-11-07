<template>
	<div class="widgetsContainer">
		<div
			class="widget"
			v-for="widget in widgets"
			:key="widget.widget"
			draggable="true"
			@dragstart="dragStart($event, widget.widget)"
		>
			<div class="widgetItem">
				<div class="icon">
					<svg class="icon svg-icon" aria-hidden="true">
						<use :xlink:href="widget.icon" />
					</svg>
				</div>
				<div class="widgetName">{{ widget.name }}</div>
			</div>
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
	margin-top: -10px;
	.widget {
		color: #333;
		// padding: 10px 20px;
		text-align: center;
		cursor: pointer;
	}
	.widgetItem {
		display: flex;
		padding-left: 30px;
		border-bottom: 1px solid #eee;
		padding: 10px 20px;
		.icon {
			width: 30px;
			height: 30px;
		}
		.widgetName {
			height: 30px;
			line-height: 30px;
			margin-left: 30px;
		}
	}
}
</style>