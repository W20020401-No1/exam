<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">答题记录</h1>
      <hr class="my-2" />
    </div>
    <div v-for="(item, index) in cuotiji" :key="index" class="card mt-3">
      <div class="card-body">
        <h4 v-for="(v, i) in item.ti" :key="i" class="card-title">
          {{ v.title }}
        </h4>
      </div>
      <div class="text-center display-4">
        第{{ index + 1 }}次答题分数：<span class="text-danger">{{
          item.total
        }}</span>
      </div>
      <button @click="add(index)">
        <router-link
          type="button"
          to="DaTiXiangQing"
          class="btn btn-primary btn-block float-right mb-0 align-middle"
          >查看详情</router-link
        >
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cuotiji"]),
  },
  methods: {
    ...mapActions(["inds"]),
    add: function (i) {
      this.inds(i);
    },
  },
};
</script>