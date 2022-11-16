import { getCache, setCache, removeCache } from '@/utils/setCache';
import { login } from '@/constants/login';

const state = {
    userInfo: getCache('userInfo') || '',
    token: getCache('token') || '',
    breadList:getCache('breadList') || ''
};

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_USERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    SET_BREADLIST(state, breadList) {
        state.breadList = breadList
    }
};

const actions = {
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo)
                .then(res => {
                    const { data } = res;
                    if (data) {
                        commit('SET_TOKEN', data.token);
                        setCache('TOKEN', data.token);
                        commit('SET_USERINFO', data.userInfo);
                        setCache('USERINFO', data.userInfo);
                    }
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },

    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout()
                .then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_USERINFO', '');
                    removeCache('token');
                    removeCache('userInfo');
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
