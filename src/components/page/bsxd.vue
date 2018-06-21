<template>
    <div class="bsxd wrapper">
        <div class="left animated bounceInLeft">
            <div class="left_top">
                <a class="title" :href="bsxdUrl" target="_self">水环境质量</a>
                <div class="main">
                    <div class="subTitle" style="margin-top:5px;">
                      <img src="../../assets/img/dian.png">
                      <a class="subTitle" href="javascript:;" target="_self" @click="changeBtn(true)" :class="{subTitle:true,  active:toggle }">国控</a>
                      <a class="subTitle" href="javascript:;">|</a>
                      <a class="subTitle" href="javascript:;" target="_self" @click="changeBtn(false)" :class="{subTitle:true,  active:!toggle }">省控</a>
                    </div>
                    <div class="part1" v-show="toggle">
                            <div class="titleBox">
                                    <a class="leftTitle" href="javascript:;" target="_self">2018年103个国控断面目标</a>
                                    <a class="rightTitle" href="javascript:;" target="_self">截至当前完成情况</a>
                            </div>
                            <div class="section">
                                    <div class="section_s section_l">
                                            <img src="../../assets/img/icon12.png" alt="">
                                            <div class="txt">
                                                    <span>国控断面优于Ⅲ类</span>
                                                    <strong class="color1">{{gkdm.gkmbdm}}</strong>
                                                    <span>%</span>
                                            </div>
                                    </div>
                                    <div class="section_s section_r">
                                            <img src="../../assets/img/icon12.png" alt="">
                                            <div class="txt">
                                                    <span>国控断面优于Ⅲ类</span>
                                                    <strong class="color1">{{gkdm.gkdqdm}}</strong>
                                                    <span>%</span>
                                            </div>
                                    </div>
                            </div>
                            <div class="section">
                                    <div class="section_s section_l">
                                            <img src="../../assets/img/icon17.png" alt="">
                                            <div class="txt">
                                                    <span>达到考核目标的断面比例</span>
                                                    <strong class="color2">{{gkdm.gkkhmb}}</strong>
                                                    <span>%</span>
                                            </div>
                                    </div>
                                    <div class="section_s section_r">
                                            <img src="../../assets/img/icon17.png" alt="">
                                            <div class="txt">
                                                    <span>达到考核目标的断面比例</span>
                                                    <strong class="color2">{{gkdm.gkkhdq}}</strong>
                                                    <span>%</span>
                                            </div>
                                    </div>
                            </div>
                            <div class="section">
                                    <div class="section_s section_l">
                                            <img src="../../assets/img/icon21.png" alt="">
                                            <div class="txt txt2">
                                                    <span>劣V类水体</span>
                                                    <strong class="color3">{{gkdm.mblwst}}</strong>
                                                    <span>个</span>
                                            </div>
                                    </div>
                                    <div class="section_s section_r">
                                            <img src="../../assets/img/icon21.png" alt="">
                                            <div class="txt txt2">
                                                    <span>劣V类水体</span>
                                                    <strong class="color3">{{gkdm.wclwgt}}</strong>
                                                    <span>个</span>
                                            </div>
                                    </div>
                            </div>

                    </div>
                    <div class="part1" v-show="!toggle">
                            <div class="titleBox">
                                    <a class="leftTitle" href="javascript:;" target="_self">2018年221个省控断面目标</a>
                                    <a class="rightTitle" href="javascript:;" target="_self">截至当前完成情况</a>
                            </div>
                            <div class="section" >
                                    <div class="section_s section_l" style="margin-top:25px;">
                                            <img src="../../assets/img/icon12.png" alt="">
                                            <div class="txt">
                                                    <span>省控断面优于Ⅲ类</span>
                                                    <strong class="color1">80</strong>
                                                    <span>%</span>
                                            </div>
                                    </div>
                                    <div class="section_s section_r" style="margin-top:25px;">
                                            <img src="../../assets/img/icon12.png" alt="">
                                            <div class="txt">
                                                    <span>省控断面优于Ⅲ类</span>
                                                    <strong class="color1">{{skdm.skdqdm}}</strong>
                                                    <span>%</span>
                                            </div>
                                    </div>
                            </div>
                            <div class="section" style="margin:25px 0;">
                                    <div class="section_s section_l">
                                            <img src="../../assets/img/icon21.png" alt="">
                                            <div class="txt txt2">
                                                    <span>劣V类水体</span>
                                                    <strong class="color3">0</strong>
                                                    <span>个</span>
                                            </div>
                                    </div>
                                    <div class="section_s section_r">
                                            <img src="../../assets/img/icon21.png" alt="">
                                            <div class="txt txt2">
                                                    <span>劣V类水体</span>
                                                    <strong class="color3">0</strong>
                                                    <span>个</span>
                                            </div>
                                    </div>
                            </div>

                    </div>
                    <div class="part2">
                            <div class="subTitleBar">
                                    <img src="../../assets/img/dian.png">
                                    <a class="subTitle subTitle1" :class="{subTitleText: gktitle}" href="javascript:;" target="_self" @click="changeMap2(true)">截至当前国控断面水质监控情况</a>
                            </div>
                            <div id="bsxdChart1"></div>
                    </div>
                </div>
								
            </div>
            <div class="left_bottom">
                <a class="title" href="javascript:;" target="_self">饮用水源</a>
                <div class="main">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">全省各设区市饮用水达标率（%）</a>
                        <div id="bsxdChart8"></div>
                    </div>
                </div>

            </div>

        </div>
        <div class="wrapper_middle middle animated bounceInDown">
            <div class="wrapper_middle_top middle_top">
                <div class="lb" :style="{'background-image':'url('+mapLB+')'}" @click='mapLBFun'></div>
              <div id="bsxdMap" class="map" :class="{animated:true, fadeInLeft: !fadeOutLeft}"></div>
            </div>
            <div class="wrapper_middle_bottom middle_bottom">
                <a class="title" href="javascript:;" target="_self">涉水重点工程</a>
                <div class="main">
                    <div class="parts part1">
                        <div class="subTitleBar">
                            <!-- <img src="../../assets/img/dian.png"> -->
                            <a class="subTitle subTitle1" :class="{subTitleText: wszptitle}" href="javascript:;" target="_self" @click="changeMap7(true)">污水零直排区工程项目进度</a>
                        </div>
                        <div id="bsxdChart2"></div>
                    </div>
                    <div class="parts part2">
                        <div class="subTitleBar">
                            <!-- <img src="../../assets/img/dian.png"> -->
                            <a class="subTitle" href="javascript:;" target="_self">城镇污水处理厂清洁排放技术改造工程</a>
                        </div>
                        <div id="bsxdChart3"></div>
                    </div>
                    <div class="parts part3">
                        <div class="subTitleBar">
                            <!-- <img src="../../assets/img/dian.png"> -->
                            <a class="subTitle subTitle1" :class="{subTitleText: rhpwktitle}" href="javascript:;" target="_self" @click="changeMap8(true)">入海排污口规范化整治工程项目进度</a>
                        </div>
                        <div id="bsxdChart4"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper_right right animated bounceInRight">
            <a class="title" href="javascript:;" target="_self">近岸海域</a>
            <div class="main">
                <div class="part1">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: jhtitle}" href="javascript:;" target="_self" @click="changeMap4(true)">2017年全省近岸海域水质情况</a>
                    </div>
                    <div id="bsxdChart5"></div>
                </div>
                <div class="part2">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: zptitle}" href="javascript:;" target="_self"  @click="changeMap5(true)">直排海重点污染源达标率</a>
                    </div>
                    <div id="bsxdChart6"></div>
                </div>
                <div class="part3">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: rhtitle}" href="javascript:;" target="_self"  @click="changeMap6(true)">2018年沿海城市入海排污口分布情况(个)</a>
                    </div>
                    <div id="bsxdChart7"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "./../../assets/scss/bsxd.scss";
