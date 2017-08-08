/**
 * Created by tangzhichao on 2017/2/21.
 */
import TimeFormatFilter from './TimeFormat'
import MinuteTimeFormat from './MinuteTimeFormat';
// import RoleFormat from './RoleFormat';

export default function (Vue) {
  // install filter
  Vue.filter('time-format', TimeFormatFilter);
  Vue.filter('minute-format', MinuteTimeFormat);
  // Vue.filter('role-format', RoleFormat);
}
