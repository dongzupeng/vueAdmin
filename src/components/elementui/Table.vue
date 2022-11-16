<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :stripe="stripe"
            :border="border"
            :size="size"
            v-loading="loading"
            @selection-change="handleSelectionChange"
        >
            <!-- 是否支持复选 -->
            <el-table-column v-if="isSelection" width="55" type="selection" />
            <el-table-column
                :prop="item.param"
                :label="item.lable"
                v-for="(item, index) in tableColumns"
                :key="index"
                :sortable="item.sortable"
                :width="item.width"
            >
                <template slot-scope="scope">
                    <span v-if="item.render">{{ item.render(scope.row) }}</span>
                    <slot
                        v-else-if="item.slotName"
                        :name="item.slotName"
                        :scope="scope"
                    ></slot>
                    <span v-else>{{ scope.row[item.param] }}</span>
                </template>
            </el-table-column>
            <!-- 操作 -->
            <el-table-column
                v-if="tableOperation.label"
                :label="tableOperation.label"
            >
                <template slot-scope="scope">
                    <slot :name="tableOperation.param" :scope="scope">
                        <el-button
                            size="small"
                            v-for="(item, index) in tableOperation.btnList"
                            :key="index"
                            @click="handleClick(scope.row, item.type)"
                        >
                            {{ item.label }}
                        </el-button>
                    </slot>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: "Table",
    props: {
        tableColumns: {
            type: Array,
            required: true,
            default: () => {
                return [];
            },
        },
        tableData: {
            type: Array,
            required: true,
            default: () => {
                return [];
            },
        },
        tableOperation: {
            type: Object,
            default: () => {
                return {};
            },
        },
        stripe: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "small",
        },
        loading: {
            type: Boolean,
            default: false,
        },
        isSelection: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    methods: {
        handleClick(row, type) {
            this.$emit("handleClick", row, type);
        },
        handleSelectionChange(val) {
            this.$emit("handleSelectionChange", val);
        },
    },
};
</script>