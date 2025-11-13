
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
    'index.csr.html': {size: 26553, hash: '3af2598bb65408648e09fcd64a955e4d8fa5dbac558c6e848416286d7e113fb6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17312, hash: 'fdc760cac6545ed2b629975de710e61f2921c594160e2ba862715af74bf81179', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29370, hash: 'c5c4e6cda79ef79637c40c07e214e4dd93fec2970ef788c6c9fadb4a213fac61', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103911, hash: 'b0e1341e3537efff430c6631f70ee611c2a90cb629523e1929c967509c287a6f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D3L54ZPV.css': {size: 9795, hash: 'D8/vtiIV3JE', text: () => import('./assets-chunks/styles-D3L54ZPV_css.mjs').then(m => m.default)}
  },
};
