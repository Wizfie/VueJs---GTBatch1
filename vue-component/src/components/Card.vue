<template>

<div class="bg-white p-4 border-radius-25">

    <a href="#" class="chairs">
    <img class="border-radius-25" :src="require('@/assets/' + CardImg + '.png')" alt="chairs" />
    </a>
    <p class="font-weight-bold mt-3 my-0"> {{ CardTitle }} </p> 
    <p>IDR {{ CardPrice }} </p>
  </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: ["CardTitle","CardPrice","CardImg"]         

   
  
}

</script>

<style scoped>
    p{
      text-align: center;
    }
</style>