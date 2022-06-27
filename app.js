new Vue({
    el: '#main',
    data: {
      errors: [],
      first: null,
      last: null,
      pass: null,
      firm: null,
    //   showModal: false
      
    },

    methods: {
        checkForm: function(e) {
            if(this.first && this.last && this.pass && this.firm) {
                return true
            }
            this.errors = [];

            if(!this.first){
                this.errors.push('please enter your first name')
            }
            if(!this.age){
                this.errors.push('please enter your last name')
            }

            if(!this.pass){
                this.errors.push('please enter your password')
            }
            if(!this.pass){
                this.errors.push('please confirm your password')
            }
            e.preventDefault();
            
        },








    }
  })