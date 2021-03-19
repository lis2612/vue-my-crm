export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.prototype.$message = function (html) {
      window.M.toast({ html });
    };

    Vue.prototype.$$error = function (html) {
      window.M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
