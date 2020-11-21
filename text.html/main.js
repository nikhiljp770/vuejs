Vue.component('message',{
  
    props: ['title','body'],
        data() {
            
            return {
                isvisible: true
            };
        },
    template: `

    <article class="container" v-show="isvisible">

         <div class="message-header">
              {{title}}

              <button type="button" @click="isvisible = false ">x</button>
             </div>


         <div class="message-body">
              {{body}}
              </div> 
    </article> 
`
   /*        methods: {
         
        hidemodel() {

         this.isvisible = false;
        }
     }*/
       
});

new Vue  ({
    el:'#app'
})