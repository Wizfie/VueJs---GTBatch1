<template>
  <div class="end">
    <center style="margin-top: 3%"><img src="../assets/logo.png" alt="" /></center>

    <div class="footer">
      <div>
        <h5>Overview</h5>
        <p>Shipping</p>
        <p>Refund</p>
        <p>Promotion</p>
      </div>
      <div>
        <h5>Company</h5>
        <p>About</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h5>Explore</h5>
        <p>Terms & Conds</p>
        <p>Privacy Policy</p>
        <p>For Developer</p>
      </div>
      <div>
        <h5>Special letter</h5>
        <input type="text" placeholder="Your Email Address" /><button
          style="border: none; background-color: pink; height: 31px"
        >
          <img src="../assets/tele-icon.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scope>
.footer {
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
}
</style>
