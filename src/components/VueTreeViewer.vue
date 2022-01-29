<template>
    <div>
        <div
            v-for="node in sortedNodes"
            :key="node.id"
            :style="{ 'margin-left': `${depth * 30}px` }"
            class="node"
        >
            <div :id="'field-' + node.id" class="d-flex mx-2 mt-2 align-items-center">
                <span
                    @click="nodeClicked(node)"
                    class="pointer p-2 d-flex align-items-center"
                >
                    <i
                        class="transition"
                        :class="[isExpanded(node) ? 'rotate-180' : '', node.children && node.children.length > 0? 'arrow': 'circle']"
                    ></i>
                </span>
                <div class="node-details d-flex align-items-center p-2">
                    <span class="mr-2">{{ node.name }}</span>
                </div>
            </div>
            <div :id="'tree-' + node.id">
                <VueTreeViewer
                    v-if="isExpanded(node) && node.children"
                    :nodes="node.children"
                    :expandable="expanded"
                    :selectedEntity="selectedEntity"
                    :depth="1"
                    @onClick="(node) => $emit('onClick', node)"
                ></VueTreeViewer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'VueTreeViewer',
	props: {
		nodes: Array,
        expandable: {
            type: Object,
            default: function () {
                return {}
            }
        },
        selectedEntity: {
            type: Object,
            default: function () {
                return {}
            }
        },
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
        doSort: true
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
        },
        nodeClicked(node) {
            if ("children" in node) {
                if (node.children.length > 0) {
                    if (!this.isNodeExpandable(node)) {
                        this.expanded[node.id] = node;
                        document.getElementById("field-" + node.id).classList.remove("node-collapsed")
                        // window.$("#field-" + node.id).removeClass('');
                        // window.$("#tree-" + node.id).slideDown();
                        
                        document.getElementById("tree-" + node.id).style.transition = "all .3s ease-in-out";
                        document.getElementById("tree-" + node.id).style.display = "block";
                    } else {
                        document.getElementById("field-" + node.id).classList.add("node-collapsed")
                        
                        document.getElementById("tree-" + node.id).style.transition = "all .3s ease-in-out";
                        document.getElementById("tree-" + node.id).style.display = "none";
                        // window.$("#field-" + node.id).addClass('node-collapsed');
                        // window.$("#tree-" + node.id).slideUp();
                        delete this.expanded[node.id];
                    }
                }
            }
        },
        isNodeExpandable(node) {
            return ((node.id in this.expanded));
        },
        isExpanded(node) {
            if (!(node.id in this.selectedEntity)) {
                this.selectedEntity[node.id] = false;
            }
            if ("children" in node) {
                if (node.children.length > 0) {
                    this.expanded[node.id] = node;
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
	}
}
</script>

