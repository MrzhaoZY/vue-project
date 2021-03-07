<template>
  <el-container>
    <!-- 头部区 -->
    <el-header>
      <div class="logo">
        <img src="../assets/shop.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <!-- 退出 -->
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 侧边栏菜单区 -->
        <div class="toggle-button" @click="toggleCollapse">
          | | |
        </div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单区域 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <!-- 二级菜单模板区 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 组件的私有数据
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
      // 字体对象
      iconsObj: {
        125: 'iconfont icon-users',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      // 是否折叠 默认不折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  // 生命周期函数
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },

  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) {
        // 如果错误 则弹出错误提示框
        return this.$message.error(res.meta.message)
      }
      // this.$message.success('读取菜单数据成功！')
      this.menulist = res.data
      console.log(res)
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存连接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: #384955;
  .logo {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    img {
      height: 100%;
    }
    span {
      margin-left: 10px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: rgb(224, 214, 214);
}

.iconfont {
  margin-right: 10px;
}

// 菜单栏的关闭与打开
.toggle-button {
  background-color: #4a5064;
  text-align: center;
  padding: 3px 0;
  font-size: 10px;
  color: #fff;
  // 增加或减少字符间的空白
  letter-spacing: 0.2rem;
  cursor: pointer;
}
</style>
