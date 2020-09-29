<template>
  <div>
    <!-- 答题区域 -->
    <Multil @on-finish="finish" v-if="!isDone" />

    <!-- 成绩 -->
    <Multilscore :answers="questions" :qlist="qlist" v-else />
  </div>
</template>

<script>
import Multil from "../components/Multil";
import Multilscore from "../components/Multilscore";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Multil,
    Multilscore,
  },
  data() {
    return {
      eql: true,
      isDone: false,
      questions: new Map(),
      qlist: [],
      q: [],
      score: 0,
    };
  },
  methods: {
    ...mapActions(["adds", "addct"]),
    finish: function (qe, l) {
      this.isDone = true;
      this.questions = qe;
      this.qlist = l;
      // 其他
      //
      for (const q of this.qlist) {
        console.log("答案=" + q.right.toString());
        //console.log("自己答案=" + this.questions.get(q.id).toString());
        //q.right.toString() === this.questions.get(q.id).toString()
        if (q.right.toString() === this.questions.get(q.id).sort().toString()) {
          this.score += 20;
        }
      }
      this.questions.forEach((a) => {
        this.q.push(a);
      });
      this.adds({ ti: this.qlist, daan: this.q, total: this.score });
      this.addct({ ti: this.qlist, daan: this.q, total: this.score });
    },
  },
};
</script>