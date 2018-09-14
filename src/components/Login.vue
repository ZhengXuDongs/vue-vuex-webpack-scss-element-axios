<template>
    <div class="login_content">
      <el-form :model="loginForm" status-icon :rules="rulesLogin" ref="loginForm" class="login_form">
        <p class="login_title">用户登录</p>
        <el-form-item prop="userName" class="login_user_name">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入用户名">
            <i slot="prefix" class="iconfont icon-geren"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码">
            <i slot="prefix" class="iconfont icon-jiesuo"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="btn_form_item">
          <el-button class="btn_sub" type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rulesLogin: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        console.log(this.loginForm.userName)
        const user = {
          name: this.loginForm.userName,
          password: this.loginForm.password
        }
        if (valid) {
          this.$router.push({
            path: '/index'
          })
          this.$store.dispatch('getUserInfo', user).then(() => {
            console.log(this.$store.state.user.user.name)
            console.log(typeof this.$store.state.user.user)
            window.localStorage.setItem('user', JSON.stringify(user))
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.login_content{
  margin: 0 4%;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: 2px 5px 10px rgba(0,0,0,0.1);
  box-shadow: 2px 5px 10px rgba(0,0,0,0.1);
  position: absolute;
  top: 50%;
  margin-top: -123px;
  width: 92%;
}
.login_title{
  text-align: center;
}
.login_user_name{
  margin-top: 20px;
}
.login_form{
  margin: 0 20px;
  padding: 10px 0;
}
.btn_form_item{
  text-align: center;
}
.btn_sub{
  width: 100%;
}
</style>
