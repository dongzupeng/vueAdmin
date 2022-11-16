<template>
    <div class="user">
        <el-card shadow="always">
            <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input
                        v-model.trim="form.name"
                        placeholder="请输入姓名"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- 表格 -->
            <Table
                :tableColumns="tableColumns"
                :tableData="getpageData"
                :tableOperation="tableOperation"
                :isSelection="false"
            >
                <template v-slot:status="props">
                    <el-button type="danger" size="small">{{
                        props.scope.row.status === 0 ? "启用" : "禁用"
                    }}</el-button>
                </template>
                <!-- 自定义操作部分 -->
                <template v-slot:[tableOperation.param]="props">
                    <el-button
                        v-for="(item, index) in tableOperation.btnList"
                        :key="index"
                        :type="item.color"
                        size="mini"
                        @click="handleClick(props.scope.row, item.type)"
                        >{{ item.label }}</el-button
                    >
                </template>
            </Table>

            <!-- <el-table :data="getpageData" style="width: 100%">
                <el-table-column prop="name" label="姓名" algin="center">
                </el-table-column>
                <el-table-column prop="sex" label="性别" algin="center">
                </el-table-column>
                <el-table-column prop="age" label="年龄" algin="center">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" algin="center">
                </el-table-column>
                <el-table-column label="操作" algin="center">
                    <template slot-scope="scope">
                        <el-button
                            type="danger"
                            size="mini"
                            icon="el-icon-delete"
                            @click="del(scope.row.id)"
                        ></el-button>
                    </template>
                </el-table-column>
            </el-table> -->

            <!-- 分页器 -->
            <Pagination
                :total="total"
                :currentPage.sync="currentPage"
                :pageSize.sync="pageSize"
                @pagination="handlePageChange"
            />
        </el-card>
    </div>
</template>

<script>
import { getUser } from "@/constants/login";
export default {
    data() {
        return {
            // 表格参数
            tableColumns: [
                {
                    param: "name",
                    lable: "姓名",
                    // sortable: true,
                },
                {
                    param: "sex",
                    lable: "性别",
                },
                {
                    param: "age",
                    lable: "年龄",
                },
                {
                    param: "email",
                    lable: "邮箱",
                    // width: "400px",
                },
                // {
                //     param: "gender",
                //     lable: "性别",
                //     render: (row) => {
                //         return row.gender === 0 ? "女" : "男";
                //     },
                // },
            ],
            tableData: [],
            tableOperation: {
                label: "操作",
                param: "operate",
                childDefault: false,
                btnList: [
                    {
                        label: "删除",
                        type: "del",
                        color: "danger",
                    },
                ],
            },
            currentPage: 1,
            pageSize: 10,
            total: 0,
            form: {
                name: "",
            },
        };
    },
    created() {
        this.getData();
    },
    computed: {
        getpageData() {
            return this.tableData.slice(
                (this.currentPage - 1) * this.pageSize,
                this.currentPage * this.pageSize
            );
        },
    },
    methods: {
        handleClick(row, type) {
            console.log(row, type);
            if (type == "del") {
                this.del();
            }
        },
        /**
         * 获取数据
         */
        getData(params) {
            getUser(params).then((res) => {
                console.log(res);
                if (res.code === "000") {
                    this.tableData = res.data.list;
                    this.total = res.data.list.length;
                }
            });
        },
        /**
         * 删除
         */
        del(id) {
            this.$message({ message: "删除成功", type: "success" });
            this.getData();
        },

        // 分页器
        handlePageChange(data) {
            console.log(data);
            this.currentPage = data.currentPage;
            this.pageSize = data.pageSize;
        },
        /**
         * 查询
         */
        search() {
            if (!this.form.name)
                this.$message({ message: "请输入姓名", type: "warning" });
            this.getData(this.form);
        },
        /**
         * 重置
         */
        reset() {
            this.form = {};
            this.getData(this.form);
        },
    },
};
</script>

<style>
</style>