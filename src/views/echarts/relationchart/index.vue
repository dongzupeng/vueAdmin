<template>
    <el-card>
        <relationOne></relationOne>
        <relationTwo></relationTwo>
        <relationThree></relationThree>
    </el-card>
</template>

<script>
import relationOne from "./components/relationchart-one.vue";
import relationTwo from "./components/relationchart-two.vue";
import relationThree from "./components/relationchart-three.vue";
export default {
    components: {
        relationOne,
        relationTwo,
        relationThree
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>