<template>
  <div class="container">
    <!-- 进度条 -->
    <!-- 组件的高内聚 -->
    <ProgressBar :value="progress" />

    <!-- 题目 -->
    <!-- 注册自定义事件的监听器 -->
    <Question
      :list="questionList"
      @on-answer="addAnswer"
      @on-submit="sendAnswers"
    />
  </div>
</template>
 
<script>
import ProgressBar from "./ProgressBar.vue";
import Question from "./Question.vue";

// shift + alt + f
export default {
  name: "Quiz",
  components: {
    ProgressBar,
    Question,
  },
  data() {
    return {
      answers: new Map(),
      answersSize: 0, // 计数器，获得 Map 的大小
      questionList: [
        {
          id: 1,
          title: "最长的河?",
          ans: [
            { A: "尼罗河" },
            { B: "亚马逊河" },
            { C: "长江" },
            { D: "黄河" },
          ],
          right: "B",
        },
        {
          id: 2,
          title: "市值最高的公司?",
          ans: [
            { A: "中国移动" },
            { B: "阿里巴巴" },
            { C: "可口可乐" },
            { D: "苹果" },
          ],
          right: "D",
        },
        {
          id: 3,
          title: "最流行的程序设计语言?",
          ans: [{ A: "C" }, { B: "JAVA" }, { C: "PHP" }, { D: "PYTHON" }],
          right: "B",
        },
        {
          id: 4,
          title: "最流行的数据库?",
          ans: [
            { A: "DB2" },
            { B: "MySQL" },
            { C: "Oracle" },
            { D: "SQL Server" },
          ],
          right: "B",
        },
        {
          id: 5,
          title: "发明鼠标的时间?",
          ans: [{ A: "1963" }, { B: "1990" }, { C: "2000" }, { D: "1984" }],
          right: "A",
        },
      ],
    };
  },
  methods: {
    sendAnswers: function () {
      // 抛出一个自定义的事件
      this.$emit("on-finish", this.answers, this.questionList);
    },
    addAnswer: function (id, answer) {
      this.answers.set(id, answer);
      // console.log(this.answers);
      this.answersSize = this.answers.size;
    },
  },
  computed: {
    // 更新进度条
    progress: function () {
      return (this.answersSize / this.questionList.length) * 100;
    },
  },
};
</script>