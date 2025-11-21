
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
    'index.csr.html': {size: 26739, hash: '122755eafd172673a3c96b02c4a817bf55bd3cec34bec7bce8c5819c63e352a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19154, hash: 'c33146d5dd32c95e9f1a15fbbb4c9eeddd35c785393f1857f76643e16ae6d1c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29556, hash: '638a97851142ca4b5881c89142df8ec74f63d407b9e80b0318bff0db99e4117f', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 131377, hash: '504390792ece864d541ddf7ae1576e81527b70cc009df855945be8ed65baeb35', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPZ5M2CM.css': {size: 8141, hash: 'qBtxzILT0lE', text: () => import('./assets-chunks/styles-OPZ5M2CM_css.mjs').then(m => m.default)}
  },
};
