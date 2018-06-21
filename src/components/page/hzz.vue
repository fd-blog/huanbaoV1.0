<template>
    <div class="hzz wrapper">
        <div class="left animated bounceInLeft">
            <div class="left_top">
                <a class="title" href="javascript:;" target="_self"></a>
                <div class="main">
                    <div class="inner">
                        <img src="../../assets/img/wait.png" alt="">
                        <span>静待开发</span>
                    </div>
                </div>
            </div>
            <div class="left_bottom">
                <a class="title" href="javascript:;" target="_self"></a>
                <div class="main">
                    <div class="inner">
                        <img src="../../assets/img/wait.png" alt="">
                        <span>静待开发</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="wrapper_middle middle middle animated bounceInDown">
            <div class="wrapper_middle_top" id="hzzMap"></div>
            <div class="wrapper_middle_bottom">
                <a class="title" href="javascript:;" target="_blank">链接</a>
                <div class="main">
                    <a class="inner1"  target="_blank" href="http://web.dcyun.com:10096/rivermasterweb/#/access/SignIn">
                        <img src="../../assets/img/logoHeZhang.png" alt="">
                        <span>浙江省河湖长制管理平台</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="right animated bounceInRight">
            <div class="right_top">
                <a class="title" href="javascript:;" target="_self"></a>
                <div class="main">
                    <div class="inner">
                        <img src="../../assets/img/wait.png" alt="">
                        <span>静待开发</span>
                    </div>
                </div>
            </div>
            <div class="right_bottom">
                <a class="title" href="javascript:;" target="_self"></a>
                <div class="main">
                    <div class="inner">
                        <img src="../../assets/img/wait.png" alt="">
                        <span>静待开发</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss">
@import './../../assets/scss/hzz.scss';
</style>
<script>
export default {
    data() {
        return {
            mapChartOption: {
                backgroundColor: 'transparent',
                geo: {
                    show: true,
                    map: 'zhejiang',
                    aspectScale: 0.9,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    zoom: 1.2,
                    roam: false, //禁止拖拽
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(63, 155, 255, 1)',
                            borderColor: '#3fdaff',
                            borderWidth: 2
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    zlevel: 5
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 120,
                    left: 'right',
                    bottom: '2%',
                    splitNumber: 4,
                    color: ['#d8a130', '#dbef10', '#1bc296', '#88bd1f'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        //地图下面的地图阴影效果
                        name: 'map',
                        type: 'map',
                        mapType: 'zhejiang',
                        aspectScale: 1,
                        zoom: 1.2,
                        roam: false,
                        center: [120.42864, 29.208274],
                        silence: true,
                        zlevel: 1,
                        silent: true,
                        tooltip: {
                            backgroundColor: 'rgba(51, 81, 166,0.9)',
                            borderColor: 'rbga(255,255,255,0.8)',
                            borderWidth: 1,
                            padding: 15
                        },
                        itemStyle: {
                            normal: {
                                areaColor: 'transparent',
                                borderColor: 'rgba(63, 218, 255, 0.3)',
                                borderWidth: 2,
                                shadowColor: 'rgba(63, 218, 255, 0.3)',
                                shadowBlur: 30
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        }
                    }
                ]
            },
            geoCoordMap: [
                { name: '杭州市', coods: [119.5313, 29.8773] },
                { name: '丽水市', coods: [119.5642, 28.1854] },
                { name: '温州市', coods: [120.498, 27.8119] },
                { name: '宁波市', coods: [121.5967, 29.6466] },
                { name: '舟山市', coods: [122.2559, 30.2234] },
                { name: '台州市', coods: [121.1353, 28.6688] },
                { name: '金华市', coods: [120.0037, 29.1028] },
                { name: '衢州市', coods: [118.6853, 28.8666] },
                { name: '绍兴市', coods: [120.564, 29.7565] },
                { name: '嘉兴市', coods: [120.9155, 30.6354] },
                { name: '湖州市', coods: [119.8608, 30.7782] }
            ],
            mapChart: ''
        }
    },
    mounted() {
        let _this = this
        let mapChart
        let uploadedDataURL = './static/data/zhejiang.json'
        mapChart = echarts.init(document.getElementById('hzzMap'))

        this.mapChart = mapChart
        $.getJSON(uploadedDataURL, function(geoJson) {
            echarts.registerMap('zhejiang', geoJson)
            mapChart.setOption(_this.mapChartOption)
        })
    }
}
</script>

