// console.log(axios)

const app = new Vue({
    el : "#app",

    data:{
        banana : "hello",
        emails : [],
        mailQuantity : 10
    },

    methods: {
        generateEmails(totMails){
            for(i = 0; i < totMails; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((boolean)=>{
                        const mail = boolean.data.response
                        console.log(mail)
                        this.emails.push(mail)
                        
                    })
            }
        },
       
    },

    mounted() {
        console.log(this.banana)
        this.generateEmails(this.mailQuantity)
    },
})