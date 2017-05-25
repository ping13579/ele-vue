<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class='tab'>
      <div class='tab-items'>
        <router-link to="/goods" >商品</router-link>
      </div>
      <div class='tab-items'>
        <router-link to="/rating">评论</router-link>
      </div>
      <div class='tab-items'>
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class='showContent'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header';

const ERR_OK = 0;

export default {
  name: 'app',
  data (){
    return {
      seller: {}
    };
  },
  mounted: function() {
      this.$nextTick(()=>{
          this.init();
      });
  },
  methods: {
      init(){
          this.$http.get('/api/seller').then(response => {
            response = response.body;
            if(response.errno === ERR_OK){
              this.seller = response.data;
              console.log(this.seller);
            }
          }, response => {
            // error callback
          });
      }
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang='scss'>
body{
  background:#f8f8f8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.tab{
  display:flex;
  width:100%;
  height:40px;
  line-height:40px;
  margin-top:10px;
  border:1px solid #eee;
  background:#fff;
  text-align:center;
  .tab-items{
    flex:1;
    text-aligh:center;
    a{
      display:block;
      color:#333;
      &.active{
        color:#e93849;
      }
    }
    &:nth-child(2){
      border-left:1px solid #eee;
      border-right:1px solid #eee;
    }
  }
}
.showContent{
  margin-top:10px;
  background:#fff;
}
</style>
