import VueTreeViewer from "./components/VueTreeViewer.vue";

const TreeViewer = {
 install(Vue) {
  Vue.component("vue-tree-viewer", VueTreeViewer);
 }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTreeViewer);
}

export default TreeViewer;