<template>
  <actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </actionsheet>
</template>

<script>
import { Actionsheet } from 'mint-ui'

export default {
  components:{
    Actionsheet
  },
  data () {
    return {
      sheetVisible: false,
      actions: [
        {name: "test1", method: this.action},
        {name: "test2", method: this.action}
      ]
    }
  },
    methods: {
      action (val) {
        console.log("val");
      }
    }
}
</script>
