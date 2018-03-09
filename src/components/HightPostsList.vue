<template>

  
    <!-- <img src="'{{post.image}}'" alt=""> -->
   <ul >
   <li v-for='(postsItem,index) in postsList' v-if="index < (num==undefined?listNum+1:num)">
     <router-link to="/case" >
       <div>
       <!-- <h6><span >{{parseType(postsItem.type)}}</span>{{postsItem.title}}</h6>
         <span>{{postsItem.time}}</span>
         <p>{{postsItem.describe}}</p> -->
         <p>{{postsItem.title}}</p>  
       </div>
    </router-link>
   </li>
     </ul> 

    
 

</template>

<script >
	export default {
  name: 'HightPostsList',
  data(){
    return {
      postsList:{},
      listNum:0
    }
  },
  props:{
    num:{
        type:Number
    }
  },
  created(){
    this.api.HighPosts()
       .then(res => {
          this.postsList = res.data;
          this.listNum = this.postsList.length;
          console.log(this.postsList)
      })
},
  mounted(){
    // console.log(this.post.image)
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
  },



        

        mounted: function() {            

        console.log("mount之后")            

        console.log(this.a)            

        console.log(this.$el)          

        },          
               

        updated: function() {            

        console.log("更新完成");            

        console.log(this.a);            

        console.log(this.$el)          

        },          

  
}

</script>

