<template>
    <div>
        <ul>
            <li v-for="student in myStudents" :key="student">{{student}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home    : 'Home',
            about   : 'About',
            blog    : 'Blog',
            contact : 'Contact',                        
        };
    },
    props:{
        myStudents:{
            type:Array,
            require:true
        }
    }    
}
</script>
<style>

</style>