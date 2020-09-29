<template>
  <div class="container">
    <!-- 进度条 -->
    <!-- 组件的高内聚 -->
    <ProgressBar :value="progress" />

    <!-- 题目 -->
    <!-- 注册自定义事件的监听器 -->
    <Multiltion
      :list="questionList"
      @on-answer="addAnswer"
      @on-submit="sendAnswers"
    />
  </div>
</template>
 
<script>
import ProgressBar from "../components/ProgressBar.vue";
import Multiltion from "./Multiltion.vue";

// shift + alt + f
export default {
  name: "Multil",
  components: {
    ProgressBar,
    Multiltion,
  },
  data() {
    return {
      answers: new Map(),
      answersSize: 0, // 计数器，获得 Map 的大小
      questionList: [
        {
          id: 1,
          title: "哪些国家在亚洲?",
          ans: [
            { A: "新加坡" },
            { B: "加拿大" },
            { C: "澳大利亚" },
            { D: "印度" },
          ],
          right: ["A", "D"],
        },
        {
          id: 2,
          title: "哪些是水果?",
          ans: [{ A: "榴莲" }, { B: "西瓜" }, { C: "南瓜" }, { D: "上海青" }],
          right: ["A", "B"],
        },
        {
          id: 3,
          title: "哪些属于四大名著?",
          ans: [
            { A: "西游记" },
            { B: "金瓶梅" },
            { C: "三国演义" },
            { D: "三体" },
          ],
          right: ["A", "C"],
        },
        {
          id: 4,
          title: "那两个是国产企业",
          ans: [
            { "A": "微软" }, 
            {"B": "亚马逊" }, 
            {"C":"字节跳动"}, 
            {"D":"中国建行"}
            ],
          right: ["C", "D"],
        },
        {
          id: 5,
          title: "学过的 Web 前端框架",
          ans: [
             {"A":"Angular"},
             {"B":"Vue"}, 
             {"C":"React"}, 
             {"D":"jQuery"}],
          right: ["B", "D"],
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