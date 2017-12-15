<template>
	 <button v-on:click="login">访问</button>
</template>


<script>


export default {
  name: 'Test',
  data() {
    return {
      content:''
    }
  },
  methods: {

  	getData: function (){
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

  }
}

</script>

