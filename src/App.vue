<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <a href="/">首页</a>
  <button type="button" @click="gotoAutoFocusView">自动聚焦测试</button>
  <button type="button" @click="gotoCounterView">自动播报测试</button>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  methods: {
    gotoAutoFocusView() {
      this.$router.push('/autofocus');
    },
    gotoCounterView() {
      this.$router.push('/counter');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
