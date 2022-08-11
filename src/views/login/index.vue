<template>
  <div id="loginPage">
    <el-card class="login-card">
    <div class="login-title">登录</div>
    <div class="logn-body">
      <el-form :model="loginForm" ref="loginForm" size="small" :rules="rules" class="rule-form">
        <el-form-item label="" prop="userId" class="formItem">
          <el-input v-model="loginForm.userId" auto-complete="off" placeholder="工号" clearable></el-input>
        </el-form-item>
        <el-form-item label="" prop="userPwd" class="formItem">
          <el-input v-model="loginForm.userPwd"  type="password" auto-complete="off" placeholder="密码" clearable></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style='width: 100%;' @click="submitFnc">登 录</el-button>
    </div>
    </el-card>
  </div>
</template>

<script>
import Api from '../../api/api'
import { md5 } from 'md5js'
import { mapMutations, mapGetters } from "vuex";

export default {
  name:'login',
  data () {
    return {
      loginForm: {
        userId: '',
        userPwd: ''
      },
      rules:
        {
          userId: [
              {required: true, message:'请输入用户名', trigger: 'blur'},
              // {
              //   validator: (rule, value, cb) => {
              //     const testReg = /^1\d{10}$|^\d{8}$|^\w+@\w+\.\w+$/g
              //     if (!testReg.test(value)) return cb('请输入正确的用户名')
              //     cb()
              //   },
              //   trigger: 'blur'
              // }
          ],
          userPwd: [
              {required: true, message:'请输入密码', trigger: 'blur'},
              {
                validator: (rule, value, cb) => {
                  const userPwdReg = /^[0-9a-zA-Z_]{6,30}$/g
                  if (!userPwdReg.test(value)) return cb('仅支持输入6-30个英文、数字、_的字符组合')
                  cb()
                },
                trigger: 'blur'
              }
          ]
        },
    }
  },

  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    }),

    async submitFnc () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const { userId, userPwd } = this.loginForm
          const response = await Api.doLogin({
            userId,
            userPwd: md5(userPwd, 32)
            })
            const data = response.data
          if (data.success) {
            debugger
            const result = data.result
            this.setUserInfo(result || {})
            // this.$router.replace({
            //   path: "/home"
            // })
          }
        }
      })
    }
  },
}
</script>

<style scoped>
#loginPage {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.png') #1b2024 20% center no-repeat;
  backdrop-filter: blur(0px);
}

.login-card {
  width: 350px;
  position: fixed;
  right: 8%;
  top: calc(50vh - 143px);
  padding: 0px 0 30px 0;
}

.login-title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
  /* font-weight: bold; */
  margin-bottom: 10px;
  text-align: center;
}

.formItem {
  margin: 25px  0;
}

</style>
