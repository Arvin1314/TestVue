<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="message"></div>
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="class2" id="r1">
    <br>
    <br>
    <div v-bind:class="{'class1': class2}">
      directiva v-bind:class
      <p v-if="class5">卧槽</p>
      <p id="example" onclick="testClick()">pppp</p>
    </div>
    <div id="app">
      {{ message | capitalize }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      message: '<h1>message</h1>',
      msg: '111111',
      class2: false,
      class5: true
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
.class1 {
  background: #444;
  color: #eee;
}

</style>
