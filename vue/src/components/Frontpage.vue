<template>
<div>
  <mt-cell-swipe v-for="n in 7" title="tab-container 3" :right=rightButtons></mt-cell-swipe>
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="tab-container1">
      <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container2">
      <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container3">
    </mt-tab-container-item>
  </mt-tab-container>
  <mt-tabbar v-model="selected" fixed=fixed>
    <mt-tab-item id="tab-container1">
      <img slot="icon" src="../assets/logo.png" /> Home
    </mt-tab-item>
    <mt-tab-item id="tab-container2">
      <img slot="icon" src="../assets/logo.png" /> Demo
    </mt-tab-item>
    <mt-tab-item id="tab-container3">
      <img slot="icon" src="../assets/logo.png" /> Thanks
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<style>

</style>


<script>
import {
  MessageBox
} from 'mint-ui';

export default {
  data() {
    return {
      selected: '',
      fixed: true,
      rightButtons: [
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => MessageBox('delete')
        }
      ]
    }
  }

}
</script>
