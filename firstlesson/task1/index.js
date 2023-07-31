const { createApp } = Vue

createApp({
   data() {
      return {
         showAlert: false,
         firstName: '',
         lastName: '',
      }
   },
   computed: {
      fullName() {
         return (this.firstName + ' ' + this.lastName).trim();
      }
   }
}).mount('#sample');
