<template>
    <div class="header">
        <el-header>
            <div class="title">头文字D的系统</div>
            <div class="icon-screenfull">
                <svg-icon
                icon-class="quanping"
                className="quanping-icon"
            ></svg-icon>
            </div>
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
// import screenfull from 'screenfull';
export default {
    data() {
        return {
            isFullscreen: false,
        };
    },
    created() {},
    mounted() {},
    computed: {
        ...mapGetters(["userInfo"]),
    },
    methods: {
        screenFull() {
            if (!screenfull.isEnabled) {
                this.$message.warning(
                    "不好意思，你的电脑不支持全屏，赶紧换个电脑吧，谢谢~"
                );
                return false;
            }
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        },
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
        .icon-screenfull{
            position: absolute;
            right: 120px;
            top: 10px;
            width: 100px;
            height: 40px;
            // background-color: #fff;
            .quanping-icon{
                z-index: 9999;
                color: #b5fffc;
            }
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