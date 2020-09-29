<template>
  <div >
    <!-- 答题区域 -->
    <Quiz @on-finish="finish" v-if="!isDone" />

    <!-- 成绩 -->
    <Score :answers="questions" :qlist="qlist"  v-else />
  </div>
</template>

<script>
import Quiz from "../components/Quiz";
import Score from "../components/Score";
import {mapActions} from 'vuex'

export default {
name: 'App',
  components: {
    Quiz,
    Score
  },
  data() {
    return {
      isDone: false,
      questions:new Map(),
      qlist:[],
      q:[],
      score:0
    }
  },
  methods: {
    ...mapActions(['adds']),
    finish: function(qe,l) {
      this.isDone = true;
      this.questions=qe,
      this.qlist=l
      // 其他
      for (const q of this.qlist) {
      if (q.right === this.questions.get(q.id)) {
        this.score += 20;
      }
    }
      this.questions.forEach((a) => {
        this.q.push(a);
      });
      this.adds({ti:this.qlist,daan:this.q,total:this.score})
    },
    
  },

}
</script>