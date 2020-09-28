<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">答题详情</h1>
      <router-link type="button" class="btn btn-danger float-right" to="cuotiji">返回答题记录</router-link>
    </div>
    <div>
      <div class="card">
        <div
          v-for="(item, index) in cuotiji[ind].ti"
          :key="index"
          class="card-body"
        >
          <h1 class="display-3 text-left">
            {{ item.title }}
          </h1>
          <div>
            <hr class="my-4" />
            <div class="row mt-2 pt-2" v-for="a in item.ans" :key="a">
              <div class="form-check">
                <label class="form-check-label">
                  <span class="badge badge-pill badge-primary">{{
                    String(Object.keys(a))
                  }}</span>
                  {{ String(Object.values(a)) }}
                </label>
              </div>
            </div>
            <p class="text-center">
              你的答案：<span class="badge badge-warning">{{
                cuotiji[ind].daan[index].length=== 0 ? "无":cuotiji[ind].daan[index]
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cuotiji", "ind"]),
  },
};
</script>