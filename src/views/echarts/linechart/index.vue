<template>
    <el-card>
        <lineOne></lineOne>
        <lineTwo></lineTwo>
    </el-card>
</template>

<script>
import lineOne from "./components/linechart-one.vue";
import lineTwo from "./components/linechart-two.vue";
export default {
    components: {
        lineOne,
        lineTwo,
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>