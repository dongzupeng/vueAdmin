<template>
    <el-card>
        <pieOne></pieOne>
        <pieTwo></pieTwo>
    </el-card>
</template>

<script>
import pieOne from "./components/piechart-one.vue";
import pieTwo from "./components/piechart-two.vue";
export default {
    components: {
        pieOne,
        pieTwo
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>