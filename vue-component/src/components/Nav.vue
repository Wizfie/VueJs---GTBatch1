<template>
  <nav class="navbar navbar-light justify-content-between pt-4 px-5">
    <div class="container-fluid">
      <img src="../assets/logo.png" alt="Logo" />
      <div class="d-flex link-list">
        <router-link to="/home" class="nav-link text-dark">Home</router-link>
        <router-link to="/Shipping" class="nav-link text-dark">Shipping</router-link>
        <router-link to="/ShippingList" class="nav-link text-dark">Shipping List  </router-link> 
        <img src="../assets/cart-icon.png" alt="" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  
};
</script>

<style></style>
