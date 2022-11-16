<template>
    <div class="barOne" ref="barOne"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "barOne",
    data() {
        return {};
    },
    mounted() {
        window.onresize = () => {
           this.myChartOne.resize();
        };
        this.$nextTick(() => {
            this.initEchart();
        });
    },
    methods: {
        initEchart() {
            this.myChartOne = echarts.init(this.$refs.barOne);
            this.myChartOne.setOption(
                {
                    backgroundColor: "#001829",
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow",
                        },
                        padding: [5, 10],
                    },
                    grid: {
                        left: 50,
                        right: 20,
                        bottom: 40,
                        top: 30,
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: [
                                "星期一",
                                "星期二",
                                "星期三",
                                "星期四",
                                "星期五",
                                "星期六",
                                "星期天",
                            ],
                            axisLine: {
                                lineStyle: {
                                    color: "#cecece",
                                },
                            },
                            axisLabel: {
                                color: "#666",
                            },
                            axisTick: {
                                show: false,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#cecece",
                                },
                            },
                            axisLabel: {
                                color: "#666",
                            },
                            splitLine: {
                                show: false,
                            },
                        },
                    ],
                    series: [
                        {
                            name: "游戏时长",
                            type: "bar",
                            data: [60, 75, 55, 40, 100, 140, 160],
                            barWidth: "20",
                            barGap: "80%",
                            type: "bar",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: "#5171fd",
                                            },
                                            {
                                                offset: 1,
                                                color: "#c97afd",
                                            },
                                        ]
                                    ),
                                },
                            },
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
.barOne {
    min-width: 200px;
    min-height: 500px;
    margin: 20px auto;
}
</style>
