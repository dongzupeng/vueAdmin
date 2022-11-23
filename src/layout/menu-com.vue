<template>
    <div class="menu">
        <el-aside>
            <el-menu
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :unique-opened="true"
                :default-active="currentMenu"
                background-color="#8759fe"
                text-color="#fff"
                active-text-color="#8759fe"
            >
                <template v-for="(item, index) in getMenus">
                    <el-submenu :index="index + ''" :key="index">
                        <template slot="title">
                            <span class="title"
                                ><i :class="item.iconClass"></i>
                                {{ item.name }}</span
                            >
                        </template>
                        <el-menu-item-group
                            v-for="(child, index) in item.children"
                            :key="index"
                        >
                            <el-menu-item :index="child.path"
                                ><i :class="child.iconClass"></i
                                >{{ child.name }}</el-menu-item
                            >
                        </el-menu-item-group>
                    </el-submenu>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            menus: [],
        };
    },
    created() {
        this.menus = [...this.$router.options.routes];
    },
    mounted() {
        const currentMenu = this.$route.meta.path;
        this.$store.commit("tags/SET_CURRENTMENU", currentMenu);
    },
    watch: {
        $route(to, from) {
            const currentMenu = this.$route.meta.path;
            this.$store.commit("tags/SET_CURRENTMENU", currentMenu);
        },
    },
    computed: {
        getMenus() {
            return this.menus.filter((item) => !item.hidden);
        },
        ...mapState({
            currentMenu: (state) => state.tags.currentMenu,
        }),
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
    },
};
</script>

<style lang="less" scoped>
.menu {
    .el-aside {
        height: 100%;
        .el-menu {
            height: 100%;
        }
        .el-submenu .el-menu-item {
            min-width: 0;
            margin: 0;
            height: 100%;
        }
    }
}
// 选中菜单样式背景
.el-menu-item.is-active {
    background-color: #fff !important;
}
//菜单hover颜色
.el-menu-item:hover {
    color: #8759fe !important;
    background-color: #fff !important;
}
//父级菜单hover
.el-submenu /deep/.el-submenu__title:hover {
    color: #8759fe !important;
    background-color: #fff !important;
    // background-color: #41a3fb !important;
}

i {
    color: #fff;
}
.title:hover {
    color: #8759fe !important;
}
/deep/.el-submenu__title i{
    color: #fff !important;
}
/deep/.el-submenu__title:hover i {
    color: #8759fe !important;
}
/deep/.el-menu-item:hover > i{
    color: #8759fe !important;
}

</style>