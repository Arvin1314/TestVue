<template>
  <div id="app" class="first_box">
      <nav>
     <router-link to="/test"><p>路由test</p></router-link>    
     <router-link to="/test2"><p>路由test2</p></router-link>
    <router-link to="/test3"><p>路由test3</p></router-link>
    <router-link to="/test4"><p>路由test4</p></router-link>
    <router-link to="/request"><p>测试网络访问</p></router-link>
     <router-link to="/store"><p>测试store</p></router-link>
     </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  // data(){
  //   return {
  //     childrens: {
  //           name: '小强',
  //           age: 20,
  //           sex: '男'
  //       }
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

 nav{
    float: left;
    margin-left: 58px;
    margin-bottom:58px;
    background: #77eacc;
  }
  nav a{
    display: block;
    padding-left: 12px;
    padding-right: 12px;
    float: left;
    color:#fff;
  }
  nav a.router-link-active{
    background: #0059BA;
  }
</style>
