<template>
    <div class="qfxd wrapper">
        <div class="wrapper_left left animated bounceInLeft">
            <a class="title" href="javascript:;" target="_self">基本情况</a>
            <div class="main">
                <div class="part1">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2017年全省产生量</a>
                    </div>
                    <div class="part1_s part1_l">
                        <img src="../../assets/img/icon20.png" alt="">
                        <div class="txt">
                            <span>危险废物产生量</span>
                            <strong class="color1">385.429</strong>
                            <span>万吨</span>
                        </div>
                    </div>
                    <div class="part1_s part1_r">
                        <img src="../../assets/img/icon15.png" alt="">
                        <div class="txt">
                            <span>一般工业污泥产生量</span>
                            <strong class="color2">1501.5</strong>
                            <span>万吨</span>
                        </div>
                    </div>
                </div>
                <div class="part2">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2018年各设区市处置能力情况(万吨)</a>
                    </div>
                    <div class="btns">
                        <span class="btn1">危险废物</span>
                        <span class="btn2">工业污泥</span>
                    </div>
                    <div id="qfxdChart1"></div>
                </div>
                <div class="part3">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2018年各设区市处置缺口能力情况(万吨)</a>
                    </div>
                    <div class="btns">
                        <span class="btn1">危险废物</span>
                        <span class="btn2">工业污泥</span>
                    </div>
                    <div id="qfxdChart2"></div>
                </div>

            </div>
        </div>
        <div class="wrapper_middle middle animated bounceInDown">
            <div class="wrapper_middle_top middle_top" id="qfxdMap"></div>
            <div class="wrapper_middle_bottom middle_bottom">
                <a class="title" href="javascript:;" target="_self">风险点基本情况</a>
                <div class="main">
                    <div class="inner">
                        <div class="part_s part_l">
                            <img src="../../assets/img/icon19.png" alt="">
                            <div class="txt">
                                <span>2018年1-5月全省存在的危险点位总数</span>
                                <strong class="color1">324</strong>
                                <span>个</span>
                            </div>
                        </div>
                        <div class="part_s part_m">
                            <img src="../../assets/img/icon2.png" alt="">
                            <div class="txt">
                                <span>2018年1-5月全省新增危险点位总数</span>
                                <strong class="color2">32</strong>
                                <span>个</span>
                            </div>
                        </div>
                        <div class="part_s part_r">
                            <img src="../../assets/img/icon11.png" alt="">
                            <div class="txt">
                                <span>2018年1-5月全省消除危险点位总数</span>
                                <strong class="color3">10</strong>
                                <span>个</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper_right right animated bounceInRight">
            <a class="title" href="javascript:;" target="_self">重点工程</a>
            <div class="main">
                <div class="part1">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2018年全省重点工程基本情况</a>
                    </div>
                    <div class="part_s part_l">
                        <img src="../../assets/img/icon13.png" alt="">
                        <div class="txt">
                            <span>危险废物利用处置建设工程</span>
                            <strong class="color1">85</strong>
                            <span>个</span>
                        </div>
                    </div>
                </div>
                <div class="part2">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2018年各设区城市重点工程分布情况(个)</a>
                    </div>
                    <div id="qfxdChart3"></div>
                </div>
                <div class="part3">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2018年全省重点工程进度分布情况(个)</a>
                    </div>
                    <div id="qfxdChart4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import './../../assets/scss/qfxd.scss';
