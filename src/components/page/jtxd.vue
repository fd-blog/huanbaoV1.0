<template>
    <div class="jtxd wrapper">
        <div class="wrapper_left left animated bounceInLeft">
            <a class="title" :href="jtUrl" target="_self">土壤环境风险管控目标</a>
            <div class="main">
                <div class="part1">
                    <div class="subTitleBar">
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle" href="javascript:;" target="_self">2018全省监控目标</a>
                    </div>
                    <div class="section">
                        <div class="section_s section_l">
                            <img src="../../assets/img/icon22.png" alt="">
                            <div class="txt">
                                <span>污染地块安全利用率</span>
                                <strong class="color1">{{lylqsjk}}</strong>
                                <span>%</span>
                            </div>
                        </div>
                        <div class="section_s section_r">
                            <img src="../../assets/img/icon18.png" alt="">
                            <div class="txt">
                                <span>受污染耕地安全利用率</span>
                                <strong class="color2">{{lylgdqsjk}}</strong>
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="part2">
                    <div class="subTitleBar" @click='maprankFun(true, "plot", "dq", "WRDKAQLYL")'>
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: plottitle}" href="javascript:;" target="_self">2018各设区市管控目标(地块)</a>
                    </div>
                    <div id="jtxdChart1"></div>
                </div>
                <div class="part3">
                    <div class="subTitleBar" @click='maprankFun(true, "arableLand", "dq", "SWRGDAQLYL")'>
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: arableLandtitle}" href="javascript:;" target="_self">2018各设区市管控目标(耕地)</a>
                    </div>
                    <div id="jtxdChart2"></div>
                </div>

            </div>
        </div>
        <div class="wrapper_middle middle animated bounceInDown">
            <div class="wrapper_middle_top" >
            <div class="lb" :style="{'background-image':'url('+mapLB+')'}" @click='mapLBFun'></div>
              <div id="jtxdMap" class="map" :class="{animated:true, fadeInLeft: !fadeOutLeft}"></div>
            </div>
            <div class="wrapper_middle_bottom middle_bottom">
                <a class="title" href="javascript:;" target="_self"></a>
                <div class="main">
                    <div class="inner">
                        <img src="../../assets/img/wait.png" alt="">
                        <span>静待开发</span>
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
                    <div class="section">
                        <div class="section_s section_l">
                            <img src="../../assets/img/icon14.png" alt="">
                            <div class="txt">
                                <span>污染地块治理</span>
                                <strong class="color1">{{jbgk}}</strong>
                                <span>个</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="part2">
                    <div class="subTitleBar" @click='maprankFun(true, "engineering", "dq", "zs")'>
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: engineeringtitle}" href="javascript:;" target="_self">2018年各设区市重点工程分布情况（个）</a>
                    </div>
                    <div id="jtxdChart3"></div>
                </div>
                <div class="part3">
                    <div class="subTitleBar"  @click='maprankFun(true, "progress", "dq", "kaigong", "qidong", "wancheng")'>
                        <img src="../../assets/img/dian.png">
                        <a class="subTitle subTitle1" :class="{subTitleText: progresstitle}" href="javascript:;" target="_self">2018全省重点工程进度分布情况（个）</a>
                    </div>
                    <div id="jtxdChart4"></div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "./../../assets/scss/jtxd.scss";
