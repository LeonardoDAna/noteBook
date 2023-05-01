<template>
  <div class="integration" @click="magnifying">
    <el-row class="row wrap width-full height-full">
      <el-col :span="12">
        <div ref="p1" @click="magnifying">
          <p1 class="height-full width-full" />
        </div>
      </el-col>
      <el-col :span="12"> <p2 class="height-full width-full" /></el-col>
      <el-col :span="12"> <p3 class="height-full width-full" /></el-col>
      <el-col :span="12"> <p4 class="height-full width-full" /></el-col>
    </el-row>
  </div>
</template>

<script>
import p1 from "../components/p1.vue";
import p2 from "../components/p2.vue";
import p3 from "../components/p3.vue";
import p4 from "../components/p4.vue";
export default {
  name: "integration",
  components: {
    p1,
    p2,
    p3,
    p4,
  },
  mounted() {
    document.documentElement.style.fontSize = "8px";
  },
  methods: {
    magnifying() {
      console.log("!@#!@#");
      this.$refs.p1.style.position = "absolute";
      document.documentElement.style.fontSize = "16px";
    },
  },
};
</script>

<style lang="scss" scoped>
.integration {
  width: 3840px;
  height: 100%;
}
</style>