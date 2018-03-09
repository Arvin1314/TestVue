<template>
	<div>
    <button v-on:click="change">{{content}}</button>
   <div>
   <v-hightpostslist :num='3'></v-hightpostslist>
   </div> 
  </div>
</template>


<script>
import HightPostsList from "./HightPostsList"

export default {
  name: 'Test',
  data() {
    return {
      content:'访问'
    }
  },
  components:{
    'v-hightpostslist':HightPostsList
  },
  methods: {

  	initPosts: function (){
      console.log("getData");
       this.api.HighPosts()
       .then(res => {
          console.log(res)
      })
		},
    login: function (){
      console.log("login");
      let params = {
                email: '18600406407',
                password: '123'
            }
       this.api.Login(params)
       .then(res => {
          console.log(res)
      })
    },

    change: function() {   
     this.content ='5565'       

    console.log("change");          

    console.log(this.a)          

    console.log(this.$el)          

    }   

  }

}

</script>

