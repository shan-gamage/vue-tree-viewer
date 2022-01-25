import VueTreeViewer from "./components/VueTreeViewer.vue";

const VueTreeViewer = {
 install(Vue, options) {
  Vue.component("vue-tree-viewer", VueTreeViewer);
 }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTreeViewer);
}

export default VueTreeViewer;