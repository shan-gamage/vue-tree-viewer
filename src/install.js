import VueTreeViewer from "./components/VueTreeViewer.vue";

const VueTreeViewer = {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("vue-tree-viewer", VueTreeViewer);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTreeViewer);
}

export default VueTreeViewer;