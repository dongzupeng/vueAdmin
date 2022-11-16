<template>
    <div class="home">
        <HeaderCom />
        <el-container class="content">
            <MenuCom />
            <el-container>
                <breadcrumb />
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    <FooterCom />
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import HeaderCom from "@/layout/header-com.vue";
import MenuCom from "@/layout/menu-com.vue";
import FooterCom from "@/layout/footer-com.vue";
import breadcrumb from "@/layout/breadcrumb-com.vue";
export default {
    components: {
        HeaderCom,
        MenuCom,
        FooterCom,
        breadcrumb,
    },
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;
    .content {
        position: absolute;
        width: 100%;
        top: 60px;
        bottom: 0;
    }
}
.el-main {
    padding-top: 100px;
    box-sizing: border-box;
}
.el-footer {
    position: absolute;
    bottom: 0;
    height: 20px !important;
    z-index: -1 !important;
    margin: 0 auto;
}
</style>