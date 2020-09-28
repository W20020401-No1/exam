<template>
  <div class="container">
    <div class="jumbotron py-3">
      <h1 class="display-3">成绩</h1>
      <hr class="my-2" />
      <table class="table table-bordered table-striped text-center">
        <thead class="thead-dark">
          <tr>
            <th>题号</th>
            <th>参考答案</th>
            <th>答案</th>
            <th>得分</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="([k, v], index) in answers" :key="index">
            <td>{{ k }}</td>
            <td>
              <span class="badge badge-pill badge-danger">{{
                correct(k)
              }}</span>
            </td>
            <td>
              <span
                v-if="v === correct(k)"
                class="badge badge-pill badge-danger"
                >{{ v }}</span
              >
              <span v-else class="badge badge-pill badge-primary">{{ v }}</span>
            </td>
            <td>
              {{ v === correct(k) ? 20 : 0 }}
            </td>
          </tr>
          <tr class="h3">
            <td colspan="3">总成绩</td>
            <td>{{ score }}</td>
          </tr>
        </tbody>
      </table>
      <button v-if="isShow" type="button" class="btn btn-primary" @click="show">
        显示详情
      </button>
      
      <button v-else type="button" class="btn btn-primary" @click="show">
        收起
      </button>
    </div>
    <div v-if="!isShow">
    <div  v-for="(t, index) in qlist" :key="index">
      <div class="card">
        <div class="card-body">
          <p>{{ t.id }}、{{ t.title }}</p>
          <hr />
          <div v-for="(a,i) in t.items" :key="i">
            <span class="badge badge-pill badge-primary mr-2">{{
          itemIndexs[i]
        }}</span>{{a}}
          </div>
          <div class="float-right">正确答案为：{{t.answer}}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Score",
  props: {
    answers: Map,
    qlist: Array,
  },
  data() {
    return {
      score: 0,
      isShow: true,
       itemIndexs: ["A", "B", "C", "D", "E"]
    };
  },
  methods: {
    show: function () {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  computed: {
    correct() {
      return function (id) {
        for (const i of this.qlist) {
          if (i.id == id) {
            return i.answer;
          }
        }
      };
    },
  },
  created() {
    for (const q of this.qlist) {
      if (q.answer === this.answers.get(q.id)) {
        this.score += 20;
      }
    }
  },
};
</script>