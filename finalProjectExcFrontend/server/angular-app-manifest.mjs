
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
    'index.csr.html': {size: 26553, hash: '99b662b8de77b3fe4380691e841389ce8e0bda280e5d211230801f7eba7f9dc4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17312, hash: 'af63a26b49c6b1f9cb0bd54fd0595113dbd5cc8ab644475c94ae050e370db149', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'error500/index.html': {size: 29370, hash: '03aa77a8fc2da944459a86f014d1e82e36549840c4b54abaf9639d34e15f4125', text: () => import('./assets-chunks/error500_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103911, hash: 'c042eed90cdb77dbbd391db4ac7a737695e21e9a1de334f096f4d46834d5051a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D3L54ZPV.css': {size: 9795, hash: 'D8/vtiIV3JE', text: () => import('./assets-chunks/styles-D3L54ZPV_css.mjs').then(m => m.default)}
  },
};
