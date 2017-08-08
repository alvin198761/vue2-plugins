<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 400px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 100%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    /*margin: 15px auto;*/
    text-align: right;
    color: white;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <Menu-item name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
      </Menu-item>
      <Menu-item name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
      </Menu-item>
      <Menu-item name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
      </Menu-item>
    </Menu>
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Button type="text" class="layout-logo-left" @click="toggleClick">
          <Icon type="navicon" size="20"></Icon>
        </Button>

        <Menu active-name="1" theme="dark" width="auto" @on-select="changeMenuAction">
          <Menu-item v-for="menu in menus" :name="menu.link" :title="menu.tip">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">{{menu.text}}</span>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-breadcrumb">
          <!--<Breadcrumb>-->
          <!--<el-breadcrumb-item v-for="p in sitePath" :to="{ path: p.path }">{{p.name}}</el-breadcrumb-item>-->
          <!--</Breadcrumb>-->
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        sitePath: [],
        menus: []
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      },
      changeMenuAction (name){
        this.$router.push(name);
      }
    },
    created: function () {
      this.sitePath = getSitePath(this.$route.matched);
      const that = this;
      that.$Loading.start();
      this.$http.get("/api/permission").then(res => {
        that.menus = res.data;
        that.$Loading.finish();
      }).catch(res => {
        //重定向到没有权限的页面
        that.$Loading.error();
        that.$Message.error('权限加载失败！');
      });
    },
    watch: {
      '$route': function (to, from) {
        this.sitePath = getSitePath(to.matched);
      }
    }
  }

  const getSitePath = function (routes) {
    let sitePathArray = routes;
    for (let i = 1; i < sitePathArray.length; i++) {
      sitePathArray[i].path = '';
    }
    return sitePathArray;
  }
</script>
