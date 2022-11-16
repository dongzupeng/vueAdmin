<template>
    <div class="Breadcrumb">
        <el-card shadow="always">
            <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home/user' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item
                    v-for="(item, index) in breadList"
                    :key="index"
                    :to="{ path: item.path }"
                    >{{ item.name }}</el-breadcrumb-item
                >
                <el-breadcrumb-item v-for="(item, i) in breadList" :key="i">
                    <a @click.prevent="handleLink(item)">
                        {{ item.meta.title }}
                    </a>
                </el-breadcrumb-item>
            </el-breadcrumb> -->
            <el-tag
                v-for="(tag, index) in tags"
                :key="tag.title"
                :closable="tag.path !== '/home/user'"
                @close="handleClose(tag, index)"
                @click="handleLink(tag)"
                :effect="$route.name === tag.title ? 'dark' : 'plain'"
            >
                {{ tag.title }}
            </el-tag>
        </el-card>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { setCache, getCache } from "@/utils/setCache";
export default {
    data() {
        return {
            breadList: [],
        };
    },
    created() {
        if (getCache("tabsList")) {
            console.log(getCache("tabsList"));
            this.breadList = this.tags;
            this.getBreadcrumb();
        }
    },
    computed: {
        ...mapState({
            tags: (state) => state.tags.tabsList,
        }),
    },
    watch: {
        $route(route) {
            // 如果转到重定向页面，不要更新面包屑
            if (route.path.startsWith("/redirect/")) {
                return;
            }
            this.getBreadcrumb();
        },
    },
    methods: {
        /**
         * 点击跳转事件
         */
        handleLink(item) {
            this.$router.push({ path: item.path });
        },
        /**
         * 点击关闭
         */
        handleClose(tag, index) {
            console.log(tag);
            let length = this.breadList.length - 1;
            let result = this.breadList.findIndex(
                (item) => item.title === tag.title
            );
            this.breadList.splice(result, 1);

            if (length == 0) {
                this.$router.push({ path: "/home/user" });
                return;
            }

            // 如果关闭的标签不是当前路由的话，就不跳转
            if (tag.title !== this.$route.name) {
                return;
            }
            // 关闭的标签是最右边的话，往左边跳转一个
            if (index === length) {
                this.$router.push({ path: this.breadList[index - 1].path });
            } else {
                // 否则往右边跳转
                this.$router.push({ path: this.breadList[index].path });
            }
            setCache("tabsList", this.breadList);
            this.$store.commit("tags/SELECT_MENU", this.breadList);
        },
        getBreadcrumb() {
            const currentRouter = this.$route.meta;
            this.breadList.push(currentRouter);
            console.log(this.breadList, "之前");
            for (let i = 0; i < this.breadList.length; i++) {
                for (let j = i + 1; j < this.breadList.length; j++) {
                    if (this.breadList[i].title == this.breadList[j].title) {
                        //
                        this.breadList.splice(i, 1);
                        j--;
                    }
                }
            }
            console.log(this.breadList, "之后");
            setCache("tabsList", this.breadList);
            this.$store.commit("tags/SELECT_MENU", this.breadList);
        },
    },
};
</script>

<style lang="less" scoped>
.Breadcrumb {
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 999;
    margin-bottom: 200px;
}
.el-tag {
    margin-right: 10px;
    cursor: pointer;
}
</style>