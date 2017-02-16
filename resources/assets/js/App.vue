<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
        <!--<AppFooter/>-->
    </div>
     
</template>
<script>
    import navigation from './shared-components/Navigation';
    export default {
        name: 'app',
        components: {
            navigation,
        },
    }
</script>