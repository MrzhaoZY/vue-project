<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref='loginFormRef' :model='loginForm' :rules='loginFormRules' label-width='0px' class="login_form">
                <!-- 用户名 -->
                <el-form-item prop='username'>
                    <el-input v-model='loginForm.username'  prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop='password'>
                    <el-input v-model='loginForm.password'  prefix-icon="iconfont icon-3702mima" type='password'></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary">登录</el-button>
                    <el-button type="info" @click='resetLoginForm'>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: 'zhaozhiyong',
        password: '123456'
      },
      // 表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        // 验证密码是否合法
        password: [{ required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
    //   console.log(this);
      this.$refs.loginFormRef.resetFields();
    }
  }

}
</script>

<style lang='less' scoped>
/* 加上scoped 样式只会在本组件中使用 */
.login_container{
    height: 100%;
    background-color: #2b4b6b;
}
.login_box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 300px;
    background-color: rgb(247, 244, 244);
    border-radius: 8px;
}
.avatar_box{
    position: relative;
    left:50%;
    top: 0;
    transform:translate(-50%,-50%);
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px #ddd;
    img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 135px;
        height: 135px;
        background-color: rgb(233, 224, 226);
        border-radius: 50%;
        }
}

.login_form{
    position: absolute;
    bottom:0;
    width: 100%;
    padding: 0 25px;
    /* 这里由于是box-sizing是border-content，所以会导致内容超出去 */
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>
