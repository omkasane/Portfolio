
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/profile",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/certifications"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/profile",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 853, hash: '3df9fbd7aad2dfb45700509ebf23da2194402821727cb722eb51e36f541c2f75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1255, hash: 'd09e25c4528a216053b21d6793754932268a78c072d3822e84567714025781ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 24786, hash: '7edbc72eef279671f380f9815beb7791e30ae9518b95f7152fde5465a5e79498', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 25451, hash: 'da71e4195065222a19b35a545454b0c9d4382811b964aaa02b0871afab11bec2', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24912, hash: '2e8133bab38e8af1fbf8ca8371171a74beba7ff6127e680f9354ecf57c918524', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 25900, hash: '4491cc46eba27b329ecbcb7b8a2649777f8c07e9e932312bc7a0d877092e73f8', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24889, hash: '88d5fad3ba837974f426420ea3f1995b4d8de64a6345f0bea00e0ad73434db1c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 26267, hash: '111cbc25e63b7e116e2c1c40ed5575a67b6b715605e3308d27297b201df185dc', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-7Y3DVTCB.css': {size: 789, hash: 'WbPwZ/y/S1E', text: () => import('./assets-chunks/styles-7Y3DVTCB_css.mjs').then(m => m.default)}
  },
};
