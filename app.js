var app = Vue.createApp({
  data(){
    return{
      msg : 'Welcome to Vue JS',
      info:{
        name : 'Laravel Framework',
        url  : 'http://www.laravel.com',
        code : '<a href="http://www.bbc.co.uk">BBB News</a>'
      },
      count : 0
    };
  },
  methods:{
    increament(){
       this.count++;
    },
    decreament(){
        this.count--;
    }
  }
});

app.mount("#app");