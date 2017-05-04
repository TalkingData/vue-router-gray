module.exports = vueRouterGray;
function vueRouterGray(router, options) {
  if (!router) return;
  options = options || {
    check: function(params) { return Promise.resolve(false); },
  };

  router.beforeEach(gray);

  function gray() {
    var to = null;
    var from = null;
    var next = null;
    // vue-router 1.x
    if (arguments.length === 1 && arguments[0].next) {
      to = arguments[0].to;
      from = arguments[0].from;
      next = arguments[0].next;
    }
    // vue-router 2.x
    if (arguments.length === 3) {
      to = arguments[0];
      from = arguments[1];
      next = arguments[2];
    }
    try {
      options.check({
        protocol: location.protocol,
        host: location.host,
        path: location.pathname,
        search: location.search,
        hash: location.hash,
      }).then(function(v) {
        if (v) {
          location.href = v.grayUrl;
        } else {
          next();
        }
      });
    } catch(e) {
      next();
    }
  };
};