</style>
<script>
export default {
  data() {
    return {
      colors: ["#f14041", "#f96d3e", "#fad027", "#0c70e4"],
      colors1: ["#0c70e4", "#fad027", "#f96d3e", "#f14041"],
      jtUrl: "http://192.168.40.76/ZJGIS/index.html?menu=tuProject&id=menus_Tu",
      mapLB: "./static/img/startEnd.gif",
      year: "",
      month: "",
      date: "",
      fadeOutLeft: false,
      plottitle: false,
      arableLandtitle: false,
      engineeringtitle: false,
      progresstitle: false,
      risktitle: false,
      xftitle: false,
      penaltytitle: false,
      plotUt: [],
      arableLandUt: [],
      engineeringDS: [],
      progress: [],
      jtxdChart1_option: {
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
          text: "污染地块安全利用率",
          align: "right",
          style: {
            color: "#fff",
            fontSize: 12,
            fonWeight: 700
          }
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
            // groupPadding: 0.3,
            dataLabels: {
              overflow: "none",
              enabled: true,
              allowOverlap: true,
              formatter: function() {
                return this.y + "%";
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: [
            "杭州市",
            "宁波市",
            "温州市",
            "湖州市",
            "嘉兴市",
            "绍兴市",
            "金华市",
            "衢州市",
            "舟山市",
            "台州市",
            "丽水市"
          ],
          gridLineColor: "transparent",
          labels: {
            y: 15,
            autoRotation: [-60], //旋转角度
            style: {
              color: "#fff",
              style: {
                fontSize: 12
              }
            }
          }
        },
        yAxis: {
          visible: false,
          max: 105
        },
        series: [
          {
            data: [92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92],
            color: "#02bd78",
            dataLabels: {
              enabled: true,
              style: {
                color: "#02bd78",
                textOutline: "none"
              }
            }
          }
        ]
      },
      jtxdChart2_option: {
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
          text: "受污染耕地安全利用率",
          align: "right",
          style: {
            color: "#fff",
            fontSize: 13,
            fonWeight: 700
          }
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
              overflow: "none",
              enabled: true,
              allowOverlap: true,
              formatter: function() {
                return this.y + "%";
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: [
            "杭州市",
            "宁波市",
            "温州市",
            "湖州市",
            "嘉兴市",
            "绍兴市",
            "金华市",
            "衢州市",
            "舟山市",
            "台州市",
            "丽水市"
          ],
          gridLineColor: "transparent",
          labels: {
            y: 15,
            autoRotation: [-60], //旋转角度
            style: {
              color: "#fff",
              style: {
                fontSize: 12
              }
            }
          }
        },
        yAxis: {
          visible: false,
          max: 105
        },
        series: [
          {
            data: [92, 92, 92, 92, 92, 92, 92, 92, 95, 92, 92],
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
      jtxdChart3_option: {
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
            data: [
              "杭州市",
              "宁波市",
              "温州市",
              "湖州市",
              "嘉兴市",
              "绍兴市",
              "金华市",
              "衢州市",
              "舟山市",
              "台州市",
              "丽水市"
            ],
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
                    color: "rgba(4,84,157,0.3)"
                  },
                  {
                    offset: 0.8,
                    color: "#198af2"
                  }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{c}",
                color: "#198af2"
              }
            },
            data: [6, 8, 3, 5, 4, 5, 6, 3, 3, 9, 4]
          }
        ]
      },
      jtxdChart4_option: {
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
            groupPadding: 0.4,
            dataLabels: {
              overflow: "none",
              enabled: true,
              color: "#fff",
              allowOverlap: true,
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
          categories: ["前期", "开工", "建成", "投运"],
          gridLineColor: "transparent",
          labels: {
            y: 30,
            style: {
              color: "#fff",
              style: {
                fontSize: 12
              }
            }
          }
        },
        yAxis: {
          visible: false,
          max: 35
        },
        series: [
          {
            data: [27, 15, 31, 12],
            dataLabels: {
              enabled: true,
              style: {
                textOutline: "none"
              }
            }
          }
        ]
      },
      mapChartOption: {
        backgroundColor: "transparent",
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "rgba(51, 81, 166,0.9)",
          borderColor: "rbga(255,255,255,0.8)",
          borderWidth: 1,
          padding: 15
        },
        title: {
          left: 15,
          top: 15,
          textStyle: {
            color: "white"
          }
        },
        geo: {
          show: true,
          center: [120.42864, 29.208274],
          map: "zhejiang",
          aspectScale: 1,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            },
            emphasis: {
              show: false
            }
          },
          silent: true,
          zoom: 1.2,
          roam: false, //禁止拖拽
          itemStyle: {
            normal: {
              areaColor: "transparent",
              borderColor: "rgba(63, 218, 255, 0.3)",
              borderWidth: 2,
              shadowColor: "rgba(63, 218, 255, 0.3)",
              shadowBlur: 30
            }
          }
        },
        visualMap: {
          show: false,
          seriesIndex: 0,
          min: 0,
          max: 100,
          left: "right",
          top: "bottom",
          calculable: true,
          textStyle: {
            color: "#fff"
          },
          inRange: {
            symbolsize: 30
          }
        },
        series: [
          {
            //地图下面的地图阴影效果
            name: "map",
            type: "map",
            mapType: "zhejiang",
            aspectScale: 0.9,
            zoom: 1.2,
            roam: false,
            silence: true,
            zlevel: 1,
            tooltip: {
              backgroundColor: "rgba(51, 81, 166,0.9)",
              borderColor: "rbga(255,255,255,0.8)",
              borderWidth: 1,
              padding: 15
            },
            // silent: true,
            itemStyle: {
              normal: {
                areaColor: "rgba(63, 155, 255, 0.9)",
                borderColor: "rgba(63, 218, 255, 0.8)",
                borderWidth: 2
              },
              emphasis: {
                areaColor: "rgba(63, 155, 255, 0.9)",
                borderColor: "rgba(63, 218, 255, 0.8)",
                borderWidth: 2
              }
            },
            label: {
              normal: {
                show: true
              }
            }
          }
        ]
      },
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
      lylqsjk: "",
      lylgdqsjk: "",
      jbgk: "",
      jtxdChart3: ""
    };
  },
  mounted() {
    let _this = this;
    let date1 = new Date();
    this.year = date1.getFullYear();
    this.month = date1.getMonth();
    this.date = this.year + "年";
    let uploadedDataURL = "./static/data/zhejiang.json";
    this.mapChart = echarts.init(document.getElementById("jtxdMap"));
    $.getJSON(uploadedDataURL, function(geoJson) {
      echarts.registerMap("zhejiang", geoJson);
      _this.getAlldata();
    });
  },
  methods: {
    getAlldata() {
      let url =
        "http://192.168.40.76:10050/hlenvironment/page/hlenvironment/air/target/";
      let _this = this;
      this.$http
        .get(url + "queryLandQSGKMB")
        .then(function(response) {
          //左一
          let data = response.data[0];
          _this.lylqsjk = data.WRDKAQLYL;
          _this.lylgdqsjk = data.SWRGDAQLYL;
        })
        .catch(function(error) {
          console.log("2018全省监控目标");
        });
      this.$http
        .get(url + "queryLandSHIWRMB")
        .then(function(response) {
          //左2
          let data = response.data;
          _this.plotUt = data;
          _this.getwrdkaqlyl(data);
        })
        .catch(function(error) {
          console.log("2018污染地块安全利用率");
        });
      this.$http
        .get(url + "queryLandSHISWRMB")
        .then(function(response) {
          //左3
          let data = response.data;
          _this.arableLandUt = data;
          _this.getswrgdaqlyl(data);
        })
        .catch(function(error) {
          console.log("2018受污染耕地安全利用率");
        });
      this.$http
        .get(url + "queryLandZDGCQK")
        .then(function(response) {
          //右1
          let data = response.data[0];
          _this.jbgk = data.zs;
        })
        .catch(function(error) {
          console.log("2018重点工程基本概况");
        });
      this.$http
        .get(url + "queryLandZDGCFB")
        .then(function(response) {
          //右2
          let data = response.data;
          _this.engineeringDS = data;
          _this.getzdgcfbchart(data);
        })
        .catch(function(error) {
          console.log("2018重点工程分布");
        });
      this.$http
        .get(url + "queryLandZDGCJD")
        .then(function(response) {
          //右3
          let data = response.data;
          _this.getswrgdaqlyl2(data);
        })
        .catch(function(error) {
          console.log("2018全省重点工程分布");
        });
      this.$http
        .get(url + "queryLandSHIZDGCJD")
        .then(function(response) {
          //右3 详细
          let data = response.data;
          _this.progress = data;
          // _this.getswrgdaqlyl2(data);
          console.log(data, 691);
        })
        .catch(function(error) {
          console.log("2018全省重点工程分布");
        });
    },
    getwrdkaqlyl(data) {
      let _this = this;
      let cityList = [];
      let valueList = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        cityList.push(element.dq);
        valueList.push(element.WRDKAQLYL);
      }
      _this.jtxdChart1_option.xAxis.categories = cityList;
      _this.jtxdChart1_option.series[0].data = valueList;
      let jtxdChart1 = Highcharts.chart("jtxdChart1", _this.jtxdChart1_option);
      _this.maprankFun(false, "plot", "dq", "WRDKAQLYL");
      let jtTimer = _this.$store.state.jtTimer;
      if (jtTimer) {
        _this.mapLB == "./static/img/startEnd.gif";
        _this.mapLBFun();
      } else {
        _this.mapLB == "./static/img/endStart.gif";
      }
    },
    getswrgdaqlyl(data) {
      var _this = this;
      let cityList = [];
      let valueList = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        cityList.push(element.dq);
        valueList.push(element.SWRGDAQLYL);
      }
      _this.jtxdChart1_option.xAxis.categories = cityList;
      _this.jtxdChart1_option.series[0].data = valueList;
      let jtxdChart2 = Highcharts.chart("jtxdChart2", _this.jtxdChart2_option);
    },
    getzdgcfbchart(data) {
      var _this = this;
      let cityList = [];
      let valueList = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        cityList.push(element.dq);
        valueList.push(element.zs);
      }
      _this.jtxdChart3_option.yAxis[0].data = cityList;
      _this.jtxdChart3_option.series[0].data = valueList;
      let jtxdChart3 = echarts.init(document.getElementById("jtxdChart3"));
      jtxdChart3.setOption(_this.jtxdChart3_option);
    },
    getswrgdaqlyl2(data) {
      var _this = this;
      let progressList = [];
      let valueList = [];
      let colors = [
        "rgba(234, 238, 1,0.8)",
        "rgba(16, 0, 236, 0.8)",
        "rgba(8, 236, 1,0.8)"
      ];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        progressList.push(element.jdyq);
        valueList.push({
          y: element.zs,
          color: colors[i]
        });
      }
      _this.jtxdChart4_option.xAxis.categories = progressList;
      _this.jtxdChart4_option.series[0].data = valueList;
      let jtxdChart4 = Highcharts.chart("jtxdChart4", _this.jtxdChart4_option);
    },
    mapFun() {
      let _this = this;
      let timer = setTimeout(function() {
        _this.fadeOutLeft = false;
        _this.mapChart = echarts.init(document.getElementById("jtxdMap"));
        _this.mapChart.setOption(_this.mapChartOption);
        _this.mapChart.on("click", function(params) {
          window.location.href = _this.jtUrl;
        });
        clearTimeout(timer);
      }, 50);
    },
    mapResiesFun(data, data2) {
      this.fadeOutLeft = true;
      this.mapChart.dispose();
      this.mapChart = null;
      this.mapChartOption.visualMap.show = true;
      this.mapChartOption.series[0].data = data;
      this.mapChartOption.series[1] = {
        name: "light",
        type: "scatter",
        coordinateSystem: "geo",
        data: data2,
        symbol: "pin",
        symbolSize: 60,
        itemStyle: {
          color: "#0c70e4"
        },
        label: {
          normal: {
            formatter: function(params) {
              return params.value[2];
            },
            show: true,
            textStyle: {
              color: "#fff",
              fontWeight: "bolder"
            },
            position: "inside"
          },
          emphasis: {
            show: true
          }
        },
        zlevel: 10
      };
      this.mapChartOption.series[2] = null;
      this.mapChartOption.series[3] = null;
      this.mapChartOption.series[4] = null;
      this.mapFun();
    },
    mapResiesFun1(data, data2, data3, data4, data5) {
      this.fadeOutLeft = true;
      this.mapChart.dispose();
      this.mapChartOption.visualMap.show = false;
      this.mapChartOption.color = [
        "rgba(63, 155, 255, 0.9)",
        "rgba(234, 238, 1,0.8)",
        "rgba(16, 0, 236, 0.8)",
        "rgba(8, 236, 1,0.8)"
      ];
      let legendData = ["开工", "启动", "完成"];
      this.mapChartOption.legend = {
        selectedMode: "single",
        data: legendData,
        orient: "vertical",
        left: "90%",
        top: "70%",
        textStyle: {
          color: "#fff"
        }
      };
      this.mapChartOption.series[0].data = data;
      this.mapChartOption.series[1] = {
        name: legendData[0],
        type: "scatter",
        coordinateSystem: "geo",
        data: data2,
        symbol: "pin",
        symbolSize: 60,
        label: {
          normal: {
            formatter: function(params) {
              return params.value[2];
            },
            show: true,
            textStyle: {
              color: "#fff",
              fontWeight: "bolder"
            },
            position: "inside"
          },
          emphasis: {
            show: true
          }
        },
        zlevel: 10
      };
      this.mapChartOption.series[2] = {
        name: legendData[1],
        type: "scatter",
        coordinateSystem: "geo",
        data: data3,
        symbol: "pin",
        symbolSize: 60,
        label: {
          normal: {
            formatter: function(params) {
              return params.value[2];
            },
            show: true,
            textStyle: {
              color: "#fff",
              fontWeight: "bolder"
            },
            position: "inside"
          },
          emphasis: {
            show: true
          }
        },
        zlevel: 10
      };
      this.mapChartOption.series[3] = {
        name: legendData[2],
        type: "scatter",
        coordinateSystem: "geo",
        data: data4,
        symbol: "pin",
        symbolSize: 60,
        label: {
          normal: {
            formatter: function(params) {
              return params.value[2];
            },
            show: true,
            textStyle: {
              color: "#fff",
              fontWeight: "bolder"
            },
            position: "inside"
          },
          emphasis: {
            show: true
          }
        },
        zlevel: 10
      };
      this.mapFun();
    },
    maprankFun(clickType, type, na, val, val2, val3, val4) {
      if (clickType) {
        this.clelerTimer();
      }
      this.plottitle = false;
      this.arableLandtitle = false;
      this.engineeringtitle = false;
      this.progresstitle = false;
      let _this = this;
      let data = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      let list = [];
      let max = 0;
      let date = this.date;
      let colorList = this.colors;
      let colorList1 = this.colors1;
      switch (type) {
        case "plot":
          this.plottitle = true;
          list = this.plotUt;
          (this.mapChartOption.title.text = "污染地块安全利用率"),
            (this.mapChartOption.tooltip.formatter = function(params) {
              if (params.value[2]) {
                return (
                  params.name +
                  "</br>利用率为：" +
                  params.value[2] +
                  "%" +
                  "</br>日期：" +
                  date
                );
              }
            });
          this.num = 1;
          this.mapChartOption.visualMap.inRange.color = colorList;
          break;
        case "arableLand":
          this.arableLandtitle = true;
          list = this.arableLandUt;
          (this.mapChartOption.title.text = "受污染耕地安全利用率"),
            (this.mapChartOption.tooltip.formatter = function(params) {
              if (params.value[2]) {
                return (
                  params.name +
                  "</br>达标率为：" +
                  params.value[2] +
                  "%" +
                  "</br>日期：" +
                  date
                );
              }
            });
          this.num = 2;
          this.mapChartOption.visualMap.inRange.color = colorList;
          break;
        case "engineering":
          this.engineeringtitle = true;
          list = this.engineeringDS;
          (this.mapChartOption.title.text = "重点工程分布情况"),
            (this.mapChartOption.tooltip.formatter = function(params) {
              if (params.value[2]) {
                return (
                  params.name +
                  ":</br>数量：" +
                  params.value[2] +
                  "个" +
                  "</br>日期：" +
                  date
                );
              }
            });
          this.num = 3;
          this.mapChartOption.visualMap.inRange.color = colorList1;
          break;
        case "progress":
          this.progresstitle = true;
          list = this.progress;
          (this.mapChartOption.title.text = "重点工程进度分布情况"),
            (this.mapChartOption.tooltip.formatter = function(params) {
              if (params.value[2]) {
                return (
                  params.name +
                  ":</br>数量：" +
                  params.value[2] +
                  "个" +
                  "</br>日期：" +
                  date
                );
              }
            });
          this.num = 0;
          break;
        default:
          break;
      }
      if (type != "progress") {
        list.forEach(item => {
          let name = item[na];
          let value = Number(item[val]);
          data.push({
            name: name,
            value: value
          });
          _this.geoCoordMap.forEach(aitem => {
            if (name == aitem.name) {
              let coods = [aitem.coods[0], aitem.coods[1]];
              coods[2] = value;
              data2.push({
                name: name,
                value: coods
              });
            }
          });
          if (type != "plot" && type != "arableLand") {
            if (max < value) {
              max = value;
            } else {
              max = max;
            }
          } else {
            max = 100;
          }
        });
        this.mapChartOption.visualMap.max = max;
        this.mapResiesFun(data, data2);
      } else {
        list.forEach(item => {
          let name = item[na];
          let value = Number(item[val]);
          let value2 = Number(item[val2]);
          let value3 = Number(item[val3]);
          _this.geoCoordMap.forEach(aitem => {
            if (name == aitem.name) {
              let coods = [aitem.coods[0], aitem.coods[1]];
              coods[2] = value;
              data2.push({
                name: name,
                value: coods
              });
              let coods1 = [aitem.coods[0], aitem.coods[1]];
              coods1[2] = value2;
              data3.push({
                name: name,
                value: coods1
              });
              let coods2 = [aitem.coods[0], aitem.coods[1]];
              coods2[2] = value3;
              data4.push({
                name: name,
                value: coods2
              });
            }
          });
        });
        this.mapResiesFun1(data, data2, data3, data4, data5);
      }
    },
    mapLBFun() {
      if (this.mapLB == "./static/img/startEnd.gif") {
        this.mapLB = "./static/img/endStart.gif";
        let _this = this;
        this.$store.commit("jtTimerFun", true);
        this.timer = setInterval(function() {
          let num = _this.num;
          if (num > 3) {
            num = 0;
          }
          switch (num) {
            case 0:
              _this.maprankFun(false, "plot", "dq", "WRDKAQLYL");
              break;
            case 1:
              _this.maprankFun(false, "arableLand", "dq", "SWRGDAQLYL");
              break;
            case 2:
              _this.maprankFun(false, "engineering", "dq", "zs");
              break;
            case 3:
              _this.maprankFun(
                false,
                "progress",
                "dq",
                "kaigong",
                "qidong",
                "wancheng"
              );
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
      this.$store.commit("jtTimerFun", false);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
