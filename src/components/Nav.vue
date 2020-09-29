<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-success">
    <router-link class="navbar-brand" to="/">在线考试</router-link>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >首页 <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/single" active-class="bg-white"
            >单选</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/multil" active-class="bg-white"
            >多选</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/com" active-class="bg-white"
            >在线模拟</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/xiangqing" active-class="bg-white"
            >答题记录</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cuoti" active-class="bg-white"
            >错题集</router-link
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="搜索题目、用户"
          v-model="timu"
        />
        <div @click="add">
          <router-link
            class="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            to="/search"
            :key="$route.fullPath"
            >搜索</router-link
          >
        </div>
      </form>
    </div>
  </nav>
</template>
 
<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      title: "线上测试",
      timu: "",
    };
  },
  methods: {
    ...mapActions(["strs"]),
    add: function () {
      if (this.timu != "") {
        this.strs(this.timu);
        this.timu = "";
      }
    },
  },
};
</script>