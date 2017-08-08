<template>
  <div>
    <Spin fix v-if="loading"></Spin>
    <Row :gutter="16">
      <Col span="6">
      <Menu :active-name="1" @on-select="changeRoleAction">
        <Menu-group title="内容管理">
          <Menu-item v-for="role in roles" :name="role">
            <Icon type="document-text"></Icon>
           {{role | roleFormat}}
          </Menu-item>
        </Menu-group>
      </Menu>
      </Col>
      <Col span="12">
      <Transfer  :data="sourcePermission"
                :target-keys="targetPermission" :titles="['未分配的权限','已分配的权限']">

      </Transfer>
      </Col>
      <Col span="6" style="text-align: left">
          <Button type="primary">保存权限</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data: function () {
      return {
        selectRole: 1,
        sourcePermission: [],
        targetPermission: [],
        roles:[],
        loading:false,
      }
    },
    created:function () {
      let that = this;
      that.loading = true;
      this.$http.get("/api/permission/roles").then(res => {
        that.roles = res.data;
        that.loading = false;
      }).catch(res => {
        that.loading = false;
      });
    },
    computed: {
      ...mapGetters({})
    },
    methods:{
      changeRoleAction(name){
        this.$http.get("api/permission").then(res => {

        }).catch(res =>{

        });
      }
    },
    filters:{
      roleFormat (role){
        if(role == 1){
          return "超级管理员";
        }
        if(role == 2){
          return "系统操作员";
        }
      }
    }
  }
</script>
<style>


</style>
