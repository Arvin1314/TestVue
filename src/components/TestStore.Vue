<template>
	<div>
		<input type="text" v-model="$store.state.count" />
		<button v-on:click="add">add</button>
    <button v-on:click="reduce">reduce</button>
		<p>{{$store.state.count}}</p>
		
		<!-- <input type="text"  v-model="username" v-on:change="userNameChange">
		<button v-on:click="submit">提交</button>

     <button v-on:click="login">登录</button> -->
	</div>
       
</template>

<script >

  import { mapState,mapMutations } from 'vuex';

 // methods:mapMutations([
 //            'add','reduce'
 //    ]),
export default {
	data() {
		 return {
	     	username:"开始"
		 }
  	},
    created() {
      console.log("TestStore -- created");
       this.$store.dispatch('getHomeData')
    },
    mounted(){

    },
	watch:{
        //检测属性变化
        loginStatus:function(newValue,oldValue){
             console.log('homeBanner has changed ',newValue,oldValue);
        }
    },

  	computed:{
     
  		//实时计算
  		 loginStatus: function() {
  		 	console.log('computed-----');
          return this.$store.state.loginStatus;
        }
    },

    methods:{

       ...mapMutations([ 
                'add','reduce'
            ]),

       handleClick() {
            // this.$store.commit('add')
            this.$store.dispatch('actionName')
          },
          userNameChange(){
            console.log('userNameChange-----');
              //this.$emit("childChange","username",this.username)
              this.$store.state.user.name = this.username;
            },
            submit(){
                //alert(this.$parent.$data.username +"==="+ this.$parent.$data.userarea);
                this.$store.commit("showUserName");
            },
            login: function (){
               this.$store.dispatch('login')
            }
    }
    	
}

</script>