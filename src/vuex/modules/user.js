

import api from '../../../static/js/api'

export default {

    state:{
      // 用户登录状态
      loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
      // 用户登录信息
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
      // 用户数据信息
      userData: []
    },

    actions:{

      /**
     * 请求用户信息
     */
    getUserData({ commit }, id) {
        commit(types.COM_LOADING_STATUS, true)
        api.UserInfo(id)
            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
    },

      setUserInfo({ commit }, res) {
        console.log("login.js----setUserInfo");
        console.log(res);
      },

       /**
     * 退出登录
     */
    setSignOut({ commit }) {
        localStorage.removeItem('loginStatus')
        localStorage.removeItem('userInfo')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
    },
  

     

    },
    getters:{

    },
    mutations:{
    	
    }
}