<template>
	<div id="app">
		<VueTreeViewer :nodes="list"/>
	</div>
</template>
<script>
import VueTreeViewer from './components/VueTreeViewer.vue'
import './assets/css/style.css';

export default {
	name:'App',
	components: {
		VueTreeViewer
	},
	data() {
		return {
			list : [
  {
    "name": "Parent of the tree",
    "id": "92360bad-c6f9-403a-92e6-320dcafe8a8b",
    "children": [
      {
        "name": "Shan",
        "id": "461b3778-7c16-11ec-90d6-0242ac120003",
        "children": [
          {
            "name": "child node 2",
            "id": "461b39bc-7c16-11ec-90d6-0242ac120003"
          },
          {
            "name": "child node 3",
            "id": "461b3af2-7c16-11ec-90d6-0242ac120003",
            "children": [
              {
                "name": "child node 4",
                "id": "461b3c14-7c16-11ec-90d6-0242ac120003"
              }
            ]
          },
          {
            "name": "child node 1",
            "id": "461b3d22-7c16-11ec-90d6-0242ac120003"
          },
          {
            "name": "child node 5",
            "id": "461b3fde-7c16-11ec-90d6-0242ac120003",
            "children": [
              {
                "name": "child node 6",
                "id": "461b4100-7c16-11ec-90d6-0242ac120003",
                "children": [
                  {
                    "name": "child node 7",
                    "id": "461b4254-7c16-11ec-90d6-0242ac120003"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Sashan",
        "id": "461b3778-7c16-11ec-90d6-0242ac120004"
      }
    ]
  }
]
		}
	}
}
</script>