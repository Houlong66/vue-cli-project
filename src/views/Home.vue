<template>
  <div class="home">
    <!-- svg示例 -->
    <svg-icon iconName="tongzhi"/>
    <!-- api示例 -->
    <button @click="test">api</button>
    <div>
      <button @click="login">登录</button>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    test() {
      // 全局函数示例
      let temp = {
        a: '123',
        b: "456"
      }
      console.log(this.$objClone(temp))
      // api示例
      this.api.test()
    },
    login() {
      // 使用vuex登录示例
      this.$store.dispatch("login").then(() => {
        console.log(this.$store.getters.token)
        let redirect = decodeURIComponent(this.$route.query.redirect || "/")
        this.$router.replace({ path: redirect })
      })
    }
  }
}
</script>
