<template>
  <div class="mt-5" style="background-color: rgb(216, 216, 216); padding-bottom: 5%">
    <div class="mt- p-3 ml-4" style="text-align: left ; margin 5%">
      <h5>Complete Your Room</h5>
      <h5>With What We Designed</h5>
    </div>
    <div class="d-flex justify-content-around">
      <card
        v-for="(item, index) in vcardTitle"
        :key="index"
        :CardTitle="item"
        :CardPrice="vCardPrice[index]"
        :CardImg="vCardImg[index]"
        @ChangePicture="FunChange"
      >
      </card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "SliderComponent",
  components: {
    Card,
  },

  methods: {
    FunChange: function (CardImgSlide) {
      this.$emit("ChangePictureSlider", CardImgSlide);
    },
  },
  data() {
    return {
      vcardTitle: ["Cangkir Mauttie", "Saman kakka", "Lino Dino", "Syail Ammeno"],
      vCardPrice: ["89.300.000", "14.500.000", "22.000.000", "12.000.000"],
      vCardImg: ["chair-1", "chair-2", "chair-3", "chair-4"],
    };
  },
};
</script>

<style></style>
