var app = Vue.createApp({
  data(){
    return{
      msg : 'Welcome to Vue JS',
      info:{
        name : 'Laravel Framework',
        url  : 'http://www.laravel.com',
        code : "<a href='http://www.bbc.co.uk'>BBB News</a>"
      }
    };
  }
});

app.mount("#app");