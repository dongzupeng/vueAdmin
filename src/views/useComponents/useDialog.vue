<template>
    <el-card>
        <!-- 对话框 -->
        <Dialog :show.sync="activePopShow">
            <span>你好</span>
            <div slot="title">这是title</div>
            <div slot="footer">这是底部</div>
        </Dialog>
        <el-button type="primary" @click="handleClick">点我</el-button>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            // 对话框
            activePopShow: false,
        };
    },
    methods:{
        handleClick(){
            this.activePopShow = true 
        }
    }
};
</script>

<style>
</style>
