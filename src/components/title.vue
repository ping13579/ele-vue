<template>
  <div class='title-cover'>
    <div class='title'>
      <div class='line'></div>
      <div class='text'>{{text}}</div>
      <div class='line'></div>
    </div>
  </div>

</template>

<script type='text/ecmascript-6'>
  export default {
    props:['text']
  }
</script>

<style lang='scss'>
.title-cover{
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
}


</style>
