<template lang="html">
  <div class="wrapper">
    <sidebar></sidebar>
    <div class="main-panel">
      <navbar></navbar>
      <div class="content">
        <transition name="trans" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
export default {
  name: 'Index',
  components: {
    Sidebar, Navbar
  }
}
</script>

<style lang="css">
.trans-enter-active, .trans-leave-active {
  transition: opacity .3s ease;
}
.trans-enter, .trans-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}
.content{
  /*background: linear-gradient(115deg,rgba(52,196,117,.92),rgba(71,114,217,.92)),url('/static/img/download.svg');*/
}
.sidebar .nav li > a.router-link-active, body > .navbar-collapse .nav li > a.router-link-active{
  color: #FFFFFF;
  opacity: 1;
  background: rgba(255, 255, 255, 0.23);
}
</style>
