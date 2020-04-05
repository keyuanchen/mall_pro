<template>
  <div class="login-container">
    <nav-bar class="nav-bar" @click.native="backToProfile">
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt />
      </div>
    </nav-bar>
    <div class="form-container sign-up-container" v-if="!isLogin">
      <form action="#" @submit.prevent="submitForm">
        <h1>欢迎注册</h1>
        <div class="social-wrapper">
          <a href="#">
            <i class="iconfont icon-weixin"></i>
          </a>
          <a href="#">
            <i class="iconfont icon-QQ"></i>
          </a>
          <a href="#">
            <i class="iconfont icon-weibo"></i>
          </a>
          <a href="#">
            <i class="iconfont icon-zhifubao"></i>
          </a>
        </div>
        <span class="other-loginWay">或者使用您自己的账号登录</span>
        <input type="text" placeholder="请输入用户名" />
        <input type="email" placeholder="请输入您的邮箱" />
        <input type="password" placeholder="请输入密码" />
        <button>注册</button>
      </form>
    </div>
    <div class="form-container sign-in-container" v-else>
      <form action="#" @submit.prevent="submitForm">
        <h1>欢迎登录</h1>
        <!-- 手机短信验证码登录或者用户名密码登录 -->
        <div class="loginWay">
          <div @click="loginWay=true" class="loginStyle loginSms" :class="{on: loginWay}">短信登录</div>
          <div @click="loginWay=false" class="loginStyle loginCode" :class="{on :!loginWay}">密码登录</div>
        </div>
        <div class="sms-login" v-if="loginWay">
          <section class="login_message">
            <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="phone" />
            <p
              @click="timeCut"
              :class="{'rightPhone': rightPhone}"
            >{{computeTime > 0 ? `${computeTime}秒后失效` : '获取验证码'}}</p>
          </section>
          <section class="login_verification">
            <input type="text" maxlength="6" v-model="code" placeholder="请输入短信验证码" />
          </section>
        </div>
        <div class="code-login" v-else>
          <section class="login_message">
            <input type="text" minlength="6" placeholder="请输入用户名" v-model="userName" />
          </section>
          <section class="login_verification">
            <input
              v-model="pwd"
              v-if="!toggleSwitch"
              type="password"
              minlength="6"
              placeholder="请输入登录密码"
            />
            <input v-model="pwd" v-else type="text" maxlength="6" placeholder="请输入登录密码" />
            <div class="switch" :class="{on: toggleSwitch}" @click="toggleSwitch = !toggleSwitch">
              <div class="switch-ball" :class="{on: toggleSwitch}"></div>
              <div class="switch-text">{{toggleSwitch ? '显示' : '隐藏'}}</div>
            </div>
          </section>
        </div>
        <button>登录</button>
      </form>
    </div>
    <tips-container @buttonClick="buttonClick" v-if="isTipsShow" :tips-text="tipsText" />
  </div>
</template>

<script>
import NavBar from 'content/navbar/NavBar'
import TipsContainer from 'common/tipscontainer/TipsContainer'

import { reqPwdLogin, reqCodeLogin } from 'network/login'

