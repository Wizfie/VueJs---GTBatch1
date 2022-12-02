<template>
    <div>
        <Navbar></Navbar>
        <Breadcrumb></Breadcrumb>
        <div class="row justify-content-center">
            <div class="col-10">
                <ShippingTable v-show="!viewForm" @updateShippingFunc="updateShippingFunc"></ShippingTable>
                <FormShipping v-show="viewForm" :shippingDataProps="shippingData"></FormShipping>
            </div>
        </div>
        <Footer></Footer>
        <Copyright></Copyright>
    </div>
</template>
<script>
     import  Navbar  from '../components/Nav.vue'
     import  Breadcrumb  from '../components/Breadcrumb.vue'
     import  Footer  from '../components/Footer.vue'
     import  Copyright  from '../components/Copyright.vue'
     import  ShippingTable  from '../components/ShippingTable.vue'
     import  FormShipping  from '../components/FormShipping.vue'

export default {
    name: "ShippingList",
    components: {
        Navbar,
        Breadcrumb,
        ShippingTable,
        FormShipping,
        Footer,
        Copyright,
    },
     methods: {
            updateShippingFunc(item){
                this.shippingData = item
                this.viewForm = true;
            }
        },
        data(){
            return{
                viewForm : false,
                shippingData: null
            }
        }
    }

</script>
<style >
    
</style>