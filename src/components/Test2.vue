<template>
  <div>
    <!-- 文本插入 -->
    <p>{{ message }}</p>
    <!-- 使用 v-html 指令用于输出 html 代码 -->
    <div v-html="message"></div>
    <!-- HTML 属性中的值应使用 v-bind 指令。 -->
    <label for="tag">修改颜色</label>
    <!-- 双向数据绑定 -->
    <input type="checkbox" v-model="isSelected" id="tag">
    <!-- 如果isSelected为 true 使用 bg_444 类的样式，否则不使用该类 -->
    <div v-bind:class="{'bg_444': isSelected}">
      <p>被测试的文本</p>
    </div>
    <div id="app">
      {{5+5}}
      <br> {{ isSelected ? 'YES' : 'NO' }}
      <br> {{ message.split('').reverse().join('') }}
      <div v-bind:id="'list-' + message">菜鸟教程</div>
    </div>
    <!-- v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。 -->
    <p v-if="isSelected">现在你看到我了</p>
    <!-- 在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。 -->
    <pre><a v-bind:href="'list-'+url">{{ url }}</a></pre>
    <!-- v-on 缩写 -->
    <button @click="reverseMessage">反转url</button>
   
    <form v-on:submit.prevent="onSubmit">
      First name:
      <br>
      <input type="text" name="firstname" >
      <br> Last name:
      <br>
      <input type="text" name="lastname">
      <br>
      <br>
      <input type="submit" value="提交">
    </form>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      message: '<h3>messag</h3>',
      isSelected: false,
      url: 'http://www.runoob.com',
      count: 1
    }
  },
  methods: {
    reverseMessage: function() {
      this.url = this.url.split('').reverse().join('')
      console.log("翻转" + this.count++)
    },
    onSubmit: function() {
      console.log("onSubmit")
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
