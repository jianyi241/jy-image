<template>
  <div class="nav">
    <div class="nav-content clear-fix">
      <ul class="nav-ul">
        <li class="nav-item" v-for="item in navList" :key="item.key">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="user-info">
        <div class="user-head" @mouseover="showUserMenu" @mouseout="hideUserMenu">
          <img src="//static.hdslb.com/images/akari.jpg" width="40" height="40" style="border-radius: 50%"/>
          <div class="user-box" :class="isShowUserMenu ? 'show-user-box' : ''">
            <ul class="user-box-ul">
              <li class="user-box-item">我的图集</li>
              <li class="user-box-item">我的会员</li>
              <li class="user-box-item">退出登录</li>
            </ul>
          </div>
        </div>
        <span class="username">简逸233</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navList: [
        {
          key: 0,
          name: '首页',
          path: '/'
        },
        {
          key: 1,
          name: '风景',
          path: '/image-list?query=风景'
        },
        {
          key: 2,
          name: '动漫',
          path: '/image-list?query=动漫'
        },
        {
          key: 3,
          name: '街道',
          path: '/image-list?query=街道'
        },
        {
          key: 4,
          name: '城市',
          path: '/image-list?query=城市'
        },
        {
          key: 5,
          name: '星空',
          path: '/image-list?query=星空'
        }
      ],
      isShowUserMenu: false
    }
  },
  methods: {
    showUserMenu () {
      this.isShowUserMenu = true
    },
    hideUserMenu () {
      this.isShowUserMenu = false
    }
  }
}
</script>

<style scoped lang="scss">
.nav{
  background-color: $themeColor;
  height: 52px;
  font-size: 14px;
  >.nav-content{
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    >.nav-ul{
      width: 800px;
      height: 100%;
      float: left;
      >.nav-item{
        display: inline-block;
        height: 100%;
        line-height: 52px;
        >a{
          display: block;
          color: #444;
          padding: 0 16px;
          transition: color .2s ease-in-out,background-color .2s ease-in-out;
        }
        &:hover{
          a{
            background-color: #FFF;
            color: #73c9e5;
          }
        }
      }
    }
    >.user-info{
      position: relative;
      height: 100%;
      float: right;
      box-sizing: border-box;
      padding: 5px 0;
      >.user-head{
        position: relative;
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid #73c9e5;
        >.user-box{
          position: absolute;
          top: 54px;
          left: -24px;
          width: 90px;
          background-color: #FFF;
          box-shadow: 0 0 4px #CCC;
          z-index: 1;
          opacity: 0;
          text-align: center;
          transition: opacity .2s ease-in;
          .user-box-item{
            box-sizing: border-box;
            padding: 8px;
            &:hover{
              color: #73c9e5;
            }
          }
        }
        >.show-user-box{
          opacity: 1;
          z-index: 999;
        }
      }
      >.username{
        display: inline-block;
        height: 42px;
        line-height: 42px;
        vertical-align: top;
        margin-left: 12px;
        color: #888;
      }
    }
  }
}
</style>
