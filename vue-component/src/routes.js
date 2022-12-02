
import Home from './Pages/Home.vue';
import Shipping from './Pages/Shipping.vue';
import ShippingList from './Pages/ShippingList.vue';


export default [
    {
        path: "/Home",
        component: Home,

    },
    
    {
        path:"/Shipping",
        component:Shipping,
    },

    {
        path:"/ShippingList",
        component:ShippingList,
    }

    
];