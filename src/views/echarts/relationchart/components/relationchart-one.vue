<template>
    <div class="relationOne" ref="relationOne"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "relationOne",
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
            this.myChartOne = echarts.init(this.$refs.relationOne);

            let colorList = [
                "#CF4645",
                "#B580B2",
                "#29008A",
                "#146A90",
                "#8956FF",
                "#70C9A8",
                "#bfbfbf",
                "#595959",
                "#40a9ff",
                "#1890ff",
                "#ffd666",
                "#ffc53d",
                "#ffc53d",
                "#ffc069",
                "#ffa940",
                "#fa8c16",
                "#eccbd9",
                "#ffadad",
                "#ff6392",
                "#ffc09f",
                "#ffcb77",
                "#ffe066",
                "#ffd53e",
                "#ffda3d",
                "#adf7b6",
                "#a0e8af",
                "#80ed99",
                "#07beb8",
                "#17c3b2",
                "#48cae4",
                "#97d2fb",
                "#83bcff",
                "#91e5f6",
                "#9381ff",
            ];
            let colorListLen = colorList.length;
            let fontSizeList = [
                12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
                18.5, 19, 19.5, 20, 20.5, 21, 22, 23, 24,
            ];
            let fontSizeListLen = fontSizeList.length;
            let customLabel = {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize:
                    fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            };
            let bgColor = "#fffcf9";
            let canDraggable = false;

            this.myChartOne.setOption(
                {
                    backgroundColor: "#1A1835",
                    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
                    title: {
                        show: true,
                        text: "?????????????????????",
                        x: "center",
                        y: "bottom",
                        // ???????????????,?????? #333???
                        color: "#666",
                        fontSize: 24,
                    },
                    toolbox: {
                        show: true,
                    },
                    itemStyle: {
                        color: bgColor,
                    },
                    series: [
                        {
                            type: "graph",
                            layout: "force",
                            force: {
                                repulsion: 80,
                                edgeLength: 10,
                            },
                            roam: "scale",
                            // symbol: '',
                            // symbolSize: 0,
                            label: {
                                show: true,
                                color: "auto",
                                fontSize: 14,
                            },
                            data: [
                                {
                                    name: "?????????",
                                    value: 2,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 12,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 22,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 42,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 52,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 62,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    itemStyle: {
                                        color: bgColor,
                                    },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    // itemStyle: {
                                    //     color: bgColor
                                    // },
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "?????????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                                {
                                    name: "??????",
                                    value: 72,
                                    draggable: canDraggable,
                                    label: {
                                        color: colorList[
                                            Math.floor(
                                                Math.random() * colorListLen
                                            )
                                        ],
                                        fontSize:
                                            fontSizeList[
                                                Math.floor(
                                                    Math.random() *
                                                        fontSizeListLen
                                                )
                                            ],
                                    },
                                },
                            ],
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
.relationOne {
    min-width: 200px;
    min-height: 500px;
    margin: 20px auto;
}
</style>
