
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
    'index.csr.html': {size: 26736, hash: '86137ffd93d83e1cd9774dc046b27a9f628d0626e12bad36b2a79d8d42f2fe70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19151, hash: '50bcfcfb706f7face363ab3faec1c8b796f59dce1e40ea558ac0dec1c0084431', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29553, hash: '7753395f4ea741923c0e6b2c1b1f6b4d9540e29f5d38069f5ab3fb23815d7bf2', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106131, hash: '8662b5d6842b09e07515e2544fb251c9f32d932e6b0739b54bc92281e454f207', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPZ5M2CM.css': {size: 8141, hash: 'qBtxzILT0lE', text: () => import('./assets-chunks/styles-OPZ5M2CM_css.mjs').then(m => m.default)}
  },
};
