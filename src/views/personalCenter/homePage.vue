<template>
    <div class="homePage">
        <el-card class="leftPage">
            <div class="top">
                <el-avatar
                    :size="100"
                    :src="userInfo.avatar"
                ></el-avatar>
                <div class="name">{{userInfo.username}}</div>
                <div class="role">管理员</div>
            </div>
            <div class="info">
                <div><i class="el-icon-location"></i>秋名山</div>
                <div><i class="el-icon-headset"></i>漂移</div>
                <div><i class="el-icon-data-board"></i>头文字D</div>
                <div><i class="el-icon-trophy"></i>秋名山车神</div>
                <div><i class="el-icon-female"></i>夏树</div>
            </div>
            <el-divider></el-divider>
            <div class="tags">
                <div>个人标签</div>
                <div class="tagList">
                    <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button
                        v-else
                        class="button-new-tag"
                        size="small"
                        @click="showInput"
                        >+添加</el-button
                    >
                </div>
            </div>
            <el-divider></el-divider>
            <div class="skills">
                <div>个人技能</div>
                <div class="skill-item" v-for="(item, index) in skillsList" :key="index">
                    <div class="skill-name">{{item.name}}</div>
                    <el-progress
                        :text-inside="true"
                        :stroke-width="18"
                        :percentage="item.percentage"
                        :color="item.color"
                    ></el-progress>
                </div>
            </div>
        </el-card>
        <el-card class="rightPage">
            个人博客
            <div>
                <iframe class="iframe" scrolling="auto" src="https://dongzupeng.github.io/blog/" frameborder="0"></iframe>
            </div>
        </el-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            dynamicTags: ["赚钱", "找对象", "游戏", "代码"],
            inputVisible: false,
            inputValue: "",
            skillsList: [
                {
                    name: "HTML",
                    percentage: 80,
                    color: "#8759fe",
                },
                {
                    name: "CSS",
                    percentage: 70,
                    color: "#8759fe",
                },
                {
                    name: "JavaScript",
                    percentage: 70,
                    color: "#8759fe",
                },
                {
                    name: "Vue",
                    percentage: 80,
                    color: "#8759fe",
                },
                {
                    name: "React",
                    percentage: 60,
                    color: "#8759fe",
                },
                {
                    name: "TypeScript",
                    percentage: 60,
                    color: "#8759fe",
                },
            ],
        };
    },
    computed: {
        ...mapGetters(["userInfo"]),
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick((_) => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = "";
        },
    },
};
</script>

<style lang="less" scoped>
.homePage {
    display: flex;
    .leftPage {
        width: 400px;
        margin-right: 20px;
        .top {
            text-align: center;
            .name {
                font-size: 18px;
                color: #000;
            }
            .role {
                font-size: 12px;
            }
        }
        .info {
            margin-top: 20px;
            div {
                width: 100%;
                margin: 10px;
                i {
                    margin-right: 10px;
                }
            }
        }
        .skills{
            .skill-item {
                display: flex;
                height: 40px;
                .skill-name{
                    line-height: 40px;
                    text-align: right;
                    width:100px;
                }
            }
        }
    }
    .rightPage {
        width: calc(100% - 400px);
    }
}
.el-tag {
    margin: 10px;
}
.button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin: 10px;
    vertical-align: bottom;
}
.el-progress {
    margin: 10px;
    width: 100%;
}
.iframe{
    width: 100%;
    min-height: 900px;
}
</style>