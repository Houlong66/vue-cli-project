<template>
  <div class="about">
    <button @click="logout">登出</button>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.replace({ path: "/" })
      })
    }
  }
}
</script>
