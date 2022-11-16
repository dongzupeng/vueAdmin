<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
@import "./assets/css/reset.css";
#nprogress .bar {
    background: #07ae0f !important;
    height: 4px !important;
}
</style>
