<template>
  <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <FormShipping></FormShipping>
  </div>
</template>

<script>
import Navbar from "../components/Nav.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import FormShipping from "@/components/FormShipping.vue";

export default {
  name: "ShippingPage",
  components: {
    Navbar,
    Breadcrumb,
    FormShipping,
  },
};
</script>

<style></style>
