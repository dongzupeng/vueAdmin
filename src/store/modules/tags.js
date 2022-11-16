import { getCache, setCache, removeCache } from '@/utils/setCache';
const state = {
    tabsList: [
        {
            title:'用户列表',
            path:'/home/user'
        }
    ],

};

const mutations = {
    //选择标签 选择面包屑
    SELECT_MENU(state, val) {
        state.tabsList = val
    },

};

const actions = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
