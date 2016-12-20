<template>
  <actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </actionsheet>
</template>

<script>
import { Actionsheet } from 'mint-ui'
import { MessageBox } from 'mint-ui'

export default {
  components:{
    Actionsheet
  },
  data () {
    return {
      sheetVisible: true,
      actions: [
        {name: "test1", method: this.action},
        {name: "test2", method: this.action}
      ]
    }
  },
    methods: {
      action (val) {
        console.log("val");
        MessageBox('title', 'success');
      }
    }
}
</script>
