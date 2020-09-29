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
      isDone: false,
      questions: new Map(),
      qlist: [],
      q:[],
      score:0
    };
  },
  methods: {
    ...mapActions(["adds"]),
    finish: function (q, l) {
      this.isDone = true
      this.questions = q
      this.qlist = l
      // 其他
      //
      for (const q of this.qlist) {
        
        if (q.right.tostring('') === this.questions.get(q.id).tostring('')) {
          this.score += 20;
        }
      }
      this.questions.forEach((a) => {
        this.q.push(a);
      });
      this.adds({ ti: this.qlist, daan: this.q, total: this.score });
    },
  },
};
</script>