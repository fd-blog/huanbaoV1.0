<template>
    <div class="ltbwz wrapper">
        <div class="wrapper_left left animated bounceInLeft">
            <a class="title" :href="kqUrl" target="_self">空气质量</a>
            <div class="main">
                <div class="titleBar">
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle" href="javascript:;" target="_self">
                        <span v-show="changePage">2018年全省目标</span>
                        <span v-show="!changePage">2020年全省目标</span>
                        <span class="changeBUtton" @click="changeType('last')">→</span>
                        <span class="changeBUtton" @click="changeType('next')">←</span>
                    </a>
                </div>
                <div class="left_part1_l_top" style="margin-right:20px" @click="clickMapTobeChange('goal18')" v-show="changePage">
                    <div class="left_part1_l_top_left">
                        <div class="bg_type1"></div>
                    </div>
                    <div class="left_part1_l_top_right">
                        <div class="bottom" style="display:none">PM2.5</div>
                        <div class="bottom" style="margin-top:9px">
                            <span class="top">{{goalThisYearpm}}</span>
                            μg/m³
                        </div>
                    </div>
                </div>
                <div class="left_part1_l_top" style="margin-right:20px" v-show="!changePage">
                    <div class="left_part1_l_top_left">
                        <div class="bg_type1"></div>
                    </div>
                    <div class="left_part1_l_top_right">
                        <!-- <div class="bottom" style="display:none;">PM2.5</div> -->
                        <div class="bottom" style="margin-top:9px">
                            <span class="top">{{goal2020PM}}</span>
                            μg/m³
                        </div>
                    </div>
                </div>
                <div class="left_part1_l_top" @click="clickMapTobeChange('goal18yl')" v-show="changePage">
                    <div class="left_part1_l_top_left">
                        <div class="bg_type2"></div>
                    </div>
                    <div class="left_part1_l_top_right">
                        <div class="bottom">空气优良率</div>
                        <div class="bottom">
                            <span class="top2">{{goalThisYearYl}}</span>
                        </div>
                    </div>
                </div>
                <div class="left_part1_l_top" v-show="!changePage">
                    <div class="left_part1_l_top_left">
                        <div class="bg_type2"></div>
                    </div>
                    <div class="left_part1_l_top_right">
                        <div class="bottom">空气优良率</div>
                        <div class="bottom">
                            <span class="top2">{{goal2020YL}}</span>
                        </div>
                    </div>
                </div>
                <div class="titleBar">
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle" href="javascript:;" target="_self">截止当前目标完成情况</a>
                </div>
                <div class="left_part1_l_top" style="margin-right:20px" @click="clickMapTobeChange('currentpm')">
                    <div class="left_part1_l_top_left">
                        <div class="bg_type1"></div>
                    </div>
                    <div class="left_part1_l_top_right">
                        <!-- <div class="bottom" style="display:none;">PM2.5</div> -->
                        <div class="bottom" style="margin-top:9px">
                            <span class="top">{{goalCurrentpm}}</span>μg/m³
                        </div>
                    </div>
                </div>
                <div class="left_part1_l_top" @click="clickMapTobeChange('currentyl')">
                    <div class="left_part1_l_top_left">
                        <div class="bg_type2"></div>
                    </div>
                    <div class="left_part1_l_top_right">
                        <div class="bottom">空气优良率</div>
                        <div class="bottom">
                            <span class="top2">{{goalCurrentYl}}%</span>
                        </div>
                    </div>
                </div>
                <div class="qingxkq" @click="changeQXKQ()">
                    <span v-show="!showNowPM25">清新空气</span>
                    <span v-show="showNowPM25">PM2.5</span>
                </div>
                <div v-show="!showNowPM25">
                    <div class="titleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">{{getNowYear}}年{{nowMnth}}月全省PM2.5浓度</a>
                    </div>
                    <div class="left_part1_l_top" style="margin-right:20px">
                        <div class="left_part1_l_top_left">
                            <div class="bg_type1"></div>
                        </div>
                        <div class="left_part1_l_top_right">
                            <!-- <div class="bottom">PM2.5</div> -->
                            <div class="bottom" style="margin-top:9px">
                                <span class="top">{{getPMMnth}}</span>μg/m³</div>
                        </div>
                    </div>
                    <div class="left_part1_l_top">
                        <div class="left_part1_l_top_left">
                            <div class="bg_type2"></div>
                        </div>
                        <div class="left_part1_l_top_right">
                            <div class="bottom">同比下降</div>
                            <div class="bottom">
                                <span class="top2">{{getTB}}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="showNowPM25">
                    <div class="titleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">全省实时清新空气情况</a>
                    </div>
                    <div class="left_part1_l_top" style="margin-right:20px;width:160px;" @click="clickMapTobeChange('fylznd')">
                        <div class="left_part1_l_top_left">
                            <div class="bg_type3"></div>
                        </div>
                        <div class="left_part1_l_top_right" style="width:115px;">
                            <div class="bottom">负氧离子浓度</div>
                            <div class="bottom">
                                <span class="top3">{{qxkqValue}}</span>个/cm³</div>
                        </div>
                    </div>
                </div>
                <div class="titleBar">
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle">2018年全省空气质量变化趋势</a>
                </div>
                <div class="left_part2">
                    <div id="itbwz_chart1"></div>
                </div>
                <div class="titleBar">
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle" @click="clickMapTobeChange('rank')" v-show="!showRankList">
                        全省各设区城市空气质量排名
                        <span class="changeBUtton2" @click.stop="changeType('lastkq')"></span>
                    </a>
                    <a class="subTitle" @click="clickMapTobeChange('nowpm')" v-show="showRankList">
                        全省各设区城市实时PM2.5排名
                        <span class="changeBUtton2 roated" @click.stop="changeType('lastkq')"></span>
                    </a>

                </div>
                <div class="left_part3" v-show="showRankList">
                    <div class="table2">
                        <div class="line"></div>
                        <div>
                            <div class="div_row">
                                <span>设区市</span>
                                <span>浓度</span>
                                <span>排名</span>
                            </div>
                        </div>
                        <div id="scrollTab" style="height:102px;overflow:hidden">
                            <div id="tabBox1">
                                <div v-for="(item) in tableData2" id="tab1" v-bind:key='item.name'>
                                    <div class="line"></div>
                                    <div class="div_row" id="div_row">
                                        <span>{{item.cdmc}}</span>
                                        <span>{{item.PM25}}μg/m³</span>
                                        <span>{{item.paiming}}</span>
                                    </div>
                                </div>
                            </div>
                            <div id="tabBox2"></div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="left_part3" v-show="!showRankList">
                    <div class="table">
                        <div class="line"></div>
                        <div>
                            <div class="div_row">
                                <span>设区市</span>
                                <span>AQI</span>
                                <span>等级</span>
                                <span>首要污染物</span>
                                <span>排名</span>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div id="scrollTab2" style="height:102px;overflow:hidden">
                            <div id="tabBox11">
                                <div v-for="(item,index) in tableData" id="tab1" v-bind:key='item.cdmc'>
                                    <div class="line"></div>
                                    <div class="div_row" id="div_row">
                                        <span>{{item.cdmc}}</span>
                                        <span>{{item.aqi}}</span>
                                        <span>{{item.kqzllb}}</span>
                                        <span>{{item.sywrw}}</span>
                                        <span>
                                            <span class="rankIndex">{{index + 1}}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="tabBox22"></div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="wrapper_middle middle animated bounceInDown">
            <div class="wrapper_middle_top">
              <div class="lb" :style="{'background-image':'url('+mapLB+')'}" @click="playMap"></div>
              <div id="map" class="map" :class="{animated:true, fadeInLeft: !fadeOutLeft}"></div>
            </div>
            <!-- <div class="playButton">
              <div class="play" @click="playMap">开始</div>
              <div class="pause" @click="pauseMap">暂停</div>
            </div> -->
            <div class="wrapper_middle_bottom">
                <a class="title" href="javascript:;" target="_self">机动车</a>
                <div class="main">
                  <div style="margin:40px auto;text-align:center;line-height:30px;">
                    <img src="../../assets/img/qidai.png">
                  </div>
                </div>
            </div>
        </div>
        <div class="wrapper_right right  animated bounceInRight">
            <a class="title" href="javascript:;" target="_self">涉气重点工程</a>
            <div class="main">
                <div class="subTitleBar">
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle" href="javascript:;" target="_self">2018年全省重点项目情况</a>
                    <div class="right_top_1">
                        <div id="ltbwz_lineChart1"></div>
                    </div>
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle" href="javascript:;" target="_self">2018年各设区市重点项目分布情况</a>
                    <div class="titleButton">
                        <ul>
                            <li class="type1" v-bind:class="{ active: vocsActive }" @click="changeChart1Click('vocs')">VOCs治理</li>
                            <li class="type2" v-bind:class="{ active: !vocsActive }" @click="changeChart1Click('qjpf')">清洁排放改造</li>
                        </ul>
                    </div>
                    <div class="right_top_2">
                        <div id="ltbwz_lineChart2"></div>
                    </div>
                    <img src="../../assets/img/dian.png">
                    <a class="subTitle" href="javascript:;" target="_self">2018年全省重点项目进度情况</a>
                    <div class="titleButton">
                        <ul>
                            <li class="type1" v-bind:class="{ active: !vocsActive2 }" @click="changeChart2Click('vocs',true)">VOCs治理</li>
                            <li class="type2" v-bind:class="{ active: vocsActive2 }" @click="changeChart2Click('qjpf',true)">清洁排放改造</li>
                        </ul>
                    </div>
                    <div class="right_top_3">
                        <div id="ltbwz_3dbarChart2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "./../../assets/scss/ltbwz.scss";
