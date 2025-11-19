
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
    'index.csr.html': {size: 26642, hash: '2f707757d195f88aef01e4c52c4fff5a8c91739bda98215ba608de7ecf9a5df1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19057, hash: '49e20131ec86b8f27ec31433ec011f847c68c28f189d7106db39d190f3721ba9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29459, hash: '9e08948d55336a18e3fc7cb7537d327a13b4ba9398a4a5f9a97789aa6e2bed87', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105474, hash: '3a7f171688716ca2d534b5b181ab52893d13300bfc251934912d49e1090f5eb2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPZ5M2CM.css': {size: 8141, hash: 'qBtxzILT0lE', text: () => import('./assets-chunks/styles-OPZ5M2CM_css.mjs').then(m => m.default)}
  },
};
