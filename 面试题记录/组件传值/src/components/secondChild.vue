<template>
  <div class="secondChild">
    <p>secondChild</p>
    <p>{{secondChildValue}} {{count}}</p>
    <button @click="secondFn()">secondChildButton</button>
  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    data() {
      return {
        secondChildValue: 'secondChildValue'
      };
    },
    mounted() {},
    methods: {
      secondFn() {
        this.$emit('listenEvent', '第二个子组件给父组件传值')
        this.$store.commit('dobuleValue')
      },
    },
  }
</script>

<style>
  .secondChild {
    background-color: aqua;
  }
</style>