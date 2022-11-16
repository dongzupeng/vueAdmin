<template>
    <div class="barFour" ref="barFour"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "barFour",
    data() {
        return {};
    },
    mounted() {
        window.onresize = () => {
            this.barFour.resize();
        };
        this.$nextTick(() => {
            this.initEchart();
        });
    },
    methods: {
        initEchart() {
            this.barFour = echarts.init(this.$refs.barFour);

            let xData = ["5月", "6月", "7月", "8月", "9月", "10月"];
            let eventWarning = [3, 20, 122, 134, 55, 65];
            let eventHandling = [11, 38, 23, 139, 66, 66];
            let legend = ["事件预警", "事件处置"];

            this.barFour.setOption(
                {
                    backgroundColor: "#001829",
                    color: ["#333FFF", "#23B899"],
                    timeline: {
                        show: false,
                    },
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
                        formatter: "{a}<br/>{b} :\n\n{c} 个",
                    },
                    legend: {
                        top: 0,
                        right: "center",
                        itemWidth: 16,
                        itemHeight: 6,
                        itemGap: 20,
                        icon: "horizontal",
                        textStyle: {
                            color: "#ffffff",
                            fontSize: 16,
                        },
                        data: legend,
                    },
                    grid: [
                        // 左边
                        {
                            show: false,
                            left: "5%",
                            top: "15%",
                            bottom: "2%",
                            containLabel: true,
                            width: "38%",
                        },
                        // 中间
                        {
                            show: false,
                            left: "52%",
                            top: "15%",
                            bottom: "2%",
                            width: "0%",
                        },
                        // 右边
                        {
                            show: false,
                            right: "5%",
                            top: "15%",
                            bottom: "2%",
                            containLabel: true,
                            width: "38%",
                        },
                    ],
                    xAxis: [
                        {
                            type: "value",
                            inverse: true,
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: {
                                show: false,
                            },
                        },
                        {
                            gridIndex: 1,
                            show: false,
                        },
                        {
                            gridIndex: 2,
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: {
                                show: false,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: "category",
                            inverse: true,
                            position: "right",
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#555555",
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            data: xData,
                        },
                        {
                            gridIndex: 1,
                            type: "category",
                            inverse: true,
                            position: "left",
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                color: "#ffffff",
                                fontSize: 16,
                                align: "center",
                            },
                            data: xData.map(function (value) {
                                return {
                                    value: value,
                                    textStyle: {
                                        align: "center",
                                    },
                                };
                            }),
                        },
                        {
                            gridIndex: 2,
                            type: "category",
                            inverse: true,
                            position: "left",
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#555555",
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            data: xData,
                        },
                    ],
                    series: [
                        {
                            name: legend[0],
                            type: "bar",
                            barWidth: 10,
                            stack: "1",
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    1,
                                    0,
                                    [
                                        {
                                            offset: 0,
                                            color: "rgba(69, 239, 253, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(69, 239, 253, 0)",
                                        },
                                    ]
                                ),
                            },
                            label: {
                                show: true,
                                position: "left",
                                color: "#45EFFD",
                            },
                            data: eventWarning,
                            animationEasing: "elasticOut",
                        },
                        {
                            name: legend[1],
                            type: "bar",
                            stack: "2",
                            barWidth: 10,
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    1,
                                    0,
                                    [
                                        {
                                            offset: 0,
                                            color: "rgba(255, 191, 10, 0)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(255, 191, 10, 1)",
                                        },
                                    ]
                                ),
                            },
                            label: {
                                show: true,
                                position: "right",
                                color: "#FFBF0A",
                            },
                            data: eventHandling,
                            animationEasing: "elasticOut",
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
.barFour {
    min-width: 200px;
    min-height: 500px;
    margin: 20px auto;
}
</style>