</style>
<script>
export default {
  data() {
    return {
      num: "",
      fadeOutLeft: false,
      gktitle: false,
      jhtitle: false,
      rhtitle: false,
      zptitle: false,
      wszptitle: false,
      rhpwktitle: false,
      toggle: true,
      gkdm: {},
      skdm: {},
      gkdmszData: [],
      jahyszData: [],
      rhkpwData: [],
      rhkpwData2: [],
      gsgkszData: [],
      fivejahyszData: [],
      wszpData: [], //污水零直排工程项目进度数量
      cityWszpData: [], //各市 污水零直排工程项目进度数量
      zphData: [], // 直排海直排海重点污染源达标率数据
      pwzzData: [], //入海排污口规范化整治工程项目进度数据
      cityPwzzData: [], //各市 入海排污口规范化整治工程项目进度数据
      yysData: [], //全省各设区市饮用水达标率数据
      date: "", // 获取时间
      btnTimer: "",
      mapLB: "./static/img/startEnd.gif",
      yysData: "",
      bsxdChart1_option: {
        chart: {
          type: "column",
          backgroundColor: "transparent",
          marginTop: 10,
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
          text: ""
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
              enabled: true,
              formatter: function() {
                return this.y + "%";
              },
              style: {
                textOutline: "none"
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: ["Ⅰ类", "Ⅱ类", "Ⅲ类", "Ⅳ类", "Ⅴ类", "劣Ⅴ类"],
          gridLineColor: "transparent",
          labels: {
            y: 25,
            style: {
              color: "#fff",
              style: {
                fontSize: 12
              }
            }
          }
        },
        yAxis: {
          visible: false
        },
        series: [
          {
            data: [
              {
                y: "",
                color: "#0386e1",
                dataLabels: {
                  style: {
                    color: "#0386e1"
                  }
                }
              },
              {
                y: "",
                color: "#7598ff",
                dataLabels: {
                  style: {
                    color: "#7598ff"
                  }
                }
              },
              {
                y: "",
                color: "#1ed000",
                dataLabels: {
                  style: {
                    color: "#1ed000"
                  }
                }
              },
              {
                y: "",
                color: "#c1c403",
                dataLabels: {
                  style: {
                    color: "#c1c403"
                  }
                }
              },
              {
                y: "",
                color: "#f28d01",
                dataLabels: {
                  style: {
                    color: "#f28d01"
                  }
                }
              },
              {
                y: "",
                color: "#ee1b3e",
                dataLabels: {
                  style: {
                    color: "#ee1b3e"
                  }
                }
              }
            ]
          }
        ]
      },
      bsxdChart2_option: {
        tooltip: {
          trigger: "item",
          show: false,
          formatter: "{a} <br/>{b}: {c}"
        },
        legend: {
          orient: "horizontal",
          show: true,
          x: "center",
          y: "bottom",
          data: ["前期", "开工", "建成", "投运"],
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          itemHeight: 10,
          itemWidth: 10,
          itemGap: 2
        },
        series: [
          {
            name: " 污水零直排区工程项目进度",
            type: "pie",
            radius: "72%",
            center: ["50%", "42%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "inner",
                formatter: "{c}",
                offset: [, 100],
                textStyle: {
                  color: "#000",
                  fontSize: 10
                }
              }
            },
            data: [
              {
                value: "",
                name: "前期",
                itemStyle: {
                  normal: {
                    color: "#fe6e3a"
                  }
                }
              },
              {
                value: "",
                name: "开工",
                itemStyle: {
                  normal: {
                    color: "#ffd425"
                  }
                }
              },
              {
                value: "",
                name: "建成",
                itemStyle: {
                  normal: {
                    color: "#008ce3"
                  }
                }
              },
              {
                value: "",
                name: "投运",
                itemStyle: {
                  normal: {
                    color: "#0feaf0"
                  }
                }
              }
            ]
          }
        ]
      },
      bsxdChart3_option: {
        tooltip: {
          trigger: "item",
          show: false,
          formatter: "{a} <br/>{b}: {c}"
        },
        legend: {
          orient: "horizontal",
          show: true,
          x: "center",
          y: "bottom",
          data: ["前期", "开工", "建成", "投运"],
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          itemHeight: 10,
          itemWidth: 10,
          itemGap: 2
        },
        series: [
          {
            name: "城镇污水处理厂清洁排放技术改造工程",
            type: "pie",
            radius: "72%",
            center: ["50%", "42%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "inner",
                formatter: "{c}",
                offset: [, 100],
                textStyle: {
                  color: "#000",
                  fontSize: 10
                }
              }
            },
            data: [
              {
                value: 23,
                name: "前期",
                itemStyle: {
                  normal: {
                    color: "#fe6e3a"
                  }
                }
              },
              {
                value: 21,
                name: "开工",
                itemStyle: {
                  normal: {
                    color: "#ffd425"
                  }
                }
              },
              {
                value: 14,
                name: "建成",
                itemStyle: {
                  normal: {
                    color: "#008ce3"
                  }
                }
              },
              {
                value: 43,
                name: "投运",
                itemStyle: {
                  normal: {
                    color: "#0feaf0"
                  }
                }
              }
            ]
          }
        ]
      },
      bsxdChart4_option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}",
          show: false
        },
        legend: {
          orient: "horizontal",
          show: true,
          x: "center",
          y: "bottom",
          data: ["前期", "开工", "建成", "投运"],
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          itemHeight: 10,
          itemWidth: 10,
          itemGap: 2
        },
        series: [
          {
            name: " 入海排污口规范化整治工程项目进度",
            type: "pie",
            radius: "72%",
            center: ["50%", "42%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "inner",
                formatter: "{c}",
                offset: [, 100],
                textStyle: {
                  color: "#000",
                  fontSize: 10
                }
              }
            },
            data: [
              {
                value: "",
                name: "前期",
                itemStyle: {
                  normal: {
                    color: "#fe6e3a"
                  }
                }
              },
              {
                value: "",
                name: "开工",
                itemStyle: {
                  normal: {
                    color: "#ffd425"
                  }
                }
              },
              {
                value: "",
                name: "建成",
                itemStyle: {
                  normal: {
                    color: "#008ce3"
                  }
                }
              },
              {
                value: "",
                name: "投运",
                itemStyle: {
                  normal: {
                    color: "#0feaf0"
                  }
                }
              }
            ]
          }
        ]
      },
      bsxdChart5_option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}%",
          show: false
        },
        legend: {
          orient: "vertical",
          show: true,
          x: "70%",
          data: ["一类海水", "二类海水", "三类海水", "四类海水", "劣四类海水"],
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          itemHeight: 10,
          itemWidth: 15,
          itemGap: 5
        },
        series: [
          {
            name: " 近岸海域水质情况",
            type: "pie",
            radius: "98%",
            center: ["40%", "50%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "inside",
                formatter: "{c}%",
                textStyle: {
                  color: "#000",
                  fontSize: 10
                }
              }
            },
            data: [
              {
                value: 33.6,
                name: "一类海水",
                itemStyle: {
                  normal: {
                    color: "#87b5f0"
                  }
                }
              },
              {
                value: 36.9,
                name: "二类海水",
                itemStyle: {
                  normal: {
                    color: "#acff01"
                  }
                }
              },
              {
                value: 7.9,
                name: "三类海水",
                itemStyle: {
                  normal: {
                    color: "#feff71"
                  }
                }
              },
              {
                value: 3.7,
                name: "四类海水",
                itemStyle: {
                  normal: {
                    color: "#ffa904"
                  }
                }
              },
              {
                value: 18.3,
                name: "劣四类海水",
                itemStyle: {
                  normal: {
                    color: "#fe0002"
                  }
                }
              }
            ]
          }
        ]
      },
      bsxdChart6_option: {
        grid: {
          bottom: "0%",
          top: "1%",
          right: "15%",
          containLabel: true,
          left: "2%"
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
            type: "category",
            inverse: true,
            data: [],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            }
          }
        ],
        series: [
          {
            name: " ",
            type: "bar",
            barCategoryGap: "55%",
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0.1,
                    color: "rgba(83, 210, 255,0)"
                  },
                  {
                    offset: 1,
                    color: "rgba(83, 210, 255,1)"
                  }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{c}%",
                color: "rgb(83, 210, 255)"
              }
            },
            data: []
          }
        ]
      },
      bsxdChart7_option: {
        chart: {
          type: "column",
          backgroundColor: "transparent",
          marginTop: 10,
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
          text: ""
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
              enabled: true,
              formatter: function() {
                return this.y;
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          // categories: [
          //   "杭州市",
          //   "宁波市",
          //   "温州市",
          //   "嘉兴市",
          //   "绍兴市",
          //   "舟山市",
          //   "台州市"
          // ],
          categories: [],
          gridLineColor: "transparent",
          labels: {
            style: {
              color: "#fff",
              style: {
                fontSize: 12
              }
            }
          }
        },
        yAxis: {
          visible: false
        },
        series: [
          {
            data: [188, 174, 98, 170, 35, 120, 85],
            color: "#14f7fe",
            dataLabels: {
              enabled: true,
              style: {
                color: "#14f7fe",
                textOutline: "none"
              }
            }
          }
        ]
      },
      bsxdChart8_option: {
        timeline: {
          show: true,
          axisType: "category",
          autoPlay: true,
          width: "95%",
          left: 0,
          bottom: 0,
          interval: 1,
          playInterval: 5000,
          label: {
            normal: {
              textStyle: {
                color: "#ddd",
                textStyle: {
                  fontSize: 10
                }
              }
            }
          },
          // symbol: 'none',
          symbolSize: 10,
          lineStyle: {
            color: "#555"
          },
          checkpointStyle: {
            color: "orange",
            borderColor: "#777",
            borderWidth: 2
          },
          controlStyle: {
            showNextBtn: false,
            showPrevBtn: false,
            normal: {
              color: "#666",
              borderColor: "#666"
            }
          },
          data: []
        },
        options: []
      },
      mapChartOption: {
        backgroundColor: "transparent",
        title: {
          text: "",
          left: 15,
          top: 15,
          textStyle: {
            color: "white"
          }
        },
        geo: {
          show: true,
          map: "zhejiang",
          center: "",
          aspectScale: 0.9,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff"
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
              areaColor: "rgba(63, 155, 255, 1)",
              borderColor: "#3fdaff",
              borderWidth: 2
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          zlevel: 5
        },
        series: [
          {
            //地图下面的地图阴影效果
            name: "map",
            type: "map",
            mapType: "zhejiang",
            aspectScale: 1,
            zoom: 1.2,
            roam: false,
            center: [120.42864, 29.208274],
            silence: true,
            zlevel: 1,
            silent: true,
            tooltip: {
              backgroundColor: "rgba(51, 81, 166,0.9)",
              borderColor: "rbga(255,255,255,0.8)",
              borderWidth: 1,
              padding: 15
            },
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
          }
        ]
      },
      geoCoordMap: [
        { name: "杭州市", coods: [119.5313, 29.8773], szshi: "3301" },
        { name: "丽水市", coods: [119.5642, 28.1854], szshi: "3311" },
        { name: "温州市", coods: [120.498, 27.8119], szshi: "3303" },
        { name: "宁波市", coods: [121.5967, 29.6466], szshi: "3302" },
        { name: "舟山市", coods: [122.2559, 30.2234], szshi: "3309" },
        { name: "台州市", coods: [121.1353, 28.6688], szshi: "3310" },
        { name: "金华市", coods: [120.0037, 29.1028], szshi: "3307" },
        { name: "衢州市", coods: [118.6853, 28.8666], szshi: "3308" },
        { name: "绍兴市", coods: [120.564, 29.7565], szshi: "3306" },
        { name: "嘉兴市", coods: [120.9155, 30.6354], szshi: "3304" },
        { name: "湖州市", coods: [119.8608, 30.7782], szshi: "3305" }
      ],
      mapChart: "",
      bsxdUrl:
        "http://192.168.40.76/ZJGIS/index.html?menu=WaterQualityGoal&id=menus_Water",
      ipaddress:
        "http://192.168.40.76:10050/hlenvironment/page/hlenvironment/air/target/"
    };
  },
  mounted() {
    let _this = this;
    //本地 地图JSON
    let uploadedDataURL = "./static/data/zhejiang.json";
    // 截止当前国控断面水质监控情况 目前只到4月份
    let curCountryWaterUrl = _this.ipaddress + "queryWaterJZDQGKQK";
    // 截止当前 各市 国控断面水质监控情况
    let curCityWaterUrl = _this.ipaddress + "queryWaterJZDQSHIGKQK";
    // 2018沿海城市排污入海口分布情况
    let cityPwUrl = _this.ipaddress + "queryWaterPWRHKFB";
    //  全省近岸海域水质情况-目前只有2017年数据
    let provinceWaterUrl = _this.ipaddress + "queryWaterJHHYSZ";
    //  地图饼图 五个近岸海域水质情况
    let fiveWaterUrl = _this.ipaddress + "queryWaterWUGEJAHYQK";
    //  污水零直排工程项目进度数量
    let wszpUrl = _this.ipaddress + "queryWaterWSLZPGCJDSL";
    //  各市 污水零直排工程项目进度
    let cityWszpUrl = _this.ipaddress + "queryWaterWSLZPGCJD";
    // 直排海污染源达标率
    let zphUrl = _this.ipaddress + "queryWaterZPHWRYDBL";
    //  全省各市饮用水达标率
    let cityDblUrl = _this.ipaddress + "queryWaterSHIYYSDBL?month=";
    //  入海排污口整治规范进度
    let pwzzUrl = _this.ipaddress + "queryWaterRHPWKGCJD";
    //  各市入海排污口整治工程项目进度
    let citypwkUrl = _this.ipaddress + "queryWaterSHIRHPWKGCJD";

    //  国控断面优于三类比例目标及截止当前完成情况
    let gkdmUrl = _this.ipaddress + "queryGKDMYSLMBBL";
    //  省控截止当前完成情况
    let skdqUrl = _this.ipaddress + "querySKDMYSLMBBL";

    let date1 = new Date();
    let year = date1.getFullYear();
    let month = date1.getMonth();
    let date2 = year + "年1-" + month + "月";
    this.date = date2;

    let bsxdChart3 = echarts.init(document.getElementById("bsxdChart3"));
    let mapChart = echarts.init(document.getElementById("bsxdMap"));
    bsxdChart3.setOption(_this.bsxdChart3_option);

    this.mapChart = mapChart;
    mapChart.on("click", function(params) {
      window.location.href = _this.bsxdUrl;
    });
    $.getJSON(uploadedDataURL, function(geoJson) {
      echarts.registerMap("zhejiang", geoJson);
      // 截止当前国控断面水质监控情况
      _this.$http
        .get(curCountryWaterUrl)
        .then(function(res) {
          res.data.forEach(element => {
            _this.gkdmszData.push(Number(element.bl.toFixed(2)));
          });
          for (
            let i = 0;
            i < _this.bsxdChart1_option.series[0].data.length;
            i++
          ) {
            _this.bsxdChart1_option.series[0].data[i].y = _this.gkdmszData[i];
          }
          let bsxdChart1 = Highcharts.chart(
            "bsxdChart1",
            _this.bsxdChart1_option
          );
          _this.changeMap2(false);
          let bsTimer = _this.$store.state.bsTimer;
          if (bsTimer) {
            _this.mapLB == "./static/img/startEnd.gif";
            _this.mapLBFun();
          } else {
            _this.mapLB == "./static/img/endStart.gif";
          }
        })
        .catch(function(error) {
          console.log("当前国控断面水质监控情况数据请求失败");
        });
    });

    this.$http
      .get(gkdmUrl)
      .then(res => {
        console.log(res.data[0], 1075);
        _this.gkdm = {
          gkmbdm: res.data[0].gkmb,
          gkdqdm: res.data[0].ljydslbl,
          gkkhmb: res.data[0].mbddkhmbbl,
          gkkhdq: res.data[0].wcddkhmbbl,
          mblwst: res.data[0].mdlwgt,
          wclwgt: res.data[0].wclwgt
        };

        console.log(_this.gkdm, 1077);
      })
      .catch(error =>
        console.log("国控断面优于三类比例目标及截止当前完成情况 数据请求失败")
      );

    this.$http
      .get(skdqUrl)
      .then(res => {
        _this.skdm = res.data[0];
        _this.skdm = {
          skdqdm: res.data[0].ljydslbl
        };
      })
      .catch(error => console.log("省控截止当前完成情况 数据请求失败"));

    //截止当前各市国控断面水质监控情况
    this.$http
      .get(curCityWaterUrl)
      .then(function(res) {
        res.data.forEach(element => {
          _this.gsgkszData.push(element);
        });
      })
      .catch(error =>
        console.log("截止当前各市国控断面水质监控情况 数据请求失败")
      );

    // 全省各市饮用水达标率
    _this.getYysAll();

    //全省近岸海域水质情况
    this.$http
      .get(provinceWaterUrl)
      .then(function(res) {
        for (
          let i = 0;
          i < _this.bsxdChart5_option.series[0].data.length;
          i++
        ) {
          _this.bsxdChart5_option.series[0].data[0].value = res.data[0].ylhs.toFixed(
            1
          );
          _this.bsxdChart5_option.series[0].data[1].value = res.data[0].elhs.toFixed(
            1
          );
          _this.bsxdChart5_option.series[0].data[2].value = res.data[0].slhs.toFixed(
            1
          );
          _this.bsxdChart5_option.series[0].data[3].value = res.data[0].shilhs.toFixed(
            1
          );
          _this.bsxdChart5_option.series[0].data[4].value = res.data[0].lslhs.toFixed(
            1
          );
        }
        _this.jahyszData.push(res.data[0]);
        let bsxdChart5 = echarts.init(document.getElementById("bsxdChart5"));
        bsxdChart5.setOption(_this.bsxdChart5_option);
      })
      .catch(error => console.log("全省近岸海域水质情况 数据请求失败"));

    // 直排海污染源达标率
    this.$http
      .get(zphUrl)
      .then(res => {
        let nameData = [];
        let serData = [];
        res.data.forEach(element => {
          _this.zphData.push(element);
          nameData.push(element.xzqh);
          serData.push(element.dbl);
        });
        _this.bsxdChart6_option.yAxis[0].data = nameData;
        _this.bsxdChart6_option.series[0].data = serData;
        let bsxdChart6 = echarts.init(document.getElementById("bsxdChart6"));
        bsxdChart6.setOption(_this.bsxdChart6_option);
      })
      .catch(error => console.log("直排海污染源达标率  数据请求失败"));

    //2018沿海城市排污入海口分布情况
    let rhkname = [];
    this.$http
      .get(cityPwUrl)
      .then(res => {
        res.data.forEach(element => {
          _this.rhkpwData2.push(element);
          if (element.jc == "杭州市") {
            _this.rhkpwData[0] = Number(element.zs.toFixed(0));
            rhkname[0] = element.jc;
          } else if (element.jc == "宁波市") {
            _this.rhkpwData[1] = Number(element.zs.toFixed(0));
            rhkname[1] = element.jc;
          } else if (element.jc == "温州市") {
            _this.rhkpwData[2] = Number(element.zs.toFixed(0));
            rhkname[2] = element.jc;
          } else if (element.jc == "嘉兴市") {
            _this.rhkpwData[3] = Number(element.zs.toFixed(0));
            rhkname[3] = element.jc;
          } else if (element.jc == "绍兴市") {
            _this.rhkpwData[4] = Number(element.zs.toFixed(0));
            rhkname[4] = element.jc;
          } else if (element.jc == "舟山市") {
            _this.rhkpwData[5] = Number(element.zs.toFixed(0));
            rhkname[5] = element.jc;
          } else if (element.jc == "台州市") {
            _this.rhkpwData[6] = Number(element.zs.toFixed(0));
            rhkname[6] = element.jc;
          }
        });
        for (
          let i = 0;
          i < _this.bsxdChart7_option.series[0].data.length;
          i++
        ) {
          _this.bsxdChart7_option.series[0].data[i] = _this.rhkpwData[i];
          _this.bsxdChart7_option.xAxis.categories = rhkname;
        }
        let bsxdChart7 = Highcharts.chart(
          "bsxdChart7",
          _this.bsxdChart7_option
        );
      })
      .catch(error =>
        console.log("2018沿海城市排污入海口分布情况数据请求失败")
      );

    //  五个近岸海域水质情况
    this.$http
      .get(fiveWaterUrl)
      .then(res => {
        res.data.forEach(element => _this.fivejahyszData.push(element));
      })
      .catch(error => console.log("五个近岸海域水质情况 数据请求失败"));

    //污水零直排工程项目进度数量
    this.$http
      .get(wszpUrl)
      .then(res => {
        res.data.forEach(element => _this.wszpData.push(element));
        _this.bsxdChart2_option.series[0].data.forEach(item => {
          _this.wszpData.forEach(element => {
            if (element.zzjd == item.name) {
              item.value = element.zzjdsl;
            }
          });
        });
        let bsxdChart2 = echarts.init(document.getElementById("bsxdChart2"));
        bsxdChart2.setOption(_this.bsxdChart2_option);
      })
      .catch(error => console.log("污水零直排工程项目进度数量 数据请求失败"));

    //各市 污水零直排工程项目进度数量
    this.$http
      .get(cityWszpUrl)
      .then(res => {
        res.data.forEach(element => _this.cityWszpData.push(element));
      })
      .catch(error =>
        console.log("各市 污水零直排工程项目进度数量 数据请求失败")
      );

    //  入海排污口整治规范进度
    this.$http
      .get(pwzzUrl)
      .then(res => {
        res.data.forEach(element => _this.pwzzData.push(element));
        _this.bsxdChart4_option.series[0].data.forEach(item => {
          _this.pwzzData.forEach(item2 => {
            if (item2.wcjd == item.name) {
              item.value = item2.zs;
            }
          });
        });
        let bsxdChart4 = echarts.init(document.getElementById("bsxdChart4"));
        bsxdChart4.setOption(_this.bsxdChart4_option);
      })
      .catch(error => console.log("入海排污口整治规范进度 数据请求失败"));

    //  各市入海排污口整治工程项目进度
    this.$http
      .get(citypwkUrl)
      .then(res => {
        res.data.forEach(element => _this.cityPwzzData.push(element));
      })
      .catch(error =>
        console.log("各市入海排污口整治工程项目进度 数据请求失败")
      );
    //国控省控制切换
    _this.btnTimer = setInterval(function() {
      _this.toggle = !_this.toggle;
    }, 5000);
  },
  methods: {
    getYys1() {
      let url = this.ipaddress + "queryWaterSHIYYSDBL?month=1";
      return this.$http.get(url);
    },
    getYys2() {
      let url = this.ipaddress + "queryWaterSHIYYSDBL?month=2";
      return this.$http.get(url);
    },
    getYys3() {
      let url = this.ipaddress + "queryWaterSHIYYSDBL?month=3";
      return this.$http.get(url);
    },
    getYys4() {
      let url = this.ipaddress + "queryWaterSHIYYSDBL?month=4";
      return this.$http.get(url);
    },
    getYys5() {
      let url = this.ipaddress + "queryWaterSHIYYSDBL?month=5";
      return this.$http.get(url);
    },
    //全省各市饮用水达标率
    getYysAll() {
      let _this = this;
      let xList = [
        _this.getYys1(),
        _this.getYys2(),
        _this.getYys3(),
        _this.getYys4(),
        _this.getYys5()
      ];
      let list_1 = [];
      let list_2 = [];
      let list_3 = [];
      let list_4 = [];
      let list_5 = [];
      let months = ["1", "2", "3", "4", "5"];
      let city = [];
      this.$http.all(xList).then(
        this.$http.spread(function(a, b, c, d, e) {
          a.data.forEach(element => {
            list_1.push(Number(element.bl.toFixed(0)));
            city.push(element.cs + "市");
          });
          b.data.forEach(element => {
            list_2.push(Number(element.bl.toFixed(0)));
          });
          c.data.forEach(element => {
            list_3.push(Number(element.bl.toFixed(0)));
          });
          d.data.forEach(element => {
            list_4.push(Number(element.bl.toFixed(0)));
          });
          e.data.forEach(element => {
            list_5.push(Number(element.bl.toFixed(0)));
          });
          _this.yysData = [list_1, list_2, list_3, list_4, list_5];

          for (let i = 0; i < months.length; i++) {
            _this.bsxdChart8_option.timeline.data.push(months[i] + "月");
            _this.bsxdChart8_option.options.push({
              title: {
                show: true,
                text: ""
              },
              calculable: true,
              xAxis: {
                type: "category",
                axisLabel: {
                  interval: 0,
                  rotate: 45,
                  textStyle: {
                    color: "#fff",
                    fontSize: 10
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: "#fff"
                  }
                },
                data: city
              },
              yAxis: {
                type: "value",
                axisTick: {
                  show: false
                },
                axisLabel: {
                  color: "#fff"
                },
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: "#fff"
                  }
                }
              },
              grid: {
                bottom: "20%",
                top: "20%",
                right: "1%",
                containLabel: true,
                left: "0%"
              },
              series: [
                {
                  yAxisIndex: 0,
                  type: "bar",
                  itemStyle: {
                    normal: {
                      color: "#2be5fa"
                    }
                  },
                  label: {
                    normal: {
                      show: true,
                      position: "top",
                      formatter: "{c}"
                    }
                  },
                  data: _this.yysData[i]
                }
              ]
            });
          }

          let bsxdChart8 = echarts.init(document.getElementById("bsxdChart8"));
          bsxdChart8.setOption(_this.bsxdChart8_option);
        })
      );
    },
    changeBtn(val) {
      let _this = this;
      this.toggle = val;
      clearInterval(_this.btnTimer);
    },
    // 截至当前国控断面水质监控情况 地图
    changeMap2(flag) {
      this.gktitle = true;
      this.jhtitle = false;
      this.rhtitle = false;
      this.wszptitle = false;
      this.zptitle = false;
      this.rhpwktitle = false;
      let _this = this;
      if (flag) {
        flag = false;
        _this.clelerTimer();
      }
      let colorList = [
        "#0386e1",
        "#7598ff",
        "#1ed000",
        "#c1c403",
        "#f28d01",
        "#ee1b3e"
      ];
      for (let i = 0; i < 11; i++) {
        _this.mapChartOption.series[i + 1] = null;
      }
      _this.mapChartOption.title.text = null;
      _this.mapChart.dispose(); // 清除图层
      _this.mapChart = null;
      _this.fadeOutLeft = true;
      _this.mapChartOption.geo.center = null;
      _this.mapChartOption.series[0].center = [120.42864, 29.208274];
      _this.mapChartOption.color = colorList;
      _this.mapChartOption.legend = {
        selectedMode: "single",
        selected: {
          Ⅰ类: true,
          Ⅱ类: false,
          Ⅲ类: false,
          Ⅳ类: false,
          Ⅴ类: false,
          劣Ⅴ类: false
        },
        orient: "vertical",
        x: "85%",
        bottom: "5%",
        data: [
          {
            name: "Ⅰ类",
            icon: "circle",
            textStyle: {
              color: colorList[0]
            }
          },
          {
            name: "Ⅱ类",
            icon: "circle",
            textStyle: {
              color: colorList[1]
            }
          },
          {
            name: "Ⅲ类",
            icon: "circle",
            textStyle: {
              color: colorList[2]
            }
          },
          {
            name: "Ⅳ类",
            icon: "circle",
            textStyle: {
              color: colorList[3]
            }
          },
          {
            name: "Ⅴ类",
            icon: "circle",
            textStyle: {
              color: colorList[4]
            }
          },
          {
            name: "劣Ⅴ类",
            icon: "circle",
            textStyle: {
              color: colorList[5]
            }
          }
        ]
      };
      _this.mapChartOption.tooltip = {
        trigger: "item"
      };
      _this.mapChartOption.title.text = "国控断面水质情况";
      let gsgkszData_1 = [];
      let gsgkszData_2 = [];
      let gsgkszData_3 = [];
      let gsgkszData_4 = [];
      let gsgkszData_5 = [];
      let gsgkszData_6 = [];
      let time = "";
      _this.gsgkszData.forEach(element => {
        function timestamp(timestamp) {
          var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
          var Y = date.getFullYear() + "年1-";
          var M = date.getMonth() + 1 + "月";
          // var D = date.getDate() + ' ';
          // var h = date.getHours() + ':';
          // var m = date.getMinutes() + ':';
          // var s = date.getSeconds();
          return Y + M;
        }
        let t1 = timestamp(element.sj);
        time = t1;
        for (let i = 0; i < _this.geoCoordMap.length; i++) {
          if (_this.geoCoordMap[i].szshi == element.szshi) {
            gsgkszData_1.push([
              _this.geoCoordMap[i].coods[0],
              _this.geoCoordMap[i].coods[1],
              element.yi.toFixed(2),
              _this.geoCoordMap[i].name
            ]);
            gsgkszData_2.push([
              _this.geoCoordMap[i].coods[0],
              _this.geoCoordMap[i].coods[1],
              element.er.toFixed(2),
              _this.geoCoordMap[i].name
            ]);
            gsgkszData_3.push([
              _this.geoCoordMap[i].coods[0],
              _this.geoCoordMap[i].coods[1],
              element.san.toFixed(2),
              _this.geoCoordMap[i].name
            ]);
            gsgkszData_4.push([
              _this.geoCoordMap[i].coods[0],
              _this.geoCoordMap[i].coods[1],
              element.shi.toFixed(2),
              _this.geoCoordMap[i].name
            ]);
            gsgkszData_5.push([
              _this.geoCoordMap[i].coods[0],
              _this.geoCoordMap[i].coods[1],
              element.wu.toFixed(2),
              _this.geoCoordMap[i].name
            ]);
            gsgkszData_6.push([
              _this.geoCoordMap[i].coods[0],
              _this.geoCoordMap[i].coods[1],
              element.liu.toFixed(2),
              _this.geoCoordMap[i].name
            ]);
          }
        }
      });
      for (let i = 0; i < 6; i++) {
        _this.mapChartOption.series[i + 1] = {
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          zlevel: 20,
          data: [],
          label: {
            normal: {
              show: true,
              color: "#000",
              fontWeight: 700,
              formatter: function(params) {
                if (params.data[2] == 0.0) {
                  return "";
                } else {
                  return params.data[2] + "%";
                }
              }
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                if (params.data[2] == 0.0) {
                  return "rgba(0,0,0,0)";
                } else {
                  return colorList[i];
                }
              }
            }
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              return (
                params.data[3] +
                "：</br>" +
                params.seriesName +
                "：" +
                params.data[2] +
                "%</br>日期：" +
                time
              );
            }
          }
        };
        if (i == 0) {
          _this.mapChartOption.series[i + 1].name = "Ⅰ类";
          _this.mapChartOption.series[i + 1].data = gsgkszData_1;
        } else if (i == 1) {
          _this.mapChartOption.series[i + 1].name = "Ⅱ类";
          _this.mapChartOption.series[i + 1].data = gsgkszData_2;
        } else if (i == 2) {
          _this.mapChartOption.series[i + 1].name = "Ⅲ类";
          _this.mapChartOption.series[i + 1].data = gsgkszData_3;
        } else if (i == 3) {
          _this.mapChartOption.series[i + 1].name = "Ⅳ类";
          _this.mapChartOption.series[i + 1].data = gsgkszData_4;
        } else if (i == 4) {
          _this.mapChartOption.series[i + 1].name = "Ⅴ类";
          _this.mapChartOption.series[i + 1].data = gsgkszData_5;
        } else if (i == 5) {
          _this.mapChartOption.series[i + 1].name = "劣Ⅴ类";
          _this.mapChartOption.series[i + 1].data = gsgkszData_6;
        }
      }
      this.num = 1;
      _this.mapCreat();
    },
    // 截至当前全省近岸海域水质情况  地图
    changeMap4(flag) {
      this.gktitle = false;
      this.jhtitle = true;
      this.rhtitle = false;
      this.wszptitle = false;
      this.zptitle = false;
      this.rhpwktitle = false;
      let _this = this;
      if (flag) {
        flag = false;
        _this.clelerTimer();
      }
      for (let i = 0; i < 11; i++) {
        _this.mapChartOption.series[i + 1] = null;
      }
      _this.mapChart.dispose();
      _this.mapChart = null;
      _this.fadeOutLeft = true;
      _this.mapChartOption.title.text = null;
      _this.mapChartOption.geo.center = [121.01864, 29.208274];
      _this.mapChartOption.series[0].center = [121.00664, 29.208274];
      _this.mapChartOption.title.text = "近海岸水质情况";
      _this.mapChartOption.legend = {
        orient: "vertical",
        show: true,
        x: "85%",
        bottom: "5%",
        selectedMode: false,
        data: ["一类海水", "二类海水", "三类海水", "四类海水", "劣四类海水"],
        textStyle: {
          color: "#fff",
          fontSize: 10
        },
        itemHeight: 10,
        itemWidth: 15,
        itemGap: 5
      };
      for (let i = 0; i < 5; i++) {
        _this.mapChartOption.series[i + 1] = {
          type: "pie",
          hoverAnimation: false,
          zlevel: 10,
          radius: [0, "15%"],
          label: {
            normal: {
              position: "inner",
              formatter: function(params) {
                if (params.value) {
                  return params.value + "%";
                } else {
                  return "";
                }
              },
              offset: [, 100],
              textStyle: {
                color: "#fff",
                fontSize: 10
              }
            }
          },
          data: [
            {
              value: 33.6,
              name: "一类海水",
              itemStyle: {
                normal: {
                  color: "#87b5f0"
                }
              }
            },
            {
              value: 36.9,
              name: "二类海水",
              itemStyle: {
                normal: {
                  color: "#acff01"
                }
              }
            },
            {
              value: 7.9,
              name: "三类海水",
              itemStyle: {
                normal: {
                  color: "#feff71"
                }
              }
            },
            {
              value: 3.7,
              name: "四类海水",
              itemStyle: {
                normal: {
                  color: "#ffa801"
                }
              }
            },
            {
              value: 18.3,
              name: "劣四类海水",
              itemStyle: {
                normal: {
                  color: "#fe0000"
                }
              }
            }
          ],
          tooltip: {
            formatter: "{a}<br>{b}占：{c}%"
          }
        };
        _this.mapChartOption.series[i + 1].data[0].value =
          _this.fivejahyszData[i].ylhs;
        _this.mapChartOption.series[i + 1].data[1].value =
          _this.fivejahyszData[i].elhs;
        _this.mapChartOption.series[i + 1].data[2].value =
          _this.fivejahyszData[i].slhs;
        _this.mapChartOption.series[i + 1].data[3].value =
          _this.fivejahyszData[i].shilhs;
        _this.mapChartOption.series[i + 1].data[4].value =
          _this.fivejahyszData[i].lslhs;
        if (i == 0) {
          _this.mapChartOption.series[i + 1].center = ["55%", "18%"];
          _this.mapChartOption.series[i + 1].name = "嘉兴市";
        } else if (i == 1) {
          _this.mapChartOption.series[i + 1].center = ["85%", "20%"];
          _this.mapChartOption.series[i + 1].name = "舟山市";
        } else if (i == 2) {
          _this.mapChartOption.series[i + 1].center = ["75%", "48%"];
          _this.mapChartOption.series[i + 1].name = "宁波市";
        } else if (i == 3) {
          _this.mapChartOption.series[i + 1].center = ["70%", "72%"];
          _this.mapChartOption.series[i + 1].name = "台州市";
        } else if (i == 4) {
          _this.mapChartOption.series[i + 1].center = ["55%", "90%"];
          _this.mapChartOption.series[i + 1].name = "温州市";
        }
      }
      _this.mapCreat();
      this.num = 2;
    },
    //直排海重点污染源达标率
    changeMap5(flag) {
      this.gktitle = false;
      this.jhtitle = false;
      this.rhtitle = false;
      this.wszptitle = false;
      this.zptitle = true;
      this.rhpwktitle = false;
      let _this = this;
      if (flag) {
        flag = false;
        _this.clelerTimer();
      }
      for (let i = 0; i < 11; i++) {
        _this.mapChartOption.series[i + 1] = null;
      }
      _this.mapChart.dispose();
      _this.mapChart = null;
      _this.fadeOutLeft = true;
      _this.mapChartOption.title.text = null;
      _this.mapChartOption.geo.center = null;
      _this.mapChartOption.series[0].center = [120.42864, 29.208274];
      _this.mapChartOption.title.text = "直排海重点污染源达标率";
      _this.mapChartOption.title.textStyle.fontSize = 15;
      let dataArr = [];
      _this.zphData.forEach(element => {
        _this.geoCoordMap.forEach(item => {
          if (element.szshi == item.szshi) {
            let code = [item.coods[0], item.coods[1], element.dbl, item.name];
            dataArr.push(code);
          }
        });
      });
      _this.mapChartOption.series[1] = {
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin",
        symbolSize: 60,
        symbolOffset: [0, 10],
        zlevel: 20,
        data: dataArr,
        itemStyle: {
          normal: {
            color: "yellow"
          }
        },
        label: {
          normal: {
            show: true,
            color: "#000",
            fontWeight: 700,
            formatter: function(params) {
              return params.data[2] + "%";
            }
          }
        },
        tooltip: {
          backgroundColor: "rgba(51, 81, 166,0.9)",
          borderColor: "rbga(255,255,255,0.8)",
          borderWidth: 1,
          padding: 15,
          formatter: function(params) {
            return (
              params.data[3] +
              "</br>污染源达标率：" +
              params.data[2] +
              "%</br>日期：" +
              "2018年1-3月"
            );
          }
        }
      };
      this.num = 3;
      _this.mapCreat();
    },
    // 2018年沿海城市入海排污口分布情况个
    changeMap6(flag) {
      this.gktitle = false;
      this.jhtitle = false;
      this.rhtitle = true;
      this.wszptitle = false;
      this.zptitle = false;
      this.rhpwktitle = false;
      let _this = this;
      if (flag) {
        flag = false;
        _this.clelerTimer();
      }
      let dataArr = [];
      for (let i = 0; i < 11; i++) {
        _this.mapChartOption.series[i + 1] = null;
      }
      _this.mapChart.dispose();
      _this.mapChart = null;
      _this.fadeOutLeft = true;
      _this.mapChartOption.title.text = null;
      _this.mapChartOption.geo.center = null;
      _this.mapChartOption.series[0].center = [120.42864, 29.208274];
      _this.mapChartOption.title.text = "入海排污口分布情况";
      _this.rhkpwData2.forEach(element => {
        _this.geoCoordMap.forEach(item => {
          if (element.szshi == item.szshi) {
            let code = [item.coods[0], item.coods[1], element.zs, item.name];
            dataArr.push(code);
          }
        });
      });
      _this.mapChartOption.series[1] = {
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin",
        symbolSize: 60,
        symbolOffset: [0, 10],
        zlevel: 20,
        data: dataArr,
        itemStyle: {
          normal: {
            color: "yellow"
          }
        },
        label: {
          normal: {
            show: true,
            color: "#000",
            fontWeight: 700,
            formatter: function(params) {
              return params.data[2] + "个";
            }
          }
        },
        tooltip: {
          backgroundColor: "rgba(51, 81, 166,0.9)",
          borderColor: "rbga(255,255,255,0.8)",
          borderWidth: 1,
          padding: 15,
          formatter: function(params) {
            return (
              params.data[3] +
              "</br>入海排污口：" +
              params.data[2] +
              "个</br>日期：" +
              _this.date
            );
          }
        }
      };
      _this.mapCreat();
      this.num = 4;
    },
    changeMap7(flag) {
      this.gktitle = false;
      this.jhtitle = false;
      this.rhtitle = false;
      this.wszptitle = true;
      this.zptitle = false;
      this.rhpwktitle = false;
      let colorList = ["#fe6e3a", "#ffd425", "#008ce3", "#0feaf0"];
      let _this = this;
      if (flag) {
        flag = false;
        _this.clelerTimer();
      }
      let qianqiData = [];
      let kaigongData = [];
      let jianchengData = [];
      let touyunData = [];
      for (let i = 0; i < 11; i++) {
        _this.mapChartOption.series[i + 1] = null;
      }
      _this.mapChart.dispose();
      _this.mapChart = null;
      _this.fadeOutLeft = true;
      _this.mapChartOption.title.text = null;
      _this.mapChartOption.geo.center = null;
      _this.mapChartOption.series[0].center = [120.42864, 29.208274];
      _this.mapChartOption.title.text = "污水零直排区工程项目进度";
      _this.mapChartOption.title.textStyle.fontSize = 15;
      _this.mapChartOption.legend = {
        selectedMode: "single",
        selected: {
          前期: false,
          开工: true,
          建成: false,
          投运: false
        },
        orient: "vertical",
        x: "85%",
        bottom: "5%",
        data: [
          {
            name: "前期",
            icon: "circle",
            textStyle: {
              color: colorList[0]
            }
          },
          {
            name: "开工",
            icon: "circle",
            textStyle: {
              color: colorList[1]
            }
          },
          {
            name: "建成",
            icon: "circle",
            textStyle: {
              color: colorList[2]
            }
          },
          {
            name: "投运",
            icon: "circle",
            textStyle: {
              color: colorList[3]
            }
          }
        ]
      };
      _this.geoCoordMap.forEach(element => {
        _this.cityWszpData.forEach(item => {
          if (item.jc == element.name) {
            qianqiData.push([
              element.coods[0],
              element.coods[1],
              item.qianqi,
              item.jc
            ]);
            kaigongData.push([
              element.coods[0],
              element.coods[1],
              item.kaigong,
              item.jc
            ]);
            jianchengData.push([
              element.coods[0],
              element.coods[1],
              item.jiancheng,
              item.jc
            ]);
            touyunData.push([
              element.coods[0],
              element.coods[1],
              item.touyun,
              item.jc
            ]);
          }
        });
      });
      for (let i = 0; i < 5; i++) {
        _this.mapChartOption.series[i + 1] = {
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          zlevel: 20,
          data: [],
          label: {
            normal: {
              show: true,
              color: "#000",
              fontWeight: 700,
              formatter: function(params) {
                if (params.data[2] == 0) {
                  return "";
                } else {
                  return params.data[2] + "个";
                }
              }
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                if (params.data[2] == 0) {
                  return "rgba(0,0,0,0)";
                } else {
                  return colorList[i];
                }
              }
            }
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              return (
                params.data[3] +
                "：</br>" +
                params.seriesName +
                "：" +
                params.data[2] +
                "个</br>日期：" +
                _this.date
              );
            }
          }
        };
        if (i == 0) {
          _this.mapChartOption.series[i + 1].data = qianqiData;
          _this.mapChartOption.series[i + 1].name = "前期";
        } else if (i == 1) {
          _this.mapChartOption.series[i + 1].data = kaigongData;
          _this.mapChartOption.series[i + 1].name = "开工";
        } else if (i == 2) {
          _this.mapChartOption.series[i + 1].data = jianchengData;
          _this.mapChartOption.series[i + 1].name = "建成";
        } else if (i == 3) {
          _this.mapChartOption.series[i + 1].data = touyunData;
          _this.mapChartOption.series[i + 1].name = "投运";
        }
      }
      _this.mapCreat();
      this.num = 5;
    },
    changeMap8(flag) {
      this.gktitle = false;
      this.jhtitle = false;
      this.rhtitle = false;
      this.wszptitle = false;
      this.zptitle = false;
      this.rhpwktitle = true;
      let colorList = ["#fe6e3a", "#ffd425", "#008ce3", "#0feaf0"];
      let _this = this;
      if (flag) {
        flag = false;
        _this.clelerTimer();
      }
      let qianqiData = [];
      let kaigongData = [];
      let jianchengData = [];
      let touyunData = [];
      for (let i = 0; i < 11; i++) {
        _this.mapChartOption.series[i + 1] = null;
      }
      _this.mapChart.dispose();
      _this.mapChart = null;
      _this.fadeOutLeft = true;
      _this.mapChartOption.title.text = null;
      _this.mapChartOption.geo.center = null;
      _this.mapChartOption.series[0].center = [120.42864, 29.208274];
      _this.mapChartOption.title.text = "入海排污口整治进度";
      _this.mapChartOption.legend = {
        selectedMode: "single",
        selected: {
          前期: true,
          开工: false,
          建成: false,
          投运: false
        },
        orient: "vertical",
        x: "85%",
        bottom: "5%",
        data: [
          {
            name: "前期",
            icon: "circle",
            textStyle: {
              color: colorList[0]
            }
          },
          {
            name: "开工",
            icon: "circle",
            textStyle: {
              color: colorList[1]
            }
          },
          {
            name: "建成",
            icon: "circle",
            textStyle: {
              color: colorList[2]
            }
          },
          {
            name: "投运",
            icon: "circle",
            textStyle: {
              color: colorList[3]
            }
          }
        ]
      };
      _this.geoCoordMap.forEach(element => {
        _this.cityPwzzData.forEach(item => {
          if (item.xzqh == element.name) {
            qianqiData.push([
              element.coods[0],
              element.coods[1],
              item.qianqi,
              item.xzqh
            ]);
            kaigongData.push([
              element.coods[0],
              element.coods[1],
              item.kaigong,
              item.xzqh
            ]);
            jianchengData.push([
              element.coods[0],
              element.coods[1],
              item.jiancheng,
              item.xzqh
            ]);
            touyunData.push([
              element.coods[0],
              element.coods[1],
              item.touyun,
              item.xzqh
            ]);
          }
        });
      });
      for (let i = 0; i < 5; i++) {
        _this.mapChartOption.series[i + 1] = {
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: 60,
          symbolOffset: [0, 10],
          zlevel: 20,
          data: [],
          label: {
            normal: {
              show: true,
              color: "#000",
              fontWeight: 700,
              formatter: function(params) {
                if (params.data[2] == 0.0) {
                  return "";
                } else {
                  return params.data[2] + "个";
                }
              }
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                if (params.data[2] == 0) {
                  return "rgba(0,0,0,0)";
                } else {
                  return colorList[i];
                }
              }
            }
          },
          tooltip: {
            backgroundColor: "rgba(51, 81, 166,0.9)",
            borderColor: "rbga(255,255,255,0.8)",
            borderWidth: 1,
            padding: 15,
            formatter: function(params) {
              return (
                params.data[3] +
                "：</br>" +
                params.seriesName +
                "：" +
                params.data[2] +
                "个</br>日期：" +
                _this.date
              );
            }
          }
        };
        if (i == 0) {
          _this.mapChartOption.series[i + 1].data = qianqiData;
          _this.mapChartOption.series[i + 1].name = "前期";
        } else if (i == 1) {
          _this.mapChartOption.series[i + 1].data = kaigongData;
          _this.mapChartOption.series[i + 1].name = "开工";
        } else if (i == 2) {
          _this.mapChartOption.series[i + 1].data = jianchengData;
          _this.mapChartOption.series[i + 1].name = "建成";
        } else if (i == 3) {
          _this.mapChartOption.series[i + 1].data = touyunData;
          _this.mapChartOption.series[i + 1].name = "投运";
        }
      }
      _this.mapCreat();
      this.num = 0;
    },
    mapCreat() {
      let _this = this;
      let timer = setTimeout(function() {
        _this.fadeOutLeft = false;
        _this.mapChart = echarts.init(document.getElementById("bsxdMap"));
        _this.mapChart.setOption(_this.mapChartOption);
        _this.mapChart.on("click", function(params) {
          window.location.href = _this.bsxdUrl;
        });
        clearTimeout(timer);
      }, 50);
    },
    mapLBFun() {
      if (this.mapLB == "./static/img/startEnd.gif") {
        this.mapLB = "./static/img/endStart.gif";
        let _this = this;
        this.$store.commit("bsTimerFun", true);
        this.timer = setInterval(function() {
          let num = _this.num;
          if (num > 6) {
            num = 0;
          }
          switch (num) {
            case 0:
              _this.changeMap2(false);
              break;
            case 1:
              _this.changeMap4(false);
              break;
            case 2:
              _this.changeMap5(false);
              break;
            case 3:
              _this.changeMap6(false);
              break;
            case 4:
              _this.changeMap7(false);
              break;
            case 5:
              _this.changeMap8(false);
              break;
            default:
              break;
          }
        }, 7000);
      } else {
        this.clelerTimer();
      }
    },
    clelerTimer() {
      clearInterval(this.timer);
      this.mapLB = "./static/img/startEnd.gif";
      this.$store.commit("bsTimerFun", false);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
