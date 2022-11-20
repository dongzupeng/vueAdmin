<template>
    <div class="header">
        <el-header>
            <div class="title">头文字D的系统</div>
            <div class="icon-screenfull" @click.stop="screenFull">
                <svg-icon
                    :icon-class="isFullscreen ? 'tuichuquanping' : 'quanping'"
                    className="quanping-icon"
                ></svg-icon>
            </div>
            <el-dropdown @command="handleCommand">
                <div class="userInfo">
                    <img :src="userInfo.avatar" alt="" /><span>{{
                        userInfo.username
                    }}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="center">
                        <div>个人中心</div>
                    </el-dropdown-item>
                    <el-dropdown-item command="setting">
                        <div>个人设置</div>
                    </el-dropdown-item>
                    <el-dropdown-item command="goGitHub">
                        <div>项目地址</div>
                    </el-dropdown-item>
                    <el-dropdown-item command="logout" divided>
                        <div>退出登录</div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { removeCache } from "@/utils/setCache";
import screenfull from "screenfull";
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
        handleCommand(command) {
            // this.$message("click on item " + command);
            if (command == "center") {
                this.$router.push("/home/homePage");
            } else if (command == "setting") {
                this.$router.push("/home/setting");
            } else if (command == "goGitHub") {
                window.open("https://github.com/dongzupeng/vueAdmin", "_blank");
            } else if (command == "logout") {
                removeCache("token");
                removeCache("userInfo");
                this.$router.push("/login");
                this.$message({ message: "退出成功", type: "success" });
            }
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
            color: #fff;
        }
        .icon-screenfull {
            position: absolute;
            right: 120px;
            top: 10px;
            margin-right: 20px;
            // background-color: #fff;
            .quanping-icon {
                z-index: 9999;
                width: 30px;
                height: 30px;
                cursor: pointer;
            }
        }
        .userInfo {
            cursor: pointer;
            color: #fff;
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