<template>
  <div class="profile">
    <profile-nav-bar />
    <div class="user-info">
      <div class="info-wrapper">
        <img class="avatar" src="~assets/img/profile/avatar.svg" alt />
        <div @click="toLogin" v-if="!userinfo.phone" class="login-register">
          <p>{{userinfo.name ? userinfo.name : '登录/注册'}}</p>
          <div class="phone">
            <img src="~assets/img/profile/phone.svg" alt />
            <span>{{userinfo.phone ? userinfo.phone : '暂无绑定手机号'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="account">
      <div class="account-item">
        <div class="item-number">
          <span class="balance">11.22</span>元
        </div>
        <div class="item-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="item-number">
          <span class="balance">1</span>个
        </div>
        <div class="item-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="item-number">
          <span class="balance">1</span>分
        </div>
        <div class="item-info">我的积分</div>
      </div>
    </div>
    <!-- 使用子组件ListView -->
    <list-view :data="listData"></list-view>
    <list-view :data="serviceData"></list-view>
  </div>
</template>

<script>
import ProfileNavBar from "./childrenComps/ProfileNavBar"
import ListView from "./childrenComps/ListView"

import { mapState } from 'vuex'

export default {
  components: {
    ProfileNavBar,
    ListView
  },
  data () {
    return {
      // 定义列表数据
      listData: [
        {
          icon: "#order",
          iconColor: "#ff8198",
          text: "我的消息"
        },
        {
          icon: "#point",
          iconColor: "#fc7b53",
          text: "积分商城"
        },
        {
          icon: "#vip",
          iconColor: "#ffc636",
          text: "会员卡"
        }
      ],
      serviceData: [
        {
          icon: "#service",
          iconColor: "#ff8198",
          text: "我的购物车"
        },
        {
          icon: "#download",
          iconColor: "#ff8198",
          text: "下载购物APP"
        }
      ]
    }
  },
  created () { },
  mounted () { },
  watch: {},
  computed: {
    ...mapState(['userinfo'])
  },
  methods: {
    toLogin () {
      if (this.userinfo.name || this.userinfo.phone) {
        this.$router.replace('/userinfo')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style scoped lang="less">
.profile {
  background-color: #f2f2f2;
  color: #787878;
  height: 100vh;
  width: 100vw;
  .user-info {
    background-color: var(--color-tint);
    width: 100vw;
    height: 120px;
    display: block;
    .info-wrapper {
      display: flex;
      align-items: center;
      color: #fff;
      .avatar {
        width: 100px;
        text-align: center;
        padding: 10px 15px;
        img {
          width: 60px;
        }
      }
      .login-register {
        width: 140px;
        margin-top: 20px;
        p {
          margin-left: 10px;
        }
        .phone {
          display: flex;
          img {
            width: 26px;
            height: 34px;
          }
          span {
            margin-top: 10px;
          }
        }
      }
      .arrow-svg {
        width: 11px;
        height: 22px;
      }
    }
  }
  .account {
    background-color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-content: center;
    .account-item {
      font-size: 14px;
      .item-number {
        font-weight: 800;
        margin-bottom: 5px;
        text-align: center;
        .balance {
          font-size: 20px;
          color: #ff5f3e;
        }
      }
    }
  }
}
</style>
