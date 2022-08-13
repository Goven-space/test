{
    "componentName": "Page",
        "id": "node_dockcviv8fo1",
            "props": {
        "ref": "outerView",
            "style": {
            "height": "100%"
        }
    },
    "fileName": "/",
        "dataSource": {
        "list": [
            {
                "type": "axios",
                "isInit": false,
                "options": {
                    "params": {
                        "rows": "25"
                    },
                    "method": "POST",
                    "isCors": true,
                    "timeout": 5000,
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "uri": "/bpm/r?wf_num=D_S010_J001&wf_gridnum=V_S010_G001"
                },
                "id": "getRuleList",
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options) { \r\n  options.appType = \"bpm\"\r\n  return options;\r\n }"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res) { \r\n  const { status ,data} = res\r\n  if (status===200){\r\n    const list = data.rows.map(item => {\r\n      item.id = item.WF_OrUnid\r\n      return item\r\n    })\r\n    this.setState({\r\n      ruleList: list,\r\n      total:data.total\r\n    })\r\n  }\r\n }"
                }
            },
            {
                "id": "getAppList",
                "type": "axios",
                "options": {
                    "uri": "/bpm/json",
                    "method": "GET",
                    "isCors": true,
                    "params": {
                        "wf_num": "D_S001_J020",
                        "wf_gridnum": "V_S001_G024"
                    },
                    "timeout": 5000,
                    "headers": {}
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options){\r\n  options.appType = 'bpm'\r\n  return options\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  const {status,data} = res\r\n  if(status===200){\r\n    const list = data.rows.map(item =>{\r\n      return { value: item.WF_Appid, label: item.AppName}\r\n    })\r\n    this.setState({\r\n      appList: list\r\n    })\r\n  }\r\n}"
                },
                "isInit": false
            },
            {
                "id": "dealWithRule",
                "type": "axios",
                "options": {
                    "uri": "/bpm/readgridaction",
                    "method": "POST",
                    "isCors": true,
                    "params": {
                        "wf_num": "V_S010_G001"
                    },
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "timeout": 5000
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  const {status,data} = res\r\n  if(status===200){\r\n    Next.Message.success(data.msg)\r\n    this.dataSourceMap.getRuleList.load({page:1})\r\n  }\r\n}"
                },
                "isInit": false
            },
            {
                "id": "ruleDownload",
                "type": "axios",
                "options": {
                    "uri": "/bpm/rule?wf_num=R_S001_B019",
                    "method": "POST",
                    "isCors": true,
                    "params": {
                        "GridNum": "V_S010_G001"
                    },
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "timeout": 5000
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options){\r\n  options.appType = 'bpm'\r\n  return options\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  console.log(res)\r\n}"
                },
                "isInit": false
            },
            {
                "type": "axios",
                "isInit": false,
                "options": {
                    "params": {
                        "rows": "25",
                        "page": {
                            "type": "JSExpression",
                            "value": "this.state.page"
                        }
                    },
                    "method": "POST",
                    "isCors": true,
                    "timeout": 5000,
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "uri": {
                        "type": "JSExpression",
                        "value": "this.state.loadRuleURL"
                    }
                },
                "id": "getChildRuleList",
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options) { \r\n  options.appType = 'bpm'  \r\n  return options; \r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res) { \r\n  const {status,data} = res\r\n  if(status ===200){\r\n    const list = data.rows.map(item => {\r\n      item.id = item.WF_OrUnid\r\n      return item\r\n    })\r\n    this.setState({\r\n      ruleList: list,\r\n      total: data.total\r\n    })\r\n  }\r\n}"
                }
            },
            {
                "id": "addRule",
                "type": "axios",
                "options": {
                    "uri": "/bpm/r",
                    "method": "POST",
                    "isCors": true,
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "params": {},
                    "timeout": 5000
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function (options){\r\n  options.appType = 'bpm'\r\n  return options\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  const {status ,data} = res\r\n  if(status === 200){\r\n    Next.Message.success(data.msg)\r\n    this.dataSourceMap.getRuleList.load({page:1})\r\n  }\r\n}"
                },
                "isInit": false
            },
            {
                "id": "getRuleCategory",
                "type": "axios",
                "options": {
                    "uri": "/bpm/navtree",
                    "method": "GET",
                    "isCors": true,
                    "params": {
                        "wf_num": "T_S010_001"
                    },
                    "timeout": 5000,
                    "headers": {}
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options){\r\n  options.appType =\"bpm\"\r\n  return options\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  const dataTransform = (data) => {\r\n    let treeData = []\r\n    data.forEach(item => {\r\n      treeData.push({\r\n        label: item.text,\r\n        selectable: item.id ===\"001\" || (item.state === \"open\" && !item.children),\r\n        key: item.id,\r\n        value:item.id,\r\n        children: item.children && dataTransform(item.children)\r\n      })\r\n    })\r\n    return treeData\r\n  }\r\n  const {status ,data} = res\r\n  if(status === 200){\r\n    const list = dataTransform(data)\r\n    console.log(list)\r\n    this.setState({\r\n      ruleCategory:list\r\n    })\r\n  }\r\n}"
                },
                "isInit": false
            },
            {
                "id": "getRoleList",
                "type": "axios",
                "options": {
                    "uri": "/bpm/rule",
                    "method": "GET",
                    "params": {
                        "wf_num": "R_S006_B001",
                        "WF_Appid": "S029",
                        "default": "1"
                    },
                    "isCors": true,
                    "timeout": 5000,
                    "headers": {}
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options) {\r\n  options.appType = \"bpm\"\r\n  return options\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  const {status,data} = res\r\n  if(status === 200){\r\n    const list = data.map(item => {\r\n      return { label: item.RoleName, value: item.RoleNumber}\r\n    })\r\n    this.setState({\r\n      roleList:list\r\n    })\r\n  }\r\n}"
                },
                "isInit": false
            },
            {
                "id": "editRule",
                "type": "axios",
                "options": {
                    "uri": "/bpm/rule?wf_num=R_S001_B002",
                    "method": "POST",
                    "isCors": true,
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "params": {},
                    "timeout": 5000
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function(options){\r\n  options.appType = \"bpm\"\r\n  return options\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function(res){\r\n  const {status,data} = res\r\n  if(status===200){\r\n    Next.Message.success(data.msg)\r\n    this.dataSourceMap.getRuleList.load({ page: 1 })\r\n  }\r\n}"
                },
                "isInit": false
            },
            {
                "id": "getRuleClassify",
                "type": "axios",
                "options": {
                    "uri": "/bpm/rule?wf_num=R_S001_B027&treeid=T_S010_001&ShowRoot=0",
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "params": {},
                    "isCors": true,
                    "timeout": 5000
                },
                "willFetch": {
                    "type": "JSFunction",
                    "value": "function requsetIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
                },
                "dataHandler": {
                    "type": "JSFunction",
                    "value": "function resolve(res){\r\n  const {status, data} = res\r\n  if(status === 200){\r\n    const list = this.treeDataTransform(data)\r\n    this.setState({ ruleClassifyList: list})\r\n    console.log(list)\r\n  }\r\n}"
                },
                "isInit": false
            }
        ]
    },
    "state": {
        "tableColumn": {
            "type": "JSExpression",
                "value": "[{\n  title: '规则名',\n  dataIndex: 'RuleName',\n  key: 'RuleName',\n  render: (text, index, record) => {\n    return /*#__PURE__*/React.createElement(\"span\", {\n      onClick: () => this.onClick_showRuleConfig(record),\n      style: {\n        color: '#0fb3b4'\n      }\n    }, text);\n  }\n}, {\n  title: '规则编号',\n  dataIndex: 'RuleNum',\n  key: 'RuleNum'\n}, {\n  title: '所属应用',\n  dataIndex: 'WF_Appid',\n  key: 'WF_Appid'\n}, {\n  title: '所属分类',\n  dataIndex: 'FolderName',\n  key: 'FolderName'\n}, {\n  title: '编译',\n  dataIndex: 'CompileFlag',\n  key: 'CompileFlag'\n}, {\n  title: '绑定角色',\n  dataIndex: 'Roles',\n  key: 'Roles'\n}, {\n  title: '添加者',\n  dataIndex: 'WF_AddName_CN',\n  key: 'WF_AddName_CN'\n}, {\n  title: '单例',\n  dataIndex: 'Singleton',\n  key: 'Singleton'\n}, {\n  title: '版本',\n  dataIndex: 'WF_Version',\n  key: 'WF_Version'\n}, {\n  title: '最后更新',\n  dataIndex: 'WF_LastModified',\n  key: 'WF_LastModified'\n}, {\n  title: '状态',\n  dataIndex: 'Status',\n  key: 'Status'\n}, {\n  title: '运行',\n  dataIndex: 'run',\n  render: record => /*#__PURE__*/React.createElement(\"span\", {\n    style: {\n      color: '#0fb3b4'\n    }\n  }, \"\\u8FD0\\u884C\")\n}]"
        },
        "classifyColumns": {
            "type": "JSExpression",
                "value": "[{\n  title: '分类名',\n  dataKey: \"text\"\n}, {\n  title: '分类唯一Id',\n  dataKey: \"WF_OrUnid\"\n}]"
        },
        "modalState": {
            "type": "JSExpression",
                "value": "{\n  'del': {\n    title: '删除规则',\n    content: '确定要删除选中的规则吗?'\n  },\n  'copy': {\n    title: '拷贝',\n    content: '确定要拷贝选中的规则吗?'\n  },\n  'pack': {\n    title: '下载',\n    content: '确定要下载选中的规则吗?'\n  },\n  'stop': {\n    title: '停止',\n    content: '确定要停止选中的文档吗?'\n  },\n  'publish': {\n    title: '发布',\n    content: '确定要发布选中的文档吗'\n  },\n  'delClassify': {\n    title: '删除分类',\n    content: '确定要删除选中的分类吗?'\n  },\n  'unlock': {\n    title: '解除锁定',\n    content: '确定要解除锁定该文档吗?'\n  }\n}"
        },
        "editModalShow": {
            "type": "JSExpression",
                "value": "false"
        },
        "showAddRule": {
            "type": "JSExpression",
                "value": "false"
        },
        "editModalTyle": {
            "type": "JSExpression",
                "value": "'del'"
        },
        "showImportField": {
            "type": "JSExpression",
                "value": "false"
        },
        "showRuleConfig": {
            "type": "JSExpression",
                "value": "false"
        },
        "classifyManageShow": {
            "type": "JSExpression",
                "value": "false"
        },
        "addClassifyShow": {
            "type": "JSExpression",
                "value": "false"
        },
        "selectedKeys": {
            "type": "JSExpression",
                "value": "[]"
        },
        "page": {
            "type": "JSExpression",
                "value": "1"
        },
        "total": {
            "type": "JSExpression",
                "value": "0"
        },
        "rows": {
            "type": "JSExpression",
                "value": "20"
        },
        "ruleList": {
            "type": "JSExpression",
                "value": "[]"
        },
        "ruleCategory": {
            "type": "JSExpression",
                "value": "[]"
        },
        "appId": {
            "type": "JSExpression",
                "value": "'S029'"
        },
        "appList": {
            "type": "JSExpression",
                "value": "[]"
        },
        "ruleId": {
            "type": "JSExpression",
                "value": "''"
        },
        "roleList": {
            "type": "JSExpression",
                "value": "[]"
        },
        "allowCopy": {
            "type": "JSExpression",
                "value": "true"
        },
        "allowDel": {
            "type": "JSExpression",
                "value": "true"
        },
        "selectedRows": {
            "type": "JSExpression",
                "value": "[]"
        },
        "loadRuleURL": {
            "type": "JSExpression",
                "value": "''"
        },
        "addRuleField": {
            "type": "JSExpression",
                "value": "new Next.Field(this)"
        },
        "ruleConfigField": {
            "type": "JSExpression",
                "value": "new Next.Field(this)"
        },
        "currentRuleConfig": {
            "type": "JSExpression",
                "value": "{}"
        },
        "searchValue": {
            "type": "JSExpression",
                "value": "''"
        },
        "ruleClassifyList": {
            "type": "JSExpression",
                "value": "[]"
        },
        "classifyDelDisable": {
            "type": "JSExpression",
                "value": "true"
        },
        "classifyListSelectedKeys": {
            "type": "JSExpression",
                "value": "''"
        }
    },
    "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
        "lifeCycles": {
        "componentDidMount": {
            "type": "JSFunction",
                "value": "function componentDidMount() {\n  this.dataSourceMap.getRuleList.load({\n    page: 1\n  });\n  this.dataSourceMap.getAppList.load();\n  this.dataSourceMap.getRuleCategory.load();\n  this.dataSourceMap.getRuleClassify.load();\n}"
        },
        "componentWillUnmount": {
            "type": "JSFunction",
                "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
        }
    },
    "methods": {
        "treeDataTransform": {
            "type": "JSFunction",
                "value": "function treeDataTransform(data, type) {\n  data = data.filter(item => !['参与者规则配置', '表单规则'].includes(item.text));\n  let arr = data.map(item => {\n    return { ...item,\n      key: item.id,\n      value: item.id,\n      id: item.WF_OrUnid,\n      label: item.text,\n      title: item.text,\n      isLeaf: item.state === 'open' && !item.children,\n      icon: ({\n        isLeaf,\n        expanded\n      }) => !isLeaf && (expanded ? /*#__PURE__*/React.createElement(icons.FolderOpenOutlined, null) : /*#__PURE__*/React.createElement(icons.FolderOutlined, null)),\n      children: item.children && this.treeDataTransform(item.children, 'tree')\n    };\n  });\n  return arr;\n}"
        },
        "showTotal": {
            "type": "JSFunction",
                "value": "function showTotal(total, range) {\n  return `${range[0]}-${range[1]} of ${total} items`;\n}"
        },
        "editModalSubmit": {
            "type": "JSFunction",
                "value": "function editModalSubmit() {\n  const type = this.state.editModalTyle;\n  const keys = this.state.selectedKeys.join(',');\n\n  if (type === 'del') {\n    this.dataSourceMap.editProcess.load({\n      WF_Action: 'del',\n      WF_OrUnid: keys,\n      wf_num: 'V_S002_G001'\n    });\n  } else if (type === 'copy') {\n    this.dataSourceMap.editProcess.load({\n      WF_Action: 'copy',\n      WF_OrUnid: keys,\n      wf_num: 'V_S002_G001'\n    });\n  }\n\n  this.closeEditModal();\n}"
        },
        "closeEditModal": {
            "type": "JSFunction",
                "value": "function closeEditModal() {\n  this.setState({\n    editModalShow: false\n  });\n}"
        },
        "onClick_showAddRule": {
            "type": "JSFunction",
                "value": "function onClick_showAddRule() {\n  this.setState({\n    showAddRule: true\n  }); // this.dataSourceMap.getRuleId.load()\n}"
        },
        "onDeleted": {
            "type": "JSFunction",
                "value": "function onDeleted() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'del'\n  });\n}"
        },
        "onCopy": {
            "type": "JSFunction",
                "value": "function onCopy() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'copy'\n  });\n}"
        },
        "handleClassifyManageShow": {
            "type": "JSFunction",
                "value": "function handleClassifyManageShow() {\n  this.setState({\n    classifyManageShow: true\n  });\n}"
        },
        "closeClassifyManage": {
            "type": "JSFunction",
                "value": "function closeClassifyManage() {\n  this.setState({\n    classifyManageShow: false\n  });\n}"
        },
        "confirmDel": {
            "type": "JSFunction",
                "value": "function confirmDel() {\n  let ids = '';\n  this.state.selectedRows.forEach(item => {\n    ids && (ids += ',');\n    ids += item.WF_OrUnid;\n  });\n  this.dataSourceMap.dealWithRule.load({\n    \"WF_Action\": 'del',\n    'WF_OrUnid': ids\n  });\n  this.setState({\n    allowDel: true,\n    allowCopy: true\n  });\n  this.closeDelConfirm();\n}"
        },
        "confirmCopy": {
            "type": "JSFunction",
                "value": "function confirmCopy() {\n  let id = this.state.selectedRows[0].WF_OrUnid;\n  this.dataSourceMap.dealWithRule.load({\n    \"WF_Action\": 'copy',\n    'WF_OrUnid': id\n  });\n  this.closeCopyConfirm();\n}"
        },
        "onDownload": {
            "type": "JSFunction",
                "value": "function onDownload() {\n  this.setState({\n    showDownloadConfirm: true\n  });\n}"
        },
        "onImportField": {
            "type": "JSFunction",
                "value": "function onImportField() {\n  this.setState({\n    showImportField: true\n  });\n}"
        },
        "confirmDownload": {
            "type": "JSFunction",
                "value": "function confirmDownload() {\n  let ids = '';\n  this.state.selectedRows.forEach(item => {\n    ids && (ids += ',');\n    ids += item.WF_OrUnid;\n  });\n  this.dataSourceMap.ruleDownload.load({\n    \"WF_OrUnid\": ids\n  });\n  this.closeDownloadConfirm();\n}"
        },
        "closeImportField": {
            "type": "JSFunction",
                "value": "function closeImportField() {\n  this.setState({\n    showImportField: false\n  });\n}"
        },
        "toImport": {
            "type": "JSFunction",
                "value": "function toImport() {\n  this.closeImportField();\n}"
        },
        "closeDownloadConfirm": {
            "type": "JSFunction",
                "value": "function closeDownloadConfirm() {\n  this.setState({\n    showDownloadConfirm: false\n  });\n}"
        },
        "closeCopyConfirm": {
            "type": "JSFunction",
                "value": "function closeCopyConfirm() {\n  this.setState({\n    showCopyConfirm: false\n  });\n}"
        },
        "closeDelConfirm": {
            "type": "JSFunction",
                "value": "function closeDelConfirm() {\n  this.setState({\n    showDelConfirm: false\n  });\n}"
        },
        "closeAddRule": {
            "type": "JSFunction",
                "value": "function closeAddRule() {\n  this.setState({\n    showAddRule: false\n  });\n}"
        },
        "onSelect": {
            "type": "JSFunction",
                "value": "function onSelect(value) {\n  value = value ? value : [];\n  this.setState({\n    selectedKeys: value\n  });\n}"
        },
        "onAppIdChange": {
            "type": "JSFunction",
                "value": "function onAppIdChange(id) {\n  this.setState({\n    appId: id\n  }); // this.dataSourceMap.getRuleId.load({ WF_Appid:id})\n}"
        },
        "addRuleSubmit": {
            "type": "JSFunction",
                "value": "function addRuleSubmit(values) {\n  const data = { ...values\n  };\n  data.wf_num = \"F_S001_A041\";\n  data.CompileFlag = values.CompileFlag ? \"1\" : \"\";\n  data.Folderid = \"\";\n  data.WF_DocUnid = randomString();\n  data.WF_FormNumber = \"F_S001_A041\";\n  data.WF_Action = \"save\";\n  data.WF_Appid = values.WF_Appid.value;\n  this.dataSourceMap.addRule.load({ ...data\n  });\n  this.closeAddRule();\n}"
        },
        "randomString": {
            "type": "JSFunction",
                "value": "function randomString() {\n  let len = 36;\n  let chars = 'abcdefhijkmnprstwxyz2345678';\n  let maxPos = chars.length;\n  let character = '';\n\n  for (let i = 0; i < len; i++) {\n    character += chars.charAt(Math.floor(Math.random() * maxPos));\n  }\n\n  return character;\n}"
        },
        "onClick_showRuleConfig": {
            "type": "JSFunction",
                "value": "function onClick_showRuleConfig(record) {\n  this.dataSourceMap.getRoleList.load();\n  this.setState({\n    showRuleConfig: true,\n    currentRuleConfig: { ...record\n    }\n  });\n  const {\n    __fields__,\n    id,\n    ...formData\n  } = record;\n  console.log(formData);\n  formData.config = [];\n  formData.Roles = formData.Roles.split(\",\");\n  formData.Singleton && formData.config.push(\"Singleton\");\n  formData.WF_NoUpdate && formData.config.push(\"WF_NoUpdate\");\n  formData.ClassPath = `cn.linkey.rulelib.${formData.WF_Appid}${formData.RuleNum}`;\n  this.state.ruleConfigField.setValues({ ...formData\n  });\n}"
        },
        "closeShowRuleConfig": {
            "type": "JSFunction",
                "value": "function closeShowRuleConfig() {\n  this.setState({\n    showRuleConfig: false\n  });\n}"
        },
        "ruleConfigSubmit": {
            "type": "JSFunction",
                "value": "function ruleConfigSubmit() {\n  console.log(this.state.ruleConfigField.getValues());\n  const {\n    WF_OrUnid,\n    config,\n    WF_LastModified,\n    WF_AddName_CN,\n    FolderName,\n    ...formData\n  } = this.state.ruleConfigField.getValues();\n  config === null || config === void 0 ? void 0 : config.forEach(item => {\n    formData[item] = 1;\n  });\n  formData.Roles = formData.Roles.join(\",\");\n  formData.WF_DocUnid = WF_OrUnid;\n  formData.WF_KeyFdName = \"RuleNum\";\n  formData.WF_RuleFdName = \"RuleName\";\n  formData.WF_TableName = \"BPM_RuleList\";\n  this.dataSourceMap.editRule.load({ ...formData\n  });\n  this.closeShowRuleConfig();\n}"
        },
        "loadRuleList": {
            "type": "JSFunction",
                "value": "function loadRuleList(key, row, record) {\n  console.log(row);\n  console.log(record);\n  let url = \"\";\n\n  if (!key || key[0] === '001') {\n    url = '/bpm/r?wf_num=D_S010_J001&wf_gridnum=V_S010_G001';\n  } else {\n    url = `/bpm/r?wf_num=D_S010_J002&wf_gridnum=V_S010_G002&Folderid=${key[0]}`;\n  }\n\n  this.setState({\n    loadRuleURL: url\n  }, () => {\n    this.dataSourceMap.getChildRuleList.load();\n  });\n}"
        },
        "onPageChange": {
            "type": "JSFunction",
                "value": "function onPageChange(value) {\n  this.setState({\n    page: value\n  });\n  this.dataSourceMap.getRuleList.load({\n    page: value,\n    searchStr: this.state.searchValue\n  });\n}"
        },
        "onSearch": {
            "type": "JSFunction",
                "value": "function onSearch(value) {\n  this.setState({\n    searchValue: value\n  });\n  this.dataSourceMap.getRuleList.load({\n    page: 1,\n    searchStr: value\n  });\n}"
        },
        "onClassifyListSelect": {
            "type": "JSFunction",
                "value": "function onClassifyListSelect(select, row, record) {\n  if (record.length == 1) {\n    this.setState({\n      classifyDelDisable: false,\n      classifyListSelectedKeys: record[0].WF_OrUnid\n    });\n  } else {\n    this.setState({\n      classifyDelDisable: true\n    });\n  }\n}"
        },
        "handleAddClassifyShow": {
            "type": "JSFunction",
                "value": "function handleAddClassifyShow() {\n  this.setState({\n    addClassifyShow: true\n  });\n}"
        }
    },
    "originCode": "class LowcodeComponent extends Component {\n  state = {\n    tableColumn: [\n      {\n        title: '规则名',\n        dataIndex: 'RuleName',\n        key: 'RuleName',\n        render: (text, index, record) => {\n          return (\n            <span \n              onClick={() => this.onClick_showRuleConfig(record)}\n              style={{ color: '#0fb3b4' }}\n            >\n              {text}\n            </span>\n          )\n        }\n      },\n      {\n        title: '规则编号',\n        dataIndex: 'RuleNum',\n        key: 'RuleNum'\n      },\n      {\n        title: '所属应用',\n        dataIndex: 'WF_Appid',\n        key: 'WF_Appid'\n      },\n      {\n        title: '所属分类',\n        dataIndex: 'FolderName',\n        key: 'FolderName',\n      },\n      {\n        title: '编译',\n        dataIndex: 'CompileFlag',\n        key: 'CompileFlag',\n      },\n      {\n        title: '绑定角色',\n        dataIndex: 'Roles',\n        key: 'Roles',\n      },\n      {\n        title: '添加者',\n        dataIndex: 'WF_AddName_CN',\n        key: 'WF_AddName_CN',\n      },\n      {\n        title: '单例',\n        dataIndex: 'Singleton',\n        key: 'Singleton',\n      },\n      {\n        title: '版本',\n        dataIndex: 'WF_Version',\n        key: 'WF_Version',\n      },\n      {\n        title: '最后更新',\n        dataIndex: 'WF_LastModified',\n        key: 'WF_LastModified',\n      },\n      {\n        title: '状态',\n        dataIndex: 'Status',\n        key: 'Status',\n      },\n      {\n        title: '运行',\n        dataIndex: 'run',\n        render: (record) =>\n          <span style={{ color: '#0fb3b4' }}>运行</span>\n      }\n    ],\n    classifyColumns: [\n      {\n        title: '分类名',\n        dataKey: \"text\",\n      },\n      {\n        title: '分类唯一Id',\n        dataKey: \"WF_OrUnid\"\n      }\n    ],\n    modalState: {\n      'del': {\n        title: '删除规则',\n        content: '确定要删除选中的规则吗?'\n      },\n      'copy': {\n        title: '拷贝',\n        content: '确定要拷贝选中的规则吗?'\n      },\n      'pack': {\n        title: '下载',\n        content: '确定要下载选中的规则吗?'\n      },\n      'stop': {\n        title: '停止',\n        content: '确定要停止选中的文档吗?'\n      },\n      'publish': {\n        title: '发布',\n        content: '确定要发布选中的文档吗'\n      },\n      'delClassify': {\n        title: '删除分类',\n        content: '确定要删除选中的分类吗?'\n      },\n      'unlock': {\n        title: '解除锁定',\n        content: '确定要解除锁定该文档吗?'\n      }\n    },\n    editModalShow: false,\n    showAddRule: false,\n    editModalTyle: 'del',\n    showImportField: false,\n    showRuleConfig: false,\n    classifyManageShow: false,\n    addClassifyShow: false,\n    selectedKeys: [],\n    page: 1,\n    total: 0,\n    rows: 20,\n    ruleList: [],\n    ruleCategory: [],\n    appId: 'S029',\n    appList: [],\n    ruleId: '',\n    roleList: [],\n    allowCopy: true,\n    allowDel: true,\n    selectedRows: [],\n    loadRuleURL: '',\n    addRuleField: new Next.Field(this),\n    ruleConfigField: new Next.Field(this),\n    currentRuleConfig: {},\n    searchValue: '',\n    ruleClassifyList: [],\n    classifyDelDisable: true,\n    classifyListSelectedKeys: '',\n\n  } \n\n  componentDidMount() {\n    this.dataSourceMap.getRuleList.load({page:1})\n    this.dataSourceMap.getAppList.load()\n    this.dataSourceMap.getRuleCategory.load()\n    this.dataSourceMap.getRuleClassify.load()\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n\n//========================================\n\n  treeDataTransform(data, type) {\n    data = data.filter(item => !['参与者规则配置','表单规则'].includes(item.text))\n    let arr = data.map(item => {\n      return {\n        ...item,\n        key: item.id,\n        value: item.id,\n        id: item.WF_OrUnid,\n        label: item.text,\n        title: item.text,\n        isLeaf: item.state === 'open' && !item.children,\n        icon: ({ isLeaf, expanded }) => !isLeaf && (expanded ? <icons.FolderOpenOutlined /> : <icons.FolderOutlined />),\n        children: item.children && this.treeDataTransform(item.children, 'tree')\n      }\n    })\n    return arr\n  }\n\n  showTotal(total, range) {\n    return `${range[0]}-${range[1]} of ${total} items`\n  }\n\n  editModalSubmit() {\n    const type = this.state.editModalTyle\n    const keys = this.state.selectedKeys.join(',')\n    if (type === 'del') {\n      this.dataSourceMap.editProcess.load({ WF_Action: 'del', WF_OrUnid: keys, wf_num: 'V_S002_G001' })\n    } else if (type === 'copy') {\n      this.dataSourceMap.editProcess.load({ WF_Action: 'copy', WF_OrUnid: keys, wf_num: 'V_S002_G001' })\n    } \n    this.closeEditModal()\n  }\n\n  closeEditModal() {\n    this.setState({ editModalShow: false })\n  }\n\n  onClick_showAddRule(){\n    this.setState({ \n      showAddRule:true\n    })\n    // this.dataSourceMap.getRuleId.load()\n  }\n\n  onDeleted(){\n    this.setState({ editModalShow: true, editModalTyle: 'del' })\n  }\n\n  onCopy() {\n    this.setState({ editModalShow: true, editModalTyle: 'copy' })\n  }\n\n  handleClassifyManageShow() {\n    this.setState({ classifyManageShow: true })\n  }\n\n\n  closeClassifyManage() {\n    this.setState({ classifyManageShow: false })\n  }\n\n  confirmDel(){\n    let ids = ''\n    this.state.selectedRows.forEach(item => {\n      ids && (ids += ',')\n      ids += item.WF_OrUnid\n    })\n    this.dataSourceMap.dealWithRule.load({ \"WF_Action\":'del', 'WF_OrUnid' : ids})\n    this.setState({\n      allowDel: true,\n      allowCopy: true\n    })\n    this.closeDelConfirm()\n  }\n\n  \n\n  confirmCopy(){\n    let id = this.state.selectedRows[0].WF_OrUnid\n    this.dataSourceMap.dealWithRule.load({ \"WF_Action\": 'copy', 'WF_OrUnid': id })\n    this.closeCopyConfirm()\n  }\n\n  onDownload(){\n    this.setState({\n      showDownloadConfirm:true\n    })\n  }\n\n  onImportField(){\n    this.setState({\n      showImportField:true\n    })\n  }\n\n  confirmDownload(){\n    let ids = ''\n    this.state.selectedRows.forEach(item => {\n      ids && (ids += ',')\n      ids += item.WF_OrUnid\n    })\n    this.dataSourceMap.ruleDownload.load({ \"WF_OrUnid\": ids})\n    this.closeDownloadConfirm()\n  }\n\n  closeImportField(){\n    this.setState({\n      showImportField: false\n    })\n  }\n\n  toImport(){\n    this.closeImportField()\n  }\n\n\n  closeDownloadConfirm(){\n    this.setState({\n      showDownloadConfirm: false\n    })\n  }\n\n  closeCopyConfirm(){\n    this.setState({\n      showCopyConfirm:false\n    })\n  }\n\n  closeDelConfirm(){\n    this.setState({\n      showDelConfirm: false\n    })\n  }\n\n  closeAddRule(){\n    this.setState({\n      showAddRule:false\n    })\n  }\n\n  onSelect(value){\n    value = value ? value : []\n    this.setState({ selectedKeys: value })\n  }\n\n  onAppIdChange(id){\n    this.setState({\n      appId:id\n    })\n    // this.dataSourceMap.getRuleId.load({ WF_Appid:id})\n  }\n\n  addRuleSubmit(values){\n    const data = { ...values }\n    data.wf_num = \"F_S001_A041\"\n    data.CompileFlag = values.CompileFlag ? \"1\" : \"\"\n    data.Folderid = \"\"\n    data.WF_DocUnid = randomString()\n    data.WF_FormNumber = \"F_S001_A041\"\n    data.WF_Action = \"save\"\n    data.WF_Appid = values.WF_Appid.value\n    this.dataSourceMap.addRule.load({ ...data })\n    this.closeAddRule()\n  }\n\n  randomString() {\n    let len = 36;\n    let chars = 'abcdefhijkmnprstwxyz2345678';\n    let maxPos = chars.length;\n    let character = '';\n    for (let i = 0; i < len; i++) {\n      character += chars.charAt(Math.floor(Math.random() * maxPos))\n    }\n    return character;\n  }\n\n  onClick_showRuleConfig(record){\n    this.dataSourceMap.getRoleList.load()\n    this.setState({\n      showRuleConfig:true,\n      currentRuleConfig:{...record}\n    })\n    const { __fields__, id, ...formData } = record\n    console.log(formData)\n    formData.config = []\n    formData.Roles = formData.Roles.split(\",\")\n    formData.Singleton && formData.config.push(\"Singleton\")\n    formData.WF_NoUpdate && formData.config.push(\"WF_NoUpdate\")\n    formData.ClassPath = `cn.linkey.rulelib.${formData.WF_Appid}${formData.RuleNum}`\n    this.state.ruleConfigField.setValues({...formData})\n  }\n\n  closeShowRuleConfig(){\n    this.setState({\n      showRuleConfig: false\n    })\n  }\n\n  ruleConfigSubmit(){\n    console.log(this.state.ruleConfigField.getValues())\n    const { WF_OrUnid, config, WF_LastModified, WF_AddName_CN, FolderName,...formData } = this.state.ruleConfigField.getValues()\n    config?.forEach(item => {\n      formData[item] = 1\n    })\n    formData.Roles = formData.Roles.join(\",\")\n    formData.WF_DocUnid = WF_OrUnid\n    formData.WF_KeyFdName = \"RuleNum\"\n    formData.WF_RuleFdName = \"RuleName\"\n    formData.WF_TableName = \"BPM_RuleList\"\n    this.dataSourceMap.editRule.load({...formData})\n    this.closeShowRuleConfig()\n  }\n\n  loadRuleList(key,row,record){\n    console.log(row)\n    console.log(record)\n    let url = \"\";\n    if(!key || key[0] === '001'){\n      url = '/bpm/r?wf_num=D_S010_J001&wf_gridnum=V_S010_G001'\n    }else{\n      url = `/bpm/r?wf_num=D_S010_J002&wf_gridnum=V_S010_G002&Folderid=${key[0]}`\n    }\n    this.setState({\n      loadRuleURL: url\n    },() => {\n      this.dataSourceMap.getChildRuleList.load()\n    })\n  }\n\n  onPageChange(value) {\n    this.setState({\n      page: value\n    })\n    this.dataSourceMap.getRuleList.load({ page: value, searchStr: this.state.searchValue })\n  }\n\n  onSearch(value) {\n    this.setState({\n      searchValue:value\n    })\n    this.dataSourceMap.getRuleList.load({ page: 1, searchStr: value })\n  }\n\n  onClassifyListSelect(select, row, record) {\n    if (record.length == 1) {\n      this.setState({\n        classifyDelDisable: false,\n        classifyListSelectedKeys: record[0].WF_OrUnid\n      })\n    } else {\n      this.setState({\n        classifyDelDisable: true\n      })\n    }\n  }\n\n  handleAddClassifyShow() {\n    this.setState({ addClassifyShow: true })\n  }\n}",
        "hidden": false,
            "title": "",
                "isLocked": false,
                    "condition": true,
                        "conditionGroup": "",
                            "children": [
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3sd5nqfc",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": "Title",
                                        "footer": false,
                                        "footerActions": [
                                            "ok",
                                            "cancel"
                                        ],
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": {
                                            "type": "JSExpression",
                                            "value": "this.state.showRuleConfig",
                                            "mock": true
                                        },
                                        "__events": {
                                            "eventDataList": [
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onCancel",
                                                    "relatedEventName": "closeShowRuleConfig"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onClose",
                                                    "relatedEventName": "closeShowRuleConfig"
                                                }
                                            ],
                                            "eventList": [
                                                {
                                                    "name": "onOk",
                                                    "disabled": false
                                                },
                                                {
                                                    "name": "onCancel",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onClose",
                                                    "disabled": true
                                                }
                                            ]
                                        },
                                        "onCancel": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeShowRuleConfig.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onClose": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeShowRuleConfig.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "style": {
                                            "width": "1200px"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "规则配置",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3sddfds1b",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left"
                                            },
                                            "docId": "docl3sddfds",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "Tab",
                                                    "id": "node_ocl3sddfds1c",
                                                    "props": {
                                                        "shape": "pure",
                                                        "size": "medium",
                                                        "excessMode": "slide",
                                                        "plainData": "Tab 1\nTab 2\nTab 3",
                                                        "items": [
                                                            {
                                                                "primaryKey": "node_ocl3sddfds1d",
                                                                "title": "规则属性",
                                                                "disabled": false
                                                            },
                                                            {
                                                                "primaryKey": "node_ocl3sddfds1l",
                                                                "title": "规则代码",
                                                                "disabled": false
                                                            }
                                                        ],
                                                        "unmountInactiveTabs": false,
                                                        "needBadge": false
                                                    },
                                                    "docId": "docl3sddfds",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "Tab.Item",
                                                            "id": "node_ocl3sddfds27",
                                                            "props": {
                                                                "primaryKey": "node_ocl3sddfds1d",
                                                                "title": "规则属性",
                                                                "disabled": false
                                                            },
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "NextP",
                                                                    "id": "node_ocl3sddfds3l",
                                                                    "props": {
                                                                        "wrap": false,
                                                                        "type": "body2",
                                                                        "verAlign": "middle",
                                                                        "textSpacing": true,
                                                                        "align": "left",
                                                                        "full": true
                                                                    },
                                                                    "docId": "docl3sddfds",
                                                                    "title": "段落",
                                                                    "hidden": false,
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": "",
                                                                    "children": [
                                                                        {
                                                                            "componentName": "Form",
                                                                            "id": "node_ocl3sddv1f7",
                                                                            "props": {
                                                                                "labelCol": {
                                                                                    "span": 2
                                                                                },
                                                                                "wrapperCol": {
                                                                                    "span": 14
                                                                                },
                                                                                "labelAlign": "left",
                                                                                "size": "medium",
                                                                                "labelTextAlign": "left",
                                                                                "device": "desktop",
                                                                                "field": {
                                                                                    "type": "JSExpression",
                                                                                    "value": "this.state.ruleConfigField"
                                                                                }
                                                                            },
                                                                            "hidden": false,
                                                                            "title": "",
                                                                            "isLocked": false,
                                                                            "condition": true,
                                                                            "conditionGroup": "",
                                                                            "children": [
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1f8",
                                                                                    "props": {
                                                                                        "label": "所属应用",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Select",
                                                                                            "id": "node_ocl3sddv1fx",
                                                                                            "props": {
                                                                                                "mode": "single",
                                                                                                "hasArrow": true,
                                                                                                "cacheValue": true,
                                                                                                "dataSource": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.appList"
                                                                                                },
                                                                                                "placeholder": "",
                                                                                                "defaultValue": "",
                                                                                                "hasClear": false,
                                                                                                "showSearch": false,
                                                                                                "name": "WF_Appid"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fo",
                                                                                    "props": {
                                                                                        "label": "规则名称",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Input",
                                                                                            "id": "node_ocl3sddv1f12",
                                                                                            "props": {
                                                                                                "hasBorder": true,
                                                                                                "size": "medium",
                                                                                                "autoComplete": "off",
                                                                                                "placeholder": "",
                                                                                                "name": "RuleName"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fp",
                                                                                    "props": {
                                                                                        "label": "规则唯一编号",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        },
                                                                                        "name": ""
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Input",
                                                                                            "id": "node_ocl3sddv1f17",
                                                                                            "props": {
                                                                                                "hasBorder": true,
                                                                                                "size": "medium",
                                                                                                "autoComplete": "off",
                                                                                                "placeholder": "请输入",
                                                                                                "name": "RuleNum"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fq",
                                                                                    "props": {
                                                                                        "label": "规则类型",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Input",
                                                                                            "id": "node_ocl3sddv1f1c",
                                                                                            "props": {
                                                                                                "hasBorder": false,
                                                                                                "size": "medium",
                                                                                                "autoComplete": "off",
                                                                                                "placeholder": "",
                                                                                                "label": "8",
                                                                                                "readOnly": true
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fr",
                                                                                    "props": {
                                                                                        "label": "运行方式",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Select",
                                                                                            "id": "node_ocl3sddv1f1h",
                                                                                            "props": {
                                                                                                "mode": "single",
                                                                                                "hasArrow": true,
                                                                                                "cacheValue": true,
                                                                                                "dataSource": [
                                                                                                    {
                                                                                                        "value": "1",
                                                                                                        "label": "编译后运行正(正式环境选择)"
                                                                                                    },
                                                                                                    {
                                                                                                        "value": "0",
                                                                                                        "label": "实时运行(开发阶段选择)"
                                                                                                    }
                                                                                                ],
                                                                                                "placeholder": "",
                                                                                                "defaultValue": "",
                                                                                                "hasClear": false,
                                                                                                "showSearch": false,
                                                                                                "name": "CompileFlag"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fs",
                                                                                    "props": {
                                                                                        "label": "类路径",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Input",
                                                                                            "id": "node_ocl3sddv1f1m",
                                                                                            "props": {
                                                                                                "hasBorder": true,
                                                                                                "size": "medium",
                                                                                                "autoComplete": "off",
                                                                                                "placeholder": "",
                                                                                                "disabled": true,
                                                                                                "name": "ClassPath"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1ft",
                                                                                    "props": {
                                                                                        "label": "所属分类",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "TreeSelect",
                                                                                            "id": "node_ocl3sddv1f1r",
                                                                                            "props": {
                                                                                                "prefix": "next-",
                                                                                                "size": "medium",
                                                                                                "hasArrow": true,
                                                                                                "hasBorder": true,
                                                                                                "autoWidth": true,
                                                                                                "notFoundContent": "Not Found",
                                                                                                "treeCheckedStrategy": "parent",
                                                                                                "dataSource": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.ruleCategory"
                                                                                                },
                                                                                                "placeholder": "",
                                                                                                "disabled": false,
                                                                                                "hasClear": false,
                                                                                                "readOnly": false,
                                                                                                "showSearch": false,
                                                                                                "multiple": false,
                                                                                                "defaultVisible": false,
                                                                                                "isPreview": false,
                                                                                                "name": "Folderid",
                                                                                                "style": {
                                                                                                    "width": "400px"
                                                                                                }
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fu",
                                                                                    "props": {
                                                                                        "label": "规则访问权限",
                                                                                        "required": false,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Select",
                                                                                            "id": "node_ocl3sddv1f1w",
                                                                                            "props": {
                                                                                                "mode": "multiple",
                                                                                                "hasArrow": true,
                                                                                                "cacheValue": true,
                                                                                                "dataSource": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.roleList"
                                                                                                },
                                                                                                "placeholder": "",
                                                                                                "defaultValue": "",
                                                                                                "hasClear": false,
                                                                                                "showSearch": false,
                                                                                                "name": "Roles",
                                                                                                "style": {
                                                                                                    "width": "400px"
                                                                                                }
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fv",
                                                                                    "props": {
                                                                                        "label": "可选项",
                                                                                        "required": false,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "CheckboxGroup",
                                                                                            "id": "node_ocl3sddv1f21",
                                                                                            "props": {
                                                                                                "prefix": "next-",
                                                                                                "dataSource": [
                                                                                                    {
                                                                                                        "label": "单例规则",
                                                                                                        "value": "Singleton"
                                                                                                    },
                                                                                                    {
                                                                                                        "label": "禁止升级本设计",
                                                                                                        "value": "WF_NoUpdate"
                                                                                                    }
                                                                                                ],
                                                                                                "itemDirection": "hoz",
                                                                                                "defaultValue": "[]",
                                                                                                "name": "config"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1fw",
                                                                                    "props": {
                                                                                        "label": "状态",
                                                                                        "required": false,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Checkbox",
                                                                                            "id": "node_ocl3sddv1f28",
                                                                                            "props": {
                                                                                                "label": "启用",
                                                                                                "name": "Status"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "componentName": "Form.Item",
                                                                                    "id": "node_ocl3sddv1f26",
                                                                                    "props": {
                                                                                        "label": "版本",
                                                                                        "required": true,
                                                                                        "size": "medium",
                                                                                        "labelAlign": "left",
                                                                                        "labelTextAlign": "right",
                                                                                        "device": "desktop",
                                                                                        "labelCol": {
                                                                                            "span": 6
                                                                                        }
                                                                                    },
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Input",
                                                                                            "id": "node_ocl3sddv1f2d",
                                                                                            "props": {
                                                                                                "hasBorder": true,
                                                                                                "size": "medium",
                                                                                                "autoComplete": "off",
                                                                                                "placeholder": "",
                                                                                                "name": "WF_Version"
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Tab.Item",
                                                            "id": "node_ocl3sddfds29",
                                                            "props": {
                                                                "primaryKey": "node_ocl3sddfds1l",
                                                                "title": "规则代码",
                                                                "disabled": false
                                                            },
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": ""
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3sdd8ve2h",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3sdd8ve",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "Box",
                                                    "id": "node_ocl3sdd8ve2i",
                                                    "props": {
                                                        "direction": "row",
                                                        "justify": "center",
                                                        "align": "center",
                                                        "style": {
                                                            "width": ""
                                                        },
                                                        "spacing": 30
                                                    },
                                                    "docId": "docl3scgtxd",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "Button",
                                                            "id": "node_ocl3sdd8ve2j",
                                                            "props": {
                                                                "prefix": "next-",
                                                                "type": "primary",
                                                                "size": "medium",
                                                                "htmlType": "button",
                                                                "component": "button",
                                                                "children": "保存全部属性",
                                                                "iconSize": "xxs",
                                                                "ghost": false,
                                                                "loading": false,
                                                                "text": false,
                                                                "warning": false,
                                                                "disabled": false,
                                                                "__events": {
                                                                    "eventDataList": [
                                                                        {
                                                                            "type": "componentEvent",
                                                                            "name": "onClick",
                                                                            "relatedEventName": "ruleConfigSubmit"
                                                                        }
                                                                    ],
                                                                    "eventList": [
                                                                        {
                                                                            "name": "onClick",
                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                            "disabled": true
                                                                        },
                                                                        {
                                                                            "name": "onMouseUp",
                                                                            "disabled": false
                                                                        }
                                                                    ]
                                                                },
                                                                "onClick": {
                                                                    "type": "JSFunction",
                                                                    "value": "function(){this.ruleConfigSubmit.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                }
                                                            },
                                                            "docId": "docl3sdd8ve",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": ""
                                                        },
                                                        {
                                                            "componentName": "Button",
                                                            "id": "node_ocl3sdd8ve2k",
                                                            "props": {
                                                                "prefix": "next-",
                                                                "type": "normal",
                                                                "size": "medium",
                                                                "htmlType": "button",
                                                                "component": "button",
                                                                "children": "关闭",
                                                                "iconSize": "xxs",
                                                                "ghost": false,
                                                                "loading": false,
                                                                "text": false,
                                                                "warning": false,
                                                                "disabled": false,
                                                                "__events": {
                                                                    "eventDataList": [
                                                                        {
                                                                            "type": "componentEvent",
                                                                            "name": "onClick",
                                                                            "relatedEventName": "closeShowRuleConfig"
                                                                        }
                                                                    ],
                                                                    "eventList": [
                                                                        {
                                                                            "name": "onClick",
                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                            "disabled": true
                                                                        },
                                                                        {
                                                                            "name": "onMouseUp",
                                                                            "disabled": false
                                                                        }
                                                                    ]
                                                                },
                                                                "onClick": {
                                                                    "type": "JSFunction",
                                                                    "value": "function(){this.closeShowRuleConfig.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                }
                                                            },
                                                            "docId": "docl3sdd8ve",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": ""
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3l9ql9pz",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": "新增业务流程规则",
                                        "footer": false,
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": {
                                            "type": "JSExpression",
                                            "value": "this.state.showAddRule",
                                            "mock": false
                                        },
                                        "__events": {
                                            "eventDataList": [
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onCancel",
                                                    "relatedEventName": "closeAddRule"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onClose",
                                                    "relatedEventName": "closeAddRule"
                                                }
                                            ],
                                            "eventList": [
                                                {
                                                    "name": "onOk",
                                                    "disabled": false
                                                },
                                                {
                                                    "name": "onCancel",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onClose",
                                                    "disabled": true
                                                }
                                            ]
                                        },
                                        "onCancel": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeAddRule.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onClose": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeAddRule.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "style": {
                                            "width": "550px"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "新增规则",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3lb3g0fj",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3lb3g0f",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "Form",
                                                    "id": "node_ocl3lb3g0fk",
                                                    "props": {
                                                        "labelCol": {
                                                            "span": 2
                                                        },
                                                        "wrapperCol": {
                                                            "span": 14
                                                        },
                                                        "labelAlign": "left",
                                                        "size": "medium",
                                                        "labelTextAlign": "left",
                                                        "device": "desktop",
                                                        "inline": false,
                                                        "isPreview": false,
                                                        "field": {
                                                            "type": "JSExpression",
                                                            "value": "this.state.addRuleField"
                                                        }
                                                    },
                                                    "docId": "docl3lb3g0f",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3lb3g0fl",
                                                            "props": {
                                                                "label": "所属应用",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 4
                                                                }
                                                            },
                                                            "docId": "docl3lb3g0f",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Select",
                                                                    "id": "node_ocl3lb3g0fs",
                                                                    "props": {
                                                                        "mode": "single",
                                                                        "hasArrow": true,
                                                                        "cacheValue": true,
                                                                        "dataSource": {
                                                                            "type": "JSExpression",
                                                                            "value": "this.state.appList"
                                                                        },
                                                                        "placeholder": "",
                                                                        "defaultValue": {
                                                                            "type": "JSExpression",
                                                                            "value": "this.state.appList[0]",
                                                                            "mock": ""
                                                                        },
                                                                        "hasClear": false,
                                                                        "showSearch": false,
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onChange",
                                                                                    "relatedEventName": "onAppIdChange"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onChange",
                                                                                    "propType": "func",
                                                                                    "description": "值发生变化",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onVisibleChange",
                                                                                    "propType": "func",
                                                                                    "description": "弹层显示隐藏变化",
                                                                                    "disabled": false
                                                                                },
                                                                                {
                                                                                    "name": "onRemove",
                                                                                    "propType": "func",
                                                                                    "description": "Tag 被删除",
                                                                                    "disabled": false
                                                                                },
                                                                                {
                                                                                    "name": "onSearch",
                                                                                    "propType": "func",
                                                                                    "description": "搜索",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onChange": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.onAppIdChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        },
                                                                        "name": "WF_Appid",
                                                                        "style": {
                                                                            "width": "298px"
                                                                        }
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3lb3g0fn",
                                                            "props": {
                                                                "label": "规则名称",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 4
                                                                }
                                                            },
                                                            "docId": "docl3lb3g0f",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Input",
                                                                    "id": "node_ocl3lb3g0fx",
                                                                    "props": {
                                                                        "hasBorder": true,
                                                                        "size": "medium",
                                                                        "autoComplete": "off",
                                                                        "placeholder": "",
                                                                        "name": "RuleName"
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3lb3g0f12",
                                                            "props": {
                                                                "label": "规则编号",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 4
                                                                }
                                                            },
                                                            "docId": "docl3lb3g0f",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Input",
                                                                    "id": "node_ocl3lb3g0f13",
                                                                    "props": {
                                                                        "hasBorder": true,
                                                                        "size": "medium",
                                                                        "autoComplete": "off",
                                                                        "placeholder": "",
                                                                        "name": "RuleNum",
                                                                        "state": ""
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3ldt11d7",
                                                            "props": {
                                                                "label": "",
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "wrapperCol": {
                                                                    "offset": 4
                                                                }
                                                            },
                                                            "docId": "docl3ldt11d",
                                                            "title": "表单项",
                                                            "hidden": false,
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Checkbox",
                                                                    "id": "node_ocl3ldt11d8",
                                                                    "props": {
                                                                        "label": "编译后运行",
                                                                        "name": "CompileFlag"
                                                                    },
                                                                    "docId": "docl3ldt11d",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3lb3g0fp",
                                                            "props": {
                                                                "label": "",
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "wrapperCol": {
                                                                    "offset": 4
                                                                }
                                                            },
                                                            "docId": "docl3lb3g0f",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Form.Submit",
                                                                    "id": "node_ocl3lb3g0fq",
                                                                    "props": {
                                                                        "type": "primary",
                                                                        "validate": true,
                                                                        "children": "保存",
                                                                        "icon": "",
                                                                        "size": "medium",
                                                                        "iconSize": "xxs",
                                                                        "ghost": false,
                                                                        "loading": false,
                                                                        "text": false,
                                                                        "warning": false,
                                                                        "htmlType": "",
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onClick",
                                                                                    "relatedEventName": "addRuleSubmit"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onClick",
                                                                                    "description": "点击提交后触发\n@param {Object} value 数据\n@param {Object} errors 错误数据\n@param {class} field 实例",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onMouseUp",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onClick": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.addRuleSubmit.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        }
                                                                    },
                                                                    "docId": "docl3lb3g0f",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                },
                                                                {
                                                                    "componentName": "Form.Reset",
                                                                    "id": "node_ocl3lb3g0fr",
                                                                    "props": {
                                                                        "style": {
                                                                            "marginLeft": 10
                                                                        },
                                                                        "children": "关闭",
                                                                        "type": "normal",
                                                                        "size": "medium",
                                                                        "iconSize": "xxs",
                                                                        "ghost": false,
                                                                        "toDefault": false,
                                                                        "loading": false,
                                                                        "text": false,
                                                                        "warning": false,
                                                                        "disabled": false,
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onClick",
                                                                                    "relatedEventName": "closeAddRule"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onClick",
                                                                                    "description": "点击提交后触发",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onMouseUp",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onClick": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.closeAddRule.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        }
                                                                    },
                                                                    "docId": "docl3lb3g0f",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3l9qnqwg",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": {
                                            "type": "JSExpression",
                                            "value": "this.state.modalState[this.state.editModalTyle].title",
                                            "mock": ""
                                        },
                                        "footer": true,
                                        "footerActions": [
                                            "ok",
                                            "cancel"
                                        ],
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": {
                                            "type": "JSExpression",
                                            "value": "this.state.editModalShow",
                                            "mock": true
                                        },
                                        "__events": {
                                            "eventDataList": [
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onCancel",
                                                    "relatedEventName": "closeCopyConfirm"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onClose",
                                                    "relatedEventName": "closeCopyConfirm"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onOk",
                                                    "relatedEventName": "editModalSubmit"
                                                }
                                            ],
                                            "eventList": [
                                                {
                                                    "name": "onOk",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onCancel",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onClose",
                                                    "disabled": true
                                                }
                                            ]
                                        },
                                        "onCancel": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeCopyConfirm.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onClose": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeCopyConfirm.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onOk": {
                                            "type": "JSFunction",
                                            "value": "function(){this.editModalSubmit.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "确认框",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3l9qnqwk",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left"
                                            },
                                            "docId": "docl3l9qnqw",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "NextText",
                                                    "id": "node_ocl3l9qnqwl",
                                                    "props": {
                                                        "type": "inherit",
                                                        "children": {
                                                            "type": "JSExpression",
                                                            "value": "this.state.modalState[this.state.editModalTyle].content",
                                                            "mock": ""
                                                        },
                                                        "mark": false,
                                                        "code": false,
                                                        "delete": false,
                                                        "underline": false,
                                                        "strong": false
                                                    },
                                                    "docId": "docl3l9qnqw",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": ""
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3mieyvjj",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": "导入文档",
                                        "footer": false,
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": {
                                            "type": "JSExpression",
                                            "value": "this.state.showImportField",
                                            "mock": false
                                        },
                                        "__events": {
                                            "eventDataList": [
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onCancel",
                                                    "relatedEventName": "closeImportField"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onClose",
                                                    "relatedEventName": "closeImportField"
                                                }
                                            ],
                                            "eventList": [
                                                {
                                                    "name": "onOk",
                                                    "disabled": false
                                                },
                                                {
                                                    "name": "onCancel",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onClose",
                                                    "disabled": true
                                                }
                                            ]
                                        },
                                        "onCancel": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeImportField.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onClose": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeImportField.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "导入",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3mieyvj11",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3mieyvj",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "Form",
                                                    "id": "node_ocl3mieyvj12",
                                                    "props": {
                                                        "labelCol": {
                                                            "span": 2
                                                        },
                                                        "wrapperCol": {
                                                            "span": 14
                                                        },
                                                        "labelAlign": "left",
                                                        "size": "medium",
                                                        "labelTextAlign": "left",
                                                        "device": "desktop"
                                                    },
                                                    "docId": "docl3mieyvj",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3mieyvj13",
                                                            "props": {
                                                                "label": "如果文件存在",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 5,
                                                                    "offset": 4
                                                                },
                                                                "style": {
                                                                    "width": "500px"
                                                                }
                                                            },
                                                            "docId": "docl3mieyvj",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Radio.Group",
                                                                    "id": "node_ocl3mieyvj1a",
                                                                    "props": {
                                                                        "dataSource": [
                                                                            {
                                                                                "label": "跳过",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "label": "覆盖",
                                                                                "value": "2"
                                                                            }
                                                                        ],
                                                                        "shape": "normal",
                                                                        "itemDirection": "hoz",
                                                                        "defaultValue": ""
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3mieyvj15",
                                                            "props": {
                                                                "label": "选择要导入的XML文件(可多选)\t",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 9
                                                                }
                                                            },
                                                            "docId": "docl3mieyvj",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Upload",
                                                                    "id": "node_ocl3mieyvj1f",
                                                                    "props": {
                                                                        "prefix": "next-",
                                                                        "closable": true,
                                                                        "autoUpload": true,
                                                                        "shape": "card",
                                                                        "defaultValue": [],
                                                                        "listType": "text"
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3mieyvj17",
                                                            "props": {
                                                                "label": "",
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "wrapperCol": {
                                                                    "offset": 7
                                                                }
                                                            },
                                                            "docId": "docl3mieyvj",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Form.Submit",
                                                                    "id": "node_ocl3mieyvj18",
                                                                    "props": {
                                                                        "type": "primary",
                                                                        "validate": true,
                                                                        "children": "开始导入",
                                                                        "icon": "",
                                                                        "size": "medium",
                                                                        "iconSize": "xs",
                                                                        "ghost": false,
                                                                        "loading": false,
                                                                        "text": false,
                                                                        "warning": false,
                                                                        "htmlType": "",
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onClick",
                                                                                    "relatedEventName": "toImport"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onClick",
                                                                                    "description": "点击提交后触发\n@param {Object} value 数据\n@param {Object} errors 错误数据\n@param {class} field 实例",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onMouseUp",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onClick": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.toImport.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        }
                                                                    },
                                                                    "docId": "docl3mieyvj",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                },
                                                                {
                                                                    "componentName": "Form.Reset",
                                                                    "id": "node_ocl3mieyvj19",
                                                                    "props": {
                                                                        "style": {
                                                                            "marginLeft": 10
                                                                        },
                                                                        "children": "关闭",
                                                                        "type": "normal",
                                                                        "size": "medium",
                                                                        "iconSize": "xxs",
                                                                        "ghost": false,
                                                                        "toDefault": false,
                                                                        "loading": false,
                                                                        "text": false,
                                                                        "warning": false,
                                                                        "disabled": false,
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onClick",
                                                                                    "relatedEventName": "closeImportField"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onClick",
                                                                                    "description": "点击提交后触发",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onMouseUp",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onClick": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.closeImportField.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        }
                                                                    },
                                                                    "docId": "docl3mieyvj",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3sotg2r6",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": "新增分类",
                                        "footer": false,
                                        "footerActions": [
                                            "ok",
                                            "cancel"
                                        ],
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": {
                                            "type": "JSExpression",
                                            "value": "this.state.addClassifyShow",
                                            "mock": true
                                        },
                                        "style": {
                                            "width": "500px"
                                        },
                                        "__events": {
                                            "eventDataList": [
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onClose",
                                                    "relatedEventName": "closeAddClassifyShow"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onCancel",
                                                    "relatedEventName": "closeAddClassifyShow"
                                                }
                                            ],
                                            "eventList": [
                                                {
                                                    "name": "onOk",
                                                    "disabled": false
                                                },
                                                {
                                                    "name": "onCancel",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onClose",
                                                    "disabled": true
                                                }
                                            ]
                                        },
                                        "onClose": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeAddClassifyShow.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onCancel": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeAddClassifyShow.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "新增分类",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3sotg2ro",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3sotg2r",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "Form",
                                                    "id": "node_ocl3sotg2rp",
                                                    "props": {
                                                        "labelCol": {
                                                            "span": 2
                                                        },
                                                        "wrapperCol": {
                                                            "span": 14
                                                        },
                                                        "labelAlign": "left",
                                                        "size": "medium",
                                                        "labelTextAlign": "left",
                                                        "device": "desktop"
                                                    },
                                                    "docId": "docl3sotg2r",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3sotg2rq",
                                                            "props": {
                                                                "label": "所属分类：",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "right",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 7
                                                                },
                                                                "wrapperCol": {
                                                                    "span": 14
                                                                }
                                                            },
                                                            "docId": "docl3sotg2r",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "TreeSelect",
                                                                    "id": "node_ocl3spoej55",
                                                                    "props": {
                                                                        "prefix": "next-",
                                                                        "size": "medium",
                                                                        "hasArrow": true,
                                                                        "hasBorder": true,
                                                                        "autoWidth": true,
                                                                        "notFoundContent": "Not Found",
                                                                        "treeCheckedStrategy": "parent",
                                                                        "dataSource": {
                                                                            "type": "JSExpression",
                                                                            "value": "this.state.ruleClassifyList"
                                                                        },
                                                                        "placeholder": "",
                                                                        "disabled": false,
                                                                        "hasClear": false,
                                                                        "readOnly": false,
                                                                        "showSearch": false,
                                                                        "multiple": false,
                                                                        "defaultVisible": false,
                                                                        "isPreview": false,
                                                                        "style": {
                                                                            "width": "267px"
                                                                        },
                                                                        "name": "parentDocUnid"
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3sotg2rs",
                                                            "props": {
                                                                "label": "分类名称：",
                                                                "required": true,
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "right",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 7
                                                                },
                                                                "wrapperCol": {
                                                                    "span": 14
                                                                }
                                                            },
                                                            "docId": "docl3sotg2r",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Input",
                                                                    "id": "node_ocl3sotji4m",
                                                                    "props": {
                                                                        "hasBorder": true,
                                                                        "size": "medium",
                                                                        "autoComplete": "off",
                                                                        "placeholder": "请输入分类名称",
                                                                        "name": "folderName",
                                                                        "style": {
                                                                            "width": "267px"
                                                                        }
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3sotji4f",
                                                            "props": {
                                                                "label": "所属应用：",
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "right",
                                                                "device": "desktop",
                                                                "labelCol": {
                                                                    "span": 7
                                                                },
                                                                "wrapperCol": {
                                                                    "span": 14
                                                                }
                                                            },
                                                            "docId": "docl3sotji4",
                                                            "title": "表单项",
                                                            "hidden": false,
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Select",
                                                                    "id": "node_ocl3sotji4g",
                                                                    "props": {
                                                                        "mode": "single",
                                                                        "hasArrow": true,
                                                                        "cacheValue": true,
                                                                        "dataSource": {
                                                                            "type": "JSExpression",
                                                                            "value": "this.state.appList"
                                                                        },
                                                                        "placeholder": "",
                                                                        "defaultValue": "",
                                                                        "hasClear": false,
                                                                        "showSearch": false,
                                                                        "style": {
                                                                            "width": "267px"
                                                                        },
                                                                        "name": "WF_Appid"
                                                                    },
                                                                    "docId": "docl3sotji4",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Form.Item",
                                                            "id": "node_ocl3sotg2ru",
                                                            "props": {
                                                                "label": "",
                                                                "size": "medium",
                                                                "labelAlign": "left",
                                                                "labelTextAlign": "left",
                                                                "device": "desktop",
                                                                "wrapperCol": {
                                                                    "offset": 7
                                                                },
                                                                "style": {
                                                                    "marginTop": "40px"
                                                                }
                                                            },
                                                            "docId": "docl3sotg2r",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Form.Submit",
                                                                    "id": "node_ocl3sotg2rv",
                                                                    "props": {
                                                                        "type": "primary",
                                                                        "validate": true,
                                                                        "children": "完成",
                                                                        "icon": "",
                                                                        "size": "medium",
                                                                        "iconSize": "xxs",
                                                                        "ghost": false,
                                                                        "loading": false,
                                                                        "text": false,
                                                                        "warning": false,
                                                                        "htmlType": "",
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onClick",
                                                                                    "relatedEventName": "onAddClassify"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onClick",
                                                                                    "description": "点击提交后触发\n@param {Object} value 数据\n@param {Object} errors 错误数据\n@param {class} field 实例",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onMouseUp",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onClick": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.onAddClassify.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        }
                                                                    },
                                                                    "docId": "docl3sotg2r",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                },
                                                                {
                                                                    "componentName": "Form.Reset",
                                                                    "id": "node_ocl3sotg2rw",
                                                                    "props": {
                                                                        "style": {
                                                                            "marginLeft": 10
                                                                        },
                                                                        "children": "关闭",
                                                                        "type": "primary",
                                                                        "size": "medium",
                                                                        "iconSize": "xxs",
                                                                        "ghost": false,
                                                                        "toDefault": false,
                                                                        "loading": false,
                                                                        "text": false,
                                                                        "warning": false,
                                                                        "disabled": false,
                                                                        "__events": {
                                                                            "eventDataList": [
                                                                                {
                                                                                    "type": "componentEvent",
                                                                                    "name": "onClick",
                                                                                    "relatedEventName": "closeAddClassifyShow"
                                                                                }
                                                                            ],
                                                                            "eventList": [
                                                                                {
                                                                                    "name": "onClick",
                                                                                    "description": "点击提交后触发",
                                                                                    "disabled": true
                                                                                },
                                                                                {
                                                                                    "name": "onMouseUp",
                                                                                    "disabled": false
                                                                                }
                                                                            ]
                                                                        },
                                                                        "onClick": {
                                                                            "type": "JSFunction",
                                                                            "value": "function(){this.closeAddClassifyShow.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                        }
                                                                    },
                                                                    "docId": "docl3sotg2r",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3tvzy1iq",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": "分类管理",
                                        "footer": true,
                                        "footerActions": [
                                            "ok",
                                            "cancel"
                                        ],
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": false,
                                        "style": {
                                            "width": "1200px"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "规则属性",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3tvzy1i12",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3tvzy1i",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "NextTable",
                                                    "id": "node_ocl3tvzy1i13",
                                                    "props": {
                                                        "setEmptyContent": true,
                                                        "emptyContent": {
                                                            "type": "JSSlot",
                                                            "value": [
                                                                {
                                                                    "componentName": "Slot",
                                                                    "id": "node_ocl3tvzy1i18",
                                                                    "props": {},
                                                                    "docId": "docl3tvzy1i",
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": "",
                                                                    "children": [
                                                                        {
                                                                            "componentName": "Slot",
                                                                            "id": "node_ocl3tvzy1i19",
                                                                            "props": {},
                                                                            "docId": "docl3tvzy1i",
                                                                            "title": "EmptyContent",
                                                                            "hidden": false,
                                                                            "isLocked": false,
                                                                            "condition": true,
                                                                            "conditionGroup": "",
                                                                            "children": [
                                                                                {
                                                                                    "componentName": "Typography.Text",
                                                                                    "id": "node_ocl3tvzy1i1a",
                                                                                    "props": {
                                                                                        "children": "No Data"
                                                                                    },
                                                                                    "docId": "docl3tvzy1i",
                                                                                    "hidden": false,
                                                                                    "title": "",
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": ""
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        "showMiniPager": true,
                                                        "showActionBar": true,
                                                        "actionBar": [],
                                                        "columns": [],
                                                        "data": [
                                                            {
                                                                "name": "王小",
                                                                "id": "1",
                                                                "age": 15000,
                                                                "role": "开发"
                                                            },
                                                            {
                                                                "name": "王中",
                                                                "id": "2",
                                                                "age": 25000,
                                                                "role": "产品"
                                                            },
                                                            {
                                                                "name": "王大",
                                                                "id": "3",
                                                                "age": 35000,
                                                                "role": "设计"
                                                            }
                                                        ],
                                                        "actionTitle": "操作",
                                                        "actionWidth": 180,
                                                        "actionType": "link",
                                                        "actionFixed": "right",
                                                        "actionHidden": false,
                                                        "maxWebShownActionCount": 2,
                                                        "actionColumn": []
                                                    },
                                                    "docId": "docl3tvzy1i",
                                                    "title": "表格",
                                                    "hidden": false,
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": ""
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "Dialog",
                                    "id": "node_ocl3so5cxv40",
                                    "props": {
                                        "prefix": "next-",
                                        "footerAlign": "right",
                                        "title": "分类管理",
                                        "footer": false,
                                        "footerActions": [
                                            "ok",
                                            "cancel"
                                        ],
                                        "closeable": "esc,close",
                                        "hasMask": true,
                                        "align": "cc cc",
                                        "minMargin": 40,
                                        "isAutoContainer": true,
                                        "visible": {
                                            "type": "JSExpression",
                                            "value": "this.state.classifyManageShow",
                                            "mock": true
                                        },
                                        "style": {
                                            "width": "1000px"
                                        },
                                        "__events": {
                                            "eventDataList": [
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onCancel",
                                                    "relatedEventName": "closeClassifyManage"
                                                },
                                                {
                                                    "type": "componentEvent",
                                                    "name": "onClose",
                                                    "relatedEventName": "closeClassifyManage"
                                                }
                                            ],
                                            "eventList": [
                                                {
                                                    "name": "onOk",
                                                    "disabled": false
                                                },
                                                {
                                                    "name": "onCancel",
                                                    "disabled": true
                                                },
                                                {
                                                    "name": "onClose",
                                                    "disabled": true
                                                }
                                            ]
                                        },
                                        "onCancel": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeClassifyManage.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onClose": {
                                            "type": "JSFunction",
                                            "value": "function(){this.closeClassifyManage.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        }
                                    },
                                    "hidden": true,
                                    "title": "分类管理",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3sqbmrve",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3sqbmrv",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "Box",
                                                    "id": "node_ocl3sqbmrvf",
                                                    "props": {
                                                        "direction": "row",
                                                        "justify": "flex-start",
                                                        "align": "center",
                                                        "style": {
                                                            "width": "",
                                                            "marginBottom": "20px"
                                                        },
                                                        "spacing": 8
                                                    },
                                                    "docId": "docl3sqbmrv",
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "Button",
                                                            "id": "node_ocl3sotau8h",
                                                            "props": {
                                                                "prefix": "next-",
                                                                "type": "primary",
                                                                "size": "medium",
                                                                "htmlType": "button",
                                                                "component": "button",
                                                                "children": "新增分类",
                                                                "iconSize": "xxs",
                                                                "ghost": false,
                                                                "loading": false,
                                                                "text": false,
                                                                "warning": false,
                                                                "disabled": false,
                                                                "style": {},
                                                                "__events": {
                                                                    "eventDataList": [
                                                                        {
                                                                            "type": "componentEvent",
                                                                            "name": "onClick",
                                                                            "relatedEventName": "handleAddClassifyShow"
                                                                        }
                                                                    ],
                                                                    "eventList": [
                                                                        {
                                                                            "name": "onClick",
                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                            "disabled": true
                                                                        },
                                                                        {
                                                                            "name": "onMouseUp",
                                                                            "disabled": false
                                                                        }
                                                                    ]
                                                                },
                                                                "onClick": {
                                                                    "type": "JSFunction",
                                                                    "value": "function(){this.handleAddClassifyShow.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                },
                                                                "icon": "add"
                                                            },
                                                            "docId": "docl3sotau8",
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Icon",
                                                                    "id": "node_ocl3sotg2r5",
                                                                    "props": {
                                                                        "type": "add",
                                                                        "style": {
                                                                            "marginRight": 5
                                                                        }
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "componentName": "Button",
                                                            "id": "node_ocl3sqbmrvj",
                                                            "props": {
                                                                "prefix": "next-",
                                                                "type": "normal",
                                                                "size": "medium",
                                                                "htmlType": "button",
                                                                "component": "button",
                                                                "children": "删除",
                                                                "icon": "ashbin",
                                                                "iconSize": "xxs",
                                                                "ghost": false,
                                                                "loading": false,
                                                                "text": false,
                                                                "warning": false,
                                                                "disabled": {
                                                                    "type": "JSExpression",
                                                                    "value": "this.state.classifyDelDisable\r\n",
                                                                    "mock": false
                                                                },
                                                                "__events": {
                                                                    "eventDataList": [
                                                                        {
                                                                            "type": "componentEvent",
                                                                            "name": "onClick",
                                                                            "relatedEventName": "onDelClassify"
                                                                        }
                                                                    ],
                                                                    "eventList": [
                                                                        {
                                                                            "name": "onClick",
                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                            "disabled": true
                                                                        },
                                                                        {
                                                                            "name": "onMouseUp",
                                                                            "disabled": false
                                                                        }
                                                                    ]
                                                                },
                                                                "onClick": {
                                                                    "type": "JSFunction",
                                                                    "value": "function(){this.onDelClassify.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                }
                                                            },
                                                            "hidden": false,
                                                            "title": "",
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "Icon",
                                                                    "id": "node_ocl3sqbtm75",
                                                                    "props": {
                                                                        "type": "ashbin",
                                                                        "style": {
                                                                            "marginRight": 5
                                                                        }
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "componentName": "NextP",
                                            "id": "node_ocl3so5cxv4i",
                                            "props": {
                                                "wrap": false,
                                                "type": "body2",
                                                "verAlign": "middle",
                                                "textSpacing": true,
                                                "align": "left",
                                                "full": true
                                            },
                                            "docId": "docl3so5cxv",
                                            "title": "段落",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "NextTable",
                                                    "id": "node_ocl3so5cxv58",
                                                    "props": {
                                                        "setEmptyContent": true,
                                                        "emptyContent": {
                                                            "type": "JSSlot",
                                                            "value": [
                                                                {
                                                                    "componentName": "Typography.Text",
                                                                    "id": "node_ocl3so5cxv5b",
                                                                    "props": {
                                                                        "children": "No Data"
                                                                    },
                                                                    "hidden": false,
                                                                    "title": "",
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": ""
                                                                }
                                                            ],
                                                            "title": "EmptyContent"
                                                        },
                                                        "showMiniPager": false,
                                                        "showActionBar": false,
                                                        "actionBar": [],
                                                        "data": {
                                                            "type": "JSExpression",
                                                            "value": "this.state.ruleClassifyList",
                                                            "mock": [
                                                                {
                                                                    "name": "王小",
                                                                    "id": "1",
                                                                    "age": 15000,
                                                                    "role": "开发"
                                                                },
                                                                {
                                                                    "name": "王中",
                                                                    "id": "2",
                                                                    "age": 25000,
                                                                    "role": "产品"
                                                                },
                                                                {
                                                                    "name": "王大",
                                                                    "id": "3",
                                                                    "age": 35000,
                                                                    "role": "设计"
                                                                }
                                                            ]
                                                        },
                                                        "actionTitle": "操作",
                                                        "actionWidth": 180,
                                                        "actionType": "link",
                                                        "actionFixed": "right",
                                                        "actionHidden": false,
                                                        "maxWebShownActionCount": 2,
                                                        "actionColumn": [],
                                                        "rowSelector": "checkboxSelector",
                                                        "showRowSelector": true,
                                                        "isTree": true,
                                                        "__events": {
                                                            "eventDataList": [
                                                                {
                                                                    "type": "componentEvent",
                                                                    "name": "onSelect",
                                                                    "relatedEventName": "onClassifyListSelect"
                                                                }
                                                            ],
                                                            "eventList": [
                                                                {
                                                                    "name": "onFetchData",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onSelect",
                                                                    "disabled": true
                                                                },
                                                                {
                                                                    "name": "onRowClick",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onRowMouseEnter",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onRowMouseLeave",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onResizeChange",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onColumnsChange",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onRowOpen",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onShowSearch",
                                                                    "disabled": false
                                                                },
                                                                {
                                                                    "name": "onHideSearch",
                                                                    "disabled": false
                                                                }
                                                            ]
                                                        },
                                                        "onSelect": {
                                                            "type": "JSFunction",
                                                            "value": "function(){this.onClassifyListSelect.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                        },
                                                        "columns": {
                                                            "type": "JSExpression",
                                                            "value": "this.state.classifyColumns"
                                                        }
                                                    },
                                                    "title": "表格",
                                                    "hidden": false,
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": ""
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "componentName": "NextPage",
                                    "id": "node_ockzs2vw431",
                                    "props": {
                                        "headerDivider": true,
                                        "minHeight": "100vh",
                                        "presetNav": true,
                                        "presetAside": true,
                                        "footer": false,
                                        "nav": false,
                                        "aside": false,
                                        "placeholderStyle": {
                                            "gridRowEnd": "span 1",
                                            "gridColumnEnd": "span 12"
                                        },
                                        "headerProps": {
                                            "background": "surface"
                                        },
                                        "header": "",
                                        "isTab": false,
                                        "contentAlignCenter": false,
                                        "contentProps": {
                                            "style": {
                                                "background": "rgba(255,255,255,0)"
                                            }
                                        }
                                    },
                                    "title": "页面",
                                    "hidden": false,
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "children": [
                                        {
                                            "componentName": "NextBlock",
                                            "id": "node_ocl3i18xbd2m",
                                            "props": {
                                                "placeholderStyle": {
                                                    "height": "100%"
                                                },
                                                "noPadding": false,
                                                "noBorder": false,
                                                "title": "",
                                                "rowGap": 20,
                                                "colGap": 20,
                                                "background": "surface",
                                                "layoutmode": "O",
                                                "strict": true,
                                                "colSpan": 12,
                                                "rowSpan": 1,
                                                "mode": "transparent",
                                                "childTotalColumns": 12
                                            },
                                            "title": "区域",
                                            "hidden": false,
                                            "isLocked": false,
                                            "condition": true,
                                            "conditionGroup": "",
                                            "children": [
                                                {
                                                    "componentName": "NextBlockCell",
                                                    "id": "node_ocl3i18xbd2n",
                                                    "props": {
                                                        "colSpan": 12,
                                                        "rowSpan": 1,
                                                        "mode": "procard",
                                                        "isAutoContainer": true,
                                                        "title": "",
                                                        "hasDivider": true,
                                                        "loading": false,
                                                        "bodyPadding": "",
                                                        "hasCollapse": false,
                                                        "text": true,
                                                        "visibleButtonCount": 3,
                                                        "operations": [],
                                                        "operationConfig": {
                                                            "align": "center"
                                                        },
                                                        "style": {}
                                                    },
                                                    "hidden": false,
                                                    "title": "",
                                                    "isLocked": false,
                                                    "condition": true,
                                                    "conditionGroup": "",
                                                    "children": [
                                                        {
                                                            "componentName": "NextRowColContainer",
                                                            "id": "node_ocl3i18xbd2o",
                                                            "props": {
                                                                "rowGap": 20,
                                                                "colGap": 20
                                                            },
                                                            "title": "行列容器",
                                                            "hidden": false,
                                                            "isLocked": false,
                                                            "condition": true,
                                                            "conditionGroup": "",
                                                            "children": [
                                                                {
                                                                    "componentName": "NextRow",
                                                                    "id": "node_ocl3i18xbd2p",
                                                                    "props": {},
                                                                    "title": "行",
                                                                    "hidden": false,
                                                                    "isLocked": false,
                                                                    "condition": true,
                                                                    "conditionGroup": "",
                                                                    "children": [
                                                                        {
                                                                            "componentName": "NextCol",
                                                                            "id": "node_ocl3i18xbd2q",
                                                                            "props": {
                                                                                "colSpan": 1,
                                                                                "justifyContent": "flex-start"
                                                                            },
                                                                            "title": "列",
                                                                            "hidden": false,
                                                                            "isLocked": false,
                                                                            "condition": true,
                                                                            "conditionGroup": "",
                                                                            "children": [
                                                                                {
                                                                                    "componentName": "NextP",
                                                                                    "id": "node_ocl3i18xbd2r",
                                                                                    "props": {
                                                                                        "wrap": false,
                                                                                        "type": "body2",
                                                                                        "verAlign": "middle",
                                                                                        "textSpacing": true,
                                                                                        "align": "left",
                                                                                        "full": true,
                                                                                        "style": {
                                                                                            "display": "inline",
                                                                                            "minWidth": "100vh"
                                                                                        }
                                                                                    },
                                                                                    "title": "段落",
                                                                                    "hidden": false,
                                                                                    "isLocked": false,
                                                                                    "condition": true,
                                                                                    "conditionGroup": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "componentName": "Box",
                                                                                            "id": "node_ocl3rfdkf36",
                                                                                            "props": {
                                                                                                "direction": "row",
                                                                                                "justify": "space-between",
                                                                                                "align": "center",
                                                                                                "style": {
                                                                                                    "width": "",
                                                                                                    "marginBottom": "10px"
                                                                                                },
                                                                                                "spacing": 0
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": "",
                                                                                            "children": [
                                                                                                {
                                                                                                    "componentName": "Box",
                                                                                                    "id": "node_ocl3mb71m0c0",
                                                                                                    "props": {
                                                                                                        "direction": "row",
                                                                                                        "justify": "flex-start",
                                                                                                        "align": "center",
                                                                                                        "style": {
                                                                                                            "width": "600px",
                                                                                                            "height": "28px"
                                                                                                        },
                                                                                                        "spacing": 20
                                                                                                    },
                                                                                                    "docId": "docl3mb71m0",
                                                                                                    "hidden": false,
                                                                                                    "title": "",
                                                                                                    "isLocked": false,
                                                                                                    "condition": true,
                                                                                                    "conditionGroup": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "componentName": "Button",
                                                                                                            "id": "node_ocl3mb71m0c1",
                                                                                                            "props": {
                                                                                                                "prefix": "next-",
                                                                                                                "type": "primary",
                                                                                                                "size": "medium",
                                                                                                                "htmlType": "button",
                                                                                                                "component": "button",
                                                                                                                "children": "新增规则",
                                                                                                                "icon": "add",
                                                                                                                "iconSize": "xxs",
                                                                                                                "ghost": false,
                                                                                                                "loading": false,
                                                                                                                "text": false,
                                                                                                                "warning": false,
                                                                                                                "disabled": false,
                                                                                                                "__events": {
                                                                                                                    "eventDataList": [
                                                                                                                        {
                                                                                                                            "type": "componentEvent",
                                                                                                                            "name": "onClick",
                                                                                                                            "relatedEventName": "onClick_showAddRule"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "eventList": [
                                                                                                                        {
                                                                                                                            "name": "onClick",
                                                                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                                                            "disabled": true
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "name": "onMouseUp",
                                                                                                                            "disabled": false
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "onClick": {
                                                                                                                    "type": "JSFunction",
                                                                                                                    "value": "function(){this.onClick_showAddRule.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                                }
                                                                                                            },
                                                                                                            "docId": "docl3mb71m0",
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "componentName": "Icon",
                                                                                                                    "id": "node_ocl3mb71m0c2",
                                                                                                                    "props": {
                                                                                                                        "type": "add",
                                                                                                                        "style": {
                                                                                                                            "marginRight": 5
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "docId": "docl3mb71m0",
                                                                                                                    "hidden": false,
                                                                                                                    "title": "",
                                                                                                                    "isLocked": false,
                                                                                                                    "condition": true,
                                                                                                                    "conditionGroup": ""
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            "componentName": "Button",
                                                                                                            "id": "node_ocl3mb71m0c3",
                                                                                                            "props": {
                                                                                                                "prefix": "next-",
                                                                                                                "type": "normal",
                                                                                                                "size": "medium",
                                                                                                                "htmlType": "button",
                                                                                                                "component": "button",
                                                                                                                "children": "删除",
                                                                                                                "icon": "ashbin",
                                                                                                                "iconSize": "xs",
                                                                                                                "ghost": false,
                                                                                                                "loading": false,
                                                                                                                "text": false,
                                                                                                                "warning": false,
                                                                                                                "disabled": {
                                                                                                                    "type": "JSExpression",
                                                                                                                    "value": "!this.state.selectedKeys.length",
                                                                                                                    "mock": false
                                                                                                                },
                                                                                                                "__events": {
                                                                                                                    "eventDataList": [
                                                                                                                        {
                                                                                                                            "type": "componentEvent",
                                                                                                                            "name": "onClick",
                                                                                                                            "relatedEventName": "onDeleted"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "eventList": [
                                                                                                                        {
                                                                                                                            "name": "onClick",
                                                                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                                                            "disabled": true
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "name": "onMouseUp",
                                                                                                                            "disabled": false
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "onClick": {
                                                                                                                    "type": "JSFunction",
                                                                                                                    "value": "function(){this.onDeleted.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                                }
                                                                                                            },
                                                                                                            "docId": "docl3mb71m0",
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "componentName": "Icon",
                                                                                                                    "id": "node_ocl3mb71m0c4",
                                                                                                                    "props": {
                                                                                                                        "type": "ashbin",
                                                                                                                        "style": {
                                                                                                                            "marginRight": 5
                                                                                                                        },
                                                                                                                        "size": "medium"
                                                                                                                    },
                                                                                                                    "docId": "docl3mb71m0",
                                                                                                                    "hidden": false,
                                                                                                                    "title": "",
                                                                                                                    "isLocked": false,
                                                                                                                    "condition": true,
                                                                                                                    "conditionGroup": ""
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            "componentName": "Button",
                                                                                                            "id": "node_ocl3mb71m0c5",
                                                                                                            "props": {
                                                                                                                "prefix": "next-",
                                                                                                                "type": "normal",
                                                                                                                "size": "medium",
                                                                                                                "htmlType": "button",
                                                                                                                "component": "button",
                                                                                                                "children": "拷贝",
                                                                                                                "icon": "copy",
                                                                                                                "iconSize": "xs",
                                                                                                                "ghost": false,
                                                                                                                "loading": false,
                                                                                                                "text": false,
                                                                                                                "warning": false,
                                                                                                                "disabled": {
                                                                                                                    "type": "JSExpression",
                                                                                                                    "value": "this.state.selectedKeys.length !== 1",
                                                                                                                    "mock": false
                                                                                                                },
                                                                                                                "__events": {
                                                                                                                    "eventDataList": [
                                                                                                                        {
                                                                                                                            "type": "componentEvent",
                                                                                                                            "name": "onClick",
                                                                                                                            "relatedEventName": "onCopy"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "eventList": [
                                                                                                                        {
                                                                                                                            "name": "onClick",
                                                                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                                                            "disabled": true
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "name": "onMouseUp",
                                                                                                                            "disabled": false
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "onClick": {
                                                                                                                    "type": "JSFunction",
                                                                                                                    "value": "function(){this.onCopy.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                                }
                                                                                                            },
                                                                                                            "docId": "docl3mb71m0",
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "componentName": "Icon",
                                                                                                                    "id": "node_ocl3mb71m0c6",
                                                                                                                    "props": {
                                                                                                                        "type": "copy",
                                                                                                                        "style": {
                                                                                                                            "marginRight": 5
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "docId": "docl3mb71m0",
                                                                                                                    "hidden": false,
                                                                                                                    "title": "",
                                                                                                                    "isLocked": false,
                                                                                                                    "condition": true,
                                                                                                                    "conditionGroup": ""
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            "componentName": "Button",
                                                                                                            "id": "node_ocl3mb71m0c7",
                                                                                                            "props": {
                                                                                                                "prefix": "next-",
                                                                                                                "type": "normal",
                                                                                                                "size": "medium",
                                                                                                                "htmlType": "button",
                                                                                                                "component": "button",
                                                                                                                "children": "打包下载",
                                                                                                                "iconSize": "xs",
                                                                                                                "ghost": false,
                                                                                                                "loading": false,
                                                                                                                "text": false,
                                                                                                                "warning": false,
                                                                                                                "disabled": {
                                                                                                                    "type": "JSExpression",
                                                                                                                    "value": "!this.state.selectedKeys.length",
                                                                                                                    "mock": false
                                                                                                                },
                                                                                                                "icon": "download",
                                                                                                                "__events": {
                                                                                                                    "eventDataList": [
                                                                                                                        {
                                                                                                                            "type": "componentEvent",
                                                                                                                            "name": "onClick",
                                                                                                                            "relatedEventName": "onDownload"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "eventList": [
                                                                                                                        {
                                                                                                                            "name": "onClick",
                                                                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                                                            "disabled": true
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "name": "onMouseUp",
                                                                                                                            "disabled": false
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "onClick": {
                                                                                                                    "type": "JSFunction",
                                                                                                                    "value": "function(){this.onDownload.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                                }
                                                                                                            },
                                                                                                            "docId": "docl3mb71m0",
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "componentName": "Icon",
                                                                                                                    "id": "node_ocl3mb71m0c8",
                                                                                                                    "props": {
                                                                                                                        "type": "download",
                                                                                                                        "style": {
                                                                                                                            "marginRight": 5
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "docId": "docl3mb71m0",
                                                                                                                    "hidden": false,
                                                                                                                    "title": "",
                                                                                                                    "isLocked": false,
                                                                                                                    "condition": true,
                                                                                                                    "conditionGroup": ""
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            "componentName": "Button",
                                                                                                            "id": "node_ocl3mb71m0c9",
                                                                                                            "props": {
                                                                                                                "prefix": "next-",
                                                                                                                "type": "normal",
                                                                                                                "size": "medium",
                                                                                                                "htmlType": "button",
                                                                                                                "component": "button",
                                                                                                                "children": "导入",
                                                                                                                "icon": "upload",
                                                                                                                "iconSize": "xs",
                                                                                                                "ghost": false,
                                                                                                                "loading": false,
                                                                                                                "text": false,
                                                                                                                "warning": false,
                                                                                                                "disabled": false,
                                                                                                                "__events": {
                                                                                                                    "eventDataList": [
                                                                                                                        {
                                                                                                                            "type": "componentEvent",
                                                                                                                            "name": "onClick",
                                                                                                                            "relatedEventName": "onImportField"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "eventList": [
                                                                                                                        {
                                                                                                                            "name": "onClick",
                                                                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                                                            "disabled": true
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "name": "onMouseUp",
                                                                                                                            "disabled": false
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "onClick": {
                                                                                                                    "type": "JSFunction",
                                                                                                                    "value": "function(){this.onImportField.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                                }
                                                                                                            },
                                                                                                            "docId": "docl3mb71m0",
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "componentName": "Icon",
                                                                                                                    "id": "node_ocl3mb71m0ca",
                                                                                                                    "props": {
                                                                                                                        "type": "upload",
                                                                                                                        "style": {
                                                                                                                            "marginRight": 5
                                                                                                                        },
                                                                                                                        "size": "medium"
                                                                                                                    },
                                                                                                                    "docId": "docl3mb71m0",
                                                                                                                    "hidden": false,
                                                                                                                    "title": "",
                                                                                                                    "isLocked": false,
                                                                                                                    "condition": true,
                                                                                                                    "conditionGroup": ""
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            "componentName": "Button",
                                                                                                            "id": "node_ocl3s4fr4kr",
                                                                                                            "props": {
                                                                                                                "prefix": "next-",
                                                                                                                "type": "normal",
                                                                                                                "size": "medium",
                                                                                                                "htmlType": "button",
                                                                                                                "component": "button",
                                                                                                                "children": "分类管理",
                                                                                                                "iconSize": "xxs",
                                                                                                                "ghost": false,
                                                                                                                "loading": false,
                                                                                                                "text": false,
                                                                                                                "warning": false,
                                                                                                                "disabled": false,
                                                                                                                "__events": {
                                                                                                                    "eventDataList": [
                                                                                                                        {
                                                                                                                            "type": "componentEvent",
                                                                                                                            "name": "onClick",
                                                                                                                            "relatedEventName": "handleClassifyManageShow"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "eventList": [
                                                                                                                        {
                                                                                                                            "name": "onClick",
                                                                                                                            "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                                                            "disabled": true
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "name": "onMouseUp",
                                                                                                                            "disabled": false
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "onClick": {
                                                                                                                    "type": "JSFunction",
                                                                                                                    "value": "function(){this.handleClassifyManageShow.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                                }
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": ""
                                                                                                        },
                                                                                                        {
                                                                                                            "componentName": "RcTreeSelect",
                                                                                                            "id": "node_ocl6q3g10vd",
                                                                                                            "props": {
                                                                                                                "treeData": {
                                                                                                                    "type": "JSExpression",
                                                                                                                    "value": "this.state.ruleClassifyList",
                                                                                                                    "mock": [
                                                                                                                        {
                                                                                                                            "title": "Node1",
                                                                                                                            "value": "0-0",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "title": "Child Node1",
                                                                                                                                    "value": "0-0-1"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "title": "Child Node2",
                                                                                                                                    "value": "0-0-2"
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        },
                                                                                                                        {
                                                                                                                            "title": "Node2",
                                                                                                                            "value": "0-1"
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                "allowClear": false,
                                                                                                                "bordered": true,
                                                                                                                "disabled": false,
                                                                                                                "autoClearSearchValue": true,
                                                                                                                "dropdownMatchSelectWidth": true,
                                                                                                                "filterTreeNode": false,
                                                                                                                "labelInValue": false,
                                                                                                                "maxTagPlaceholder": false,
                                                                                                                "multiple": false,
                                                                                                                "placeholder": "请选择",
                                                                                                                "showCheckedStrategy": "TreeSelect.SHOW_CHILD",
                                                                                                                "showSearch": false,
                                                                                                                "size": "middle",
                                                                                                                "placement": "bottomLeft",
                                                                                                                "tagRender": "middle",
                                                                                                                "treeCheckable": false,
                                                                                                                "treeCheckStrictly": false,
                                                                                                                "treeDataSimpleMode": false,
                                                                                                                "treeDefaultExpandAll": false,
                                                                                                                "treeLine": true,
                                                                                                                "treeIcon": true,
                                                                                                                "virtual": true,
                                                                                                                "label": "",
                                                                                                                "name": "",
                                                                                                                "className": "",
                                                                                                                "hidden": false,
                                                                                                                "labelCol": {
                                                                                                                    "span": 2,
                                                                                                                    "offset": 0
                                                                                                                },
                                                                                                                "wrapperCol": {
                                                                                                                    "span": 22,
                                                                                                                    "offset": 0
                                                                                                                },
                                                                                                                "style": {
                                                                                                                    "marginTop": "21px",
                                                                                                                    "height": "28px",
                                                                                                                    "width": "250px"
                                                                                                                }
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": ""
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "componentName": "Search",
                                                                                                    "id": "node_ocl3rfdkf3d",
                                                                                                    "props": {
                                                                                                        "dataSource": [
                                                                                                            {
                                                                                                                "label": "Recent",
                                                                                                                "value": "Recent"
                                                                                                            },
                                                                                                            {
                                                                                                                "label": "dress",
                                                                                                                "value": "dress"
                                                                                                            },
                                                                                                            {
                                                                                                                "label": "sunglasses",
                                                                                                                "value": "sunglasses"
                                                                                                            },
                                                                                                            {
                                                                                                                "label": "t-shirt",
                                                                                                                "value": "t-shirt"
                                                                                                            }
                                                                                                        ],
                                                                                                        "followTrigger": true,
                                                                                                        "searchText": "搜索",
                                                                                                        "prefix": "next-",
                                                                                                        "shape": "simple",
                                                                                                        "type": "normal",
                                                                                                        "size": "medium",
                                                                                                        "hasIcon": true,
                                                                                                        "hasClear": false,
                                                                                                        "disabled": false,
                                                                                                        "style": {
                                                                                                            "width": "200px"
                                                                                                        },
                                                                                                        "__events": {
                                                                                                            "eventDataList": [
                                                                                                                {
                                                                                                                    "type": "componentEvent",
                                                                                                                    "name": "onSearch",
                                                                                                                    "relatedEventName": "onSearch"
                                                                                                                }
                                                                                                            ],
                                                                                                            "eventList": [
                                                                                                                {
                                                                                                                    "name": "onChange",
                                                                                                                    "disabled": false
                                                                                                                },
                                                                                                                {
                                                                                                                    "name": "onSearch",
                                                                                                                    "disabled": true
                                                                                                                },
                                                                                                                {
                                                                                                                    "name": "onFilterChange",
                                                                                                                    "disabled": false
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "onSearch": {
                                                                                                            "type": "JSFunction",
                                                                                                            "value": "function(){this.onSearch.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                        }
                                                                                                    },
                                                                                                    "hidden": false,
                                                                                                    "title": "",
                                                                                                    "isLocked": false,
                                                                                                    "condition": true,
                                                                                                    "conditionGroup": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "componentName": "RcExpandedTable",
                                                                                            "id": "node_ocl6q3gfyf1h",
                                                                                            "props": {
                                                                                                "dataSource": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.ruleList",
                                                                                                    "mock": []
                                                                                                },
                                                                                                "loading": false,
                                                                                                "rowKey": "id",
                                                                                                "tableColumns": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.tableColumn"
                                                                                                },
                                                                                                "rowSelection": true,
                                                                                                "pagination": true,
                                                                                                "type": "checkbox",
                                                                                                "pageSizeOptions": [
                                                                                                    20,
                                                                                                    30,
                                                                                                    50,
                                                                                                    100
                                                                                                ],
                                                                                                "showSizeChanger": true,
                                                                                                "pagination_size": "default",
                                                                                                "showTotal": {
                                                                                                    "type": "JSFunction",
                                                                                                    "value": "function(){ return this.showTotal.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                },
                                                                                                "__events": {
                                                                                                    "eventDataList": [
                                                                                                        {
                                                                                                            "type": "componentEvent",
                                                                                                            "name": "rowSelection_onChange",
                                                                                                            "relatedEventName": "onSelect"
                                                                                                        }
                                                                                                    ],
                                                                                                    "eventList": [
                                                                                                        {
                                                                                                            "name": "onExpand",
                                                                                                            "disabled": false
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "onChange",
                                                                                                            "disabled": false
                                                                                                        },
                                                                                                        {
                                                                                                            "name": "rowSelection_onChange",
                                                                                                            "disabled": true
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                "rowSelection_onChange": {
                                                                                                    "type": "JSFunction",
                                                                                                    "value": "function(){this.onSelect.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                                                },
                                                                                                "pageSize": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.rows"
                                                                                                },
                                                                                                "total": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.total"
                                                                                                },
                                                                                                "current": {
                                                                                                    "type": "JSExpression",
                                                                                                    "value": "this.state.page"
                                                                                                }
                                                                                            },
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": ""
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
}