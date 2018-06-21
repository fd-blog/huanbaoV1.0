<template>
    <div class="wryjg wrapper">
        <div class="left animated bounceInLeft">
            <div class="left_top">
                <a class="title" :href="wryUrl" target="_self">大气污染源监测</a>
                <div class="main">
                    <div class="part1">
                        <div class="subTitleBar">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle" href="javascript:;" target="_self">浙江省涉气重点排污单位情况</a>
                        </div>
                        <div class="box">
                            <div class="box_s">
                                <!-- <img src="../../assets/img/icon10.png" alt=""> -->
                                <i class="icon iconfont icon-wuranyuan"></i>
                                <div class="txt">
                                    <div>在线监测企业</div>
                                    <div>
                                        <span>总数</span>
                                        <strong class="color1">{{mgas.zs}}</strong>
                                        <span>家</span>
                                    </div>
                                </div>
                            </div>
                            <div class="box_s">
                                <!-- <img src="../../assets/img/icon4.png" alt=""> -->
                                <i class="icon iconfont icon-jiandukaohe"></i>
                                <div class="txt">
                                    <div>监督性监测企业</div>
                                    <div>
                                        <span>总数</span>
                                        <strong class="color1">{{sgas.zs}}</strong>
                                        <span>家</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box_s">
                                <img src="../../assets/img/icon3.png" alt="">
                                <div class="txt">
                                    <div>在线监测企业</div>
                                    <div>
                                        <span>达标率</span>
                                        <strong class="color2">{{mgas.zxjcdbl}}</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="box_s">
                                <img src="../../assets/img/icon3.png" alt="">
                                <div class="txt">
                                    <div>监督性监测企业</div>
                                    <div>
                                        <span>达标率</span>
                                        <strong class="color2">{{sgas.zxjcdbl}}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="part2">
                        <div class="subTitleBar" @click='maprankFun(true, "air", "dq", "dbl")'>
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle subTitle1" :class="{subTitleText: airtitle}">实时涉气重点排污单位达标率排名</a>
                        </div>
                        <div class="box">
                            <div class="table">
                                <div class="line"></div>
                                <div class="tableTitle tds">
                                    <span>设区市</span>
                                    <span>企业总数</span>
                                    <span>企业达标率</span>
                                    <span>排名</span>
                                </div>
                                <div id="scrollBox" style="height:102px;overflow:hidden;">
                                    <div id="scrollBox_demo1">
                                        <div class="tableContent" v-for="item in gastableData" :key="item.szshi">

                                            <div class="tds">
                                                <span>{{item.dq}}</span>
                                                <span>{{item.gszs}}</span>
                                                <span>{{item.dbl}}%</span>
                                                <span>
                                                    <i>{{item.paiming}}</i>
                                                </span>
                                            </div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                    <div id="scrollBox_demo2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left_bottom">
                <a class="title" href="javascript:;" target="_self">水污染源监测</a>
                <div class="main">
                    <div class="part1">
                        <div class="subTitleBar">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle" href="javascript:;" target="_self">浙江省涉水重点排污单位情况</a>
                        </div>
                        <div class="box">
                            <div class="box_s">
                                <!-- <img src="../../assets/img/icon10.png" alt=""> -->
                                <i class="icon iconfont icon-wuranyuan1"></i>
                                <div class="txt">
                                    <div>在线监测企业</div>
                                    <div>
                                        <span>总数</span>
                                        <strong class="color1">{{mwater.zs}}</strong>
                                        <span>家</span>
                                    </div>

                                </div>
                            </div>
                            <div class="box_s">
                                <!-- <img src="../../assets/img/icon4.png" alt=""> -->
                                <i class="icon iconfont icon-jiandukaohe"></i>
                                <div class="txt">
                                    <div>监督性监测企业</div>
                                    <div>
                                        <span>总数</span>
                                        <strong class="color1">{{swater.zs}}</strong>
                                        <span>家</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box_s">
                                <img src="../../assets/img/icon3.png" alt="">
                                <div class="txt">
                                    <div>在线监测企业</div>
                                    <div>
                                        <span>达标率</span>
                                        <strong class="color2">{{mwater.zxjcdbl}}</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="box_s">
                                <img src="../../assets/img/icon3.png" alt="">
                                <div class="txt">
                                    <div>监督性监测企业</div>
                                    <div>
                                        <span>达标率</span>
                                        <strong class="color2">{{swater.zxjcdbl}}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="part2">
                        <div class="subTitleBar" @click='maprankFun(true, "water", "dq", "dbl")'>
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle subTitle1" :class="{subTitleText: watertitle}">实时涉水重点排污单位达标率排名</a>
                        </div>
                        <div class="box">
                            <div class="table">
                                <div class="line"></div>
                                <div class="tableTitle tds">
                                    <span>设区市</span>
                                    <span>企业总数</span>
                                    <span>企业达标率</span>
                                    <span>排名</span>
                                </div>
                                <div id="scrollBox2" style="height:102px;overflow:hidden;">
                                    <div id="scrollBox2_demo1">
                                        <div class="tableContent" v-for="item in watertableData" :key="item.szshi">
                                            <div class="tds">
                                                <span>{{item.dq}}</span>
                                                <span>{{item.gszs}}</span>
                                                <span>{{item.dbl}}%</span>
                                                <span>
                                                     <i>{{item.paiming}}</i>
                                                </span>
                                            </div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                    <div id="scrollBox2_demo2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper_middle middle animated bounceInDown">
            <div class="wrapper_middle_top middle_top">
              <div class="lb" :style="{'background-image':'url('+mapLB+')'}" @click='mapLBFun'></div>
              <div id="mapWR" class="map" :class="{animated:true, fadeInLeft: !fadeOutLeft}"></div>
            </div>
            <div class="wrapper_middle_bottom middle_bottom">
                <a class="title" href="javascript:;" target="_self">应急</a>
                <div class="main">
                    <div class="part1">
                        <div class="part1_s part1_top">
                            <img src="../../assets/img/icon5.png" alt="">
                            
                            <div class="txt">
                                <span>{{year}}年 应急事件总数</span>
                                <strong class="color1">{{emergency}}</strong>
                                <span>个</span>
                            </div>
                        </div>
                        <div class="part1_s part1_bottom">
                            <!-- <img src="../../assets/img/icon1.png" alt=""> -->
                            <i class="fx icon iconfont icon-fengxianyuan"></i>   
                            <div class="txt">
                                <span>风险源总数</span>
                                <div>
                                  <strong class="color2">{{risk}}</strong>
                                  <span>个</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="part2">
                        <div class="subTitleBar" @click="maprankFun(true, 'emergency', 'dq', 'jx', 'yb', 'jd', 'zd')">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle subTitle1" :class="{subTitleText: emergencytitle}" href="javascript:;" target="_self">应急事件等级</a>
                        </div>
                        <div id="chartWR1"></div>
                    </div>
                    <div class="part3">
                        <div class="subTitleBar" @click="maprankFun(true, 'risk', 'xzqh', 'jx', 'yb', 'jd', 'zd', 'wpj')">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle subTitle1" :class="{subTitleText: risktitle}" href="javascript:;" target="_self">风险等级分布</a>
                        </div>
                        <div id="chartWR2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right animated bounceInRight">
            <div class="right_top">
                <a class="title" href="javascript:;" target="_self">信访投诉</a>
                <div class="main">
                    <div class="part1">
                        <div class="subTitleBar" @click='maprankFun(true, "xf", "jc", "hjxfslzl")'>
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle subTitle1" :class="{subTitleText: xftitle}" href="javascript:;" target="_self">{{year}}年{{xfminyf}}-{{xfmaxyf}}月信访总数</a>
                        </div>
                        <div class="box">
                            <img src="../../assets/img/bar.png">
                            <span class="num">{{CompReport}}</span>
                            <span class="danwei">件</span>
                        </div>
                    </div>
                    <div class="part2">
                        <div class="subTitleBar">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle" href="javascript:;" target="_self">信访种类</a>
                        </div>
                        <div id="chartWR3"></div>
                    </div>
                </div>
            </div>
            <div class="right_bottom">
                <a class="title" href="javascript:;" target="_self">行政处罚</a>
                <div class="main">
                    <div class="part1">
                        <div class="subTitleBar">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle subTitle1" :class="{subTitleText: penaltytitle}" href="javascript:;" target="_self">{{year}}年{{minyf}}-{{maxyf}}月行政处罚情况</a>
                        </div>
                        <div class="part1_s part1_l" @click="maprankFun(true, 'penalty', 'jc', 'shuliang')">
                            <i class="sl icon iconfont icon-huanbaochufa"></i>                            
                            <div class="txt">
                                <span>总案件数</span>
                                <p>
                                  <strong class="color1">{{punishment.zongshu}}</strong>
                                  <span>件</span>
                                </p>
                            </div>
                        </div>
                        <div class="part1_s part1_r" @click="maprankFun(true, 'penalty', 'jc', 'jine')">
                            <i class="jine icon iconfont icon-chufajine"></i>                            
                            <div class="txt">
                                <span>总金额</span>
                                <p>
                                  <strong class="color2">{{punishment.jine}}</strong>
                                  <span>万</span>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="part2">
                        <div class="subTitleBar">
                            <img src="../../assets/img/dian.png">
                            <a class="subTitle" href="javascript:;" target="_self">{{year}}年1-{{month}}月各设区市行政处罚分布情况</a>
                        </div>
                        <div class="btns">
                            <span class="btn1" :class="{clickBtn: clickBtn}" @click='HeighchartsFun("jine")'>处罚金额</span>
                            <span class="btn2" :class="{clickBtn: !clickBtn}" @click='HeighchartsFun("shuliang")'>处罚总数</span>
                        </div>
                        <div id="chartWR4"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "./../../assets/scss/wryjg.scss";
