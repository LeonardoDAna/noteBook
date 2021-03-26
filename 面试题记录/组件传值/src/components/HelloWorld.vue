<template>
  <div class="All">
    <h3 style='color:red'>父盒子</h3>
    <h4>{{fatherValue}}</h4>
    <button @click="changeFatherValue()">父button</button>
    <firstChild :fatherValue="fatherValue"></firstChild>
    <secondChild @listenEvent='fatherFn'></secondChild>
  </div>
</template>
<script>
  import firstChild from './firstChild.vue'
  import secondChild from './secondChild.vue'
  export default {
    name: "App",
    components: {
      firstChild,
      secondChild
    },
    computed: {
    },
    data() {
      return {
        // count: store.state.count,
        fatherValue: 'fatherValue'
      };
    },
    mounted() {},
    methods: {
      changeFatherValue() {
        this.fatherValue = '重新传递给子组件'
      },
      fatherFn(value) {
        this.fatherValue = value
      }
    },
  };
</script>
<style lang="scss">
  .All {}
</style>