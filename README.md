# vue-tree-viewer

Render a hierarchical content as tree structure base on the tree JSon

## Project setup
```
npm i vue-tree-viewer
```
### Features
- **Generate the hierachical tree strucutre according to the provided JSON array**
- **Make expandable view for parent and children node**
- **Callback function for node onclick which provide clicked node object and event **

#### Usage
```
<template>
  <div id="app">
    <VueTreeViewer :nodes="list" :callbackFunction="customHandler" />
  </div>
</template>


<script>
  import VueTreeViewer from 'vue-tree-viewer'
  import "vue-tree-viewer/dist/vue-tree-viewer.css";

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
    },
  methods: {
    customHandler(emitObject) {
      // This emithObject has the even and the clicked node object
    }
  }
  }
</script>
```


|   prop| Mandatory |  Type |   Default|   Description|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|   nodes| yes | JSon Array |  - |  Tree Jso |
|   callbackFunction| No |Function |  - |  Provide your callback function name|

Data need should be JSON array

|   Name|  Type |   Default|   Description|
| ------------ | ------------ | ------------ | ------------ |
|   id|  Number, String |  - |  This the unique ID of the each node |
|   name| String |  - |  Name of the node  |



