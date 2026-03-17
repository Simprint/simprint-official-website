export type LocalApiDocItem = {
  slug: string;
  method: 'POST';
  path: string;
  category: 'browser-kernels' | 'workspaces' | 'groups' | 'tags' | 'environments' | 'proxies';
  summary: {
    en: string;
    zh: string;
  };
  requestExample: string;
  responseExample?: string;
};

export const LOCAL_API_DOCS: LocalApiDocItem[] = [
  {
    slug: 'browser-kernels-list',
    method: 'POST',
    path: '/browser-kernels/list',
    category: 'browser-kernels',
    summary: {
      en: 'List available browser kernels.',
      zh: '获取可用的浏览器内核列表。',
    },
    requestExample: '{}',
  },
  {
    slug: 'workspaces-list',
    method: 'POST',
    path: '/workspaces/list',
    category: 'workspaces',
    summary: {
      en: 'List available workspaces.',
      zh: '获取工作区列表。',
    },
    requestExample: '{}',
  },
  {
    slug: 'workspaces-get',
    method: 'POST',
    path: '/workspaces/get',
    category: 'workspaces',
    summary: {
      en: 'Get the current workspace.',
      zh: '获取当前工作区。',
    },
    requestExample: '{}',
  },
  {
    slug: 'workspaces-switch',
    method: 'POST',
    path: '/workspaces/switch',
    category: 'workspaces',
    summary: {
      en: 'Switch the current workspace.',
      zh: '切换当前工作区。',
    },
    requestExample: '{\n  "workspaceUuid": "YOUR_WORKSPACE_UUID"\n}',
  },
  {
    slug: 'groups-list',
    method: 'POST',
    path: '/groups/list',
    category: 'groups',
    summary: {
      en: 'List groups.',
      zh: '获取分组列表。',
    },
    requestExample: '{\n  "page": 1,\n  "page_size": 20\n}',
  },
  {
    slug: 'groups-delete',
    method: 'POST',
    path: '/groups/delete',
    category: 'groups',
    summary: {
      en: 'Delete a group.',
      zh: '删除分组。',
    },
    requestExample: '{\n  "uuid": "YOUR_GROUP_UUID"\n}',
  },
  {
    slug: 'tags-list',
    method: 'POST',
    path: '/tags/list',
    category: 'tags',
    summary: {
      en: 'List tags.',
      zh: '获取标签列表。',
    },
    requestExample: '{\n  "page": 1,\n  "page_size": 20\n}',
  },
  {
    slug: 'tags-delete',
    method: 'POST',
    path: '/tags/delete',
    category: 'tags',
    summary: {
      en: 'Delete a tag.',
      zh: '删除标签。',
    },
    requestExample: '{\n  "uuid": "YOUR_TAG_UUID"\n}',
  },
  {
    slug: 'environments-start',
    method: 'POST',
    path: '/environments/start',
    category: 'environments',
    summary: {
      en: 'Start one environment by UUID.',
      zh: '按 UUID 启动单个环境。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-stop',
    method: 'POST',
    path: '/environments/stop',
    category: 'environments',
    summary: {
      en: 'Stop one running environment by UUID.',
      zh: '按 UUID 关闭单个运行中的环境。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-batch-start',
    method: 'POST',
    path: '/environments/batch-start',
    category: 'environments',
    summary: {
      en: 'Batch start environments.',
      zh: '批量启动环境。',
    },
    requestExample:
      '{\n  "envUuids": ["ENV_UUID_1", "ENV_UUID_2"]\n}',
  },
  {
    slug: 'environments-batch-stop',
    method: 'POST',
    path: '/environments/batch-stop',
    category: 'environments',
    summary: {
      en: 'Batch stop environments.',
      zh: '批量关闭环境。',
    },
    requestExample:
      '{\n  "envUuids": ["ENV_UUID_1", "ENV_UUID_2"]\n}',
  },
  {
    slug: 'environments-list',
    method: 'POST',
    path: '/environments/list',
    category: 'environments',
    summary: {
      en: 'List environments.',
      zh: '获取环境列表。',
    },
    requestExample: '{\n  "page": 1,\n  "page_size": 20\n}',
  },
  {
    slug: 'environments-detail',
    method: 'POST',
    path: '/environments/detail',
    category: 'environments',
    summary: {
      en: 'Get one environment detail.',
      zh: '获取单个环境详情。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-batch-detail',
    method: 'POST',
    path: '/environments/batch-detail',
    category: 'environments',
    summary: {
      en: 'Get multiple environment details.',
      zh: '获取多个环境详情。',
    },
    requestExample:
      '{\n  "envUuids": ["ENV_UUID_1", "ENV_UUID_2"]\n}',
  },
  {
    slug: 'environments-delete',
    method: 'POST',
    path: '/environments/delete',
    category: 'environments',
    summary: {
      en: 'Delete one environment.',
      zh: '删除单个环境。',
    },
    requestExample: '{\n  "uuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-batch-delete',
    method: 'POST',
    path: '/environments/batch-delete',
    category: 'environments',
    summary: {
      en: 'Batch delete environments.',
      zh: '批量删除环境。',
    },
    requestExample:
      '{\n  "uuids": ["ENV_UUID_1", "ENV_UUID_2"]\n}',
  },
  {
    slug: 'environments-set-proxy',
    method: 'POST',
    path: '/environments/set-proxy',
    category: 'environments',
    summary: {
      en: 'Set proxy for one environment.',
      zh: '为单个环境设置代理。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "proxyUuid": "YOUR_PROXY_UUID"\n}',
  },
  {
    slug: 'environments-assign-tags',
    method: 'POST',
    path: '/environments/assign-tags',
    category: 'environments',
    summary: {
      en: 'Assign tags to one environment.',
      zh: '为单个环境分配标签。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "tagUuids": ["TAG_UUID_1"]\n}',
  },
  {
    slug: 'environments-remove-tag',
    method: 'POST',
    path: '/environments/remove-tag',
    category: 'environments',
    summary: {
      en: 'Remove one tag from one environment.',
      zh: '从单个环境移除一个标签。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "tagUuid": "YOUR_TAG_UUID"\n}',
  },
  {
    slug: 'environments-move-to-group',
    method: 'POST',
    path: '/environments/move-to-group',
    category: 'environments',
    summary: {
      en: 'Move one environment to a group.',
      zh: '将单个环境移动到分组。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "groupUuid": "YOUR_GROUP_UUID"\n}',
  },
  {
    slug: 'environments-batch-move-to-group',
    method: 'POST',
    path: '/environments/batch-move-to-group',
    category: 'environments',
    summary: {
      en: 'Batch move environments to a group.',
      zh: '批量将环境移动到分组。',
    },
    requestExample:
      '{\n  "envUuids": ["ENV_UUID_1"],\n  "groupUuid": "YOUR_GROUP_UUID"\n}',
  },
  {
    slug: 'environments-set-accounts',
    method: 'POST',
    path: '/environments/set-accounts',
    category: 'environments',
    summary: {
      en: 'Set accounts for one environment.',
      zh: '为单个环境设置账号。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "accounts": []\n}',
  },
  {
    slug: 'environments-batch-assign-tags',
    method: 'POST',
    path: '/environments/batch-assign-tags',
    category: 'environments',
    summary: {
      en: 'Batch assign tags to environments.',
      zh: '批量为环境分配标签。',
    },
    requestExample:
      '{\n  "envUuids": ["ENV_UUID_1"],\n  "tagUuids": ["TAG_UUID_1"]\n}',
  },
  {
    slug: 'environments-batch-remove-tags',
    method: 'POST',
    path: '/environments/batch-remove-tags',
    category: 'environments',
    summary: {
      en: 'Batch remove tags from environments.',
      zh: '批量移除环境标签。',
    },
    requestExample:
      '{\n  "envUuids": ["ENV_UUID_1"],\n  "tagUuids": ["TAG_UUID_1"]\n}',
  },
  {
    slug: 'environments-urls-list',
    method: 'POST',
    path: '/environments/urls/list',
    category: 'environments',
    summary: {
      en: 'List environment URLs.',
      zh: '获取环境 URL 列表。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-urls-delete',
    method: 'POST',
    path: '/environments/urls/delete',
    category: 'environments',
    summary: {
      en: 'Delete one environment URL.',
      zh: '删除环境 URL。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "id": 1\n}',
  },
  {
    slug: 'environments-urls-clear',
    method: 'POST',
    path: '/environments/urls/clear',
    category: 'environments',
    summary: {
      en: 'Clear all environment URLs.',
      zh: '清空环境的全部 URL。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-cookies-list',
    method: 'POST',
    path: '/environments/cookies/list',
    category: 'environments',
    summary: {
      en: 'List environment cookies.',
      zh: '获取环境 Cookie 列表。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-cookies-delete',
    method: 'POST',
    path: '/environments/cookies/delete',
    category: 'environments',
    summary: {
      en: 'Delete one environment cookie.',
      zh: '删除环境 Cookie。',
    },
    requestExample:
      '{\n  "envUuid": "YOUR_ENV_UUID",\n  "id": 1\n}',
  },
  {
    slug: 'environments-cookies-clear',
    method: 'POST',
    path: '/environments/cookies/clear',
    category: 'environments',
    summary: {
      en: 'Clear all environment cookies.',
      zh: '清空环境的全部 Cookie。',
    },
    requestExample: '{\n  "envUuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-recycle-bin-list',
    method: 'POST',
    path: '/environments/recycle-bin/list',
    category: 'environments',
    summary: {
      en: 'List recycle bin environments.',
      zh: '获取回收站环境列表。',
    },
    requestExample: '{\n  "page": 1,\n  "page_size": 20\n}',
  },
  {
    slug: 'environments-recycle-bin-restore',
    method: 'POST',
    path: '/environments/recycle-bin/restore',
    category: 'environments',
    summary: {
      en: 'Restore one environment from recycle bin.',
      zh: '从回收站恢复单个环境。',
    },
    requestExample: '{\n  "uuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-recycle-bin-batch-restore',
    method: 'POST',
    path: '/environments/recycle-bin/batch-restore',
    category: 'environments',
    summary: {
      en: 'Batch restore environments from recycle bin.',
      zh: '从回收站批量恢复环境。',
    },
    requestExample:
      '{\n  "uuids": ["ENV_UUID_1", "ENV_UUID_2"]\n}',
  },
  {
    slug: 'environments-recycle-bin-permanent-delete',
    method: 'POST',
    path: '/environments/recycle-bin/permanent-delete',
    category: 'environments',
    summary: {
      en: 'Permanently delete one environment.',
      zh: '永久删除单个环境。',
    },
    requestExample: '{\n  "uuid": "YOUR_ENV_UUID"\n}',
  },
  {
    slug: 'environments-recycle-bin-batch-permanent-delete',
    method: 'POST',
    path: '/environments/recycle-bin/batch-permanent-delete',
    category: 'environments',
    summary: {
      en: 'Batch permanently delete environments.',
      zh: '批量永久删除环境。',
    },
    requestExample:
      '{\n  "uuids": ["ENV_UUID_1", "ENV_UUID_2"]\n}',
  },
  {
    slug: 'proxies-list',
    method: 'POST',
    path: '/proxies/list',
    category: 'proxies',
    summary: {
      en: 'List proxies.',
      zh: '获取代理列表。',
    },
    requestExample: '{\n  "page": 1,\n  "page_size": 20\n}',
  },
  {
    slug: 'proxies-detail',
    method: 'POST',
    path: '/proxies/detail',
    category: 'proxies',
    summary: {
      en: 'Get one proxy detail.',
      zh: '获取单个代理详情。',
    },
    requestExample: '{\n  "uuid": "YOUR_PROXY_UUID"\n}',
  },
  {
    slug: 'proxies-delete',
    method: 'POST',
    path: '/proxies/delete',
    category: 'proxies',
    summary: {
      en: 'Delete one proxy.',
      zh: '删除单个代理。',
    },
    requestExample: '{\n  "uuid": "YOUR_PROXY_UUID"\n}',
  },
  {
    slug: 'proxies-batch-delete',
    method: 'POST',
    path: '/proxies/batch-delete',
    category: 'proxies',
    summary: {
      en: 'Batch delete proxies.',
      zh: '批量删除代理。',
    },
    requestExample:
      '{\n  "uuids": ["PROXY_UUID_1", "PROXY_UUID_2"]\n}',
  },
  {
    slug: 'proxies-batch-import',
    method: 'POST',
    path: '/proxies/batch-import',
    category: 'proxies',
    summary: {
      en: 'Batch import proxies.',
      zh: '批量导入代理。',
    },
    requestExample: '{\n  "items": []\n}',
  },
];

export const LOCAL_API_DOCS_BY_SLUG = Object.fromEntries(
  LOCAL_API_DOCS.map((item) => [item.slug, item]),
) as Record<string, LocalApiDocItem>;

export const LOCAL_API_DOC_GROUPS = [
  {
    key: 'browser-kernels',
    title: { en: 'Browser Kernels', zh: '浏览器内核' },
  },
  {
    key: 'workspaces',
    title: { en: 'Workspaces', zh: '工作区' },
  },
  {
    key: 'groups',
    title: { en: 'Groups', zh: '分组' },
  },
  {
    key: 'tags',
    title: { en: 'Tags', zh: '标签' },
  },
  {
    key: 'environments',
    title: { en: 'Environments', zh: '环境' },
  },
  {
    key: 'proxies',
    title: { en: 'Proxies', zh: '代理' },
  },
] as const;
