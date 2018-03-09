<template>
  <ul class="news-list">
    <li v-for="(newsItem,index) in newsList" v-if="index < (num==undefined?listNum+1:num)">
      <router-link :to="newsItem.link" class="yd-cell-item">
        <img :src="newsItem.img" class="yd-cell-left" alt="">
        <div class="news-txt">
          <h3>{{ newsItem.title }}</h3>
          <span>{{ newsItem.create_at }}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'navigation',
  data(){
    return{
      newsList:{},
      listNum:0
    }
  },
  props:{
    num:{
      type: Number
    }
  },
  created(){
    this.$http.get(BASE_URL+'/info/list/').then((response) => {
        response = response.body;
        this.newsList = response.results;
        this.listNum = this.newsList.length;
    }, (err) => {
      
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-list {
  padding-left:0.32rem;
  padding-bottom: 1.96rem;
}
.news-list li {
  position: relative;
  padding: 0.24rem 0.32rem 0.24rem 0;
  overflow: hidden;
  border-top: 1px solid #eaeaea;
}
.news-list li:first-child {
   padding-top: 0;
   border-top:none;
}
.news-list img {
  width: 1.84rem;
  height: 1.38rem;
}
.yd-cell-item { padding-left: 0;}
.news-list li .news-txt {
  position: relative;
  height: 1.38rem;
  margin-left:0.24rem;
  flex:1;
  word-break:break-all;
}
.news-txt span{
  position: absolute;
  bottom:0.08rem;
  font-size: 0.24rem;
  color:#999;
}
</style>