@import ".../../../static/fontIcon/iconfont.css";
</style>
<script>
export default {
  data() {
    return {
      colors: ["#f14041", "#f96d3e", "#fad027","#0c70e4"],
      colors1: ["#0c70e4", "#fad027", "#f96d3e", "#f14041"],
      // colors2: ["#0c70e4", "#fad027", "#f96d3e", "#f14041", "#00f2f5", "#8673e6"],
      colors2: ["#f14041", "#f96d3e", "#fad027","#0c70e4", "#00f2f5", "#8673e6"],
      colors3: ["#00f2f5", "#0c70e4", "#fad027", "#f96d3e", "#f14041"],
      // url:"http://192.168.40.76:10050/hlenvironment/page/hlenvironment/air/target/",
      url:"http://192.168.40.76:10050/hlenvironment/page/hlenvironment/air/target/",
      wryUrl: "http://192.168.40.76/ZJGIS/index.html?menu=majorPolluter&id=menus_HJJC",
      year:"",
      month: "",
      quarter: "",
      date: "",
      clickBtn: true,
      fadeOutLeft:false,
      airtitle: false,
      watertitle: false,
      emergencytitle: false,
      risktitle: false,
      xftitle: false,
      penaltytitle: false,
      mapLB: "./static/img/startEnd.gif",
      timer: "",
      num: NaN,
      mgas: {},
      sgas: {},
      mwater: {},
      swater: {},
      gastableData: [],
      watertableData: [],
      emergency: "",
      emergencyLevel: [],
      risk: "",
      riskLevel: [],
      xfminyf: "",
      xfmaxyf: "",
      CompReport: "",
      xfList: [],
      minyf: "",
      maxyf: "",
      punishment: {},
      punishmentList: [],
      heightChartTimer: "",
      mapChartOption: {
        backgroundColor: "transparent",
        tooltip: {
          show: true,
          trigger: 'item',
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
          type:"continuous",
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
            itemStyle:{
              normal: {
                areaColor: "rgba(63, 155, 255, 1)",
                borderColor: "rgba(63, 218, 255, 0.8)",
                borderWidth: 2
              },
              emphasis:{
                areaColor: "rgba(63, 155, 255, 1)",
                borderColor: "rgba(63, 218, 255, 0.8)",
                borderWidth: 2
              }
            },
            label:{
              normal:{
                show:true
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
    };
  },
  mounted() {
    let date1 = new Date() ;
    this.year = date1.getFullYear();
    this.month = date1.getMonth();
    this.date = this.year + "年1-" + this.month + "月";
    // 地图
    let _this = this;
    this.$http.get("./static/data/zhejiang.json").then(function(geoJson) {
      echarts.registerMap("zhejiang", geoJson.data);
      _this.getAll();
    });
    this.mapChart = echarts.init(document.getElementById("mapWR"));
  },
  methods: {
    getAll(){
      let url = this.url;
      let _this = this;
      let colorList = this.colors2;
      // 全省涉气重点排污单位 在线监测企业总数及达标率
      this.$http
        .get(url + "queryGasQSZXJC")
        .then(function(response) {
          let data = response.data[0]
          _this.mgas = {
              zs: data.zs,
              zxjcdbl: data.zxjcdbl.toFixed(1) + "%"
          }
        })
        .catch(function(error) {
          console.log("全省涉气重点排污单位 在线监测企业总数及达标率");
        });
      // 涉气监督性监测企业 总数及达标率 
      this.$http
        .get(url+"queryGasJDXJCQY")
        .then(function(response) {
          let data = response.data[0];
          _this.sgas = {
              zs: data.zs,
              zxjcdbl: data.bl.toFixed(1) + "%"
          }
        })
        .catch(function(error) {
          console.log("涉气监督性监测企业 总数及达标率");
        });
      // 各设区市涉气重点排污单位达标率 排名
      this.$http
        .get(url + "queryGasSHIZXJCPM")
        .then(function(response) {
          let data = response.data;
          data.forEach(element => {
              element.dbl = element.dbl.toFixed(1)
          });
          _this.gastableData = data;
          _this.$nextTick(function(){
              _this.scrollTab();
          })
          _this.maprankFun(false, "air", "dq", "dbl");
          let wrTimer = _this.$store.state.wrTimer
            if(wrTimer){
              _this.mapLB == "./static/img/startEnd.gif";
              _this.mapLBFun();
            }else{
              _this.mapLB == "./static/img/endStart.gif";
            }
        })
        .catch(function(error) {
          console.log("各设区市涉气重点排污单位达标率 排名");
        });
      //涉水在线监测企业 总数及达标率
      this.$http
        .get(url + "queryWaterQSZXJC")
        .then(function(response) {
          let data = response.data[0]
          _this.mwater = {
            zs: data.zs,
            zxjcdbl: data.zxjcdbl.toFixed(1) + "%"
          }
        })
        .catch(function(error) {
          console.log("涉水在线监测企业 总数及达标率");
        });
      //涉水监督性监测企业总数,及达标率
      this.$http
        .get(url + "queryWaterQSJDXJCQYZSDBL")
        .then(function(response) {
          let data = response.data[0]
          console.log(data, 560)
          _this.swater = {
            zs: data.zs,
            zxjcdbl: data.bl.toFixed(1) + "%"
          }
        })
        .catch(function(error) {
          console.log("涉水监督性监测企业总数,及达标率");
        });
      //各设区市涉水重点排污单位达标率排名
      this.$http
        .get(url + "queryWaterQSZXJCPM")
        .then(function(response) {
          let data = response.data;
          data.forEach(element => {
              element.dbl = element.dbl.toFixed(1)
          });
          _this.watertableData = data;
          _this.$nextTick(function(){
              _this.scrollTab2();
          })
        })
        .catch(function(error) {
          console.log("各设区市涉水重点排污单位达标率排名");
        });
      //2018年1季度信访总数
      this.$http
        .get(url + "queryXINFANGZS")
        .then(function(response) {
          let data = response.data[0];
          _this.CompReport = data.zs;
          _this.xfminyf = data.minyf;
          _this.xfmaxyf = data.maxyf;
        })
        .catch(function(error) {
          console.log("2018年1季度信访总数");
        });
      //各设区市信访数量
      this.$http
        .get(url + "querySHIXINFANGZS")
        .then(function(response) {
          _this.xfList = response.data;
        })
        .catch(function(error) {
          console.log("各设区市信访数量");
        });
      //信访种类
      this.$http
        .get(url + "queryXINFANGZL")
        .then(function(response) {
          let option = response.data[0];
          console.log(option, 612)
          let list = [
            {
              name: "噪声类    "+option.sheng,
              value: option.sheng
            },
            {
              name: "固废类    "+option.gufei,
              value: option.gufei
            },
            {
              name: "涉水类    "+option.shui,
              value: option.shui

            },
            {
              name: "涉气类    "+option.qi,
              value: option.qi
            },
            {
              name: "建设项目类    "+option.jianzhu,
              value: option.jianzhu
            },
            {
              name: "其他    "+option.qita,
              value: option.qita
            }
          ]
          // var arr = [{name: "zlw", age: 24}, {name: "wlz", age: 25}];
          let compare = function (obj1, obj2) {
              let val1 = obj1.value;
              let val2 = obj2.value;
              if (val1 > val2) {
                  return -1;
              } else if (val1 < val2) {
                  return 1;
              } else {
                  return 0;
              }            
          } 
          list.sort(compare);
          list.forEach((item, i) => {
            item.textStyle = {
              color: colorList[i]
            }
          })
          let chart3 = echarts.init(document.getElementById("chartWR3"));
          let chart3Option = {
            color: colorList,
            legend: {
              orient: "vertical",
              left: "60%",
              data: list,
              textStyle: {
              color: "#fff",
                fontSize: 12
              },
              itemHeight: 10,
              itemWidth: 15,
              itemGap: 5
            },
            series: [
              {
                center: ["27%", "50%"],
                radius: [0, "65%"],
                clockWise: false,
                hoverAnimation: false,
                type: "pie",
                label: {
                  show: true,
                  formatter: "{c}"
                },
                labelLine:{
                  length: 10,
                  length2: 10
                },
                data: list
              }
            ]
          };
          chart3.setOption(chart3Option);
          })
        .catch(function(error) {
          console.log("信访种类");
        });
      //行政处罚总数 及 金额
      this.$http
        .get(url + "queryXINGZHENGCHUFA")
        .then(function(response) {
          let data = response.data[0]
            _this.punishment = {
                zongshu: data.zongshu,
                jine: data.jine.toFixed(1)
            }
            _this.minyf = data.minyf
            _this.maxyf = data.maxyf
          })
        .catch(function(error) {
          console.log("各设区市信行政处罚总数 及 金额");
        });
      //各设区市行政处罚分布情况
      this.$http
        .get(url + "querySHIXINGZHENGCHUFA")
        .then(function(response) {
          _this.punishmentList =  response.data;
          _this.HeighchartsFun("jine")
        })
        .catch(function(error) {
          console.log("各设区市行政处罚分布情况");
        });
      // 应急事件总数
      this.$http
        .get(url + "queryYJSJZS")
        .then(function(response) {
          let data = response.data[0];
          _this.emergency = data.zs;
        })
        .catch(function(error) {
          console.log("应急事件总数");
        });
      // 应急事件等级
      this.$http
        .get(url + "queryYJSJDJ")
        .then(function(response) {
          let data = [];
          response.data.forEach(item => {
            if(item.sjjbdm == "JX"){
              data[0] = item.zs
            }else if(item.sjjbdm == "YB"){
              data[1] = item.zs
            }else if(item.sjjbdm == "JD"){
              data[2] = item.zs
            }else if(item.sjjbdm == "ZD"){
              data[3] = item.zs
            }
          });
          let chart1Option = {
            grid: {
              bottom: "12%",
              top: "5%",
              right: "17%",
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
                data: ["较小", "一般", "较大", "重大"],
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
                barCategoryGap: "20%",
                itemStyle: {
                  normal: {
                    color: function(params) {
                      return colorList[params.dataIndex];
                    }
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    formatter: "{c}",
                    color: function(params) {
                      return colorList[params.dataIndex];
                    }
                  }
                },
                data: [
                  {
                    value: data[0],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [0, 10, 10, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                            offset: 0.1,
                            color: "rgba(255,255,255,0.1)"
                          },
                          {
                            offset: 0.9,
                            color: colorList[0]
                          }
                        ])
                      }
                    }
                  },
                  {
                    value: data[1],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [0, 10, 10, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                            offset: 0.1,
                            color: "rgba(255,255,255,0.1)"
                          },
                          {
                            offset: 0.9,
                            color: colorList[1]
                          }
                        ])
                      }
                    }
                  },
                  {
                    value: data[2],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [0, 10, 10, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                            offset: 0.1,
                            color: "rgba(255,255,255,0.1)"
                          },
                          {
                            offset: 0.9,
                            color: colorList[2]
                          }
                        ])
                      }
                    }
                  },
                  {
                    value: data[3],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [0, 10, 10, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                            offset: 0.1,
                            color: "rgba(255,255,255,0.1)"
                          },
                          {
                            offset: 0.9,
                            color: colorList[2]
                          }
                        ])
                      }
                    }
                  }
                ]
              }
            ]
          };
          let chart1 = echarts.init(document.getElementById("chartWR1"));
          chart1.setOption(chart1Option);
        })
        .catch(function(error) {
          console.log("应急事件等级");
        });
      // 地图打点应急事件分布
      this.$http
        .get(url + "querySHIXIANYJSJFB")
        .then(function(response) {
          _this.emergencyLevel = response.data
        })
        .catch(function(error) {
          console.log("应急事件等级");
        });
      //风险源数量  
      this.$http
        .get(url + "queryFXYSL")
        .then(function(response) {
          let data = response.data[0].zs;
          _this.risk = data;
        })
        .catch(function(error) {
          console.log("风险源数量");
        });
          
      // 1-5月风险源等级数量及比例
      this.$http
        .get(url + "queryFXYDJ")
        .then(function(response) {
          let data = [];
          let data2 = [];
          response.data.forEach(item => {
            if(item.fxdjmc == "较小"){
              data[1] = {
                name: item.fxdjmc,
                value: item.zs
              }
            }else if(item.fxdjmc == "一般"){
              data[2] = {
                name: item.fxdjmc,
                value: item.zs
              }
            }else if(item.fxdjmc == "较大"){
              data[3] = {
                name: item.fxdjmc,
                value: item.zs
              }
            }else if(item.fxdjmc == "重大"){
              data[4] = {
                name: item.fxdjmc,
                value: item.zs
              }
            }else{
              data[0] = {
                name: item.fxdjmc,
                value: item.zs
              }
            }
          });
          let colorList1 = _this.colors3
          let chart2Option = {
            color: colorList1,
            legend: {
              x: "58%",
              orient: "vertical",
              data: ['未评级', "较小", '一般', '较大', '重大'],
              itemHeight: 10,
              itemWidth: 15,
              itemGap: 5,
              textStyle: {
                color: "#fff"
              }
            },
            calculable: true,
            series: [
              {
                name: "应急事件等级",
                type: "pie",
                radius: ["0", "90%"],
                center: ["25%", "50%"],
                clockWise: false,
                hoverAnimation: false,
                label: {
                  show: true,
                  position: "inside",
                  formatter: "{c}",
                  textStyle:{
                    color: "#000000",
                    fontSize: 10
                  }
                },
                labelLine:{
                  length: 1,
                  length2: 1
                },
                data: data
              }
            ]
          };
          let chart2= echarts.init(document.getElementById("chartWR2"));
          chart2.setOption(chart2Option);
        })
        .catch(function(error) {
          console.log("各设区市行政处罚分布情况");
        });
      // 各设区市风险源等级分布
      this.$http
        .get(url + "querySHIFXYDJ")
        .then(function(response) {
          _this.riskLevel = response.data;
        })
        .catch(function(error) {
          console.log("各设区市行政处罚分布情况");
        });
    },
    scrollTab() {
      var speed = 40;
      var demo = document.getElementById("scrollBox");
      var demo1 = document.getElementById("scrollBox_demo1");
      var demo2 = document.getElementById("scrollBox_demo2");
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
    scrollTab2() {
      var speed = 40;
      var demo = document.getElementById("scrollBox2");
      var demo1 = document.getElementById("scrollBox2_demo1");
      var demo2 = document.getElementById("scrollBox2_demo2");
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
    HeighchartsFun(type) {
      let data = [];
      let atype;
      let _this = this;
      this.punishmentList.forEach(element => {
        if(type == "jine"){
          this.clickBtn = true;
          element[type] = Number(element[type].toFixed(0))
        }else{
          this.clickBtn = false;
        }
        data.push(element[type])
      });
      let chart4Option = {
        chart: {
          type: "column",
          backgroundColor: "transparent",
          marginTop: 20,
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
          text: "",
          align: "right",
          style: {
            color: "#fff",
            fontSize: "12px"
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
              return this.y;
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
            x: 10,
            y: 30,
            style: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          visible: false,
        },
        series: [
          {
            data: data,
            color: "#00e8ff",
            dataLabels: {
              enabled: true,
              style: {
              color: "#00e8ff",
                textOutline: "none"
              }
            }
          }
        ]
      };
      if(type == "jine"){
        chart4Option.title.text = "(万)"
        atype = "shuliang";
      }else{
        chart4Option.title.text = "(件)"
        atype = "jine"
      }
      let chart4 = Highcharts.chart("chartWR4", chart4Option);
      clearTimeout(this.heightChartTimer)
      this.heightChartTimerFun(atype);
    },
    heightChartTimerFun(type){
      let _this = this;
      this.heightChartTimer= setTimeout(function(){
          _this.HeighchartsFun(type);
      }, 7000)
    },
    mapFun(){
      let _this = this;
      let timer =setTimeout(function(){
        _this.fadeOutLeft = false;
        _this.mapChart = echarts.init(document.getElementById("mapWR"));
        _this.mapChart.setOption(_this.mapChartOption);
        _this.mapChart.on('click', function (params) {
           window.location.href=_this.wryUrl;
        });
        clearTimeout(timer)
      },50)
    },
    mapResiesFun(data, data2, type){
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
          color: "#8673e6"
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
      }
      if(type == "air" || type == "water"){
        this.mapChartOption.series[1].label.normal.formatter =function(params) {
          return params.value[2] +"%";
        }
      }else{
        this.mapChartOption.series[1].label.normal.formatter =function(params) {
          return params.value[2];
        }
      }
      this.mapChartOption.series.splice(2,4)
      this.mapFun();
    },
    mapResiesFun1(type, data, data2, data3, data4, data5, data6){
      this.fadeOutLeft = true;
      this.mapChart.dispose();
      this.mapChart = null;
      this.mapChartOption.visualMap.show = false;
      this.mapChartOption.legend= {
        selectedMode: "single",
        orient: 'vertical',
        left: "85%",
        top: "70%",
        textStyle:{
          color: "#fff"
        }
      };
      this.mapChartOption.series[0].data = data;
      this.mapChartOption.series[2] = {
        name: "较小",
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
      }
      this.mapChartOption.series[3] = {
        name: "一般",
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
      this.mapChartOption.series[4] = {
        name: "较大",
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
      this.mapChartOption.series[5] = {
        name: "重大",
        type: "scatter",
        coordinateSystem: "geo",
        data: data5,
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
      if(type == "risk"){
        this.mapChartOption.color= ["rgba(63, 155, 255, 0.9)", "#00f2f5", "#0c70e4", "#fad027", "#f96d3e", "#f14041"];
        let lenData = ['未评级', "较小", '一般', '较大', '重大'];
        this.mapChartOption.legend.data = lenData;
        this.mapChartOption.series[1] = {
            name: "未评级",
            type: "scatter",
            coordinateSystem: "geo",
            data: data6,
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
        }
      }else{
        this.mapChartOption.color= ["rgba(63, 155, 255, 0.9)", "#0c70e4", "#fad027", "#f96d3e", "#f14041"];
        let lenData = ["较小", '一般', '较大', '重大'];
        this.mapChartOption.legend.data = lenData;
        this.mapChartOption.series.splice(1,1)
      }
      this.mapFun();

    },
    maprankFun(clickType,type, na, val, val2, val3, val4, val5) {
      if(clickType){
        this.clelerTimer();
      }
      this.airtitle = false;
      this.watertitle = false;
      this.emergencytitle = false;
      this.risktitle = false;
      this.xftitle = false;
      this.penaltytitle = false;
      let _this = this;
      let data = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      let data6 = [];
      let list = [];
      let max = 0;
      let date = this.date;
      let years = this.year;
      let colorList = this.colors;
      let colorList1 = this.colors1;
      switch(type){
        case "air":
          this.airtitle = true;
          list = this.gastableData;
          this.mapChartOption.title.text = "涉气排污单位达标率",
          this.mapChartOption.tooltip.formatter = function(params) {
            if(params.value[2]){
              return (params.name + "</br>达标率为：" + params.value[2] + "%"+ "</br>日期：" + params.value[3]);
            }
          }
          this.mapChartOption.visualMap.inRange.color = colorList;
          this.num = 1;
        break;
        case "water":
          this.watertitle = true;
          list = this.watertableData;
          this.mapChartOption.title.text = "涉水排污单位达标率",
          this.mapChartOption.tooltip.formatter = function(params) {
            if(params.value[2]){
              return (params.name + "</br>达标率为：" + params.value[2] + "%"+ "</br>日期："+ params.value[3]);
            }
          }
          this.mapChartOption.visualMap.inRange.color = colorList;
          this.num = 2;
        break;
        case "xf":
          this.xftitle = true;
          list = this.xfList;
          this.mapChartOption.title.text = "各设区市信访数量",
          this.mapChartOption.tooltip.formatter = function(params) {
            if(params.value[2]){
              return (params.name + "</br>数量：" +params.value[2]+"件" + "</br>日期："+ date);
            }
          }
          this.num = 3;
           this.mapChartOption.visualMap.inRange.color = colorList1;
        break;
        case "penalty":
          this.penaltytitle = true;
          list = this.punishmentList;
          if(val == "jine"){
            this.mapChartOption.title.text = "行政处罚金额",
            this.mapChartOption.tooltip.formatter = function(params) {
              if(params.value[2]){
                return (params.name + "</br>金额：" + params.value[2] + "万" + "</br>日期："+ params.value[3]);
              }
            }
            this.num = 5;
          }else{
            this.mapChartOption.title.text = "行政处罚数量",
            this.mapChartOption.tooltip.formatter = function(params) {
              if(params.value[2]){
                return (params.name + "</br>数量：" + params.value[2] + "件"+ "</br>日期："+ params.value[3]);
              }
            }
            this.num = 4;
          }
          this.mapChartOption.visualMap.inRange.color = colorList1;
        break;
        case "emergency":
          this.emergencytitle = true;
          list = this.emergencyLevel;
          this.mapChartOption.title.text = "应急事件等级",
          
          this.mapChartOption.tooltip.formatter = function(params) {
            if(params.value[2]){
              return (params.name + ":</br>数量：" +params.value[2]+"个" + "</br>日期：" + years + "年");
            }
          }
          this.num = 6;
          this.mapChartOption.visualMap.inRange.color = colorList1;
        break;
        case "risk":
          this.risktitle = true;
          list = this.riskLevel;
          this.mapChartOption.title.text = "风险源等级分布",
          this.mapChartOption.tooltip.formatter = function(params) {
            if(params.value[2]){
              return (params.name + ":</br>数量：" +params.value[2]+"个");
            }
          }
          this.num = 0;
          this.mapChartOption.visualMap.inRange.color = colorList1;
        break;
      }
      if(type != "emergency" && type != "risk"){
        list.forEach(item => {
          let name = item[na];
          let value = Number(item[val]);
          
          data.push({
            name: name,
            value: value
          })
          _this.geoCoordMap.forEach(aitem => {
            if(name == aitem.name){
              let coods = [aitem.coods[0], aitem.coods[1]]
              coods[2] = value;
              if(type == "air" || type == "water"){
                let jcsj = item.jcsj;
                let date = new Date(jcsj)
                let year = date.getFullYear();
                let month = date.getMonth()+1;
                let day = date.getDate();
                let hour = date.getHours();
                coods[3] = year + "年" + month + "月" + day + "日" + hour + "点";
              }else if(type == "penalty"){
                coods[3] = _this.year + "年" + item.minyf + "-" + item.maxyf + "月"
              }
              data2.push({
                name: name,
                value: coods
              })
            }
          })
          if(max < value){
            max = value
          }else{
            max = max;
          }
        });
        this.mapChartOption.visualMap.max = max;
        this.mapResiesFun(data, data2, type);
      }else{
        list.forEach(item => {
          let name = item[na];
          let value = Number(item[val]);
          let value2 = Number(item[val2]);
          let value3 = Number(item[val3]);
          let value4 = Number(item[val4]);
          let value5 = Number(item[val5]);
          _this.geoCoordMap.forEach(aitem => {
            if(name == aitem.name){

              let coods = [aitem.coods[0], aitem.coods[1]]
              coods[2] = value
              data2.push({
                name: name,
                value: coods
              })
              let coods1 = [aitem.coods[0], aitem.coods[1]]
              coods1[2] = value2
              data3.push({
                name: name,
                value: coods1
              })
              let coods2 = [aitem.coods[0], aitem.coods[1]]
              coods2[2] = value3
              data4.push({
                name: name,
                value: coods2
              })
               let coods3 = [aitem.coods[0], aitem.coods[1]]
              coods3[2] = value4
              data5.push({
                name: name,
                value: coods3
              })
              let coods4 = [aitem.coods[0], aitem.coods[1]]
              coods4[2] = value5
              data6.push({
                name: name,
                value: coods4
              })
            }
          })
        });
        this.mapResiesFun1(type, data, data2, data3, data4, data5, data6);
      }
    },
    mapLBFun(){
      if(this.mapLB == "./static/img/startEnd.gif"){
        this.mapLB = "./static/img/endStart.gif";
        let _this = this;
        this.$store.commit("wrTimerFun", true);
        this.timer = setInterval(function(){
          let num = _this.num;
          if(num > 6){
            num = 0;
          }
          switch(num){
            case 0:
              _this.maprankFun(false, "air", "dq", "dbl");
            break;
            case 1:
              _this.maprankFun(false, "water", "dq", "dbl");
            break;
            case 2:
              _this.maprankFun(false, "xf", "jc", "hjxfslzl");
            break;
            case 3:
              _this.maprankFun(false, 'penalty', 'jc', 'shuliang');
            break;
            case 4:
              _this.maprankFun(false, 'penalty', 'jc', 'jine');
            break;
            case 5:
              _this.maprankFun(false, 'emergency', 'dq', 'jx', 'yb', 'jd', 'zd');
            break;
            case 6:
              _this.maprankFun(false, 'risk', 'xzqh', 'jx', 'yb', 'jd', 'zd', 'wpj');
            break;
            default:
            break;
          }
        },7000)
      }else{
        this.clelerTimer();
      }
    },
    clelerTimer(){
      clearInterval(this.timer);
      this.mapLB = "./static/img/startEnd.gif";
      this.$store.commit("wrTimerFun", false);
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
    clearTimeout(this.heightChartTimer)
  }
};
</script>
