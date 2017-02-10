<template>
    <div>
        <AppHeader/>
        <router-view></router-view>
        <AppFooter/>
    </div>
</template>
<script>
    import AppHeader from './components/home/Header';
    import AppFooter from './components/home/Footer';
    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter,
        },
    }
</script>