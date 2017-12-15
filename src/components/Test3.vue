<template>
 <div>
  <ul>
    <li>
      <HightPosts v-bind:post="postData"> </HightPosts>
    </li>
    <li>
      <HightPosts v-bind:post="postData"> </HightPosts>
    </li>
    <li>
      <HightPosts v-bind:post="postData"> </HightPosts>
    </li>
  </ul> 
 </div>
</template>

<script>

import HightPosts from "./HightPostsItem.vue"

export default {
  name: 'Test',

   components:{
    HightPosts
  },
 
  data() {
    return {
      content:'test3',
      postData:{
            type:2,
              image:'http://o70atzjoc.bkt.clouddn.com/test_posts_image.png',
              title:'llala',
              time:'2017-12-20',
              describe:'水电费看见爱上大半年付款会计师电话费可接受的你付款时刻记得回复可见水'
      }
    }
  },
  methods: {
    reverseMessage: function() {
      this.content = this.content.split('').reverse().join('')
      console.log("翻转")
    },
    onSubmit: function() {
      console.log("onSubmit")
    }
  },
   filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    formatId: function (value,bool) {
      console.log(value+"-->"+bool)
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    reverse: function (value) {
      console.log("reverse-->"+value)
      if (!value) return ''
      return value.toString().split('').reverse().join('')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
<style>
.bg_444 {
  background: #444;
  color: #eee;
}

</style>
