<template>
  <div class='goods'>
    <div class='menu-wrapper'>
      <ul>
        <li v-for='item in goods' class='menu-item'>
          <span class='text'>
            <span v-show='item.type>0' class='icon' :class='classMap[item.type]'></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class='foods-wrapper'></div>
  </div>
</template>

<script type='text/ecmascript-6'>

  const ERR_OK = 0;

  export default {
    props:{
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods:[]
      }
    },
    created(){
      this.classMap=['red','yellow','blue','green','gray'];
      this.$http.get('/api/goods').then(response => {
        response = response.body;
        if(response.errno === ERR_OK){
          this.goods = response.data;
        }
      }, response => {
        // error callback
      });
    }
  };
</script>

<style lang='scss'>
.goods{
  position:absolute;
  width:100%;
  top:180px;
  bottom:46px;
  display:flex;
  overflow:hidden;
  .menu-wrapper{
    flex:0 0 80px;
    width:80px;
    background:#f3f5f7;
    .menu-item{
      display:table;
      height:54px;
      width:56px;
      line-height:14px;
      padding:0 12px;
      .icon{
        display:inline-block;
        width:12px;
        height:12px;
        line-height: 12px;
        margin-right:2px;
        &.red{
          background:red;
        }
        &.yellow{
          background:yellow;
        }
        &.blue{
          background:blue;
        }
        &.green{
          background:green;
        }
        &.gray{
          background:gray;
        }
      }
      .text{
        font-size:12px;
        display:table-cell;
        width:56px;
        vertical-align:middle;
        border-bottom:1px solid rgba(7,17,27,0.1)
      }

    }
  }
  .foods-wrapper{
    flex:1;

  }
}

</style>
