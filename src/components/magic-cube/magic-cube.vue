<template lang="html">
  <div class="container">
    <div class="control">
      <div class="input">
        <input type="range" v-model="rotateX" max="360" min="0"> rotateX ({{ rotateX }}°)
      </div>
      <div class="input">
        <input type="range" v-model="rotateY" max="360" min="0"> rotateY ({{ rotateY }}°)
      </div>
    </div>
    <div class="magic-cube" :style="[rotateStyle]">
      <cube :no="1"></cube>
      <cube :no="2"></cube>
      <cube :no="3"></cube>
      <cube :no="4"></cube>
      <cube :no="5"></cube>
      <cube :no="6"></cube>
      <cube :no="7"></cube>
      <cube :no="8"></cube>
      <cube :no="9"></cube>
      <cube :no="10"></cube>
      <cube :no="11"></cube>
      <cube :no="12"></cube>
      <cube :no="13"></cube>
      <cube :no="14"></cube>
      <cube :no="15"></cube>
      <cube :no="16"></cube>
      <cube :no="17"></cube>
      <cube :no="18"></cube>
      <cube :no="19"></cube>
      <cube :no="20"></cube>
      <cube :no="21"></cube>
      <cube :no="22"></cube>
      <cube :no="23"></cube>
      <cube :no="24"></cube>
      <cube :no="25"></cube>
      <cube :no="26"></cube>
      <cube :no="27"></cube>
    </div>
  </div>
</template>

<script>
  import Cube from 'components/cube/cube'

  export default {
    name: 'magic-cube',
    components: { Cube },
    data () {
      return {
        rotateX: 330,
        rotateY: 315
      }
    },
    computed: {
      rotateStyle () {
        const { rotateX, rotateY } = this
        return {
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, 0, 60px)`
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @size: 60px;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    perspective: 5000px;
    perspective-origin: center;
    color: #fff;
  }
  .control {
    position: absolute;
    width: 100%;
    left: 0;
    top: 40px;
    .input {
      margin: 10px auto;
      text-align: left;
      padding-left: 20px;
      input {
        width: 60%;
        margin-right: 10px;
      }
    }
  }
  .magic-cube {
    display: flex;
    flex-wrap: wrap;
    width: @size*3 + 12px;
    height: @size*3;
    transform: rotateX(0deg) rotateY(0deg) translate3d(0, 0, @size);
    transform-style: preserve-3d;
    .cube {
      &:nth-child(n + 10) {
        transform: translate3d(0, -3*@size, -@size);
      }
      &:nth-child(n + 19) {
        transform: translate3d(0, -6*@size, -2*@size);
      }
    }
  }
</style>
