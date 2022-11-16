<template>
    <el-card>
        <tinymce v-model="value"></tinymce>
    </el-card>
</template>

<script>
import tinymce from "@/components/tinymce/index.vue";
export default {
    components: {
        tinymce,
    },
    data() {
        return {
            value:null
        };
    },
    watch:{
        value: {
            handler(newVal, oldVal) {
                console.log(newVal, oldVal);
            },
            deep: true,
        },
    }
};
</script>

<style>
</style>