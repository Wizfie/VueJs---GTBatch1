<template>
   <div class="konten">
    <div class="dkonten">
          <div ><img src="../assets/side-2.png" alt=""></div>
          <div ><img src="../assets/side-3.png" alt=""></div>
          <div ><img src="../assets/side-1.png" alt=""></div>
          <div ><img src="../assets/side-2.png" alt=""></div>
          <div ><img src="../assets/side-3.png" alt=""></div>
    </div>
    <div class="mkonten">
        <div><img  src="../assets/chair.png" alt=""></div>
    </div>
<div>        
    <div class="kkonten">
          <h2>Chair Thatty</h2>
          <h5>IDR 12.000000</h5>   
    </div>
        <br>
        <button style="margin-left: 20px;background-color: pink; border-radius: 10px;"><img src="../assets/cart-icon.png" alt=""> Add To Chart</button>
        <br>
        <br>
        <hr>
        <b style="font-size: 20px; margin-left: 22px;"> About the product: </b>
        <br>
        <br>
<pre>
  Tailored to a level of perfection synonymous with that
  of a Savile Row suit and with understated quality in the
  detail, Jetty has been influenced by timeless 1950s style.

  Providing a subtle nod to the past, Jetty also provides
  a perfect solution for the way we work today.
  A comprehensive product family, Jetty features a variety
  of elegant chairs and sofas.
</pre>

     </div>
</div>

</template>

<script>
export default {
    name:"GalleyComp"


}
</script>

<style scoped>
    .konten{
   display: flex;
   margin-left: 5%;
}
.dkonten img{
   margin-top: 30px;
   border-radius: 10px;
}
.mkonten{
   margin-left: 10%;
}
.ket {
   margin-top: 20px;
   margin-left: 10%;
}
.kkonten{
   margin-top: 5%;
   margin-left: 10px;
}
</style>