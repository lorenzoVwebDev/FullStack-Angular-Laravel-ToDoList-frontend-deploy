
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
    'index.csr.html': {size: 26736, hash: 'b24d1c2dba28236243de8e939369ef2fc5976ba7dc5980c75cdfbde742e95df0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19151, hash: 'fe29a2ef991d709f027abf375c7ee2a4f384db62b09d449801df1d5fa552adba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29553, hash: '6f8f937aadc53cdeb51f3472198f8e0ffdf397d31e224fde90bca2152d084160', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106084, hash: '8881376cae226e569c42f7172495be3b727463118e4548fd421b8687a929f081', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPZ5M2CM.css': {size: 8141, hash: 'qBtxzILT0lE', text: () => import('./assets-chunks/styles-OPZ5M2CM_css.mjs').then(m => m.default)}
  },
};
