
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/dashboard"
  },
  {
    "renderMode": 1,
    "route": "/dashboard/maindashboard"
  },
  {
    "renderMode": 1,
    "route": "/dashboard/todolist"
  },
  {
    "renderMode": 1,
    "route": "/dashboard/contacts"
  },
  {
    "renderMode": 1,
    "route": "/signin"
  },
  {
    "renderMode": 1,
    "route": "/signup"
  },
  {
    "renderMode": 1,
    "route": "/changepwr"
  },
  {
    "renderMode": 2,
    "route": "/error500"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26553, hash: '19a9e0026ab1f6fc386458b537461844365528de970034fdc4b65b1c8a7736bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17312, hash: '5e5e7a801759a30fcc18ec62defcb836db9b95fd945fabc723ace2a4672b3157', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29370, hash: '160cc53c53d7a08140af61a6596b945b363e024ca35d9218a552b3bc498d96af', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103911, hash: '53e5f4719554806195ad6c46f3006173d68c6e4bb16add6856b11e1253c02e1b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D3L54ZPV.css': {size: 9795, hash: 'D8/vtiIV3JE', text: () => import('./assets-chunks/styles-D3L54ZPV_css.mjs').then(m => m.default)}
  },
};
