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
    <div class='foods-wrapper'>
      <ul>
        <li v-for='item in goods' class='food-list'>
          <h1 class='title'>{{item.name}}</h1>
          <ul>
            <li v-for ='food in item.foods' class='food-item'>
              <div class='icon'>
                <img width='57' height='57' :src='food.icon'>
              </div>
              <div class='content'>
                <h2 class='name'>{{food.name}}</h2>
                <p class='desc'>{{food.description}}</p>
                <div class='extra'>
                  <span class='count'>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class='price'>
                  <span class='now'>￥{{food.price}}</span>
                  <span class='old' v-show='food.oldPrice'>￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
    .title{
      padding-left:14px;
      height:26px;
      line-height:26px;
      border-left:2px solid #d9dde1;
      font-size:12px;
      color:rgb(147,153,159);
      background:#f3f5f7;
    }
    .food-item{
      display:flex;
      margin:18px;
      padding-bottom:18px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      &:last-child{
        border-bottom:none;
        margin-bottom:0;
      }
      .icon{
        flex:0 0 57px;
        margin-right:10px;
      }
      .content{
        flex:1;
        .name{
          font-size:14px;
          margin:2px 0 8px 0;
          height:14px;
          line-height:14px;
          color:rgb(7,17,27);
        }
        .desc, .extra{
          line-height:10px;
          font-size:10px;
          color:rgb(147,153,159);
        }
        .desc{
          margin-bottom:8px;
        }
        .extra{
          .count{
            margin-right:12px;
          }
        }
        .price{
          font-weight:700;
          line-height:24px;
          .now{
            margin-right:8px;
            font-size:14px;
            color:rgb(240,20,20);
          }
          .old{
            text-decoration:line-through;
            font-size:10px;
            color:rgb(147,153,159);
          }
        }
      }
    }
  }
}

</style>
