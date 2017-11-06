<template lang="html">
  <div class="container"
  @touchstart.capture="start"
  @touchmove.capture="move"
  @touchend.capture="end"
  @mousedown.capture="start"
  @mousemove.capture="move"
  @mouseup.capture="end"
  ref="wrapper"
  >
    <div
    class="cube"
    :style="[rotateStyle]"
    >
      <div class="side">1</div>
      <div class="side">2</div>
      <div class="side">3</div>
      <div class="side">4</div>
      <div class="side">5</div>
      <div class="side">6</div>
    </div>
  </div>
</template>

<script>
  const cubeSize = 300
  export default {
    name: 'cube',
    data () {
      return {
        moving: false,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      }
    },
    mounted () {
      console.log(this.$refs.wrapper.offsetLeft)
    },
    computed: {
      rotateStyle () {
        const { rotateX, rotateY, rotateZ } = this
        return {
          transform: `translate3d(0, 0, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        }
      }
    },
    methods: {
      start (e) {
        this.moving = true
        this.startX = e.pageX
        this.startY = e.pageY
      },
      move (e) {
        if (this.moving) {
          if (this.moving) {
            console.log(e)
            const deltaX = e.pageX - this.startX
            const deltaY = e.pageY - this.startY
            console.log(deltaX, deltaY)
            // this.startX = e.pageX
            // this.startY = e.pageY
            this.rotateY = Math.round(deltaX / cubeSize * 90)
            this.rotateX = -Math.round(deltaY / cubeSize * 90)
            // const x0 = this.startX
            // const y0 = this.startY
            // const x1 = e.page
          }
        }
      },
      end (e) {
        this.moving = false
      },
      out (e) {
        this.startX = 0
        this.startX = 0
      }
    }
  }
</script>

<style lang="less" scoped>
  @size: 300px;
  .container {
    display: inline-block;
    perspective: @size * 4;
    width: @size * 2;
    height: @size * 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #000;
  }
  // rotatex、rotatez的旋转正方向是顺时针，rotatey的旋转正方向是逆时针。
  .cube {
    display: inline-block;
    position: relative;
    width: @size;
    height: @size;
    transform-origin: 50% 50% -@size/2;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 0) rotateY(0deg);
    cursor: grab;
    user-select: none;
  }
  .side {
    width: @size;
    height: @size;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    line-height: 1;
    font-size: @size/5;
    font-weight: 500;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cube .side:nth-child(1) {
    transform: translate3d(0, 0, 0) rotate(0);
    background-color: #2185d0;
  }
  .cube .side:nth-child(2) {
    transform: translate3d(0, -@size*1.5, -@size*0.5) rotateX(90deg);
    background-color: #db2828;
  }
  .cube .side:nth-child(3) {
    transform: translate3d(0, -@size*1.5, -@size*0.5) rotateX(-90deg);
    background-color: #f2711c;
  }
  .cube .side:nth-child(4) {
    transform: translate3d(0, -@size*3, -@size) rotateX(180deg);
    background-color: #21ba45;
  }
  .cube .side:nth-child(5) {
    transform: translate3d(-@size*0.5, -@size*4, -@size*0.5) rotateY(-90deg);
    background-color: #6435c9;
  }
  .cube .side:nth-child(6) {
    transform: translate3d(@size*0.5, -@size*5, -@size*0.5) rotateY(90deg);
    background-color: #e03997;
  }
</style>
