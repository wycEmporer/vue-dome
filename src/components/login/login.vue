
<template> 
  <div>
    <div class="title">
      <router-link to="/login/login1">go login1</router-link>
      <router-link to="/login/login2">go login2</router-link>
      <router-link to="/login/login3">go login3</router-link>
    </div> 
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
@import url('./login.less');
</style>
