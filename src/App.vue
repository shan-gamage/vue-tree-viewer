<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<VueTreeViewer :nodes="list" />
	</div>
</template>

<script>
import VueTreeViewer from './components/VueTreeViewer.vue'

export default {
	name:'App',
	components: {
		VueTreeViewer
	},
	data() {
		return {
			list : [
  {
    "name": "parent",
    "nodeUUID": "92360bad-c6f9-403a-92e6-320dcafe8a8b",
    "children": [
      {
        "name": "test1",
        "nodeUUID": "461b3778-7c16-11ec-90d6-0242ac120003",
        "children": [
          {
            "name": "test2",
            "nodeUUID": "461b39bc-7c16-11ec-90d6-0242ac120003"
          },
          {
            "name": "test3",
            "nodeUUID": "461b3af2-7c16-11ec-90d6-0242ac120003",
            "children": [
              {
                "name": "test5",
                "nodeUUID": "461b3c14-7c16-11ec-90d6-0242ac120003"
              }
            ]
          },
          {
            "name": "test3",
            "nodeUUID": "461b3d22-7c16-11ec-90d6-0242ac120003"
          },
          {
            "name": "test4",
            "nodeUUID": "461b3fde-7c16-11ec-90d6-0242ac120003",
            "children": [
              {
                "name": "test6",
                "nodeUUID": "461b4100-7c16-11ec-90d6-0242ac120003",
                "children": [
                  {
                    "name": "test7",
                    "nodeUUID": "461b4254-7c16-11ec-90d6-0242ac120003"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>