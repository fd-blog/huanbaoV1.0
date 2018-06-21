<template>
    <div class="homeBg">
        <div class="stars"></div>
        <div class="home">
            <my-header></my-header>
            <my-content></my-content>
        </div>
    </div>
</template>
<style lang="scss">
.homeBg{
    width: 1366px;
    height: 768px;
    margin: 0 auto;
    overflow: hidden;
    background: #1d2b77;
	background-attachment: fixed;
    position: relative;
}
.home{
    width: 1366px;
    height: 768px;
    margin: 0 auto;
    overflow: hidden;
}
@keyframes rotate {
	  0% {
	    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
	  }
	  100% {
	    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
	  }
	}
	.stars {
	  transform: perspective(500px);
	  transform-style: preserve-3d;
	  position: absolute;
	  bottom: 0;
	  perspective-origin: 50% 100%;
	  left: 30%;
	  animation: rotate 300s infinite linear;
	}

	.star {
	  width: 2px;
	  height: 2px;
	  background: #F7F7B6;
	  position: absolute;
	  top: 0;
	  left: 0;
	  transform-origin: 0 0 -300px;
	  transform: translate3d(0, 0, -300px);
	  backface-visibility: hidden;
	}
</style>
<script>
import myHeader from'./myHeader';
import myContent from './myContent';
export default {
    data(){
        return {

        }
    },
    components:{
        myHeader,
        myContent
    },
    mounted(){
        var stars = 2000;
        var $stars = $('.stars');
        var r = 800;
        for (var i = 0; i < stars; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            var $star = $('<div/>').addClass('star');
            $stars.append($star);
        }
        window.CP.exitedLoop(1);
        $('.star').each(function () {
            var cur = $(this);
            var s = 0.2 + Math.random() * 1;
            var curR = r + Math.random() * 300;
            cur.css({
                transformOrigin: '0 0 ' + curR + 'px',
                transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale(' + s + ',' + s + ')'
            });
        });
    }
}
</script>



