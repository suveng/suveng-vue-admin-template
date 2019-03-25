<template>
  <div class="user_add">
    <el-form ref="user" :model="user" :rules="rules" label-width="120px">
      <el-form-item label="username" prop="username">
        <el-input v-model="user.username" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="user.password " autocomplete="off"/>
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="user.email" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="phone" prop="phone">
        <el-input v-model="user.phone" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="微信" prop="wechat">
        <el-input v-model="user.wechat" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('user')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addOne } from '@/api/user'
import { MessageBox } from 'element-ui'
export default {
  name: 'Add',
  data() {
    const validateMobilePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不可为空'))
      } else {
        if (value !== '') {
          var reg = /^1[3456789]\d{9}$/
          if (!reg.test(value)) {
            callback(new Error('请输入有效的手机号码'))
          }
        }
        callback()
      }
    }
    const validateWeixin = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('微信号不能为空'))
      } else {
        const reg = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/
        if (!reg.test(value)) {
          callback(new Error('请输入正确的微信号码'))
        } else {
          callback()
        }
      }
    }
    return {
      user: {
        username: '',
        password: '',
        email: '',
        phone: '',
        wechat: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度最小为 6 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入email', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入phone', trigger: 'blur' },
          { validator: validateMobilePhone, trigger: 'blur' }
        ],
        wechat: [
          { required: true, message: '请输入微信号', trigger: 'blur' },
          { validator: validateWeixin, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addOne()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addOne() {
      console.log('addOne')
      addOne(this.user).then(response => {
        console.log(response)
        MessageBox.alert('添加成功').then(response => {
          self.location.href = '#/user/index'
        })
      })
    }
  }
}
</script>

<style scoped>
.user_add{
  margin: 10px 1px;
}
</style>
