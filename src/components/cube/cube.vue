<template lang="html">
  <div class="cube">
    <div class="side front" :class="{ blank: !front }">1</div>
    <div class="side top" :class="{ blank: !top }">2</div>
    <div class="side bottom" :class="{ blank: !bottom }">3</div>
    <div class="side left" :class="{ blank: !left }">4</div>
    <div class="side right" :class="{ blank: !right }">5</div>
    <div class="side back" :class="{ blank: !back }">6</div>
  </div>
</template>

<script>
  export default {
    name: 'cube',
    props: {
      no: {
        type: Number,
        default: 1
      }
    },
    computed: {
      top () {
        return [1, 2, 3].includes(this.no % 9)
      },
      front () {
        return this.no <= 9
      },
      right () {
        return this.no % 3 === 0
      },
      left () {
        return this.no % 3 === 1
      },
      bottom () {
        return [0, 7, 8].includes(this.no % 9)
      },
      back () {
        return this.no >= 19
      }
    }
  }
</script>

<style lang="less" scoped>
  @size: 60px;
  // rotatex、rotatez的旋转正方向是顺时针，rotatey的旋转正方向是逆时针。
  .cube {
    display: inline-block;
    position: relative;
    width: @size;
    height: @size;
    transform-origin: 50% 50% 0;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    user-select: none;
    // margin: 1px;
  }
  .side {
    position: absolute;
    left: 0;
    top: 0;
    width: @size;
    height: @size;
    transform-style: preserve-3d;
    // backface-visibility: hidden;
    line-height: 1;
    font-size: @size/5;
    font-weight: 500;
    color: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    &::after {
      position: absolute;
      left: @size/20;
      top: @size/20;
      right: @size/20;
      bottom: @size/20;
      content: "";
      display: block;
      border-radius: 0.12*@size;
    }
  }
  .cube .side.front {
    transform: translate3d(0, 0, @size/2) rotate(0);
    // box-shadow: 0 0 100px #2185d0;
    &::after {
      background-color: #2185d0;
    }
  }
  .cube .side.top {
    transform: translate3d(0, -@size/2, 0) rotateX(90deg);
    &::after {
      background-color: #db2828;
    }
    // box-shadow: 0 0 100px #db2828;
  }
  .cube .side.bottom {
    transform: translate3d(0, @size/2, 0) rotateX(-90deg);
    &::after {
      background-color: #f2711c;
    }
    // box-shadow: 0 0 100px #f2711c;
  }
  .cube .side.left {
    transform: translate3d(-@size/2, 0, 0) rotateY(-90deg);
    &::after {
      background-color: #21ba45;
    }
    // box-shadow: 0 0 100px #21ba45;
  }
  .cube .side.right {
    transform: translate3d(@size/2, 0, 0) rotateY(90deg);
    &::after {
      background-color: #6435c9;
    }
    // box-shadow: 0 0 100px #6435c9;
  }
  .cube .side.back {
    transform: translate3d(0, 0, -@size/2) rotateX(180deg);
    &::after {
      background-color: #e03997;
    }
    // box-shadow: 0 0 100px #e03997;
  }
  .cube .side.blank {
    background-color: #fff;
    &::after {
      background: #fff !important;
    }
  }
</style>
