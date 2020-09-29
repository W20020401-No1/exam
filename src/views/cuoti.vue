<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">错题集</h1>
      </div>
      <div>
        <div class="card">
          <div v-for="(item, index) in cuoti" :key="index" class="card-body">
            <h1 class="display-3 text-left">
              {{ item.title }}
            </h1>
            <div>
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
                正确答案：<span class="badge badge-warning">{{
                  item.right
                }}</span>
              </p>
              <hr class="my-4" />
              <p class="text-center"></p>
            </div>
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
    ...mapState(["cuoti"]),
  },
};
</script>
<style lang="">
</style>