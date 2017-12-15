
import api from '../../../static/js/api'

export default {

    state:{
      // 用户登录状态
      loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
      // 用户登录信息
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
      // banner
      homeBanner: JSON.parse(localStorage.getItem('homeBanner')) || {},
      // 病例讨论数据
      homePosts: JSON.parse(localStorage.getItem('homePosts')) || {},
    },

    actions:{

        getHomeData({ commit }) {
          console.log("getHomeData-->")
          api.Posts()
          .then(res =>{
            console.log(res.banner)
            console.log(res.data)
            localStorage.setItem("homeBanner",JSON.stringify(res.banner))
            localStorage.setItem("homePosts",JSON.stringify(res.data))
          })
        },


        login({ commit }) {
          console.log("login-->")
          let params = {
              email: '18600406407',
              password: '123'
          }

          api.Login(params)
          .then(res => {
            localStorage.setItem("loginStatus",true)
            commit('setUserLogout')
            console.log(res)
          })
        },
     

    },
    getters:{

    },
    mutations:{
    	 setUserLogin(state){
        console.log("setUserLogin"+state.loginStatus)
            state.loginStatus=true;
        },
        setUserLogout(state){
          console.log("setUserLogout"+state.loginStatus)
            state.loginStatus=false;
        } 
    }
}