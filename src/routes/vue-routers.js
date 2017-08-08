import VueRouter from "vue-router";
import CustomList from '../components/custom/CustomList.vue';
import Permission from '../components/acl/Permission.vue';

import Capture from '../components/demo/Capture.vue';
import Capture1 from '../components/demo/Capture2.vue';
import QRCode from '../components/demo/QRCode.vue';
import Neditor from '../components/demo/VUE2Editor.vue';
import VueEditor from '../components/demo/VueEditor.vue';
import Ueditor from '../components/demo/Ueditor.vue';
import Echarts from '../components/demo/Echarts.vue';

import Main from '../components/layout/Main.vue';


const routes = [
  {
    path: '/',
    name: '首页',
    redirect:'/main'
  },
  {
    path:'/main',
    name:'功能列表',
    component:Main ,
    children: [
                {
            path: 'custom/list',
            name: '会员列表',
            component: CustomList
          },
          {
            path: 'permission/list',
            name: '权限列表',
            component: Permission
          } ,
          {
            path: 'demo/capture1',
            name: '拍照测试1',
            component: Capture1
          },
          {
            path: 'demo/qrcode',
            name: '二维码测试',
            component: QRCode
          }
          ,
          {
            path: 'demo/editor',
            name: '编辑测试',
            component: Neditor
          },
          {
            path: 'demo/editor1',
            name: '编辑测试1',
            component: VueEditor
          },
          {
            path: 'demo/editor2',
            name: '编辑测试3',
            component: Ueditor
          }, {
            path: 'demo/chart',
            name: 'Echarts测试3',
            component: Echarts
          }
    ]
  },
  {
    path:'/capture',
    name:'拍照功能',
    component:Capture
  }
];

// const routes = [
//   {
//     path: '/',
//     name: '首页',
//     redirect: 'main/custom/list',
//     children:[
//       {
//         path:'main',
//         name:'功能',
//         component:Main,
//         children:[
//           {
//             path: 'custom/list',
//             name: '会员列表',
//             component: CustomList
//           },
//           {
//             path: 'permission/list',
//             name: '权限列表',
//             component: Permission
//           } ,
//           {
//             path: 'demo/capture1',
//             name: '拍照测试1',
//             component: Capture1
//           },
//           {
//             path: 'demo/qrcode',
//             name: '二维码测试',
//             component: QRCode
//           }
//           ,
//           {
//             path: 'demo/editor',
//             name: '编辑测试',
//             component: Neditor
//           },
//           {
//             path: 'demo/editor1',
//             name: '编辑测试1',
//             component: VueEditor
//           },
//           {
//             path: 'demo/editor2',
//             name: '编辑测试3',
//             component: Ueditor
//           }, {
//             path: 'demo/chart',
//             name: 'Echarts测试3',
//             component: Echarts
//           }
//         ]
//       }
//       ,  {
//         path: 'capture',
//         name: '拍照测试',
//         component: Capture
//       }
//     ]
//   }
//
// ];

export default function (Vue) {
  Vue.use(VueRouter);
  return new VueRouter({routes});
}
