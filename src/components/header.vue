<template>
  <div class='header'>
    <div class='content-wrapper'>
      <div class='avatar'>
        <img width='64' height='64' :src='seller.avatar'>
      </div>
      <div class='content'>
        <div class='title'>
          <span class='brand'>品牌</span>
          <span class='name'>{{seller.name}}</span>
        </div>
        <div class='description'>
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if='seller.supports' class='supports'>
          <span class='icon' :class="classMap[seller.supports[0].type]">减</span>
          <span class='text'>{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if='seller.supports' class='support-count' @click='showDetail'>
        <span class='count'>{{seller.supports.length}}个</span>
      </div>
    </div>
    <div class='bulletin-wrapper' @click='showDetail'>
      <span class='bulletin-title'>公告</span>
      <span class='bulletin-text'>{{seller.bulletin}}</span>
    </div>
    <div class='background'>
      <img :src='seller.avatar' width='100%' height='100%'>
    </div>
    <transition name='fade'>
      <div v-show='detailShow' class='detail'>
        <div class='detail-wrapper clearfix'>
          <div class='detail-main'>
            <h1 class='name'>{{seller.name}}</h1>
            <div class='star-wrapper'>
              <star :size='36' :score ='seller.score'></star>
            </div>
            <div class='title'>
              <div class='line'></div>
              <div class='text'>优惠信息</div>
              <div class='line'></div>
            </div>
            <div class='support-wrapper'>
              <ul v-if='seller.supports' class='supports'>
                <li class='support-item' v-for='(item,index) in seller.supports'>
                  <span class='icon' :class='classMap[seller.supports[index].type]'></span>
                  <span class='text'>{{seller.supports[index].description}}</span>
                </li>
              </ul>
            </div>
            <div class='title'>
              <div class='line'></div>
              <div class='text'>商家公告</div>
              <div class='line'></div>
            </div>
            <div class='bulletin'>
              <p class='content'>{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class='detail-close' @click='hideDetail'>关闭</div>
      </div>
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
import star from './star.vue'
export default {
    data () {
        return {
            detailShow: false
        };
    },
    props: {
      seller: {
        type: Object
      }
    },
    methods:{
      showDetail(){
        this.detailShow = true;
      },
      hideDetail(){
        this.detailShow = false;
      }
    },
    created() {
      this.classMap=['red','yellow','blue','green','gray']
    },
    components: {
      star
    }
};
</script>

<style lang='scss'>

  .header{
    font-size:14px;
    border-bottom:1px solid #eee;
    background:rgba(7,17,27,0.5);
    color:#fff;
    overflow:hidden;
    position:relative;
    .content-wrapper{
      padding:24px 12px 18px 24px;
      font-size:0;
      position:relative;
      .avatar{
        display:inline-block;
        vertical-align: top;
      }
      .content{
        display:inline-block;
        font-size:14px;
        margin-left:15px;
        .title{
          margin:2px 0 2px 0 ;
        }
        .brand{
          display:inline-block;
          background:red;
          padding:0 2px ;
          border-radius:2px;
        }
        .name{
          font-size:16px;
          font-weight:bold;
          margin-left:6px;
        }
        .description{
          font-size:14px;
        }
      }
      .support-count{
        position:absolute;
        right:12px;
        bottom:18px;
        padding:0 8px;
        height:24px;
        line-height:24px;
        border-radius:14px;
        background:rgba(0,0,0,0.2);
        text-align:center;
        .count{
          font-size:10px;
        }
      }
    }
    .bulletin-wrapper{
      height:28px;
      line-height:28px;
      overflow:hidden;
      padding:0 22px 0 12px;
      white-space:nowrap;
      text-overflow:ellipsis;
      background:rgba(0,0,0,0.2);
      .bulletin-title{
        background:#fff;
        color:#333;
        border-radius:3px;
        padding:0 2px;
      }
      .bulletin-text{
        font-size:10px;
      }
    }
    .background{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:-1;
      filter:blur(10px);
    }
    .detail{
      position:fixed;
      z-index:100;
      width:100%;
      height:100%;
      overflow:auto;
      top:0;
      left:0;
      background:rgba(7,17,27,0.8);
      .detail-wrapper{
        min-height:100%;
        width:100%;
        .detail-main{
          margin-top:64px;
          padding-bottom:64px;
          .name{
            line-height:16px;
            text-align:center;
            font-size:16px;
            font-weight:bold;
          }
          .star-wrapper{
            margin-top:18px;
            padding:2px 0;
            text-align:center;
          }
          .title{
            display:flex;
            width:80%;
            margin:30px auto 24px;
            .line{
              flex:1;
              position:relative;
              top:-10px;
              border-bottom:1px solid #fff;
            }
            .text{
              padding:0 12px;
              font-size:14px;
              font-weight:bold;
            }
          }
          .bulletin{
            width:80%;
            margin:0 auto;
            .content{
              padding:0 12px;
              line-height:24px;
            }
          }
        }
      }
      .detail-close{
        width:20%;
        height:26px;
        line-height:26px;
        text-align:center;
        margin:-64px auto 0 auto;
        background:rgba(0,0,0,0.5);
        border-radius:4px;
      }
    }
    .supports{
      font-size:12px;
      .icon{
        display:inline-block;
        width:12px;
        height:12px;
        line-height: 12px;
        margin-right:4px;
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
    }
    .support-wrapper{
      width:80%;
      margin:0 auto;
      .support-item{
        padding:0 12px;
        line-height:24px;
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
  }
</style>
