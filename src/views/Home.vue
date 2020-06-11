<template>
  <div class="home">
    <Nav></Nav>
    <header>
      <div class="home-header" @mouseover="clearInterval">
<!--           @mouseout="intervalImage">-->
        <div class="image-rotation" :style="{backgroundImage: 'url('+rotationImageList[currentRotationIndex].url+')',backgroundPosition: rotationImageList[currentRotationIndex].position}" :title="rotationImageList[currentRotationIndex].title">
          <i class="prev" @click="changeRotationImage('prev')"></i>
          <ul class="image-choice-ul">
            <li class="image-choice-btn" v-for="item in rotationImageList" :key="item.key" @mouseover="changeRotationImage(item.key)" :class="currentRotationIndex === item.key ? 'on' : ''"></li>
          </ul>
          <i class="next" @click="changeRotationImage('next')"></i>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Nav from '../components/Common/Nav'
import lunbo1 from '../assets/img/lunbo/lunbo1.jpg'
import lunbo2 from '../assets/img/lunbo/lunbo2.jpg'
import lunbo3 from '../assets/img/lunbo/lunbo3.jpg'
import lunbo4 from '../assets/img/lunbo/lunbo4.jpg'
import lunbo5 from '../assets/img/lunbo/lunbo5.jpg'
import lunbo6 from '../assets/img/lunbo/lunbo6.jpg'
import userApi from '../api/user'
export default {
  name: 'Home',
  components: {
    Nav
  },
  data () {
    return {
      rotationImageList: [
        {
          key: 0,
          title: '摩纳哥黎明4k风景壁纸',
          url: lunbo1,
          position: 'center -50px'
        },
        {
          key: 1,
          title: '日落 海边 树 狗 女子 剪影 傍晚的天空 黄昏 6k',
          url: lunbo2,
          position: 'center -560px'
        },
        {
          key: 2,
          title: '天狼绘梦者上官婉儿王者荣耀4k高清壁纸',
          url: lunbo3,
          position: 'center 0'
        },
        {
          key: 3,
          title: '微软Windows 10向日葵风景4k高清壁纸',
          url: lunbo4,
          position: 'center -200px'
        },
        {
          key: 4,
          title: '雨天 城市夜景 女子 雨伞 4k高清动漫壁纸',
          url: lunbo5,
          position: 'center -50px'
        },
        {
          key: 5,
          title: '坐在咖啡馆的少女唯美4k高清动漫壁纸',
          url: lunbo6,
          position: 'center -50px'
        }
      ],
      currentRotationIndex: 0,
      timerInterval: null
    }
  },
  methods: {
    changeRotationImage (val) {
      if (typeof val === 'string') {
        if (val === 'prev') {
          if (this.currentRotationIndex === 0) {
            this.currentRotationIndex = 5
          } else {
            this.currentRotationIndex--
          }
        } else {
          if (this.currentRotationIndex === 5) {
            this.currentRotationIndex = 0
          } else {
            this.currentRotationIndex++
          }
        }
      } else {
        this.currentRotationIndex = val
      }
      console.log(this.currentRotationIndex, 'index')
    },
    intervalImage () {
      this.timerInterval = setInterval(() => {
        if (this.currentRotationIndex === 5) {
          this.currentRotationIndex = 0
        } else {
          this.currentRotationIndex++
        }
      }, 5000)
    },
    clearInterval () {
      clearInterval(this.timerInterval)
    },
    login () {
      userApi.login({ username: 'xiaok', password: '123123' })
      // this.$api.login()
    }
  },
  mounted () {
    // this.intervalImage()
    this.login()
  }
}
</script>

<style scoped lang="scss">
.home{
  height: 1000px;
  .home-header{
    height: 560px;
    .image-rotation{
      position: relative;
      height: 100%;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      /*cursor: pointer;*/
      transition: background-image .2s ease-in-out;
      overflow: hidden;
      &:hover{
        .prev{
          left: 0;
        }
        .next{
          right: 0;
        }
        .image-choice-ul{
          bottom: 60px;
        }
      }
      .prev,.next{
        position: absolute;
        width: 90px;
        height: 90px;
        top: 50%;
        margin-top: -45px;
        background: rgba(0, 0, 0, .2) url("../assets/image/prev.svg") center center/50% no-repeat;
        cursor: pointer;
        transition: left .2s ease-in-out,right .2s ease-in-out,background-color .1s ease-in-out;
        &:hover{
          background-color: rgba(0, 0, 0, .4);
        }
      }
      .prev{
        left: -90px;
      }
      .next{
        right: -90px;
        transform: rotate(180deg);
      }
      .image-choice-ul{
        position: absolute;
        width: 300px;
        height: 20px;
        left: 50%;
        margin-left: -150px;
        bottom: -20px;
        text-align: center;
        transition: bottom .2s ease-in-out;
        .image-choice-btn{
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #EEEEFF;
          margin: 0 18px;
          vertical-align: middle;
          cursor: pointer;
          transition: width .1s ease-in-out;
          &:hover{
            width: 20px;
            background-color: #73c9e5;
          }
        }
        .on{
          width: 20px;
          background-color: #73c9e5;
        }
      }
    }
  }
}
</style>
