<template>
    <div class="barTwo" ref="barTwo"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "barTwo",
    data() {
        return {};
    },
    mounted() {
        window.onresize = () => {
            this.myChartTwo.resize();
        };
        this.$nextTick(() => {
            this.initEchart();
        });
    },
    methods: {
        initEchart() {
            this.myChartTwo = echarts.init(this.$refs.barTwo);
            let xaxisData = [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ];
            let yaxisData = [90, 80, 100, 70, 65, 69, 80, 100, 70, 65, 69, 66];
            this.myChartTwo.setOption(
                {
                    backgroundColor: "#001829",
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow",
                        },
                        backgroundColor: "rgba(255,255,255,0.75)",
                        extraCssText:
                            "box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.3);",
                        textStyle: {
                            fontSize: 14,
                            color: "#000",
                        },
                        formatter: (params) => {
                            const item = params[0];
                            return item.name + " : " + item.value + " 条";
                        },
                    },
                    grid: {
                        left: "1%",
                        right: "0%",
                        top: "12%",
                        bottom: "1%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            axisLabel: {
                                interval: 0,
                                color: "#999",
                                fontSize: 14,
                            },
                            axisLine: {
                                lineStyle: {
                                    //y轴网格线设置
                                    color: "#545454",
                                    width: 1,
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                            data: xaxisData,
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                            name: "单位：条",
                            nameTextStyle: {
                                color: "#fff",
                                fontWeight: 400,
                                fontSize: 14,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#545454",
                                    width: 1,
                                },
                            },
                            splitLine: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                fontSize: 14,
                                color: "#999",
                            },
                        },
                    ],
                    series: [
                        {
                            type: "bar",
                            barWidth: 16,
                            label: {
                                show: true,
                                position: "top",
                                color: "#007AFF",
                            },
                            itemStyle: {
                                borderRadius: [8, 8, 0, 0],
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#007AFF",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 122, 255, 0)",
                                        },
                                    ]
                                ),
                            },
                            data: yaxisData,
                        },
                    ],
                },
                true
            );
        },
    },
};
</script>
<style lang="less" scoped>
.barTwo {
    min-width: 200px;
    min-height: 500px;
    margin: 20px auto;
}
</style>