</style>
<script>
export default {
  data() {
    return {
      kqUrl:
        "http://192.168.40.76/ZJGIS/index.html?menu=AirQualityCity&id=menus_Air",
      mapList: [
        "goal18yl",
        "currentpm",
        "currentyl",
        "fylznd",
        "rank",
        "goal18",
        "nowpm"
      ],
      mapLB: "./static/img/startEnd.gif",
      fadeOutLeft: false,
      mapInterval: "",
      mapChartOption: {
        backgroundColor: "transparent",
        title: {
          text: "AQI实时情况",
          left: 15,
          top: 15,
          textStyle: {
            color: "white"
          }
        },
        geo: {
          show: true,
          map: "",
          aspectScale: 0.9,
          label: {
            normal: {
              show: true,
              color: "white"
            },
            emphasis: {
              show: false
            }
          },
          zoom: 1.2,
          roam: false, //禁止拖拽
          itemStyle: {
            normal: {
              areaColor: "rgba(63, 155, 255, 0.9)",
              borderColor: "#3fdaff",
              borderWidth: 2
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          zlevel: 5
        },
        visualMap: [],
        series: [
          {
            //地图下面的地图阴影效果
            name: "map",   
            type: "map",
            mapType: "",
            aspectScale: 1,
            roam: false,
            center: [120.42864, 29.208274],
            silence: true,
            zoom: 1.2,
            zlevel: 1,
            silent: true,
            itemStyle: {
              normal: {
                areaColor: "transparent",
                borderColor: "rgba(63, 218, 255, 0.3)",
                borderWidth: 2,
                shadowColor: "rgba(63, 218, 255, 0.3)",
                shadowBlur: 30
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            }
          },
          {
            name: "light",
            type: "scatter",
            coordinateSystem: "geo",
            data: [],
            symbol: "rect",
            symbolSize: 40,
            symbolOffset: [0, -10],
            label: {
              color: "#000",
              distance: -30,
              show: true
            },
            tooltip: {
              backgroundColor: "rgba(51, 81, 166,0.9)",
              borderColor: "rbga(255,255,255,0.8)",
              borderWidth: 1,
              padding: 15
            },
            zlevel: 10
          }
        ]
      },
      cloneMapChartOption: {},
      geoCoordMap: [
        { name: "杭州市", coods: [119.5313, 29.8773] },
        { name: "丽水市", coods: [119.5642, 28.1854] },
        { name: "温州市", coods: [120.498, 27.8119] },
        { name: "宁波市", coods: [121.5967, 29.6466] },
        { name: "舟山市", coods: [122.2559, 30.2234] },
        { name: "台州市", coods: [121.1353, 28.6688] },
        { name: "金华市", coods: [120.0037, 29.1028] },
        { name: "衢州市", coods: [118.6853, 28.8666] },
        { name: "绍兴市", coods: [120.564, 29.7565] },
        { name: "嘉兴市", coods: [120.9155, 30.6354] },
        { name: "湖州市", coods: [119.8608, 30.7782] }
      ],
      mapChart: "",
      chart1LineOption: {
        title: {
          show: false
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "10%",
          top: "15%",
          containLabel: true
        },
        legend: {
          x: "center",
          y: "2%",
          orient: "horizontal",
          itemWidth: 20,
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        tooltip: {
          show: true,
          trigger: "item"
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(124, 219, 253, 0.3)"
            }
          },
          axisLabel: {
            color: "#53d2ff"
          },
          axisTick: {
            show: false
          },
          boundaryGap: true,
          data: [
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
            "12月"
          ]
        },
        yAxis: [
          {
            name: "μ/m³",
            type: "value",
            min: 20,
            nameTextStyle: {
              color: "#0b72e8"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: "#0b72e8",
              fontSize: 8,
              verticalAlign: "bottom"
            }
          },
          {
            name: "优良率(%)",
            type: "value",
            min: 30,
            nameTextStyle: {
              color: "#0b72e8"
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(124, 219, 253, 0.3)"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#ccc"
              }
            },
            axisLabel: {
              color: "#0b72e8",
              fontSize: 8,
              verticalAlign: "bottom"
            },
            data: []
          }
        ],
        series: [
          {
            name: "PM2.5",
            type: "line",
            yAxisIndex: 0,
            data: [35, 75, 115, 150, 145, 140, 135],
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#53d2ff"
              }
            },
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 38
                }
              ]
            }
          },
          {
            name: "优良率",
            type: "line",
            yAxisIndex: 1,
            data: ["70%", "80%", "90%", "80%", "70%", "90%", "80%"],
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#00dd8f"
              }
            },
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 81,
                  symbol: "rect",
                  symbolSize: 1,
                  lable: {
                    show: false,
                    position: "middle"
                  }
                }
              ]
            }
          }
        ]
      },
      barChart1Option: {
        title: {
          show: false
        },
        grid: {
          left: "2%",
          right: "10%",
          bottom: "10%",
          top: "0%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: ["重点行业废气清洁排放技术改造项目", "VOCs重点治理项目"],
          axisLabel: {
            formatter: function(value) {
              if (value == "重点行业废气清洁排放技术改造项目") {
                return "重点行业废气清洁\n排放技术改造项目";
              } else {
                return value;
              }
            },
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            type: "bar",
            barMaxWidth: 20,
            data: [
              {
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: "rgba(0, 221, 142,0)" },
                      { offset: 1, color: "#00dd8f" }
                    ]),
                    barBorderRadius: [0, 10, 10, 0] //（顺时针左上，右上，右下，左下）
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    color: "#00dd8f",
                    formatter: function(params) {
                      return params.data.value + "个";
                    }
                  }
                }
              },
              {
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: "rgba(0, 232, 255,0)" },
                      { offset: 1, color: "#00e8ff" }
                    ]),
                    barBorderRadius: [0, 10, 10, 0] //（顺时针左上，右上，右下，左下）
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    color: "#00e8ff",
                    formatter: function(params) {
                      return params.data.value + "个";
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      barChart2Option: {
        title: {
          show: false
        },
        grid: {
          left: "2%",
          right: "10%",
          bottom: "10%",
          top: "0%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          data: []
        },
        series: [
          {
            type: "bar",
            barMaxWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "rgba(83, 210, 255,0)" },
                  { offset: 1, color: "rgba(83, 210, 255,1)" }
                ]),
                barBorderRadius: [0, 10, 10, 0] //（顺时针左上，右上，右下，左下）
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
                color: "rgba(83, 210, 255,1)",
                formatter: function(params) {
                  return params.data.value;
                }
              }
            },
            data: []
          }
        ]
      },
      barHighChartOption: {
        chart: {
          renderTo: "container",
          type: "column",
          backgroundColor: "rgba(0,0,0,0)",
          margin: [0, 0, 30, 0],
          options3d: {
            enabled: true,
            alpha: 5,
            beta: 5,
            depth: 20,
            viewDistance: 100,
            frame: {
              bottom: {
                size: 3,
                color: "rgba(255,255,255,0.5)"
              },
              side: {
                size: 1,
                color: "transparent"
              },
              back: {
                size: 1,
                color: "transparent"
              }
            }
          }
        },
        title: {
          floating: true,
          style: {
            color: "rgba(0,0,0,0)"
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: ["前期", "开工", "建成", "投运"],
          gridLineColor: "rgba(0,0,0,0)",
          labels: {
            style: {
              color: "white"
            }
          }
        },
        yAxis: {
          gridLineColor: "rgba(0,0,0,0)"
        },
        plotOptions: {
          column: {
            depth: 25
          }
        },
        series: [
          {
            name: "清洁排放改造",
            color: "#3c90f2",
            data: [53, 19, 56, 11],
            dataLabels: {
              enabled: true,
              color: "white",
              shadow: false
            }
          }
        ]
      },
      goalThisYearpm: "",
      goalThisYearYl: "",
      goalCurrentpm: "",
      goalCurrentYl: "",
      goal2020PM: "",
      goal2020YL: "",
      qxkqValue: "",
      itbwz_chart1: "",
      changePage: true,
      showRankList: true,
      showNowPM25: true,
      vocsActive: true,
      vocsActive2: true,
      zdgcData: [],
      tableData: [],
      tableData2: [],
      intervalVocs: "",
      getPMMnth: "",
      getnowMnth: "",
      nowMnth: "",
      getTB: "",
      getNowYear: "",
      getGoal18AllData: "",
      getCurrentPMData: "",
      getCurrentYLLData: "",
      FylZndData: "",
      getAirSQJPData: "",
      airData: "",
      airChartData: "",
      vocsjdData: "",
      getvocsFBData: "",
      getZdgcData: [],
      getZdgcData2: [],
      getQjgData: [],
      ipaddress:
        "http://192.168.40.76:10050/hlenvironment/page/hlenvironment/air/target"
    };
  },
  mounted() {
    var _this = this;
    let mapChart = echarts.init(document.getElementById("map"));
    this.mapChart = mapChart;
    var uploadedDataURL = "./static/data/zhejiang.json";
    var zdxmUrl = _this.ipaddress + "/queryAirZDGCZS";

    var x = sessionStorage.getItem("timeouotClear");
    if (x) {
      clearInterval(x);
    }

    // 统计图
    _this.itbwz_chart1 = echarts.init(document.getElementById("itbwz_chart1"));
    _this.itbwz_chart1.setOption(_this.chart1LineOption);
    _this.changeChart1("vocs");
    _this.changeChart2("qjpf");

    this.mapChart.on("click", function(params) {
      console.log(params, "this is map");
      if (params.componentType == "geo") {
        if (params.name) {
          window.location.href =
            "http://192.168.40.76/ZJGIS/index.html?menu=AirQualityCity";
        }
      }
    });

    this.firstenter(); //第一次进入获取数据
    this.lunboZDXB(); //右边轮播开始播放
  },
  methods: {
    mapFun() {
      var uploadedDataURL = "./static/data/zhejiang.json";
      return this.$http.get(uploadedDataURL);
    },
    getQuanshengGoal() {
      ////2018全省目标
      var goalthisyearUrl = this.ipaddress + "/queryAirQSPMYOUMB";
      return this.$http.get(goalthisyearUrl);
    },
    getMuqianFinish() {
      ////截止当前完成,情况
      var goalCurrentUrl2 = this.ipaddress + "/queryAirQSJZZTPM25";
      return this.$http.get(goalCurrentUrl2);
    },
    getMuqianFinishRank() {
      ////截止当前完成,情况2
      var goalCurrentUrl1 = this.ipaddress + "/queryAirQSYOULANGLV";
      return this.$http.get(goalCurrentUrl1);
    },
    getQingxingkongqi() {
      ////全省实时清新空气
      var qxkqUrl = this.ipaddress + "/queryAirAVGFYLZND";
      return this.$http.get(qxkqUrl);
    },
    getBianhuaqushi() {
      //全省空气变化趋势
      var pmyearUrl = this.ipaddress + "/queryAirQSMONTHPM25";
      return this.$http.get(pmyearUrl);
    },
    getBianhuaqushi2() {
      //全省空气变化趋势2
      var yllyearUrl = this.ipaddress + "/queryAirQSMONTHYOULANGLV";
      return this.$http.get(yllyearUrl);
    },
    getBianhuaqushiFunc(params, params2) {
      //全省空气变化趋势
      var _this = this;
      let dataList = [];
      let data2List = [];
      for (let i = 0; i < params.length; i++) {
        const element = params[i];
        element.date = new Date(element.date);
        var month = element.date.getMonth() + 1;
        var newITime = month + "月";
        dataList.push(newITime);
        data2List.push(element.monthAvgPM25);
      }
      _this.chart1LineOption.xAxis.data = dataList;
      _this.chart1LineOption.series[0].data = data2List;

      let dataList2 = [];
      for (let i = 0; i < params2.length; i++) {
        const element = params2[i];
        element.avgqsmonthaqiyouliangbl = _this.toDecimal2(
          element.avgqsmonthaqiyouliangbl
        );
        dataList2.push(element.avgqsmonthaqiyouliangbl);
      }
      _this.chart1LineOption.series[1].data = dataList2;
      _this.itbwz_chart1.setOption(_this.chart1LineOption);
    },
    getPMrankFunc(params) {
      var _this = this;
      _this.tableData2 = params;
      _this.sortTable3(_this.tableData2);
      console.log(_this.tableData2, "rank2");

      setTimeout(() => {
        _this.scrollTbale("scrollTab", "tabBox1", "tabBox2");
      }, 1000);
    },
    getPMRank() {
      //实时pm2.5 排名
      var rankpmUrl = this.ipaddress + "/queryAirQSPM25SSPM";
      return this.$http.get(rankpmUrl);
    },
    getGoal18All() {
      var getUrl = this.ipaddress + "/queryAirZLMB";
      return this.$http.get(getUrl);
    },
    getZdProject() {
      //涉气重点工程
      var zdxmUrl = this.ipaddress + "/queryAirZDGCZS";
      return this.$http.get(zdxmUrl);
    },
    get2020Goal() {
      var goal2020Url = this.ipaddress + "/queryAirQS2020PMMB";
      return this.$http.get(goal2020Url);
    },
    getKqzlRank() {
      //空气质量排行
      var rankkqzlUrl = this.ipaddress + "/queryAirALLSS";
      return this.$http.get(rankkqzlUrl);
    },
    getPMNowData() {
      var pmNDUrl = this.ipaddress + "/queryAirQNTB";
      return this.$http.get(pmNDUrl);
    },
    getCurrentPM() {
      var getUrl = this.ipaddress + "/queryAirJZZTDSPM25";
      return this.$http.get(getUrl);
    },
    getCurrentYLL() {
      var getUrl = this.ipaddress + "/queryAirDSYOULANGLV";
      return this.$http.get(getUrl);
    },
    getFylZndData() {
      var getUrl = this.ipaddress + "/queryAirSHIFYLZND";
      return this.$http.get(getUrl);
    },
    getAirData() {
      var url = this.ipaddress + "/queryAirSHIQJPFJD";
      return this.$http.get(url);
    },
    getVocsFB() {
      var url = this.ipaddress + "/queryAirSHIVOCSZDGCFB";
      return this.$http.get(url);
    },
    getVocsJD() {
      var url = this.ipaddress + "/queryAirSHIVOCSZDGCJD";
      return this.$http.get(url);
    },
    getKqzlRankFunc(params) {
      var _this = this;
      _this.tableData = params;
      for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element.sywrw == undefined) {
          element.sywrw = "无";
        }
      }
      _this.sortTable(_this.tableData);
      setTimeout(() => {
        _this.scrollTbale("scrollTab2", "tabBox11", "tabBox22");
      }, 1000);
    },
    getXiangmuFenbu(params) {
      //各设区市重点项目分布情况
      var _this = this;
      let ltbwz_lineChart1 = echarts.init(
        document.getElementById("ltbwz_lineChart1")
      );
      _this.barChart1Option.series[0].data[0].value = params[0].qjpfgczs;
      // _this.barChart1Option.series[0].value = params[0].vocsgczs
      _this.barChart1Option.series[0].data[1].value = 290;
      ltbwz_lineChart1.setOption(_this.barChart1Option);
    },
    firstenter() {
      var _this = this;
      let xList = [
        _this.mapFun(),
        _this.getQuanshengGoal(),
        _this.getMuqianFinish(),
        _this.getMuqianFinishRank(),
        _this.getQingxingkongqi(),
        _this.getBianhuaqushi(),
        _this.getBianhuaqushi2(),
        _this.getPMRank(),
        _this.getZdProject()
      ];
      this.$http.all(xList).then(
        this.$http.spread(function(map, a, b, c, d, e, f, g, h) {
          console.log(
            "1--",
            a,
            "2--",
            b,
            "3--",
            c,
            "4--",
            d,
            "5--",
            e,
            "6--",
            f,
            "7--",
            g,
            "8--",
            h
          );
          //两个请求现已完成
          echarts.registerMap("zhejiang", map.data);
          _this.mapChartOption.geo.map = "zhejiang";
          _this.mapChartOption.series[0].mapType = "zhejiang";

          _this.goalThisYearpm = _this.toDecimal2(a.data[0].mbpm25nd);
          _this.goalThisYearYl = _this.toDecimal2(a.data[0].mbyltsbl) + "%";
          _this.goalCurrentpm = _this.toDecimal2(b.data[0].jzztqsavgpm25);
          _this.goalCurrentYl = _this.toDecimal2(c.data[0].jzztqsyouliangbl);
          _this.qxkqValue = _this.toDecimal2(d.data[0].fylznd);
          _this.getBianhuaqushiFunc(e.data, f.data);
          _this.getPMrankFunc(g.data);
          _this.getXiangmuFenbu(h.data);

          _this.changeMap("nowpm");
          let ltTimer = _this.$store.state.ltTimer;
          if (ltTimer) {
            _this.mapLB == "./static/img/startEnd.gif";
            _this.playMap();
          } else {
            _this.mapLB == "./static/img/endStart.gif";
          }
        })
      );
      this.getAllData();
    },
    getAllData() {
      var _this = this;
      let xList = [
        _this.get2020Goal(),
        _this.getKqzlRank(),
        _this.getPMNowData(),
        _this.getGoal18All(),
        _this.getCurrentPM(),
        _this.getCurrentYLL(),
        _this.getFylZndData(),
        _this.getAirData(),
        _this.getVocsJD()
      ];
      this.$http.all(xList).then(
        this.$http.spread(function(a, b, c, d, e, f, g, h, i) {
          _this.goal2020PM = _this.toDecimal2(a.data[0].mbz);
          _this.goal2020YL = "//";
          _this.getKqzlRankFunc(b.data);
          console.log(c.data[0], "当月pm25");
          _this.getPMMnth = c.data[0].yuepm25;
          _this.nowMnth = c.data[0].yf;
          _this.getTB = c.data[0].tb;
          _this.getNowYear = c.data[0].nf;

          _this.getGoal18AllData = d.data;

          _this.getCurrentPMData = e.data;

          _this.getCurrentYLLData = f.data;

          _this.FylZndData = g.data;
          _this.airData = h.data;

          _this.vocsjdData = i.data;
        })
      );
    },
    playMap() {
      let mapLB = this.mapLB;
      var _this = this;
      //  _this.changeMap(this.mapList[0], _this.airData);
      if (mapLB == "./static/img/startEnd.gif") {
        this.mapLB = "./static/img/endStart.gif";
        let i = 0;
        this.mapInterval = setInterval(() => {
          if (i == this.mapList.length) {
            i = 0;
          }
          if (i == 0) {
            // debugger;
            console.log(this.mapList[i], 1160);
            _this.changeMap(this.mapList[i], _this.airData);
          } else {
            // debugger;
            console.log(this.mapList[i], 1164);
            _this.changeMap(this.mapList[i]);
          }
          i++;
        }, 7000);
        this.$store.commit("ltTimerFun", true);
      } else {
        clearInterval(this.mapInterval);
        this.mapLB = "./static/img/startEnd.gif";
        this.$store.commit("ltTimerFun", false);
      }
    },
    clickMapTobeChange(params, value) {
      clearInterval(this.mapInterval);
      this.mapLB = "./static/img/startEnd.gif";
      this.$store.commit("ltTimerFun", false);
      this.changeMap(params, value);
      // var _this = this;
      // for (let i = 0; i < _this.mapList.length; i++) {
      //   const element = _this.mapList[i];
      //   // if(params == element){
      //   //   var x = i + 1;
      //   //   this.mapLB = "./static/img/endStart.gif";
      //   //   _this.mapInterval = setInterval(() => {
      //   //     if (x == _this.mapList.length) {
      //   //       x = 0;
      //   //     }
      //   //     if(x == 0){
      //   //       _this.changeMap(this.mapList[x], _this.airData);
      //   //     }else{
      //   //       _this.changeMap(this.mapList[x]);
      //   //     }
      //   //     x++;
      //   //   }, 5000);
      //   //   this.$store.commit("ltTimerFun", true);
      //   // }
      // }
    },
    // 表格Top3
    sortTable(value) {
      value.sort((a, b) => {
        return a.aqi - b.aqi;
      });
    },
    sortTable3(value) {
      value.sort((a, b) => {
        return a.PM25 - b.PM25;
      });
    },
    sortTable2(value) {
      value.sort((a, b) => {
        return a - b;
      });
    },
    toDecimal2(x) {
      var f = Math.round(x * 100) / 100;
      var s = f.toString();
      var rs = s.indexOf(".");
      if (rs < 0) {
        rs = s.length;
        s += ".";
      }
      while (s.length <= rs + 2) {
        s += "0";
      }
      return s;
    },
    changeQXKQ() {
      this.showNowPM25 = !this.showNowPM25;
    },
    changeMap(params, value) {
      var _this = this;
      _this.cloneMapChartOption = {};
      _this.mapChart.clear();
      if (params == "rank") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );

        console.log(_this.tableData, "rank");
        for (let i = 0; i < _this.tableData.length; i++) {
          const element = _this.tableData[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.cdmc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.cdmc;
          element.value = element.coods.concat(element.aqi);
          element.itemStyle = {};
          element.label = {};
          element.label.color = "black";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
          var x = new Date(element.pjksrq);
          x.nowMnth = x.getMonth() + 1;
          element.nowTime =
            x.getFullYear() +
            "年" +
            x.nowMnth +
            "月" +
            x.getDate() +
            "日" +
            x.getHours() +
            "点";
          if (element.sywrw == undefined) {
            element.sywrw = "无";
          }
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.legend = { show: false };
        _this.cloneMapChartOption.title.text = "AQI实时情况";
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: _this.tableData,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              return params.data.aqi;
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              if (params.data.sywrw == undefined) {
                params.data.sywrw = "无";
              }
              return (
                params.name +
                ":</br>AQI：" +
                params.data.aqi +
                "</br>空气质量等级：" +
                params.data.kqzllb +
                "</br>首要污染物：" +
                params.data.sywrw +
                "</br>" +
                params.data.nowTime
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.series[2] = null;
        _this.cloneMapChartOption.visualMap[0] = {
          type: "piecewise",
          show: true,
          pieces: [
            { gt: 300, label: "严重污染", color: "#7e0023" },
            { gt: 200, lte: 300, label: "重度污染", color: "#99004c" },
            { gt: 150, lte: 200, label: "中度污染", color: "red" },
            { gt: 100, lte: 150, label: "轻度污染", color: "orange" },
            { gt: 50, lte: 100, label: "良", color: "yellow" }, // (10, 200]
            { lt: 50, label: "优", color: "#13ce7f" } // [123, 123]               // (-Infinity, 5)
          ],
          inverse: true,
          textStyle: {
            color: "white"
          },
          right: 15,
          bottom: 15
        };
      } else if (params == "nowpm") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );

        let data = _this.tableData2;
        console.log(data, "pm2.5222");
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.cdmc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.cdmc;
          element.PM25 = _this.toDecimal2(element.PM25);
          element.value = element.coods.concat(element.PM25);
          element.itemStyle = {};
          element.label = {};
          element.label.color = "black";
          // element.label.borderWidth = 5;
          // element.label.borderRadius = 100;
          element.label.borderColor = "#000";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
          var x = new Date(element.pjksrq);
          x.nowMnth = x.getMonth() + 1;
          element.nowTime =
            x.getFullYear() +
            "年" +
            x.nowMnth +
            "月" +
            x.getDate() +
            "日" +
            x.getHours() +
            "点";
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.title.text = "PM2.5实时情况";
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: data,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              return params.data.PM25;
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              return (
                params.name +
                "</br>当前浓度：" +
                params.data.PM25 +
                "μg/m³</br>时间：" +
                params.data.nowTime
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.visualMap[0] = {
          type: "piecewise",
          show: true,
          pieces: [
            { gt: 250, color: "#7e0023" },
            { gt: 150, lte: 250, color: "#99004c" },
            { gt: 115, lte: 150, color: "red" },
            { gt: 75, lte: 115, color: "orange" },
            { gt: 35, lte: 75, color: "yellow" }, // (10, 200]
            { lt: 35, color: "#13ce7f" } // [123, 123]               // (-Infinity, 5)
          ],
          padding: 0,
          inverse: true,
          textStyle: {
            color: "white"
          },
          right: 15,
          bottom: 15
        };
        _this.cloneMapChartOption.legend = { show: false };
        console.log(_this.cloneMapChartOption);
      } else if (params == "goal18") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );
        for (let i = 0; i < _this.getGoal18AllData.length; i++) {
          const element = _this.getGoal18AllData[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.jc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.jc;
          _this.toDecimal2(element.mbpm25nd);
          element.value = element.coods.concat(element.mbpm25nd);
          element.itemStyle = {};
          element.label = {};
          element.label.color = "black";
          element.label.borderColor = "#000";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.title.text = "PM2.5目标";
        _this.cloneMapChartOption.title.label = {
          formatter: ["{a|PM}", "{b|2.5}", "{a|目标}"],
          rich: {
            a: {
              color: "red",
              lineHeight: 10
            },
            b: {
              height: 40
            }
          }
        };
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: _this.getGoal18AllData,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              return params.data.mbpm25nd;
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              return (
                params.name + ":</br>目标值：" + params.data.mbpm25nd + "μg/m³"
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.series[2] = null;
        _this.cloneMapChartOption.visualMap[0] = {
          type: "piecewise",
          show: true,
          pieces: [
            { gt: 250, color: "#7e0023" },
            { gt: 150, lte: 250, color: "#99004c" },
            { gt: 115, lte: 150, color: "red" },
            { gt: 75, lte: 115, color: "orange" },
            { gt: 35, lte: 75, color: "yellow" }, // (10, 200]
            { lt: 35, color: "#13ce7f" } // [123, 123]               // (-Infinity, 5)
          ],
          padding: 0,
          inverse: true,
          textStyle: {
            color: "white"
          },
          right: 15,
          bottom: 15
        };
        _this.cloneMapChartOption.legend = { show: false };
      } else if (params == "goal18yl") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );
        // var getUrl = this.ipaddress + "/queryAirZLMB";
        for (let i = 0; i < _this.getGoal18AllData.length; i++) {
          const element = _this.getGoal18AllData[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.jc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.jc;
          element.value = element.coods.concat(element.mbyltsbl);
          element.itemStyle = {};
          element.label = {};
          element.itemStyle.color = "blue";
          element.label.color = "black";
          element.label.borderColor = "#000";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.title.text = "空气优良率目标";
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: _this.getGoal18AllData,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              return params.data.mbyltsbl + "%";
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.name + ":</br>目标值：" + params.data.mbyltsbl + "%"
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.series[2] = null;
        _this.cloneMapChartOption.visualMap[0] = {
          show: false
        };
        _this.cloneMapChartOption.legend = { show: false };
      } else if (params == "currentpm") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );
        var listLonger = [];
        console.log(_this.getGoal18AllData, 999999999999999999);
        for (let i = 0; i < _this.getCurrentPMData.length; i++) {
          const element = _this.getCurrentPMData[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.cdmc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.cdmc;
          element.jzztshipm25 = _this.toDecimal2(element.jzztshipm25);
          element.value = element.coods.concat(element.jzztshipm25);
          element.itemStyle = {};
          element.label = {};
          element.label.color = "black";
          element.label.borderColor = "#000";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
          element.sj = element.sj.trim();
          if (element.jzztshipm25 > element.mbpm25nd) {
            listLonger.push(element);
          }
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.title.text = "PM2.5完成情况";
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: _this.getCurrentPMData,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              var star;
              return params.data.jzztshipm25;
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);

              return (
                "截止到" +
                params.data.sj +
                "</br>" +
                params.name +
                ":</br>目标值：" +
                params.data.mbpm25nd +
                "μg/m³</br>实际值：" +
                params.data.jzztshipm25 +
                "μg/m³"
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.series[2] = {
          type: "effectScatter",
          coordinateSystem: "geo",
          data: listLonger,
          symbolSize: 30,
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke"
          },
          silent: true,
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "red",
              shadowBlur: 10,
              shadowColor: "#333"
            }
          },
          zlevel: 9
        };
        _this.cloneMapChartOption.visualMap[0] = {
          type: "piecewise",
          show: true,
          pieces: [
            { gt: 250, color: "#7e0023" },
            { gt: 150, lte: 250, color: "#99004c" },
            { gt: 115, lte: 150, color: "red" },
            { gt: 75, lte: 115, color: "orange" },
            { gt: 35, lte: 75, color: "yellow" }, // (10, 200]
            { lt: 35, color: "#13ce7f" } // [123, 123]               // (-Infinity, 5)
          ],
          padding: 0,
          inverse: true,
          textStyle: {
            color: "white"
          },
          right: 15,
          bottom: 15
        };
        _this.cloneMapChartOption.legend = { show: false };
      } else if (params == "currentyl") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );
        var listLonger = [];
        for (let i = 0; i < _this.getCurrentYLLData.length; i++) {
          const element = _this.getCurrentYLLData[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.cdmc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.cdmc;
          element.jiezhiztshiyll = _this.toDecimal2(element.jiezhiztshiyll);
          element.value = element.coods.concat(element.jiezhiztshiyll);
          element.itemStyle = {};
          element.label = {};
          element.itemStyle.color = "blue";
          element.label.color = "black";
          element.label.borderColor = "#000";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
          element.sj = element.sj.trim();
          if (element.jiezhiztshiyll < element.mbyltsbl) {
            listLonger.push(element);
          }
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.title.text = "空气优良率完成情况";
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: _this.getCurrentYLLData,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              return params.data.jiezhiztshiyll + "%";
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                "截止到" +
                params.data.sj +
                "</br>" +
                params.name +
                ":</br>目标值：" +
                params.data.mbyltsbl +
                "%</br>实际值：" +
                params.data.jiezhiztshiyll +
                "%"
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.series[2] = {
          type: "effectScatter",
          coordinateSystem: "geo",
          data: listLonger,
          symbolSize: 30,
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke"
          },
          silent: true,
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "red",
              shadowBlur: 10,
              shadowColor: "#333"
            }
          },
          zlevel: 9
        };
        _this.cloneMapChartOption.visualMap[0] = {
          show: false
        };
        _this.cloneMapChartOption.legend = { show: false };
      } else if (params == "fylznd") {
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );
        for (let i = 0; i < _this.FylZndData.length; i++) {
          const element = _this.FylZndData[i];

          element.csmc = element.csmc + "市";
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.csmc) {
              element.coods = element2.coods;
            }
          }
          element.name = element.csmc;
          if (element.pjdjdm == "Ⅰ") {
            element.pjValue = 1;
            (element.pjName = "很清新"), (element.pjColor = "#008000");
          } else if (element.pjdjdm == "Ⅱ") {
            element.pjValue = 2;
            (element.pjName = "清新"), (element.pjColor = "#00dd8f");
          } else if (element.pjdjdm == "Ⅲ") {
            element.pjValue = 3;
            (element.pjName = "一般"), (element.pjColor = "#3c90f2");
          } else if (element.pjdjdm == "Ⅳ") {
            element.pjValue = 4;
            (element.pjName = "不清新"), (element.pjColor = "#ffa500");
          }
          // element.jiezhiztshiyll = _this.toDecimal2(element.jiezhiztshiyll);
          element.value = element.coods.concat(element.pjName);
          element.itemStyle = {};
          element.label = {};
          element.itemStyle.color = "blue";
          element.label.color = "black";
          element.label.borderColor = "#000";
          element.label.position = "bottom";
          element.label.fontWeight = "bolder";
        }
        _this.cloneMapChartOption.tooltip = {
          trigger: "item"
        };
        _this.cloneMapChartOption.title.text = "清新空气实时情况";
        _this.cloneMapChartOption.series[1] = {
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: _this.FylZndData,
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          label: {
            formatter: function(params) {
              return params.data.pjdjdm;
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.name +
                ":</br>当前负氧离子浓度为：" +
                params.data.jcjg +
                "个/cm³"
              );
            }
          },
          zlevel: 10
        };
        _this.cloneMapChartOption.visualMap[0] = {
          type: "piecewise",
          show: true,
          dimension: 2,
          categories: ["很清新", "清新", "一般", "不清新"],
          inRange: {
            color: ["#008000", "#00dd8f", "#fff", "#ffa500"]
          },
          padding: 0,
          inverse: true,
          textStyle: {
            color: "white"
          },
          right: 15,
          bottom: 15
        };
        _this.cloneMapChartOption.legend = { show: false };
      } else if (params == "zdxmQJ") {
        var qianqiList = [];
        var jianchengList = [];
        var kaigongList = [];
        var touyunList = [];
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );

        for (let i = 0; i < value.length; i++) {
          const element = value[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.dq) {
              element.coods = element2.coods;
            }
          }

          element.name = element.dq;
          element.valueQianqi = element.coods
            .concat(element.qianqi)
            .concat(element.name);
          element.valuejiancheng = element.coods
            .concat(element.jiancheng)
            .concat(element.name);
          element.valuekaigong = element.coods
            .concat(element.kaigong)
            .concat(element.name);
          element.valuetouyun = element.coods
            .concat(element.touyun)
            .concat(element.name);
          qianqiList.push(element.valueQianqi);
          jianchengList.push(element.valuejiancheng);
          kaigongList.push(element.valuekaigong);
          touyunList.push(element.valuetouyun);
        }
        _this.cloneMapChartOption.title.text = "清洁排放改造项目进度";
        (_this.cloneMapChartOption.legend = {
          selectedMode: "single",
          selected: {
            前期: true,
            建成: false,
            开工: false,
            投运: false
          },
          right: 15,
          bottom: 15,
          orient: "vertical",
          data: [
            {
              name: "前期",
              icon: "circle",
              textStyle: {
                color: "red"
              }
            },
            {
              name: "开工",
              icon: "circle",
              textStyle: {
                color: "blue"
              }
            },
            {
              name: "建成",
              icon: "circle",
              textStyle: {
                color: "yellow"
              }
            },
            {
              name: "投运",
              icon: "circle",
              textStyle: {
                color: "green"
              }
            }
          ]
        }),
          (_this.cloneMapChartOption.series[1] = {
            name: "前期",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 60,
            symbolOffset: [0, 10],
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: "rgba(255, 57, 57, 0.548)",
                shadowOffsetY: 5,
                color: "rgba(255, 57, 57, 1)"
              }
            },
            label: {
              normal: {
                formatter: function(params) {
                  return params.data[2];
                },
                color: "#000",
                distance: -40,
                show: true
              }
            },
            tooltip: {
              backgroundColor: "rgba(51, 81, 166,0.9)",
              borderColor: "rbga(255,255,255,0.8)",
              borderWidth: 1,
              padding: 15,
              formatter: function(params) {
                console.log(params);
                return (
                  params.data[3] + ":</br>前期项目为:" + params.data[2] + "个"
                );
              }
            },
            zlevel: 10,
            data: qianqiList
          });
        _this.cloneMapChartOption.series[2] = {
          name: "建成",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(159, 161, 46, 0.411)",
              shadowOffsetY: 5,
              color: "rgb(234, 238, 1)"
            }
          },
          label: {
            formatter: function(params) {
              return params.data[2];
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.data[3] + ":</br>建成项目为:" + params.data[2] + "个"
              );
            }
          },
          zlevel: 10,
          data: jianchengList
        };
        _this.cloneMapChartOption.series[3] = {
          name: "开工",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(16, 0, 236, 0.411)",
              shadowOffsetY: 5,
              color: "rgba(16, 0, 236, 1)"
            }
          },
          label: {
            formatter: function(params) {
              return params.data[2];
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.data[3] + ":</br>开工项目为:" + params.data[2] + "个"
              );
            }
          },
          zlevel: 10,
          data: kaigongList
        };
        _this.cloneMapChartOption.series[4] = {
          name: "投运",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(8, 236, 0, 0.479)",
              shadowOffsetY: 5,
              color: "rgba(8, 236, 1)"
            }
          },
          label: {
            formatter: function(params) {
              return params.data[2];
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.data[3] + ":</br>投运项目为:" + params.data[2] + "个"
              );
            }
          },
          zlevel: 10,
          data: touyunList
        };
        _this.cloneMapChartOption.visualMap = [];
      } else if (params == "zdxmQJ2") {
        var qianqiList = [];
        var jianchengList = [];
        var kaigongList = [];
        var touyunList = [];
        _this.cloneMapChartOption = JSON.parse(
          JSON.stringify(_this.mapChartOption)
        );

        for (let i = 0; i < value.length; i++) {
          const element = value[i];
          for (let j = 0; j < _this.geoCoordMap.length; j++) {
            const element2 = _this.geoCoordMap[j];
            if (element2.name == element.xzqh) {
              element.coods = element2.coods;
            }
          }

          element.name = element.xzqh;
          element.valueQianqi = element.coods
            .concat(element.qianqi)
            .concat(element.name);
          element.valuejiancheng = element.coods
            .concat(element.jiancheng)
            .concat(element.name);
          element.valuekaigong = element.coods
            .concat(element.kaigong)
            .concat(element.name);
          element.valuetouyun = element.coods
            .concat(element.touyun)
            .concat(element.name);
          qianqiList.push(element.valueQianqi);
          jianchengList.push(element.valuejiancheng);
          kaigongList.push(element.valuekaigong);
          touyunList.push(element.valuetouyun);
        }
        _this.cloneMapChartOption.title.text = "VOCS治理项目进度";
        (_this.cloneMapChartOption.legend = {
          selectedMode: "single",
          selected: {
            前期: true,
            建成: false,
            开工: false,
            投运: false
          },
          right: 15,
          bottom: 15,
          orient: "vertical",
          data: [
            {
              name: "前期",
              icon: "circle",
              textStyle: {
                color: "red"
              }
            },
            {
              name: "开工",
              icon: "circle",
              textStyle: {
                color: "blue"
              }
            },
            {
              name: "建成",
              icon: "circle",
              textStyle: {
                color: "yellow"
              }
            },
            {
              name: "投运",
              icon: "circle",
              textStyle: {
                color: "green"
              }
            }
          ]
        }),
          (_this.cloneMapChartOption.series[1] = {
            name: "前期",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 60,
            symbolOffset: [0, 10],
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: "rgba(255, 57, 57, 0.548)",
                shadowOffsetY: 5,
                color: "rgba(255, 57, 57, 1)"
              }
            },
            label: {
              normal: {
                formatter: function(params) {
                  return params.data[2];
                },
                color: "#000",
                distance: -40,
                show: true
              }
            },
            tooltip: {
              backgroundColor: "rgba(51, 81, 166,0.9)",
              borderColor: "rbga(255,255,255,0.8)",
              borderWidth: 1,
              padding: 15,
              formatter: function(params) {
                console.log(params);
                return (
                  params.data[3] + ":</br>前期项目为:" + params.data[2] + "个"
                );
              }
            },
            zlevel: 10,
            data: qianqiList
          });
        _this.cloneMapChartOption.series[2] = {
          name: "建成",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(159, 161, 46, 0.411)",
              shadowOffsetY: 5,
              color: "rgb(234, 238, 1)"
            }
          },
          label: {
            formatter: function(params) {
              return params.data[2];
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.data[3] + ":</br>建成项目为:" + params.data[2] + "个"
              );
            }
          },
          zlevel: 10,
          data: jianchengList
        };
        _this.cloneMapChartOption.series[3] = {
          name: "开工",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(16, 0, 236, 0.411)",
              shadowOffsetY: 5,
              color: "rgba(16, 0, 236, 1)"
            }
          },
          label: {
            formatter: function(params) {
              return params.data[2];
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.data[3] + ":</br>开工项目为:" + params.data[2] + "个"
              );
            }
          },
          zlevel: 10,
          data: kaigongList
        };
        _this.cloneMapChartOption.series[4] = {
          name: "投运",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(8, 236, 0, 0.479)",
              shadowOffsetY: 5,
              color: "rgba(8, 236, 1)"
            }
          },
          label: {
            formatter: function(params) {
              return params.data[2];
            },
            color: "#000",
            distance: -40,
            show: true
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              console.log(params);
              return (
                params.data[3] + ":</br>投运项目为:" + params.data[2] + "个"
              );
            }
          },
          zlevel: 10,
          data: touyunList
        };
        _this.cloneMapChartOption.visualMap = [];
      }

      this.fadeOutLeft = true;
      _this.mapChart.dispose();
      let timer = setTimeout(function() {
        _this.fadeOutLeft = false;
        _this.mapChart = echarts.init(document.getElementById("map"));
        _this.mapChart.setOption(_this.cloneMapChartOption);
        _this.mapChart.on("click", function(params) {
          window.location.href = _this.kqUrl;
        });
        clearTimeout(timer);
      }, 50);
      // _this.mapChart.setOption(_this.cloneMapChartOption);
    },
    chart1OptionFunc1(params, color, index) {
      var _this = this;
      let areaList = [];
      let optiondataList = [];
      for (let i = 0; i < params.length; i++) {
        const element = params[i];

        if (index == 1) {
          optiondataList.unshift(element.zs);
          areaList.unshift(element.xzqh);
        } else {
          optiondataList.unshift(element.qjgcsl);
          areaList.unshift(element.jc);
        }
      }
      _this.barChart2Option.yAxis.data = areaList;
      _this.barChart2Option.series[0].data = optiondataList;
      _this.barChart2Option.series[0].itemStyle = {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: color.a },
            { offset: 1, color: color.b }
          ])
        }
      };
      _this.barChart2Option.series[0].label.color = color.b;
    },
    chart2OptionFunc2(params) {
      var _this = this;
      var gcJdList = [];
      var gcJdValueList = [];
      for (let i = 0; i < params.length; i++) {
        const element = params[i];
        gcJdList.push(element.wcjd);
        if (element.wcjd == "前期") {
          gcJdValueList[0] = {
            y: element.jindushuliang,
            color: "rgba(255, 57, 57, 0.8)"
          };
        } else if (element.wcjd == "开工") {
          gcJdValueList[1] = {
            y: element.jindushuliang,
            color: "rgba(234, 238, 1,0.8)"
          };
        } else if (element.wcjd == "建成") {
          gcJdValueList[2] = {
            y: element.jindushuliang,
            color: "rgba(16, 0, 236, 0.8)"
          };
        } else if (element.wcjd == "投运") {
          gcJdValueList[3] = {
            y: element.jindushuliang,
            color: "rgba(8, 236, 1,0.8)"
          };
        }
      }
      _this.barHighChartOption.xAxis.data = gcJdList;
      _this.barHighChartOption.series[0].data = gcJdValueList;
    },
    chart2OptionFunc3(params) {
      var _this = this;
      var gcJdList = [];
      var gcJdValueList = [];
      for (let i = 0; i < params.length; i++) {
        const element = params[i];
        gcJdList.push(element.wcjd);
        if (element.wcjd == "前期") {
          gcJdValueList[0] = {
            y: element.zs,
            color: "rgba(255, 57, 57, 0.8)"
          };
        } else if (element.wcjd == "开工") {
          gcJdValueList[1] = {
            y: element.zs,
            color: "rgba(234, 238, 1,0.8)"
          };
        } else if (element.wcjd == "建成") {
          gcJdValueList[2] = {
            y: element.zs,
            color: "rgba(16, 0, 236, 0.8)"
          };
        } else if (element.wcjd == "投运") {
          gcJdValueList[3] = {
            y: element.zs,
            color: "rgba(8, 236, 1,0.8)"
          };
          // } else if (element.wcjd == "停产") {
          //   gcJdValueList[4] = {
          //     y: element.zs,
          //     color: "rgba(126, 236, 1,0.8)"
          //   };
        }
      }
      _this.barHighChartOption.xAxis.data = gcJdList;
      _this.barHighChartOption.series[0].data = gcJdValueList;
    },
    changeChart1(params) {
      let _this = this;
      let ltbwz_lineChart2 = echarts.init(
        document.getElementById("ltbwz_lineChart2")
      );
      ltbwz_lineChart2.setOption(_this.barChart2Option);
      if (params == "vocs") {
        _this.vocsActive = true;
        var zdgcUrl = _this.ipaddress + "/queryAirSHIVOCSZDGCFB";
        var color = { a: "rgba(83, 210, 255,0)", b: "rgba(83, 210, 255,1)" };
        if (_this.getZdgcData.length > 0) {
          _this.chart1OptionFunc1(_this.getZdgcData, color, 1);
          ltbwz_lineChart2.setOption(_this.barChart2Option);
        } else {
          $.getJSON(zdgcUrl, function(params) {
            _this.getZdgcData = params;
            _this.chart1OptionFunc1(params, color, 1);
            ltbwz_lineChart2.setOption(_this.barChart2Option);
          });
        }
      } else if (params == "qjpf") {
        _this.vocsActive = false;
        var zdgcUrl = _this.ipaddress + "/queryAirQJPFZDGCZS";
        var color = { a: "rgba(0, 221, 143,0)", b: "rgba(0, 221, 143,1)" };
        if (_this.getZdgcData2.length > 0) {
          _this.chart1OptionFunc1(_this.getZdgcData2, color, 2);
          ltbwz_lineChart2.setOption(_this.barChart2Option);
        } else {
          $.getJSON(zdgcUrl, function(params) {
            _this.getZdgcData2 = params;
            _this.chart1OptionFunc1(params, color, 2);
            ltbwz_lineChart2.setOption(_this.barChart2Option);
          });
        }
      }
    },
    changeChart2(value, TF) {
      let _this = this;
      var qjgcUrl = _this.ipaddress + "/queryAirQSQJPFJD";
      var vocsUrl = _this.ipaddress + "/queryAirVOCSZDGCJD";
      if (value == "qjpf") {
        _this.vocsActive2 = true;
        if (_this.airChartData.length > 0) {
          _this.chart2OptionFunc2(_this.airChartData);
          let chartBar3d = Highcharts.chart(
            "ltbwz_3dbarChart2",
            _this.barHighChartOption
          );
          if (TF == true) {
            _this.clickMapTobeChange("zdxmQJ", _this.airData);
          }
        } else {
          $.getJSON(qjgcUrl, function(params) {
            _this.airChartData = params;
            _this.chart2OptionFunc2(_this.airChartData);
            let chartBar3d = Highcharts.chart(
              "ltbwz_3dbarChart2",
              _this.barHighChartOption
            );
            if (TF == true) {
              _this.clickMapTobeChange("zdxmQJ", _this.airData);
            }
          });
        }
      } else if (value == "vocs") {
        _this.vocsActive2 = false;
        if (_this.getvocsFBData.length > 0) {
          _this.chart2OptionFunc3(_this.getvocsFBData);
          let chartBar3d = Highcharts.chart(
            "ltbwz_3dbarChart2",
            _this.barHighChartOption
          );
          if (TF == true) {
            _this.clickMapTobeChange("zdxmQJ2", _this.vocsjdData);
          }
        } else {
          $.getJSON(vocsUrl, function(params) {
            _this.getvocsFBData = params;
            _this.chart2OptionFunc3(_this.getvocsFBData);
            let chartBar3d = Highcharts.chart(
              "ltbwz_3dbarChart2",
              _this.barHighChartOption
            );
            if (TF == true) {
              _this.clickMapTobeChange("zdxmQJ2", _this.vocsjdData);
            }
          });
        }
      }
    },
    changeChart1Click(params) {
      var x = sessionStorage.getItem("timeouotClear");
      if (x) {
        clearInterval(x);
      }
      this.changeChart1(params);
      this.lunboZDXB();
    },
    changeChart2Click(params, value) {
      this.changeChart2(params, value);
    },
    changeType(params) {
      var _this = this;
      if (params == "last" || params == "next") {
        this.changePage = !this.changePage;
      } else if (params == "lastkq" || params == "nextkq") {
        this.showRankList = !this.showRankList;
        if (_this.showRankList == true) {
          // changeMap();
          _this.clickMapTobeChange("nowpm");
        } else {
          // _this.changeMap("rank");
          _this.clickMapTobeChange("rank");
        }
      }
      // playMap()
    },
    scrollTbale(obj, obj2, obj3) {
      var speed = 40;
      var demo = document.getElementById(obj);
      var demo1 = document.getElementById(obj2);
      var demo2 = document.getElementById(obj3);
      demo2.innerHTML = demo1.innerHTML;
      function Marquee() {
        if (demo.scrollTop >= demo1.offsetHeight) {
          demo.scrollTop = 0;
        } else {
          demo.scrollTop = demo.scrollTop + 1;
        }
      }
      var MyMar = setInterval(Marquee, speed);
      demo.onmouseover = function() {
        clearInterval(MyMar);
      };
      demo.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
      };
    },
    lunboZDXB() {
      var _this = this;
      _this.intervalVocs = setInterval(function(params) {
        _this.changeChart1("vocs");
        setTimeout(() => {
          _this.changeChart1("qjpf");
        }, 3000);
      }, 6000);
      sessionStorage.setItem("timeouotClear", _this.intervalVocs);
    }
  },
  beforeDestroy() {
    clearInterval(this.mapInterval);
  }
};
</script>
