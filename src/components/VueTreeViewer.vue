<template>
    <div>
        <div
            v-for="node in sortedNodes"
            :key="node.nodeUUID"
            :style="{ 'margin-left': `${depth * 30}px` }"
            class="node"
        >
            {{ node.name }}
            <div :id="'tree-' + node.nodeUUID">
                <VueTreeViewer
                    v-if="node.children"
                    :nodes="node.children"
                    :depth="1"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'VueTreeViewer',
	props: {
		nodes: Array,
        depth: {
            type: Number,
            default: 0,
        },
	},
	data() {
		return {
        expanded: this.expandable,
        selectedNode: Object,
        sortedNodes: [],
        doSort: false
		};
	},
	created() {
        if(this.doSort) {
            this.nodes.map((child) => {
                this.sortedNodes.push(this.sortTree(child));
            });
        } else {
            this.sortedNodes = this.nodes;   
        }
	},
	methods: {
		sortTree(node) {
            if (node.children && node.children.length > 0) {
                node.children.sort((a, b) => {
                    if (!a.children || a.children.length === 0 && b.children && b.children.length > 0) {
                        return -1;
                    } else if (a.children && a.children.length > 0 && !b.children || b.children.length === 0) {
                        return 1;
                    } else {
                        return;
                    }
                });
            }
            return node;
        }
	}
}
</script>
