
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
    'index.csr.html': {size: 26739, hash: '91f8a9b1182255c1881ac109beba7c3ebdd1665fa4b07cbc2c2c6c8ba6b55c5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19154, hash: '0ab021adba8bfa9ef0c3cfd2b24d24301d5095a1b515ee43967afa5dbf0a09c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29556, hash: 'a4095953147f4ebb1177eef5e07b713b40a533d0caa82d5643101e59b40dc526', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 131377, hash: '8db11e606c0a0e28253efe69471f12d4cde8cbcea77129856ca35c15dbfaeed9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPZ5M2CM.css': {size: 8141, hash: 'qBtxzILT0lE', text: () => import('./assets-chunks/styles-OPZ5M2CM_css.mjs').then(m => m.default)}
  },
};
