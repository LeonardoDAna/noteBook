<template>
  <div class="firstChild">
    <p>firstChild</p>
    <p>{{fatherValue}} {{count}}</p>
    <button @click="firstChildFn">firstChildButton</button>
  </div>
</template>

<script>
  export default {
    props: {
      fatherValue: String
    },
    computed: {
      count() {
        return this.$store.getters.filter
      }
    },
    methods: {
      firstChildFn() {
        this.$store.commit('dobuleValue')
      }
    }
    // watch()
  }
</script>

<style>
  .firstChild {
    background-color: #e2e2e2;
  }
</style>