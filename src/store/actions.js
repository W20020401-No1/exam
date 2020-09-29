export default {
    //调用查找题目
    strs({ commit }, s) {
        commit('STR', s)
    },
    //添加错题集
    adds({ commit }, s) {
        commit('ADD', s)
    },
    //传递详情index
    inds({ commit }, i) {
        commit('IND', i)
    },
    addct({ commit }, s) {
        commit('mistake', s);
    }
}