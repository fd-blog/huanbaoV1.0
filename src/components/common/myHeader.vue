<template>
    <div class="header">
        <div class="topbar">
            <div class="titleBox">
                <h1>{{title}}</h1>
                <div class="date">
                    <span>{{date}}</span>
                    <span style="margin:0 10px 0;">{{week}}</span>
                    <span>{{time}}</span>
                </div>
            </div>
            <a class="returnBox" :href="url1" target="_self">
                <img class="return" src="../../assets/img/return.png" alt="">
                <div class="zongshu">综述</div> 
            </a>
            <div class="prev" @click="getPervNav('#listBox1')">
              <img src="../../assets/img/prev.png" >
            </div>
             <div class="next" @click="getPervNav1('#listBox3')">
               <img src="../../assets/img/next.png">
            </div>
            <div id="navLeft">
                <div id="outBox">
                    <div id="listBox1">
                        <router-link v-for="item in navLeftData" :to="item.path" :key="item.id" class="list listLeft">{{item.name}}</router-link>
                    </div>
                    <div id="listBox2"></div>
                </div>
               
            </div>
            <div id="navRight">
                <div id="outBox2">
                    <div id="listBox3">
                        <router-link v-for="item in navRightData" :to="item.path" :key="item.id" class="list listRight">{{item.name}}</router-link>
                    </div>
                    <div id="listBox4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      date: "",
      week: "",
      time: "",
      title: "",
      left:1,
      right:2,
      navIndex: "",
      url1: "http://192.168.40.76/ZJGIS/summarize/summarize.html",
      navLeftData: [
        {
          id: "1",
          name: "污染源监管",
          path: "/huanbao/wryjg"
        },
        {
          id: "2",
          name: "蓝天保卫战",
          path: "/huanbao/ltbwz"
        },
        {
          id: "3",
          name: "碧水行动",
          path: "/huanbao/bsxd"
        },
        {
          id: "4",
          name: "净土行动",
          path: "/huanbao/jtxd"
        },
        {
          id: "5",
          name: "清废行动",
          path: "/huanbao/qfxd"
        }
      ],
      navRightData: [
         {
          id: "9",
          name: "环境与经济",
          path: "/huanbao/hbyjj"
        },
        {
          id: "10",
          name: "公众参与",
          path: "/huanbao/gzcy"
        },
        {
          id: "6",
          name: "中央环保督察",
          path: "/huanbao/zyhbjc"
        },
        {
          id: "7",
          name: "生态保护",
          path: "/huanbao/stbh"
        },
        {
          id: "8",
          name: "河长制",
          path: "/huanbao/hzz"
        },
       
      ]
    };
  },
  mounted() {
    setInterval(this.getDate, 1000);
    this.getPath();
  },
  watch: {
    $route() {
      this.getPath();
    }
  },
  methods: {
    getDate() {
      let date = new Date();
      let myYear = date.getFullYear();
      let myMonth = date.getMonth() + 1;
      let myDate = date.getDate();
      let myWeek = "星期" + "日一二三四五六".charAt(date.getDay());
      let myHour = date.getHours();
      let myMinutes = date.getMinutes();
      let mySeconds = date.getSeconds();
      if (myMonth >= 1 && myMonth <= 9) {
        myMonth = "0" + myMonth;
      }
      if (myHour <= 9) {
        myHour = "0" + myHour;
      }
      if (myMinutes <= 9) {
        myMinutes = "0" + myMinutes;
      }
      if (mySeconds <= 9) {
        mySeconds = "0" + mySeconds;
      }
      this.date = `${myYear} 年 ${myMonth} 月 ${myDate} 日`;
      this.week = myWeek;
      this.time = `${myHour}：${myMinutes}：${mySeconds}`;
    },
    getPath() {
      switch (window.location.hash) {
        case "#/huanbao/ltbwz":
          this.title = "蓝天保卫战";
          break;
        case "#/huanbao/bsxd":
          this.title = "碧水行动";
          break;
        case "#/huanbao/hbyjj":
          this.title = "环境与经济";
          break;
        case "#/huanbao/jtxd":
          this.title = "净土行动";
          break;
        case "#/huanbao/qfxd":
          this.title = "清废行动";
          break;
        case "#/huanbao/zyhbjc":
          this.title = "中央环保督察";
          break;
        case "#/huanbao/wryjg":
          this.title = "污染源监管";
          break;
        case "#/huanbao/gzcy":
          this.title = "公众参与";
          break;
        case "#/huanbao/stbh":
          this.title = "生态保护";
          break;
        case "#/huanbao/hzz":
          this.title = "河长制";
          break;
        default:
          break;
      }
    },
    getPervNav(obj) {
      if(this.left > 2){
        this.left = 0;
      }else{
        this.left = 2;
      }
      let aleft = -this.left*123+"px"
      $(obj).css("transform","translate("+aleft+")")
      this.left += 1;
    },
    getPervNav1(obj) {
      if(this.right <0){
        this.right = 2;
      }else{
        this.right = 0;
      }
      let aleft = -this.right*123+"px"
      $(obj).css("transform","translate("+aleft+")")
      this.right -= 1;
    },
    
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 93px;
  .topbar {
    width: 100%;
    height: inherit;
    position: relative;
    background: url(../../assets/img/topbar.png) no-repeat center center;
    background-size: 100% 100%;
    h1 {
      font-size: 28px;
      text-align: center;
      margin: 13px 0;
      color: rgb(106, 241, 240);
    }
    .returnBox {
      width: 55px;
      height: 57px;
      display: inline-block;
      background: url(../../assets/img/retrunBtn.png) no-repeat center center;
      background-size: 100% 100%;
      cursor: pointer;
      .return {
        position: absolute;
        top: 7px;
        left: 7px;
      }
      .zongshu {
        position: absolute;
        top: 33px;
        left: 10px;
        color: #fff;
      }
    }
    .titleBox {
      width: 270px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 557px;
    }

    .date {
      height: 20px;
      text-align: center;
      color: #49c5e6;
      font-size: 13px;
    }
    .prev {
      width: 53px;
      height: 32px;
      position: absolute;
      top: 24px;
      left: 50px;
      cursor: pointer;
      background: url(../../assets/img/rect_prev.png) no-repeat center center;
      background-size: 100% 100%;
      img{
        margin-left: 15px;
      }
    }
    .next {
      width: 53px;
      height: 32px;
      position: absolute;
      top: 24px;
      right: 50px;
      cursor: pointer;
      background: url(../../assets/img/rect_next.png) no-repeat center center;
      background-size: 100% 100%;
      img{
        margin-left: 15px;
      }
    }
    #navLeft {
      width: 369px;
      height: 32px;
      position: absolute;
      left: 99px;
      top: 24px;
      overflow: hidden;
    }
    #navRight {
      width: 369px;
      height: 32px;
      position: absolute;
      right: 99px;
      top: 24px;
      overflow: hidden;
    }
    #outBox,
    #outBox2 {
      width: 1400px;
      height: 30px;
    }
    #listBox1,
    #listBox2,
    #listBox3,
    #listBox4{
      transition: 2s;
      width: 620px;
      height: 32px;
      float: left;
    }
    #listBox3{
      transform: translateX(-246px)
    }
    .list {
      float: left;
      width: 124px;
      height: 32px;
      text-align: center;
      line-height: 30px;
      color: #00f2f5;
      font-size: 15px;
      font-weight: 700;
      margin-left: -1px;
    }
    .listLeft{
      background: url(../../assets/img/rect_l.png) no-repeat center center;
      background-size: 100% 100%
    }
    .listRight{
      background: url(../../assets/img/rect_r.png) no-repeat center center;
      background-size: 100% 100%
    }
  }
}
</style>


