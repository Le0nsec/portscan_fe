const i18n = {
  'en-US': {
    'stepForm.title': 'Create a scan form',
    'stepForm.submit': 'Submit',
    'stepForm.reset': 'Reset',

    'stepForm.title.basicInfo': 'Scan info',
    'stepForm.desc.basicInfo': 'Fill scan info',
    'stepForm.title.channel': 'Channel Information',
    'stepForm.desc.channel': 'Enter detailed channel content',
    'stepForm.title.created': 'Complete creation',
    'stepForm.desc.created': 'Created successfully',

    'stepForm.basicInfo.host': 'Host Range',
    'stepForm.basicInfo.host.required': 'Please enter the range of hosts to be scanned',
    'stepForm.basicInfo.host.placeholder':
      'format: 127.0.0.1 | 192.168.1.1/24 | 192.168.1.1-5',
    
    'stepForm.basicInfo.port': 'Port Range',
    'stepForm.basicInfo.port.required': 'Please enter the range of ports to be scanned',
    'stepForm.basicInfo.port.placeholder':
      'format: 1-65535 | 21,22,25 | 8080',

    'stepForm.basicInfo.threads': 'threads',
    'stepForm.basicInfo.timeout': 'timeout',
    
    'stepForm.created.success.title': 'Created successfully',
    'stepForm.created.success.desc': 'Scan created successfully',
    'stepForm.created.success.again': 'Create again',

    'stepForm.created.extra.title': 'Scan creation success description',
    'stepForm.created.extra.desc':
      'The scan will run in the background after it is successfully created, and the scan results will be automatically updated to the database after the scan is completed, and you can view the scan results in the scan records. ',
    'stepForm.created.extra.detail': 'Details',
  },
  'zh-CN': {
    'stepForm.title': '创建扫描信息表单',
    'stepForm.submit': '提交',
    'stepForm.reset': '重置',

    'stepForm.title.basicInfo': '扫描信息',
    'stepForm.desc.basicInfo': '填写扫描信息',
    'stepForm.title.channel': '输入渠道信息',
    'stepForm.desc.channel': '输入详细的渠道内容',
    'stepForm.title.created': '完成创建',
    'stepForm.desc.created': '创建成功',

    'stepForm.basicInfo.host': '主机范围',
    'stepForm.basicInfo.host.required': '请输入需要扫描的主机范围',
    'stepForm.basicInfo.host.placeholder': '格式为：127.0.0.1 | 192.168.1.1/24 | 192.168.1.1-5',

    'stepForm.basicInfo.port': '端口范围',
    'stepForm.basicInfo.port.required': '请输入需要扫描的端口范围',
    'stepForm.basicInfo.port.placeholder': '格式为：1-65535 | 21,22,25 | 8080',

    'stepForm.basicInfo.threads': '线程数',
    'stepForm.basicInfo.timeout': '超时时间',

    'stepForm.created.success.title': '创建成功',
    'stepForm.created.success.desc': '扫描创建成功',
    'stepForm.created.success.again': '再次创建',

    'stepForm.created.extra.title': '扫描创建成功说明',
    'stepForm.created.extra.desc':
      '扫描创建成功后会在后台运行，扫描结果会在扫描完成后自动更新到数据库中，您可以在扫描记录中查看扫描结果。',
    'stepForm.created.extra.detail': '查看详情',
  },
};

export default i18n;
