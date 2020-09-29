export default {
    //查找题目
    STR(state, s) {
        console.log('开始');
        state.str = [];
        console.log(state.single);
        state.single.forEach(v => {
            if (v.title.indexOf(s) != -1) {
                state.str.push(v)
            }
        })
        console.log(state.multipart);
        state.multipart.forEach(v => {
            if (v.title.indexOf(s) != -1) {
                state.str.push(v)
            }
        })
        console.log(state.str);
    },
    //添加答题记录
    ADD(state,s){
        console.log(s);
        state.cuotiji.push(s)
    },
    //查看详情记录
    IND(state,s){
        console.log(s);
        state.ind=s
    }
}
