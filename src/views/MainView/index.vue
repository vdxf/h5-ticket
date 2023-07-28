<template>
  <div class="main-view" >
    <router-view></router-view>

    <div class="nav-button-group">
      <router-link class="button home-button" :class="{'active': $route.path === '/home'}" to="/home" replace>首页</router-link>
      <router-link class="button user-button" :class="{'active': $route.path === '/userview'}" to="/userview" replace>用户</router-link>
      <router-link class="image-add" to="/imagecreate">+</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.nav-button-group {
  height: j(40);
  background-color: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
  display: flex;
  align-items: center;

  .home-button:after {
    content: "";
    position: fixed;
    border-radius: 50%;
    width: j(48);
    height: j(48);
    background-color: #fff;
    right: j(166);
    bottom: j(18);
  }

  .user-button:before {
    content: "";
    position: fixed;
    border-radius: 50%;
    width: j(48);
    height: j(48);
    background-color: #fff;
    left: j(166);
    bottom: j(18);
  }

  .button {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border: none;
  }

  .active {
    background-color: blue;
    color: #fff;
    font-weight: 500;
  }

  .image-add {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: j(166);
    bottom: j(20);
    width: j(44);
    height: j(44);
    background-color: #EB1E23;
    box-shadow: 0 0 j(10) j(5) #0003;
    border-radius: 50%;
    color: #fff;
    font-size: j(14);
  }
}
</style>