</style>
<script>
export default {
    data() {
        return {
            qfxdChart1_option: {
                grid: {
                    bottom: '0%',
                    top: '1%',
                    right: '17%',
                    containLabel: true,
                    left: '2%'
                },
                xAxis: [
                    {
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        boundaryGap: true
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        inverse: true,
                        data: [
                            '杭州市',
                            '宁波市',
                            '温州市',
                            '湖州市',
                            '嘉兴市',
                            '绍兴市',
                            '金华市',
                            '衢州市',
                            '舟山市',
                            '台州市',
                            '丽水市'
                        ],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: ' ',
                        type: 'bar',
                        barCategoryGap: '55%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 10, 10, 0],
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    1,
                                    0,
                                    [
                                        {
                                            offset: 0.1,
                                            color: 'rgba(4,84,157,0.3)'
                                        },
                                        {
                                            offset: 0.8,
                                            color: '#198af2'
                                        }
                                    ]
                                )
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{c}',
                                color: '#198af2'
                            }
                        },
                        data: [166.62, 102.12, 87.04, 110.04, 79.71, 84.15, 60.40, 19.69, 104.81, 32.77, 24.82]
                    }
                ]
            },
            qfxdChart2_option: {
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent',
                    marginTop: 7,
                    options3d: {
                        enabled: true,
                        alpha: 5,
                        beta: 5,
                        depth: 20,
                        viewDistance: 100,
                        frame: {
                            bottom: {
                                size: 3,
                                color: 'rgba(255,255,255,0.5)'
                            },
                            side: {
                                size: 1,
                                color: 'transparent'
                            },
                            back: {
                                size: 1,
                                color: 'transparent'
                            }
                        }
                    }
                },
                title: {
                    text: ''
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        depth: 65,
                        dataLabels: {
                            x: 3,
                            y: -10,
                            enabled: true,
                            formatter: function() {
                                return this.y
                            }
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '杭州市',
                        '宁波市',
                        '温州市',
                        '湖州市',
                        '嘉兴市',
                        '绍兴市',
                        '金华市',
                        '衢州市',
                        '舟山市',
                        '台州市',
                        '丽水市',
                    ],
                    gridLineColor: 'transparent',
                    labels: {
                        y: 15,
                        autoRotation: [-60], //旋转角度
                        style: {
                            color: '#fff',
                            style: {
                                fontSize: 12
                            }
                        }
                    }
                },
                yAxis: {
                    visible: false,
                    // max: 2900
                },
                series: [
                    {
                        data: [
                            3.4,
                            5.9,
                            22.24,
                            0,
                            12.91,
                            0,
                            0.428,
                            0.21,
                            0.252,
                            0.47,
                            8.43
                        ],
                        color: '#14f7fe',
                        dataLabels: {
                            enabled: true,
                            style: {
                                color: '#14f7fe',
                                textOutline: 'none'
                            }
                        }
                    }
                ]
            },
            qfxdChart3_option: {
                grid: {
                    bottom: '0%',
                    top: '1%',
                    right: '17%',
                    containLabel: true,
                    left: '2%'
                },
                xAxis: [
                    {
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        boundaryGap: true
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        inverse: true,
                        data: [
                            '杭州市',
                            '宁波市',
                            '温州市',
                            '湖州市',
                            '嘉兴市',
                            '绍兴市',
                            '金华市',
                            '衢州市',
                            '舟山市',
                            '台州市'
                        ],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: ' ',
                        type: 'bar',
                        barCategoryGap: '55%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 10, 10, 0],
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    1,
                                    0,
                                    [
                                        {
                                            offset: 0.1,
                                            color: 'rgba(4,84,157,0.3)'
                                        },
                                        {
                                            offset: 0.8,
                                            color: '#198af2'
                                        }
                                    ]
                                )
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{c}',
                                color: '#198af2'
                            }
                        },
                        data: [8, 6, 7, 5, 3, 4, 5, 3, 3, 6, 3]
                    }
                ]
            },
            qfxdChart4_option: {
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent',
                    marginTop: 7,
                    options3d: {
                        enabled: true,
                        alpha: 5,
                        beta: 5,
                        depth: 20,
                        viewDistance: 100,
                        frame: {
                            bottom: {
                                size: 3,
                                color: 'rgba(255,255,255,0.5)'
                            },
                            side: {
                                size: 1,
                                color: 'transparent'
                            },
                            back: {
                                size: 1,
                                color: 'transparent'
                            }
                        }
                    }
                },
                title: {
                    text: ''
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        depth: 65,
                        dataLabels: {
                            x: 3,
                            y: -10,
                            enabled: true,
                            formatter: function() {
                                return this.y
                            }
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['前期', '开工', '建成', '投运'],
                    gridLineColor: 'transparent',
                    labels: {
                        y: 25,
                        style: {
                            color: '#fff',
                            style: {
                                fontSize: 12
                            }
                        }
                    }
                },
                yAxis: {
                    visible: false,
                    max: 40
                },
                series: [
                    {
                        data: [27, 15, 31, 12],
                        color: '#14f7fe',
                        dataLabels: {
                            enabled: true,
                            style: {
                                color: '#14f7fe',
                                textOutline: 'none'
                            }
                        }
                    }
                ]
            },
            mapChartOption: {
                backgroundColor: 'transparent',
                geo: {
                    show: true,
                    map: 'zhejiang',
                    aspectScale: 0.9,
                    label: {
                        normal: {
                            show: false,
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
                    color: ['#d8a130','#dbef10','#1bc296','#88bd1f'],
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
        let qfxdChart1
        let qfxdChart2
        let qfxdChart3
        let qfxdChart4
        let mapChart
        let uploadedDataURL = './static/data/zhejiang.json'

        qfxdChart1 = echarts.init(document.getElementById('qfxdChart1'))
        qfxdChart3 = echarts.init(document.getElementById('qfxdChart3'))
        mapChart = echarts.init(document.getElementById('qfxdMap'))

        qfxdChart1.setOption(_this.qfxdChart1_option)
        qfxdChart3.setOption(_this.qfxdChart3_option)
        qfxdChart2 = Highcharts.chart('qfxdChart2', _this.qfxdChart2_option)
        qfxdChart4 = Highcharts.chart('qfxdChart4', _this.qfxdChart4_option)

        this.mapChart = mapChart
        $.getJSON(uploadedDataURL, function(geoJson) {
            echarts.registerMap('zhejiang', geoJson)
            mapChart.setOption(_this.mapChartOption)
        })

        _this.changeMap()
    },
    methods: {
        changeMap() {
            let _this = this
            let getUrl = './static/data/qfxd.json'
            $.getJSON(getUrl, function(data) {
                for (let i = 0; i < data.length; i++) {
                    const element = data[i]
                    for (let j = 0; j < _this.geoCoordMap.length; j++) {
                        const element2 = _this.geoCoordMap[j]
                        if (element2.name == element.name) {
                            element.coods = element2.coods
                        }
                    }
                    element.value = element.coods.concat(element.value)
                }
                _this.mapChartOption.visualMap.show = true
                // _this.mapChartOption.tooltip = {
                //     trigger: 'item'
                // }
                _this.mapChartOption.series[1] = {
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: data,
                    symbol: 'pin',
                    symbolSize: 50,
                    aspectScale: 1,
                    zoom: 1.2,
                    itemStyle: {
                        color: 'red'
                    },
                    // tooltip: {
                    //     backgroundColor: 'rgba(51, 81, 166,0.9)',
                    //     borderColor: 'rbga(255,255,255,0.8)',
                    //     borderWidth: 1,
                    //     padding: 15,
                    //     formatter: function(params) {
                    //         return (
                    //             params.name +
                    //             ':</br>涉气排污单位达标率为：' +
                    //             params.value[2] +
                    //             '%'
                    //         )
                    //     }
                    // },
                    label: {
                        normal: {
                            formatter: function(params) {
                                return params.value[2]
                            },
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bolder'
                            },
                            position: 'inside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    zlevel: 10
                }
                _this.mapChart.setOption(_this.mapChartOption)
            })
        }
    }
}
</script>

