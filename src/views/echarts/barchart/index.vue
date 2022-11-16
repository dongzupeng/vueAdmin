<template>
    <el-card>
        <barOne></barOne>
        <barTwo></barTwo>
        <barThree></barThree>
        <barFour></barFour>
    </el-card>
</template>

<script>
import barOne from "./components/barchart-one.vue";
import barTwo from "./components/barchart-two.vue";
import barThree from "./components/barchart-three.vue";
import barFour from "./components/barchart-four.vue";
export default {
    components: {
        barOne,
        barTwo,
        barThree,
        barFour
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>