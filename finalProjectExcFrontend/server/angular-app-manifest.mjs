
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
    'index.csr.html': {size: 26655, hash: '01e16f92dac3ea744942ce45b40a64f661b67a624283cd3e95e7bbafcda8ceb8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17414, hash: 'a31bfc85d5ccdc3be214e8194f596cae4782f3f258e4638c2107966c9ccfc416', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29472, hash: '7d4c5a6d3f3328ea77642bc7a3eac9aa127df8e9030ef5efb987986819e34824', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111211, hash: 'dff38946ec42bddb7a6d5b99a8ad24eaca22a4770962a9cf5d315ef04ffa06f2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D3L54ZPV.css': {size: 9795, hash: 'D8/vtiIV3JE', text: () => import('./assets-chunks/styles-D3L54ZPV_css.mjs').then(m => m.default)}
  },
};
