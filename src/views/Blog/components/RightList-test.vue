<template>
  <RightList
    :list="list"
    @select="handleSelect"
  />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data () {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            { name: "c-2", isSelect: false },
            { name: "c-3", isSelect: false },
            {
              name: "c-4",
              isSelect: false,
              children: [
                { name: "c-4-1", isSelect: false },
                { name: "c-4-2", isSelect: false },
                { name: "c-4-3", isSelect: false },
                { name: "c-4-4", isSelect: false },
                { name: "c-4-5", isSelect: false },
              ]
            },
            { name: "c-5", isSelect: false },
          ]
        },
        { name: "d", isSelect: false },
        { name: "e", isSelect: false },
      ]
    }
  },
  methods: {
    handleSelect (item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>