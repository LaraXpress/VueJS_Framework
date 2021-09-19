<template>
    <div>
        <app-Header></app-Header>
        <app-Navigation></app-Navigation>        
        <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Earum atque eum nostrum tenetur veniam adipisci dolore soluta? Temporibus ab, aperiam, vero nostrum eum ex saepe harum esse laboriosam doloremque, neque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consectetur, odit? Saepe iusto et deserunt, similique illum repellendus blanditiis consectetur. Nemo, numquam et mollitia pariatur obcaecati explicabo sed nulla impedit!</p>                
        <app-Footer></app-Footer>
    </div>
</template>

<script>
// Locally Components Import
import Header     from './Components/Header';
import Navigation from './Components/Navigation';
import Footer     from './Components/Footer';
import Profile    from './Components/Profile';

export default {  
   data() {
     return {
       name: 'Mazedur',
     };
   },
   // Locally Components Register
   components:{
     'app-Header'     : Header,
     'app-Navigation' : Navigation,
     'app-Profile'    : Profile,
     'app-Footer'     : Footer
   }
}
</script>

<style>

</style>