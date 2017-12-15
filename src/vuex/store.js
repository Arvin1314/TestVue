import Vue from 'vue'
import Vuex from 'vuex'

import testStore from './modules/testStore'
import user from './modules/user'
// import com from './modules/com'

Vue.use(Vuex)

export default new Vuex.Store({
	 modules: {
	 	testStore,
    },
	state:{
		count:8,
		username:'',
		user:{
			id:1,
			name:'张三',
			sex:'男'
		}
	},
	mutations:{
		increat(state){
			state.count++
		},
		add(state){
            state.count+=1;
        },
        reduce(state){
        	console.log('reduce')
            state.count-=1;
        },
        showUserName(state){
            alert(state.user.name);
        }
	},
	getters:{

	},
    actions:{
    	actionName({ commit }) {
		    //dosomething
		    commit('reduce')
  		}
    }
})