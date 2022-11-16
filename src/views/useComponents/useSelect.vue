<template>
    <div>
        <el-card>
            <!-- 下拉框 -->
            <Select
                v-model="model"
                :options="options"
                :urlParams="urlParams"
                :multiple="true"
                placeholder="这是placeholder"
                :optionKeys="optionKeys"
                :showLabels="showLabels"
                :disables="disables"
                @change="selectChange"
            >
            </Select>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: "",
            // 选择器参数
            options: JSON.stringify([
                {
                    valueKey: "01",
                    labelKey: "选项1",
                
                },
                {
                    valueKey: "02",
                    labelKey: "选项2",
                    
                },
            ]),
            urlParams: JSON.stringify({
                key1: "01",
                key2: "Y",
            }),
            optionKeys: JSON.stringify({
                value: "valueKey",
                label: "labelKey",
            }),
            showLabels: "labelKey,dis,disA",
            disables: "02",
        };
    },
    methods: {
        // 选择器方法
        selectChange(val, valObj) {
            this.model = val;
            console.log("val=>", val)
            console.log("valObj=>", valObj)
        },
    },
};
</script>

<style>
</style>