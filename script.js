// console.log(axios)

const app = new Vue({
    el : "#app",

    data:{
        banana : "hello",
        emails :[],
        mailQuantity : 10
    },

    methods: {
        getBooleanApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((boolean)=>{
                    console.log(boolean.data.response)
                })
        },
        for(tot, what){
            for(i = 0; i< tot; i++){
                what
            }
        }
    },

    mounted() {
        console.log(this.banana)
        this.getBooleanApi()
        

        
    },
})