<template>
  <div>
     <p>您输入：{{ content }}</p>
    <form v-on:submit.prevent="onSubmit">
      First name:<input type="text" name="firstname" >
      <br><br>
      Last name:<input type="text" name="lastname" v-model="content">
      <br><br>
      <input type="submit" value=" 提交 ">
    </form>
    <br>
    <button v-on:click="reverseMessage">反转字符串</button>
    <!-- Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化 -->
    <p>{{ content | capitalize }}</p>
    <!-- 在 v-bind 指令中 -->
<div v-bind:id="content | formatId"></div>
<!-- v-bind 缩写 -->
<input type="text" :value="content | formatId(true)|reverse">
  </div>
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
