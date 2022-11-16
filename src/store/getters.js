const getters = {
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    tabsList: state => state.tags.tabsList
};
export default getters;