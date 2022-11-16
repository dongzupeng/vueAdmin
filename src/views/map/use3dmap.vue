<template>
    <el-card style="width: 100%">
        <div id="allmap" class="allmap"></div>
    </el-card>
</template>

<script>
import { BMPGL } from "./index";
export default {
    data() {
        return {};
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            

            BMPGL()
                .then((BMapGL) => {
                    // GL版命名空间为BMapGL
                    // 按住鼠标右键，修改倾斜角和角度
                    const map = new BMapGL.Map("allmap"); // 创建Map实例
                    // map.centerAndZoom(
                    //     new BMapGL.Point(116.28019, 40.049191),
                    //     19
                    // ); // 初始化地图,设置中心点坐标和地图级别
                    map.centerAndZoom('广州市', 19); // 初始化地图,设置中心点坐标和地图级别
                    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                    map.setHeading(64.5);
                    map.setTilt(73);
                    // 传入密钥获取地图回调。
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style lang="less">
#allmap {
    width: 100vw;
    height: 100vh;
}
</style>