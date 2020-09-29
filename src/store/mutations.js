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
    ADD(state, s) {
        state.cuotiji.push(s)
    },
    //添加错题记录
    mistake(state, s) {
        for (let i = 0; i < s.ti.length; i++) {
            if (s.daan[i].toString() != s.ti[i].right.toString()) {
                if (state.cuoti.indexOf(s.ti[i]) < 0) {
                    state.cuoti.push(s.ti[i]);
                    //console.log(s.ti[i]);
                }
            }
        }
    },
    //查看详情记录
    IND(state, s) {
        console.log(s);
        state.ind = s
    }
}