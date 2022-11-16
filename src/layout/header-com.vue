<template>
    <div class="header">
        <el-header>
            <div class="title">头文字D的系统</div>
            <div class="userInfo">
                <img :src="userInfo.avatar" alt="" /><span>{{
                    userInfo.username
                }}</span>
            </div>
        </el-header>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            
        };
    },
    created() {
    },
    mounted() {
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
};
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    width: 100%;
    .el-header {
        color: #b5fffc;
        background-color: #8759fe;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            width: 300px;
            font-size: 30px;
        }
        .userInfo {
            cursor: pointer;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }
}
</style>