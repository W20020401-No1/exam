<template>
  <div class="jumbotron mt-3 py-3">
    <!-- 题目 -->
    <h1 class="display-4">
      <span class="badge badge-dark mr-3">{{ currentQuestion.id }}</span>
      {{ currentQuestion.title }}
    </h1>
    <hr class="my-2" />
    <!-- 选项 -->
    <div
      v-for="(item, index) in currentQuestion.ans"
      :key="index"
      class="form-check my-3"
    >  <div class="form-check">
      <label class="form-check-label">
        <input
          @change="setAnswer(currentQuestion.id)"
          v-model="answer"
          type="checkbox"
          class="form-check-input"
          name="inte"
          :value="String(Object.keys(item))"
        />
        <span class="badge badge-pill badge-primary">{{
          String(Object.keys(item))
        }}</span>
        {{ String(Object.values(item)) }}
      </label>
    </div>
    </div>
    <!-- 按钮 -->
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <!-- 按钮是否可用 -->
        <button @click="prev" type="button" class="btn btn-danger btn-block">
          上一题
        </button>
      </div>
      <div class="col-lg-6 col-sm-12">
        <button
          v-if="isLast"
          @click="submit"
          type="button"
          class="btn btn-primary btn-block mt-sm-3 mt-lg-0"
        >
          完成
        </button>
        <button
          v-else
          @click="next"
          type="button"
          class="btn btn-success btn-block mt-sm-3 mt-lg-0"
        >
          下一题
        </button>
      </div>
    </div>
    <div class="mt-4">
    <span v-for="(item, index) in list" :key="index" >
      <button
        @click="skip(index)"
        v-if="a.has(index + 1)"
        type="button"
        class="btn btn-primary"
      >
        {{ index + 1 }}
      </button>

      <button @click="skip(index)" v-else type="button" class="btn btn-info">
        {{ index + 1 }}
      </button>
    </span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Multil",
  props: {
    list: Array,
  },
  data() {
    return {
      answer:[],
      
      current: 0,
      a: new Map(),
    };
  },
  methods: {
    skip: function (i) {
      this.current = i;
      this.right= this.a.get(this.current+1);
    },
    setAnswer: function (id) {
      // 设置答案
      // console.log(`${id}:${this.answer}`);
      // 当前题目的答案传递到父组件
      // 触发一个自定义事件，并事件监听器传递参数
      this.$emit("on-answer", id, this.answer);
      this.a.set(id, this.answer);
    },
    next: function () {
      if (this.current < this.list.length - 1) {
        this.current++;
        if (this.a.has(this.current)) {
          this.answer = this.a.get(this.current + 1);
          this.answer = [];
        } else {
          this.answer = [];
        }
      }
    },
    prev: function () {
      let that = this;
      if (this.current > 0) {
        this.current--;
        this.answer = this.a.get(this.current + 1);
      }
    },
    submit: function () {
      // 抛出了一个自定义的事件，对应的事件监听器会接收到
      this.$emit("on-submit");
    },
  },
  computed: {
    currentQuestion: function () {
      return this.list[this.current];
    },
    // 是否到达最后一题
    isLast: function () {
      return this.current === this.list.length - 1;
    },
  },
};
</script>