/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-07 17:25:15
*/

export const loaded = ({ commit }, payload) => {
    setTimeout(() => {
        commit('loaded');
    }, payload);
};
