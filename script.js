// console.log(axios)

const app = new Vue({
    el : "#app",

    data:{
        banana : "hello",
        emails : [],
        mailQuantity : 10,
        load: true
    },

    methods: {
        generateEmails(totMails){
            for(i = 0; i < totMails; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((boolean)=>{
                        const mail = boolean.data.response
                        console.log(mail)
                        this.emails.push(mail)
                        if(this.emails.length === totMails){
                            this.load = false
                        }
                    })
            }

            

        },
       
    },

    mounted() {
        console.log(this.banana)
        this.generateEmails(this.mailQuantity)
    },
})