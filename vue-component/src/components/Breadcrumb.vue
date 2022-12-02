<template>
  <div class="d-flex p-3" style="background-color: rgb(216, 216, 216)">
        <router-link to="/home" class="nav-link text-dark">Home</router-link>
        <span class="nav-link" v-show="currentRouteName == '/shipping'">/</span>
        <router-link to="/shipping" v-show="currentRouteName == '/shipping'" class="nav-link text-dark">Shipping</router-link>
        <span class="nav-link" v-show="currentRouteName == '/shippingList'">/</span>
        <router-link to="/shippingList" v-show="currentRouteName == '/shippingList'" class="nav-link text-dark">Shipping List</router-link>
    </div>
</template>

<script>
export default {
  name: "BreadcrumbComponent",
  computed:{
    currentRouteName(){
      return this.$route.path
    }
  }

};
</script>

<style></style>
