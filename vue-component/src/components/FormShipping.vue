<template>
  <div>
    <div
      class="p-4 mb-5 border border-danger"
      id="box"
      style="width: fit-content; margin: auto; margin-top: 5%"
    >
      <div>
        <h1 style="text-align: center; margin-bottom: 5%">Shipping Form</h1>
      </div>
      <form @submit.prevent="inputShipping" v-show="!success" >
        <div class="form-row d-flex">
          <div class="form-group col-md-6 mb-3">
            <label for="validationDefault01">First Name</label>
            <input
              v-model="shippingData.first_name"
              type="text"
              class="form-control"
              id="firstname"
              placeholder="First name"
              value=""
            />
          </div>
          <div class="form-group col-md-6 mb-3">
            <label for="validationDefault02">Phone Number</label>
            <input
              v-model="shippingData.phone_number"
              type="text"
              class="form-control"
              id="phone"
              placeholder="Phone number"
              value=""
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6 mb-3">
            <label for="validationDefault01">last Name</label>
            <input
              v-model="shippingData.last_name"
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Last name"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationDefault02">City</label>
            <input
              v-model="shippingData.city"
              type="text"
              class="form-control"
              id="city"
              placeholder="Enter City"
              value=""
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6 mb-3">
            <label for="validationDefault01">Email</label>
            <input
              v-model="shippingData.email"
              type="text"
              class="form-control"
              id="email"
              placeholder="Email"
              value=""
            />
          </div>
          <div class="form-group col-md-6 mb-3">
            <label for="validationDefault02">Postal Code</label>
            <input
              v-model="shippingData.postal_code"
              type="text"
              class="form-control"
              id="postal"
              placeholder="Postal Code"
              value=""
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3 mb-3">
            <label for="">Address</label>
            <textarea
              v-model="shippingData.address"
              style="overflow: auto"
              name=""
              id="address"
              cols="70"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            class="btn-lg mb-3"
            type="submit"
            id="tekan"
            style="background-color: pink"
          >
            {{buttonValue}}
          </button>
        </div>
      </form>

      <!-- Success Section -->

      <successForm v-show="success"></successForm>
  
    </div>
  </div>
</template>

<script>
import shippingService from "../Services/shippingServices.js";
import SuccessForm from "./SuccessForm.vue"

export default {
  name: "FromShipping",

  data(){
            return{
                shippingData:{
                    "first_name" : null,
                    "last_name" : null,
                    "email" : null,
                    "phone_number" : null,
                    "city" : null,
                    "postal_code" : null,
                    "address" : null
                },
                success : false,
                buttonValue : "Submit"
            }
        },
        methods : {
            inputShipping(){
                let data = this.shippingData;

                if(this.buttonValue === "Submit"){
                    shippingService.create(data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }else{
                    shippingService.updateShipping(data.id, data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            },
        },
        components:{
          SuccessForm
        },
        props:["shippingDataProps"],
        watch:{
          'shippingDataProps'(newValue) {
            this.shippingData = newValue;
            console.log(this.shippingData);
            this.buttonValue = "Update"
          }
        }
       
    }
</script>

<style></style>
