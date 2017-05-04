# vue-router-gray
基于vue-router的灰度发布策略

## 使用

```
import vueRouterGray from 'vue-router-gray';
const router = new VueRouter({});
vueRouterGray(router, {
  check(params) {
    /*{
      protocol: location.protocol,
      host: location.host,
      path: location.pathname,
      search: location.search,
      hash: location.hash,
    }*/
    return new Promise((done) => {
      setTimeout(() => done({
        grayUrl: 'https://xxxx.com/gray/xxx'
      }), 400);
    });
  },
});
```
