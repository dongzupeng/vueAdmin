<template>
    <div class="student">
        <el-card shadow="always">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-button type="primary" @click="add('add')"
                        >新增</el-button
                    >
                </el-form-item>
            </el-form>
            <!-- 表格 -->
            <Table
                :tableColumns="tableColumns"
                :tableData="getpageData"
                :tableOperation="tableOperation"
                :isSelection="false"
            >
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
           <!-- 分页器 -->
            <Pagination
                :total="total"
                :currentPage.sync="currentPage"
                :pageSize.sync="pageSize"
                @pagination="handlePageChange"
            />

            <el-dialog :title="title" :visible.sync="dialogFormVisible">
                <el-form :model="form" label-width="80px">
                    <el-form-item label="姓名">
                        <el-input
                            v-model="form.name"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="1">女</el-radio>
                            <el-radio label="2">男</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input
                            v-model="form.age"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="父亲">
                        <el-input
                            v-model="form.father"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="母亲">
                        <el-input
                            v-model="form.mather"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="家庭住址">
                        <el-input
                            v-model="form.address"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input
                            v-model="form.phone"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                        >取 消</el-button
                    >
                    <el-button type="primary" @click="dialogFormVisible = false"
                        >确 定</el-button
                    >
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
import { getUserInfoList } from "@/constants/login"
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
                    param: "father",
                    lable: "父亲",
                },
                {
                    param: "mather",
                    lable: "母亲",
                },
                {
                    param: "address",
                    lable: "家庭地址",
                },
                {
                    param: "school",
                    lable: "毕业院校",
                },
                {
                    param: "phone",
                    lable: "联系方式",
                },
            ],
            tableData: [],
            tableOperation: {
                label: "操作",
                param: "operate",
                childDefault: false,
                btnList: [
                    {
                        label: "编辑",
                        type: "edit",
                        color:"primary"
                    },
                    {
                        label: "删除",
                        type: "del",
                        color:"danger"
                    },
                ],
            },
            currentPage: 1,
            pageSize: 10,
            total: 0,
            form: {
                name: "",
                sex: "1",
                age: "",
                father: "",
                mather: "",
                address: "",
                time: "",
                phone: "",
            },
            dialogFormVisible: false,
            type:""
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
        /**
         * 标题
         */
        title() {
            if (this.type == "add") return "添加学生信息";
            if (this.type == "edit") return "编辑学生信息";
        },
    },
    methods: {
        handleClick(row,type){
            console.log(row,type);
            if(type == 'del') {
                this.del()
            }else if(type == 'edit') {
                this.edit()
            }
        },
        /**
         * 获取数据
         */
        getData(params) {
            getUserInfoList(params)
                .then((res) => {
                    if (res.code === "000") {
                        this.tableData = res.data.list;
                        this.total = res.data.list.length;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // 分页器
        handlePageChange(data) {
            console.log(data);
            this.currentPage = data.currentPage;
            this.pageSize = data.pageSize;
        },
        add(type) {
            this.type = type;
            this.dialogFormVisible = true;
        },
        /**
         * 编辑
         */
        edit() {
            console.log('edit');
        },
        /**
         * 删除
         */
        del(id) {
            console.log('del');
        },
    },
};
</script>

<style>
</style>