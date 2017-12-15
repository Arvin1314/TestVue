<template>
 
  <router-link to="/case" >
    <!-- <img src="'{{post.image}}'" alt=""> -->
    <div>
      <h6><span >{{parseType(post.type)}}</span>{{post.title}}</h6>
      <span>{{post.time}}</span>
      <p>{{post.describe}}</p>    
    </div>
  </router-link>

</template>

<script >
	export default {
  name: 'HightPostsItem',
  props:['post'],
  mounted(){
    console.log(this.post.image)
  },
  data () {
    return {
    }
  },
  methods:{
 parseType: function(type) {
      if(type == 0)
        return ''
      if(type == 1)
        return '[挑战]'
      if(type == 2)
        return '[挑战赛]'      
    }
  }
}

</script>

