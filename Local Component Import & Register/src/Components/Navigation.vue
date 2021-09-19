<template>
    <div>
        <ul>
            <li>{{home}}</li>
            <li>{{about}}</li>
            <li>{{blog}}</li>
            <li>{{contact}}</li>
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
            contact : 'Contact'

        };
    },
}
</script>
<style>

</style>