export default {
  name: '',
  components: {
    NavBar,
    TipsContainer
  },
  data () {
    return {
      isLogin: true,
      // 登录手机号
      phone: '',
      // 短息验证码
      code: '',
      // 记录获取短信验证码的倒计时
      computeTime: 0,
      // 记录登录方式的状态(默认短信登录)
      loginWay: true,
      // 登录用户名
      userName: '',
      // 登录密码
      pwd: '',
      // 验证码
      captcha: '',
      // 登录密码切换显示/隐藏(默认隐藏)
      tagglePwd: true,
      // pwd是否显示(默认不显示，也就是ball在左侧)
      toggleSwitch: false,
      // 记录确认弹窗提示信息
      tipsText: '',
      // 弹窗是否显示(默认隐藏)
      isTipsShow: false
    }
  },
  created () { },
  mounted () { },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 提交表单
    verifyLogin (text) {
      this.tipsText = text
      this.isTipsShow = true
    },
    submitForm () {
      // console.log(123)
      let userinfo
      if (this.loginWay) {
        if (!/^1[345678]\d{9}$/.test(this.phone)) {
          // 请输入手机号
          this.verifyLogin('手机号无效')
          return
        } else if (!this.code) {
          // 短信验证码无效
          this.verifyLogin('请输入短信验证码')
          return
        }
        // 前端验证成功
        this.verifyLogin('登录成功')
        reqCodeLogin(this.phone, this.code)
          .then(res => {
            userinfo = res.data
            // 保存用户信息到vuex中
            this.$store.dispatch('saveUserInfo', userinfo)
          })
      } else {
        if (!this.userName) {
          // 请输入用户名
          this.verifyLogin('请输入用户名')
          return
        } else if (!this.pwd) {
          // 请输入登录密码
          this.verifyLogin('请填写登录密码')
          return
        }
        // 前端验证成功
        this.verifyLogin('登录成功')
        reqPwdLogin({ name: this.userName, pwd: this.pwd, captcha: this.captcha })
          .then(res => {
            userinfo = res.data
            // 保存用户信息到vuex中
            this.$store.dispatch('saveUserInfo', userinfo)
          })
      }
      // 跳转到profile组件
      this.$router.replace('/profile')
    },
    // 点击确认框按钮
    buttonClick () {
      this.isTipsShow = false
      // 清空tipsText
      this.tipsText = ''
    },
    backToProfile () {
      this.$router.back()
    },
    // 点击获取验证码
    timeCut () {
      // 倒计时
      if (this.computeTime === 0 && this.rightPhone) {
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime === 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
      // 发送验证码

    }
  },
  watch: {}
}
</script>
<style scoped lang='less'>
.login-container {
  background: #f6f5f7;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  height: 100%;
  position: relative;
  .nav-bar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 0;
  }
  .form-container {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.3);
    .loginWay {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      .loginStyle {
        flex: 1;
        padding: 10px 0;
        margin: 0 30px;
        box-sizing: border-box;
        &.on {
          border-bottom: 2px solid var(--color-tint);
        }
      }
      .loginSms {
      }
      .loginCode {
      }
    }
    .code-login {
      .login_verification {
        position: relative;
      }
      .switch {
        width: 60px;
        border: 2px solid #ccc;
        box-sizing: border-box;
        border-radius: 10px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        top: 12px;
        right: 5px;
        padding: 2px;
        &.on {
          background-color: var(--color-tint);
          color: #fff;
        }
        .switch-ball {
          height: 16px;
          width: 16px;
          border: 2px solid #ccc;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0;
          transition: transform 0.4s linear;
          &.on {
            transform: translateX(40px);
            background-color: #3dca31;
          }
        }
        .switch-text {
          font-size: 10px;
          position: relative;
          bottom: 4px;
        }
      }
    }
    .login_message {
      position: relative;
      height: 50px;
      width: 260px;
      background-color: #fff;
      p {
        position: absolute;
        width: 80px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        letter-spacing: 1px;
        color: #aaa;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #aaa;
        border-radius: 10px;
        &.rightPhone {
          color: #fff;
          background-color: var(--color-tint);
        }
      }
    }
    h1 {
      color: #000;
      margin-bottom: 30px;
    }
    .social-wrapper {
      margin-bottom: 20px;
      a {
        height: 40px;
        width: 40px;
        margin: 0 10px;
        border: 1px solid #ddd;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
    span.other-loginWay {
      display: inline-block;
      font-size: 14px;
      letter-spacing: 2px;
      padding: 10px;
    }
    input {
      background-color: #eee;
      width: 100%;
      font-size: 12px;
      border: 0;
      outline: 0;
      padding: 15px;
      margin-bottom: 15px;
      &:focus {
        border: 1px solid #666;
      }
    }
    button {
      margin-top: 30px;
      height: 40px;
      width: 120px;
      font-size: 14px;
      line-height: 40px;
      color: #fff;
      border-radius: 20px;
      outline: 0;
      background: linear-gradient(to right, #fe5c33, #ee0d24);
      &:active {
        outline: 0;
      }
    }
  }
}
</style>