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
        "id": "getProcessData",
        "type": "axios",
        "options": {
          "uri": "/bpm/r?wf_num=D_S002_J005&wf_gridnum=V_S002_G001",
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
          "value": "function requsetIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const { status, data } = res\r\n  if (status === 200) {\r\n    const list = data.rows.map(item => ({ ...item, id: item.WF_OrUnid }))\r\n    this.setState({ dataSource: list, total: data.total, loading: false })\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "type": "axios",
        "isInit": false,
        "options": {
          "params": {},
          "method": "POST",
          "isCors": true,
          "timeout": 5000,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "uri": {
            "type": "JSExpression",
            "value": "this.state.monitorUrl"
          }
        },
        "id": "getMonitorData",
        "willFetch": {
          "type": "JSFunction",
          "value": "function requsetIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const {status, data} = res\r\n  if(status === 200){\r\n    return data\r\n  }else{\r\n    antd.message.error(data.msg)\r\n  }\r\n}"
        }
      },
      {
        "id": "getFormList",
        "type": "axios",
        "options": {
          "uri": "/bpm/r?wf_num=D_S009_J001&wf_gridnum=V_S009_G001&FormType=2",
          "method": "POST",
          "isCors": true,
          "params": {
            "page": "1",
            "rows": "100"
          },
          "timeout": 5000,
          "headers": {}
        },
        "willFetch": {
          "type": "JSFunction",
          "value": "function requsetIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "isInit": false
      },
      {
        "id": "addProcess",
        "type": "axios",
        "options": {
          "uri": "/bpm/rule?wf_num=R_S002_B003",
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
          "value": "function intercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res) {\r\n  const {data, status} = res\r\n  if (status === 200) {\r\n    antd.message.success(data.msg)\r\n    this.refresh()\r\n  } else {\r\n    antd.message.error(data.msg)\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "id": "editProcess",
        "type": "axios",
        "options": {
          "uri": "/bpm/readgridaction",
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
          "value": "function intercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res) {\r\n  const {data, status} = res\r\n  if (status === 200) {\r\n    antd.message.success(data.msg)\r\n    this.refresh()\r\n  } else {\r\n    antd.message.error(data.msg)\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "id": "downloadProcess",
        "type": "axios",
        "options": {
          "uri": "/bpm/rule?wf_num=R_S002_B017",
          "method": "POST",
          "isCors": true,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "params": {
            "GridNum": "V_S002_G001"
          },
          "timeout": 5000
        },
        "willFetch": {
          "type": "JSFunction",
          "value": "function intercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const {data, status} = res\r\n  if(status === 200){\r\n    antd.message.success(`${data.fileName}下载成功`)\r\n  }else{\r\n    antd.message.error('下载失败')\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "id": "getProcessClassify",
        "type": "axios",
        "options": {
          "uri": "/bpm/rule?wf_num=R_S001_B027&treeid=T_S002_001&ShowRoot=0",
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
          "value": "function intercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const {data, status} = res\r\n  if(status === 200){\r\n    const list = this.treeDataTransform(data)\r\n    const classifyTableList = data.map(item => ({ ...item, id: item.WF_OrUnid }))\r\n    this.setState({ processClassifyList: list, classifyTableList, classifyTreeTargetId: list[0].id})\r\n  }else{\r\n    antd.message.error(data.msg)\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "type": "axios",
        "isInit": false,
        "options": {
          "params": {},
          "method": "POST",
          "isCors": true,
          "timeout": 5000,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "uri": {
            "type": "JSExpression",
            "value": "this.state.transferRecordUrl"
          }
        },
        "id": "getTransferRecord",
        "willFetch": {
          "type": "JSFunction",
          "value": "function requestIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const {status, data} = res\r\n  if(status ===200){\r\n    return data\r\n  }else{\r\n    antd.message.error(data.msg)\r\n  }\r\n}"
        }
      },
      {
        "type": "axios",
        "isInit": false,
        "options": {
          "params": {},
          "method": "POST",
          "isCors": true,
          "timeout": 5000,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "uri": {
            "type": "JSExpression",
            "value": "this.state.documentUrl"
          }
        },
        "id": "getDocumentList",
        "willFetch": {
          "type": "JSFunction",
          "value": "function intercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const { data, status} = res\r\n  if(status === 200){\r\n    return data\r\n  }else{\r\n    antd.message.error( data.msg )\r\n  }\r\n}"
        }
      },
      {
        "id": "editProcessClassify",
        "type": "axios",
        "options": {
          "uri": "/bpm/rule?wf_num=R_S001_B028",
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
          "value": "function requertIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const { status, data } = res\r\n  if( status === 200 ){\r\n    console.log(data)\r\n    if(data.msg === ''){\r\n      antd.message.success('删除分类成功')\r\n    }else{\r\n      antd.message.success('新增分类成功')\r\n    }\r\n    this.dataSourceMap.getProcessClassify.load()\r\n  }else{\r\n    if (data.msg === '') {\r\n      antd.message.error('删除分类失败')\r\n    } else {\r\n      antd.message.error('新增分类失败')\r\n    }\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "id": "getAppList",
        "type": "axios",
        "options": {
          "uri": "/bpm/rest/apps",
          "method": "GET",
          "isCors": true,
          "params": {},
          "timeout": 5000,
          "headers": {}
        },
        "willFetch": {
          "type": "JSFunction",
          "value": "function requestIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res) {\r\n  const { data, status } = res\r\n  if( status === 200){\r\n    const list = data.data.list.map(item => ({\r\n      label: item.AppName,\r\n      value: item.WF_Appid\r\n    }))\r\n    this.setState({appList: list})\r\n  }else{\r\n    antd.message.error(data.msg)\r\n  }\r\n  \r\n}"
        },
        "isInit": false
      },
      {
        "id": "getProcessDataByClassify",
        "type": "axios",
        "options": {
          "uri": "/bpm/r?wf_num=D_S002_J006&wf_gridnum=V_S002_G002",
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
          "value": "function requestIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res) {\r\n  const { status, data } = res\r\n  if (status === 200) {\r\n    const list = data.rows.map(item => ({ ...item, id: item.WF_OrUnid }))\r\n    this.setState({ dataSource: list, total: data.total, loading: false })\r\n  }\r\n}"
        },
        "isInit": false
      },
      {
        "type": "axios",
        "isInit": false,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "uri": {
            "type": "JSExpression",
            "value": "this.state.processExampleUrl"
          }
        },
        "id": "getProcessExample",
        "willFetch": {
          "type": "JSFunction",
          "value": "function requestIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const {data, status} = res\r\n  if(status === 200){\r\n    return data\r\n  }else{\r\n    antd.message.error(data.msg)\r\n  }\r\n}"
        }
      },
      {
        "id": "unlockDocument",
        "type": "axios",
        "options": {
          "uri": "/bpm/rest/processes/tasks/lock",
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
          "value": "function requestIntercetor(options) {\r\n  options.appType = \"bpm\"\r\n  return options;\r\n}"
        },
        "dataHandler": {
          "type": "JSFunction",
          "value": "function resolve(res){\r\n  const { message, success} = res.data.meta\r\n  if (success){\r\n    antd.message.success(message)\r\n  }else{\r\n    antd.message.error(message)\r\n  }\r\n}"
        },
        "isInit": false
      }
    ]
  },
  "state": {
    "columns": {
      "type": "JSExpression",
      "value": "[{\n  title: '流程名称',\n  dataIndex: 'NodeName',\n  key: 'NodeName',\n\n  render(text, record) {\n    return /*#__PURE__*/React.createElement(\"span\", {\n      onClick: this.handleProcess.bind(this, record),\n      style: {\n        color: '#0fb3b4',\n        cursor: \"pointer\"\n      }\n    }, text);\n  }\n\n}, {\n  title: '所属应用',\n  key: 'WF_Appid',\n  dataIndex: 'WF_Appid'\n}, {\n  title: \"所属分类\",\n  dataIndex: 'Folderid',\n  key: 'Folderid'\n}, {\n  title: '绑定表单',\n  dataIndex: 'FormName',\n  key: 'FormName',\n\n  render(text, record) {\n    return /*#__PURE__*/React.createElement(\"span\", {\n      onClick: this.handleForm.bind(this, record),\n      style: {\n        cursor: \"pointer\",\n        color: \"#0fb3b4\"\n      }\n    }, text);\n  }\n\n}, {\n  title: '设计者',\n  dataIndex: 'WF_AddName',\n  key: 'WF_AddName'\n}, {\n  title: '最后更新时间',\n  dataIndex: 'WF_LastModified',\n  key: 'WF_LastModified'\n}, {\n  title: '版本',\n  dataIndex: 'WF_Version',\n  key: 'WF_Version'\n}, {\n  title: '状态',\n  dataIndex: 'Status',\n  key: 'Status',\n\n  render(record) {\n    if (record == \"1\") {\n      return /*#__PURE__*/React.createElement(\"span\", {\n        style: {\n          color: '#0fb3b4'\n        }\n      }, \"\\u5DF2\\u53D1\\u5E03\");\n    }\n\n    if (record == \"0\") {\n      return /*#__PURE__*/React.createElement(\"span\", {\n        style: {\n          color: '#ff3000'\n        }\n      }, \"\\u672A\\u53D1\\u5E03\");\n    }\n  }\n\n}, {\n  title: '启动',\n  dataIndex: '',\n  key: 'run',\n\n  render(text, record) {\n    return /*#__PURE__*/React.createElement(\"span\", {\n      onClick: this.handleRun.bind(this, record),\n      style: {\n        color: '#0fb3b4',\n        cursor: \"pointer\"\n      }\n    }, \"\\u542F\\u52A8\");\n  }\n\n}]"
    },
    "monitorColumns": {
      "type": "JSExpression",
      "value": "[{\n  title: '编号',\n  dataIndex: 'WF_DocNumber',\n  key: 'WF_DocNumber'\n}, {\n  title: '标题',\n  dataIndex: 'Subject',\n  key: 'Subject'\n}, {\n  title: '当前处理人',\n  dataIndex: 'WF_Author_CN',\n  key: 'WF_Author_CN'\n}, {\n  title: '申请者',\n  dataIndex: 'WF_AddName_CN',\n  key: 'WF_AddName_CN'\n}, {\n  title: '申请时间',\n  dataIndex: 'WF_DocCreated',\n  key: 'WF_DocCreated'\n}, {\n  title: '流程名称',\n  dataIndex: 'WF_ProcessName',\n  key: 'WF_ProcessName'\n}, {\n  title: '当前环节',\n  dataIndex: 'WF_CurrentNodeName',\n  key: 'WF_CurrentNodeName'\n}, {\n  title: '耗时',\n  dataIndex: 'TotalTime',\n  key: 'TotalTime',\n  render: text => {\n    return /*#__PURE__*/React.createElement(\"span\", {\n      style: {\n        color: '#0fb3b4'\n      }\n    }, text);\n  }\n}]"
    },
    "dataSource": {
      "type": "JSExpression",
      "value": "[]"
    },
    "monitorSourceData": {
      "type": "JSExpression",
      "value": "{}"
    },
    "monitorPagination": {
      "type": "JSExpression",
      "value": "{}"
    },
    "transferRecordUrl": {
      "type": "JSExpression",
      "value": "''"
    },
    "transferRecordData": {
      "type": "JSExpression",
      "value": "{}"
    },
    "transferRecordRows": {
      "type": "JSExpression",
      "value": "99"
    },
    "transferRecordColumns": {
      "type": "JSExpression",
      "value": "[{\n  title: '用户名',\n  dataIndex: 'UserName',\n  key: 'UserName'\n}, {\n  title: '所属部门',\n  dataIndex: 'DeptName',\n  key: 'DeptName'\n}, {\n  title: '所在节点',\n  dataIndex: 'NodeName',\n  key: 'NodeName'\n}, {\n  title: '提交至',\n  dataIndex: 'NextUserList',\n  key: 'NextUserList'\n}, {\n  title: '送达时间',\n  dataIndex: 'StartTime',\n  key: 'StartTime'\n}, {\n  title: '完成时间',\n  dataIndex: 'EndTime',\n  key: 'EndTime'\n}, {\n  title: '时限',\n  dataIndex: 'ExceedTime',\n  key: 'ExceedTime'\n}, {\n  title: '是否超时',\n  dataIndex: 'OverTimeFlag',\n  key: 'OverTimeFlag',\n  render: text => {\n    if (text === \"0\") {\n      return /*#__PURE__*/React.createElement(\"span\", {\n        style: {\n          color: '#0fb3b4'\n        }\n      }, \"\\u672A\\u8D85\\u65F6\");\n    } else {\n      return /*#__PURE__*/React.createElement(\"span\", {\n        style: {\n          color: '#ff3000'\n        }\n      }, \"\\u5DF2\\u8D85\\u65F6\");\n    }\n  }\n}, {\n  title: '耗时(分)',\n  dataIndex: 'DifTime',\n  key: 'DifTime'\n}, {\n  title: '操作类型',\n  dataIndex: 'ActionName',\n  key: 'ActionName',\n  render: text => {\n    var _text$match;\n\n    const name = (text === null || text === void 0 ? void 0 : (_text$match = text.match(/(?<=\\>).*?(?=\\<)/g)) === null || _text$match === void 0 ? void 0 : _text$match[0]) || text;\n    const isRed = text !== null && text !== void 0 && text.includes('red') ? true : false;\n    return /*#__PURE__*/React.createElement(\"span\", {\n      style: isRed ? {\n        color: '#ff3000'\n      } : {\n        color: '#0fb3b4'\n      }\n    }, name);\n  }\n}, {\n  title: '意见',\n  dataIndex: 'Remark',\n  key: 'Remark',\n  render: text => {\n    var _text$match2;\n\n    const name = (text === null || text === void 0 ? void 0 : (_text$match2 = text.match(/(?<=\\>).*?(?=\\<)/g)) === null || _text$match2 === void 0 ? void 0 : _text$match2[0]) || text;\n    const isRed = text !== null && text !== void 0 && text.includes('red') ? true : false;\n    return /*#__PURE__*/React.createElement(\"span\", {\n      style: isRed ? {\n        color: '#ff3000'\n      } : {\n        color: '#0fb3b4'\n      }\n    }, name);\n  }\n}]"
    },
    "documentUrl": {
      "type": "JSExpression",
      "value": "''"
    },
    "documentRows": {
      "type": "JSExpression",
      "value": "99"
    },
    "documentColumns": {
      "type": "JSExpression",
      "value": "[{\n  title: '附件名称',\n  dataIndex: 'FileName',\n  ket: 'FileName'\n}, {\n  title: '大小',\n  dataIndex: 'FileSize',\n  ket: 'FileSize'\n}, {\n  title: '上传者',\n  dataIndex: 'WF_AddName_CN',\n  ket: 'WF_AddName_CN'\n}, {\n  title: '上传时间',\n  dataIndex: 'WF_DocCreated',\n  ket: 'WF_DocCreated'\n}, {\n  title: '所在节点',\n  dataIndex: 'NodeName',\n  ket: 'NodeName'\n}, {\n  title: '控件字段名',\n  dataIndex: 'FdName',\n  ket: 'FdName'\n}, {\n  title: '路径',\n  dataIndex: 'FilePath',\n  ket: 'FilePath'\n}, {\n  title: '删除标识',\n  dataIndex: 'DeleteFlag',\n  ket: 'DeleteFlag'\n}]"
    },
    "documentData": {
      "type": "JSExpression",
      "value": "{}"
    },
    "processExampleData": {
      "type": "JSExpression",
      "value": "{}"
    },
    "processExampleUrl": {
      "type": "JSExpression",
      "value": "''"
    },
    "formList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "total": {
      "type": "JSExpression",
      "value": "0"
    },
    "loading": {
      "type": "JSExpression",
      "value": "true"
    },
    "page": {
      "type": "JSExpression",
      "value": "1"
    },
    "rows": {
      "type": "JSExpression",
      "value": "20"
    },
    "monitorUrl": {
      "type": "JSExpression",
      "value": "''"
    },
    "selectedKeys": {
      "type": "JSExpression",
      "value": "[]"
    },
    "showTable": {
      "type": "JSExpression",
      "value": "false"
    },
    "addProcessShow": {
      "type": "JSExpression",
      "value": "false"
    },
    "editModalShow": {
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
    "processValue": {
      "type": "JSExpression",
      "value": "{}"
    },
    "processClassifyList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "classifyTableList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "unlockId": {
      "type": "JSExpression",
      "value": "''"
    },
    "appList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "addProcessField": {
      "type": "JSExpression",
      "value": "new Next.Field(this)"
    },
    "editProcessModalTitle": {
      "type": "JSExpression",
      "value": "'删除流程'"
    },
    "editModalTyle": {
      "type": "JSExpression",
      "value": "'del'"
    },
    "modalState": {
      "type": "JSExpression",
      "value": "{\n  'del': {\n    title: '删除流程',\n    content: '确定要删除选中的流程吗?'\n  },\n  'copy': {\n    title: '拷贝',\n    content: '确定要拷贝选中的文档吗?'\n  },\n  'pack': {\n    title: '打包',\n    content: '确定要打包选中的流程吗?'\n  },\n  'stop': {\n    title: '停止',\n    content: '确定要停止选中的文档吗?'\n  },\n  'publish': {\n    title: '发布',\n    content: '确定要发布选中的文档吗'\n  },\n  'delClassify': {\n    title: '删除分类',\n    content: '确定要删除选中的分类吗?'\n  },\n  'unlock': {\n    title: '解除锁定',\n    content: '确定要解除锁定该文档吗?'\n  }\n}"
    },
    "classifyColumns": {
      "type": "JSExpression",
      "value": "[{\n  title: '分类名',\n  dataKey: \"text\"\n}, {\n  title: '分类唯一Id',\n  dataKey: \"WF_OrUnid\"\n}]"
    },
    "classifyDelDisable": {
      "type": "JSExpression",
      "value": "true"
    },
    "classifyListSelectedKeys": {
      "type": "JSExpression",
      "value": "''"
    },
    "classifyTreeTargetKey": {
      "type": "JSExpression",
      "value": "['584138B90417D04EE5097490D812D58CB694']"
    },
    "classifyTreeTargetId": {
      "type": "JSExpression",
      "value": "''"
    },
    "Upload": {
      "type": "JSExpression",
      "value": "/*#__PURE__*/React.createElement(Next.Upload, {\n  action: `${window.location.origin}/restcloud/rest/bpm/process/import`,\n  listType: \"text\",\n  onSuccess: this.onSuccess,\n  onError: this.onError,\n  withCredentials: true,\n  name: \"fileItems\",\n  data: {\n    userToken: `${window.localStorage.getItem(\"identitytoken\")}`\n  }\n}, \"\\u8BF7\\u9009\\u62E9\\u8981\\u4E0A\\u4F20\\u7684\\u6587\\u4EF6\\uFF1A\", /*#__PURE__*/React.createElement(Next.Button, null, /*#__PURE__*/React.createElement(Next.Icon, {\n  type: \"add\"\n})))"
    },
    "fileLength": {
      "type": "JSExpression",
      "value": "0"
    },
    "errorLength": {
      "type": "JSExpression",
      "value": "0"
    },
    "uploadModalShow": {
      "type": "JSExpression",
      "value": "false"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  this.dataSourceMap.getProcessData.load({\n    page: this.state.page,\n    rows: this.state.rows\n  });\n  this.dataSourceMap.getFormList.load().then(res => {\n    this.setState({\n      formList: res.rows\n    });\n  });\n  this.dataSourceMap.getProcessClassify.load();\n  this.dataSourceMap.getAppList.load();\n}"
    },
    "componentWillUnmount": {
      "type": "JSFunction",
      "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
    }
  },
  "methods": {
    "treeDataTransform": {
      "type": "JSFunction",
      "value": "function treeDataTransform(data) {\n  const arr = data.map(item => {\n    return {\n      value: item.WF_OrUnid,\n      title: item.text,\n      label: item.text,\n      key: item.WF_OrUnid,\n      id: item.id,\n      isLeaf: item.state === 'open' && !item.children,\n      icon: ({\n        isLeaf,\n        expanded\n      }) => !isLeaf && (expanded ? /*#__PURE__*/React.createElement(icons.FolderOpenOutlined, null) : /*#__PURE__*/React.createElement(icons.FolderOutlined, null)),\n      children: item.children && this.treeDataTransform(item.children)\n    };\n  });\n  return arr;\n}"
    },
    "handleRun": {
      "type": "JSFunction",
      "value": "function handleRun(record) {\n  const origin = window.location.origin;\n  window.open(`${origin}/process.html?processId=${record.Processid}`);\n}"
    },
    "handleProcess": {
      "type": "JSFunction",
      "value": "function handleProcess(record) {\n  const origin = window.location.origin;\n  window.open(`${origin}/xflow.html?Processid=${record.Processid}`);\n}"
    },
    "handleForm": {
      "type": "JSFunction",
      "value": "function handleForm(record) {\n  const origin = window.location.origin;\n  const index = this.state.formList.findIndex(item => item.FormName === record.FormName);\n  window.open(`${origin}/processDesign.html?id=${this.state.formList[index].WF_OrUnid}`);\n}"
    },
    "showTotal": {
      "type": "JSFunction",
      "value": "function showTotal(total, range) {\n  return `${range[0]}-${range[1]} of ${total} items`;\n}"
    },
    "onExpand": {
      "type": "JSFunction",
      "value": "function onExpand(expanded, record) {\n  if (!this.state.monitorSourceData[record.id]) {\n    const url = `/bpm/r?wf_num=D_S014_J004&wf_gridnum=V_S014_G008&Processid=${record.Processid}`;\n    this.setState({\n      monitorUrl: url\n    }, () => {\n      this.dataSourceMap.getMonitorData.load({\n        page: 1,\n        rows: 20\n      }).then(res => {\n        const list = res.rows.map(item => ({ ...item,\n          id: item.WF_OrUnid\n        }));\n        this.setState({\n          monitorSourceData: { ...this.state.monitorSourceData,\n            [record.id]: list\n          },\n          monitorPagination: { ...this.state.monitorPagination,\n            [record.id]: {\n              page: 1,\n              rows: 20,\n              total: res.total\n            }\n          }\n        });\n      });\n    });\n  }\n}"
    },
    "onExpandByMonitor": {
      "type": "JSFunction",
      "value": "function onExpandByMonitor(expanded, record) {\n  if (!this.state.transferRecordData[record.id]) {\n    const transferRecordUrl = `/bpm/rule?wf_num=R_S003_B048&wf_gridnum=V_S014_G009&DocUnid=${record.id}`;\n    const documentUrl = `/bpm/json?wf_num=D_S014_J007&WF_DocUnid=${record.id}`;\n    const processExampleUrl = `/bpm/rest/processes/tasks/${record.id}`;\n    this.setState({\n      transferRecordUrl,\n      documentUrl,\n      processExampleUrl\n    }, () => {\n      this.dataSourceMap.getTransferRecord.load({\n        page: 1,\n        rows: this.state.transferRecordRows\n      }).then(res => {\n        const list = res.rows.map(item => ({ ...item,\n          WF_Appid: record.WF_Appid,\n          id: item.WF_OrUnid\n        }));\n        this.setState({\n          transferRecordData: { ...this.state.transferRecordData,\n            [record.id]: list\n          }\n        });\n      });\n      this.dataSourceMap.getDocumentList.load({\n        page: 1,\n        rows: 99\n      }).then(res => {\n        const list = res.rows.map(item => ({ ...item,\n          id: item.WF_OrUnid\n        }));\n        this.setState({\n          documentData: { ...this.state.documentData,\n            [record.id]: list\n          }\n        });\n      });\n      this.dataSourceMap.getProcessExample.load().then(res => {\n        const data = res.data;\n        this.setState({\n          processExampleData: { ...this.state.processExampleData,\n            [record.id]: data\n          }\n        });\n      });\n    });\n  }\n}"
    },
    "refresh": {
      "type": "JSFunction",
      "value": "function refresh() {\n  if (this.state.classifyTreeTargetId === '001') {\n    this.dataSourceMap.getProcessData.load({\n      page: 1,\n      rows: this.state.rows\n    }).then(res => {\n      this.setState({\n        page: 1\n      });\n    });\n  } else {\n    this.dataSourceMap.getProcessDataByClassify.load({\n      page: 1,\n      rows: this.state.rows,\n      Folderid: this.state.classifyTreeTargetId\n    }).then(res => {\n      this.setState({\n        page: 1\n      });\n    });\n  }\n}"
    },
    "onChange": {
      "type": "JSFunction",
      "value": "function onChange(pagination) {\n  const {\n    current,\n    pageSize\n  } = pagination;\n  this.dataSourceMap.getProcessData.load({\n    page: current,\n    rows: pageSize\n  }).then(() => {\n    this.setState({\n      page: current,\n      rows: pageSize\n    });\n  });\n}"
    },
    "onProcessSelected": {
      "type": "JSFunction",
      "value": "function onProcessSelected(value) {\n  value = value ? value : [];\n  this.setState({\n    selectedKeys: value\n  });\n}"
    },
    "onClassifyListSelect": {
      "type": "JSFunction",
      "value": "function onClassifyListSelect(select, row, record) {\n  if (record.length == 1) {\n    this.setState({\n      classifyDelDisable: false,\n      classifyListSelectedKeys: record[0].WF_OrUnid\n    });\n  } else {\n    this.setState({\n      classifyDelDisable: true\n    });\n  }\n}"
    },
    "xflowPreview": {
      "type": "JSFunction",
      "value": "function xflowPreview(processId, docUnid) {\n  return /*#__PURE__*/React.createElement(window.xflowPreview, {\n    processId: processId,\n    DocUnid: docUnid,\n    processFullScreen: false\n  });\n}"
    },
    "handleAddProcessShow": {
      "type": "JSFunction",
      "value": "function handleAddProcessShow() {\n  const Processid = window.uuidv4().split(\"-\").join(\"\");\n  this.state.addProcessField.setValue(\"Processid\", Processid);\n  this.setState({\n    addProcessShow: true,\n    processValue: {\n      Processid\n    }\n  });\n}"
    },
    "handleClassifyManageShow": {
      "type": "JSFunction",
      "value": "function handleClassifyManageShow() {\n  this.setState({\n    classifyManageShow: true\n  });\n}"
    },
    "handleAddClassifyShow": {
      "type": "JSFunction",
      "value": "function handleAddClassifyShow() {\n  this.setState({\n    addClassifyShow: true\n  });\n}"
    },
    "closeAddProcess": {
      "type": "JSFunction",
      "value": "function closeAddProcess() {\n  this.setState({\n    addProcessShow: false\n  });\n}"
    },
    "onClick_processSubmit": {
      "type": "JSFunction",
      "value": "function onClick_processSubmit(value) {\n  this.setState({\n    Processid: value.Processid,\n    addProcessShow: false\n  });\n  this.dataSourceMap.addProcess.load({ ...value,\n    Nodeid: \"Process\",\n    QryNodeType: \"Process\"\n  });\n}"
    },
    "editModalSubmit": {
      "type": "JSFunction",
      "value": "function editModalSubmit() {\n  const type = this.state.editModalTyle;\n  const keys = this.state.selectedKeys.join(',');\n\n  if (type === 'del') {\n    this.dataSourceMap.editProcess.load({\n      WF_Action: 'del',\n      WF_OrUnid: keys,\n      wf_num: 'V_S002_G001'\n    });\n  } else if (type === 'copy') {\n    this.dataSourceMap.editProcess.load({\n      WF_Action: 'copy',\n      WF_OrUnid: keys,\n      wf_num: 'V_S002_G001'\n    });\n  } else if (type === 'publish') {\n    this.dataSourceMap.editProcess.load({\n      WF_Action: 'btnClick',\n      WF_Btnid: 'publish',\n      WF_OrUnid: keys,\n      wf_num: 'V_S002_G001'\n    });\n  } else if (type === 'stop') {\n    this.dataSourceMap.editProcess.load({\n      WF_Action: 'btnClick',\n      WF_Btnid: 'stop',\n      WF_OrUnid: keys,\n      wf_num: 'V_S002_G001'\n    });\n  } else if (type === 'delClassify') {\n    this.dataSourceMap.editProcessClassify.load({\n      docUnid: this.state.classifyListSelectedKeys,\n      wf_action: 'delete'\n    });\n  } else if (type === 'unlock') {\n    this.dataSourceMap.unlockDocument.load({\n      docUnid: this.state.unlockId,\n      lock: 0\n    }).then(res => {\n      this.dataSourceMap.getProcessExample.load().then(res => {\n        const data = res.data;\n        this.setState({\n          processExampleData: { ...this.state.processExampleData,\n            [this.state.unlockId]: data\n          }\n        });\n      });\n    });\n  }\n\n  this.closeEditModal();\n}"
    },
    "closeEditModal": {
      "type": "JSFunction",
      "value": "function closeEditModal() {\n  this.setState({\n    editModalShow: false\n  });\n}"
    },
    "closeClassifyManage": {
      "type": "JSFunction",
      "value": "function closeClassifyManage() {\n  this.setState({\n    classifyManageShow: false\n  });\n}"
    },
    "closeAddClassifyShow": {
      "type": "JSFunction",
      "value": "function closeAddClassifyShow() {\n  this.setState({\n    addClassifyShow: false\n  });\n}"
    },
    "handleDelProcess": {
      "type": "JSFunction",
      "value": "function handleDelProcess() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'del'\n  });\n}"
    },
    "handleCopyProcess": {
      "type": "JSFunction",
      "value": "function handleCopyProcess() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'copy'\n  });\n}"
    },
    "handlePublishProcess": {
      "type": "JSFunction",
      "value": "function handlePublishProcess() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'publish'\n  });\n}"
    },
    "handleStopProcess": {
      "type": "JSFunction",
      "value": "function handleStopProcess() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'stop'\n  });\n}"
    },
    "handlePack": {
      "type": "JSFunction",
      "value": "function handlePack() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'pack'\n  });\n}"
    },
    "onProcessClassifyChange": {
      "type": "JSFunction",
      "value": "function onProcessClassifyChange(value, label, extra) {\n  const id = extra.triggerNode.props.id;\n  this.setState({\n    classifyTreeTargetId: id\n  });\n\n  if (id === '001') {\n    this.dataSourceMap.getProcessData.load({\n      page: 1,\n      rows: 20\n    }).then(res => {\n      this.setState({\n        page: 1,\n        rows: 20\n      });\n    });\n  } else {\n    this.dataSourceMap.getProcessDataByClassify.load({\n      page: 1,\n      rows: 20,\n      Folderid: id\n    }).then(res => {\n      this.setState({\n        page: 1,\n        rows: 20\n      });\n    });\n  }\n}"
    },
    "onUnlock": {
      "type": "JSFunction",
      "value": "function onUnlock(e, obj) {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'unlock',\n    unlockId: obj.docUnid\n  });\n}"
    },
    "onSearch": {
      "type": "JSFunction",
      "value": "function onSearch(value) {\n  if (this.state.classifyTreeTargetId === '001') {\n    this.dataSourceMap.getProcessData.load({\n      page: 1,\n      rows: 20,\n      searchStr: value\n    }).then(res => {\n      this.setState({\n        page: 1,\n        rows: 20\n      });\n    });\n  } else {\n    this.dataSourceMap.getProcessDataByClassify.load({\n      page: 1,\n      rows: 20,\n      Folderid: this.state.classifyTreeTargetId,\n      searchStr: value\n    }).then(res => {\n      this.setState({\n        page: 1,\n        rows: 20\n      });\n    });\n  }\n}"
    },
    "onAddClassify": {
      "type": "JSFunction",
      "value": "function onAddClassify(value) {\n  this.dataSourceMap.editProcessClassify.load({ ...value,\n    treeid: \"T_S002_001\"\n  });\n  this.closeAddClassifyShow();\n}"
    },
    "onDelClassify": {
      "type": "JSFunction",
      "value": "function onDelClassify() {\n  this.setState({\n    editModalShow: true,\n    editModalTyle: 'delClassify'\n  });\n}"
    },
    "onClick_upload": {
      "type": "JSFunction",
      "value": "function onClick_upload() {\n  let token = window.localStorage.getItem(\"identitytoken\");\n  this.setState({\n    uploadModalShow: true\n  });\n  setCookie(\"identitytoken\", token);\n}"
    },
    "onCancel_upload": {
      "type": "JSFunction",
      "value": "function onCancel_upload() {\n  this.setState({\n    uploadModalShow: false\n  });\n  clearCookie();\n}"
    },
    "onClick_uploadOk": {
      "type": "JSFunction",
      "value": "function onClick_uploadOk() {\n  if (this.state.errorLength !== 0) {\n    Next.Message.error(\"请选择正确的文件！\");\n  } else {\n    Next.Message.success(`成功导入${this.state.fileLength}条数据`);\n    this.setState({\n      uploadModalShow: false\n    });\n    clearCookie();\n    this.dataSourceMap.getProcessData.load();\n  }\n}"
    },
    "setCookie": {
      "type": "JSFunction",
      "value": "function setCookie(c_name, value, expiredays) {\n  let exdate = new Date();\n  exdate.setDate(exdate.getDate() + expiredays);\n  let expires = expiredays === undefined ? \"\" : \";expires=\" + exdate.toGMTString();\n  document.cookie = c_name + \"=\" + escape(value) + expires + \";path=/\";\n}"
    },
    "clearCookie": {
      "type": "JSFunction",
      "value": "function clearCookie() {\n  var keys = document.cookie.match(/[^ =;]+(?=\\=)/g);\n\n  if (keys) {\n    for (var i = keys.length; i--;) {\n      document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString(); //清除当前域名下的,例如：m.kevis.com\n\n      document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString(); //清除当前域名下的，例如 .m.kevis.com\n\n      document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString(); //清除一级域名下的或指定的，例如 .kevis.com\n    }\n  }\n}"
    },
    "onSuccess": {
      "type": "JSFunction",
      "value": "function onSuccess(file, value) {\n  this.setState({\n    fileLength: value.length\n  });\n}"
    },
    "onError": {
      "type": "JSFunction",
      "value": "function onError(file, value) {\n  this.setState({\n    errorLength: value.length\n  });\n}"
    }
  },
  "originCode": "class LowcodeComponent extends Component {\n  state = {\n    columns: [\n      {\n        title: '流程名称',\n        dataIndex: 'NodeName',\n        key: 'NodeName',\n        render(text, record) {\n          return (\n            <span onClick={this.handleProcess.bind(this, record)} style={{ color: '#0fb3b4', cursor: \"pointer\" }}>{text}</span>\n          )\n        }\n      }, {\n        title: '所属应用',\n        key: 'WF_Appid',\n        dataIndex: 'WF_Appid'\n      }, {\n        title: \"所属分类\",\n        dataIndex: 'Folderid',\n        key: 'Folderid'\n      }, {\n        title: '绑定表单',\n        dataIndex: 'FormName',\n        key: 'FormName',\n        render(text, record) {\n          return (\n            <span onClick={this.handleForm.bind(this, record)} style={{ cursor: \"pointer\", color: \"#0fb3b4\" }}>{text}</span>\n          )\n        }\n      }, {\n        title: '设计者',\n        dataIndex: 'WF_AddName',\n        key: 'WF_AddName',\n      }, {\n        title: '最后更新时间',\n        dataIndex: 'WF_LastModified',\n        key: 'WF_LastModified'\n      }, {\n        title: '版本',\n        dataIndex: 'WF_Version',\n        key: 'WF_Version'\n      }, {\n        title: '状态',\n        dataIndex: 'Status',\n        key: 'Status',\n        render(record) {\n          if (record == \"1\") {\n            return (\n              <span style={{ color: '#0fb3b4' }}>已发布</span>\n            )\n          }\n          if (record == \"0\") {\n            return (\n              <span style={{ color: '#ff3000' }}>未发布</span>\n            )\n          }\n        }\n      }, {\n        title: '启动',\n        dataIndex: '',\n        key:'run',\n        render(text, record) {\n          return (\n            <span onClick={this.handleRun.bind(this, record)} style={{ color: '#0fb3b4', cursor: \"pointer\" }}>启动</span>\n          )\n        }\n      }\n    ],\n    monitorColumns: [\n      {\n        title: '编号',\n        dataIndex: 'WF_DocNumber',\n        key: 'WF_DocNumber'\n      },\n      {\n        title: '标题',\n        dataIndex: 'Subject',\n        key: 'Subject'\n      },\n      {\n        title: '当前处理人',\n        dataIndex: 'WF_Author_CN',\n        key: 'WF_Author_CN'\n      },\n      {\n        title: '申请者',\n        dataIndex: 'WF_AddName_CN',\n        key: 'WF_AddName_CN'\n      },\n      {\n        title: '申请时间',\n        dataIndex: 'WF_DocCreated',\n        key: 'WF_DocCreated'\n      },\n      {\n        title: '流程名称',\n        dataIndex: 'WF_ProcessName',\n        key: 'WF_ProcessName'\n      },\n      {\n        title: '当前环节',\n        dataIndex: 'WF_CurrentNodeName',\n        key: 'WF_CurrentNodeName'\n      },\n      {\n        title: '耗时',\n        dataIndex: 'TotalTime',\n        key: 'TotalTime',\n        render: (text) => {\n          return <span style={{ color:'#0fb3b4'}}>{text}</span>\n        }\n      }\n    ],\n    dataSource: [],\n    monitorSourceData: {},\n    monitorPagination: {},\n    transferRecordUrl: '',\n    transferRecordData: {},\n    transferRecordRows: 99,\n    transferRecordColumns:[\n      {\n        title: '用户名',\n        dataIndex: 'UserName',\n        key: 'UserName'\n      },\n      {\n        title: '所属部门',\n        dataIndex: 'DeptName',\n        key: 'DeptName'\n      },\n      {\n        title: '所在节点',\n        dataIndex: 'NodeName',\n        key: 'NodeName'\n      },\n      {\n        title: '提交至',\n        dataIndex: 'NextUserList',\n        key: 'NextUserList'\n      },\n      {\n        title: '送达时间',\n        dataIndex: 'StartTime',\n        key: 'StartTime'\n      },\n      {\n        title: '完成时间',\n        dataIndex: 'EndTime',\n        key: 'EndTime'\n      },\n      {\n        title: '时限',\n        dataIndex: 'ExceedTime',\n        key: 'ExceedTime'\n      },\n      {\n        title: '是否超时',\n        dataIndex: 'OverTimeFlag',\n        key: 'OverTimeFlag',\n        render: (text) => {\n          if (text === \"0\") {\n            return (\n              <span style={{ color: '#0fb3b4' }}>未超时</span>\n            )\n          }else{\n            return (\n              <span style={{ color: '#ff3000' }}>已超时</span>\n            )\n          }\n        }\n      },\n      {\n        title: '耗时(分)',\n        dataIndex: 'DifTime',\n        key: 'DifTime'\n      },\n      {\n        title: '操作类型',\n        dataIndex: 'ActionName',\n        key: 'ActionName',\n        render: (text) => {\n          const name = text?.match(/(?<=\\>).*?(?=\\<)/g)?.[0] || text\n          const isRed = text?.includes('red') ? true : false\n          return (\n            <span style={isRed ? { color: '#ff3000' } : { color: '#0fb3b4' } }>{name}</span>\n          )\n        }\n      },\n      {\n        title: '意见',\n        dataIndex: 'Remark',\n        key: 'Remark',\n        render: (text) => {\n          const name = text?.match(/(?<=\\>).*?(?=\\<)/g)?.[0] || text\n          const isRed = text?.includes('red') ? true : false\n          return (\n            <span style={isRed ? { color: '#ff3000' } : { color: '#0fb3b4' }}>{name}</span>\n          )\n        }\n\n        \n      },\n    ],\n    documentUrl: '',\n    documentRows: 99,\n    documentColumns: [\n      {\n        title: '附件名称',\n        dataIndex: 'FileName',\n        ket: 'FileName'\n      },\n      {\n        title: '大小',\n        dataIndex: 'FileSize',\n        ket: 'FileSize'\n      },\n      {\n        title: '上传者',\n        dataIndex: 'WF_AddName_CN',\n        ket: 'WF_AddName_CN'\n      },\n      {\n        title: '上传时间',\n        dataIndex: 'WF_DocCreated',\n        ket: 'WF_DocCreated'\n      },\n      {\n        title: '所在节点',\n        dataIndex: 'NodeName',\n        ket: 'NodeName'\n      },\n      {\n        title: '控件字段名',\n        dataIndex: 'FdName',\n        ket: 'FdName'\n      },\n      {\n        title: '路径',\n        dataIndex: 'FilePath',\n        ket: 'FilePath'\n      },\n      {\n        title: '删除标识',\n        dataIndex: 'DeleteFlag',\n        ket: 'DeleteFlag'\n      }\n    ],\n    documentData: {},\n    processExampleData: {},\n    processExampleUrl: '',\n    formList: [],\n    total: 0,\n    loading: true,\n    page: 1,\n    rows: 20,\n    monitorUrl: '',\n    selectedKeys: [],\n    showTable: false,\n    addProcessShow: false,\n    editModalShow: false,\n    classifyManageShow: false,\n    addClassifyShow: false,\n    processValue: {},\n    processClassifyList: [],\n    classifyTableList: [],\n    unlockId: '',\n    appList: [],\n    addProcessField: new Next.Field(this),\n    editProcessModalTitle: '删除流程',\n    editModalTyle: 'del',\n    modalState: {\n      'del': {\n        title: '删除流程',\n        content: '确定要删除选中的流程吗?'\n      },\n      'copy': {\n        title: '拷贝',\n        content: '确定要拷贝选中的文档吗?'\n      },\n      'pack': {\n        title: '打包',\n        content: '确定要打包选中的流程吗?'\n      },\n      'stop': {\n        title: '停止',\n        content: '确定要停止选中的文档吗?'\n      },\n      'publish': {\n        title: '发布',\n        content: '确定要发布选中的文档吗'\n      },\n      'delClassify': {\n        title: '删除分类',\n        content: '确定要删除选中的分类吗?'\n      },\n      'unlock': {\n        title: '解除锁定',\n        content: '确定要解除锁定该文档吗?'\n      }\n    },\n    classifyColumns: [\n      {\n        title: '分类名',\n        dataKey: \"text\",\n      },\n      {\n        title: '分类唯一Id',\n        dataKey: \"WF_OrUnid\"\n      }\n    ],\n    classifyDelDisable: true,\n    classifyListSelectedKeys: '',\n    classifyTreeTargetKey: ['584138B90417D04EE5097490D812D58CB694'],\n    classifyTreeTargetId:'',\n    \"Upload\": <Next.Upload\n      action={`${window.location.origin}/restcloud/rest/bpm/process/import`}\n      listType=\"text\"\n      onSuccess={this.onSuccess}\n      onError={this.onError}\n      withCredentials={true}\n      name=\"fileItems\"\n      data={{ userToken: `${window.localStorage.getItem(\"identitytoken\")}` }}\n    >\n      请选择要上传的文件：<Next.Button>\n        <Next.Icon type=\"add\"></Next.Icon>\n      </Next.Button>\n    </Next.Upload>,\n    fileLength: 0,\n    errorLength: 0,\n    uploadModalShow: false\n  }\n\n  componentDidMount() {\n    this.dataSourceMap.getProcessData.load({page:this.state.page,rows:this.state.rows})\n    this.dataSourceMap.getFormList.load().then(res => {\n      this.setState({formList:res.rows})\n    })\n    this.dataSourceMap.getProcessClassify.load()\n    this.dataSourceMap.getAppList.load()\n  }\n\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n\n  treeDataTransform(data){\n    const arr = data.map(item => {\n      return {\n        value: item.WF_OrUnid,\n        title: item.text,\n        label: item.text,\n        key: item.WF_OrUnid,\n        id: item.id,\n        isLeaf: item.state === 'open' && !item.children,\n        icon: ({ isLeaf, expanded }) => !isLeaf && (expanded ? <icons.FolderOpenOutlined /> : <icons.FolderOutlined />),\n        children: item.children && this.treeDataTransform(item.children)\n      }\n    })\n    return arr\n  }\n\n  handleRun(record){\n    const origin = window.location.origin\n    window.open(`${origin}/process.html?processId=${record.Processid}`)\n  }\n\n  handleProcess(record){\n    const origin = window.location.origin\n    window.open(`${origin}/xflow.html?Processid=${record.Processid}`)\n  }\n\n  handleForm(record){\n    const origin = window.location.origin\n    const index = this.state.formList.findIndex(item => item.FormName === record.FormName)\n    window.open(`${origin}/processDesign.html?id=${this.state.formList[index].WF_OrUnid}`)\n  }\n \n  showTotal(total, range) {\n    return `${range[0]}-${range[1]} of ${total} items`\n  }\n\n  onExpand(expanded, record){\n    if (!this.state.monitorSourceData[record.id]){\n      const url = `/bpm/r?wf_num=D_S014_J004&wf_gridnum=V_S014_G008&Processid=${record.Processid}`\n      this.setState({ monitorUrl: url }, () => {\n        this.dataSourceMap.getMonitorData.load({ page: 1, rows: 20 }).then(res => {\n          const list = res.rows.map(item => ({ ...item, id: item.WF_OrUnid }))\n          this.setState({\n            monitorSourceData: {\n              ...this.state.monitorSourceData,\n              [record.id]: list\n            },\n            monitorPagination: {\n              ...this.state.monitorPagination,\n              [record.id]: {\n                page: 1,\n                rows: 20,\n                total: res.total\n              }\n            }\n          })\n        })\n      })\n    }\n\t}\n\n  onExpandByMonitor(expanded, record){\n    if (!this.state.transferRecordData[record.id]) {\n      const transferRecordUrl = `/bpm/rule?wf_num=R_S003_B048&wf_gridnum=V_S014_G009&DocUnid=${record.id}`\n      const documentUrl = `/bpm/json?wf_num=D_S014_J007&WF_DocUnid=${record.id}`\n      const processExampleUrl = `/bpm/rest/processes/tasks/${record.id}`\n      this.setState({ transferRecordUrl, documentUrl, processExampleUrl }, () => {\n        this.dataSourceMap.getTransferRecord.load({ page: 1, rows: this.state.transferRecordRows }).then(res => {\n          const list = res.rows.map(item => ({ ...item, WF_Appid: record.WF_Appid, id: item.WF_OrUnid }))\n          this.setState({\n            transferRecordData: {\n              ...this.state.transferRecordData,\n              [record.id]: list\n            }\n          })\n        })\n        this.dataSourceMap.getDocumentList.load({ page: 1, rows: 99 }).then(res => {\n          const list = res.rows.map(item => ({ ...item, id: item.WF_OrUnid }))\n          this.setState({\n            documentData: {\n              ...this.state.documentData,\n              [record.id]: list\n            }\n          })\n        })\n        this.dataSourceMap.getProcessExample.load().then(res => {\n          const data = res.data\n          this.setState({ \n            processExampleData: {\n              ...this.state.processExampleData,\n              [record.id]: data\n            }\n          })\n        })\n      })\n    }\n\t}\n\n  refresh(){\n    if (this.state.classifyTreeTargetId === '001') {\n      this.dataSourceMap.getProcessData.load({ page: 1, rows: this.state.rows }).then(res => {\n        this.setState({ page: 1})\n      })\n    } else {\n      this.dataSourceMap.getProcessDataByClassify.load({ page: 1, rows: this.state.rows, Folderid: this.state.classifyTreeTargetId }).then(res => {\n        this.setState({ page: 1 })\n      })\n    }\n  }\n\n  onChange(pagination) {\n    const { current, pageSize } = pagination\n    this.dataSourceMap.getProcessData.load({ page: current, rows: pageSize }).then(() => {\n      this.setState({page:current,rows:pageSize})\n    })\n  }\n\n  onProcessSelected(value) {\n    value = value ? value : []\n    this.setState({ selectedKeys:value})\n  }\n\n  onClassifyListSelect(select, row, record) {\n    if (record.length == 1) {\n      this.setState({\n        classifyDelDisable: false,\n        classifyListSelectedKeys: record[0].WF_OrUnid\n      })\n    } else {\n      this.setState({\n        classifyDelDisable: true\n      })\n    }\n  }\n\n  xflowPreview(processId, docUnid){\n    return (\n      <window.xflowPreview processId={processId} DocUnid={docUnid} processFullScreen={false} />\n    )\n  }\n\n  // 按钮\n  handleAddProcessShow() {\n    const Processid = window.uuidv4().split(\"-\").join(\"\")\n    this.state.addProcessField.setValue(\"Processid\", Processid)\n    this.setState({\n      addProcessShow: true,\n      processValue: {\n        Processid\n      }\n    })\n  }\n\n  handleClassifyManageShow(){\n    this.setState({classifyManageShow: true})\n  }\n\n  handleAddClassifyShow() {\n    this.setState({ addClassifyShow: true })\n  }\n\n  closeAddProcess(){\n    this.setState({\n      addProcessShow: false\n    })\n  }\n\n  onClick_processSubmit(value) {\n    this.setState({\n      Processid: value.Processid,\n      addProcessShow:false\n    })\n    this.dataSourceMap.addProcess.load({\n      ...value,\n      Nodeid: \"Process\",\n      QryNodeType: \"Process\"\n    })\n  }\n\n  editModalSubmit(){\n    const type = this.state.editModalTyle\n    const keys = this.state.selectedKeys.join(',')\n    if (type === 'del'){\n      this.dataSourceMap.editProcess.load({ WF_Action: 'del', WF_OrUnid: keys, wf_num: 'V_S002_G001'})\n    }else if(type === 'copy'){\n      this.dataSourceMap.editProcess.load({ WF_Action: 'copy', WF_OrUnid: keys, wf_num: 'V_S002_G001' })\n    }else if (type === 'publish'){\n      this.dataSourceMap.editProcess.load({ WF_Action: 'btnClick', WF_Btnid: 'publish', WF_OrUnid: keys, wf_num: 'V_S002_G001' })\n    }else if(type === 'stop'){\n      this.dataSourceMap.editProcess.load({ WF_Action: 'btnClick', WF_Btnid: 'stop', WF_OrUnid: keys, wf_num: 'V_S002_G001' })\n    } else if (type === 'delClassify'){\n      this.dataSourceMap.editProcessClassify.load({ docUnid: this.state.classifyListSelectedKeys, wf_action: 'delete' })\n    }else if( type === 'unlock'){\n      this.dataSourceMap.unlockDocument.load({ docUnid: this.state.unlockId, lock: 0 }).then(res => {\n        this.dataSourceMap.getProcessExample.load().then(res => {\n          const data = res.data\n          this.setState({\n            processExampleData: {\n              ...this.state.processExampleData,\n              [this.state.unlockId]: data\n            }\n          })\n        })\n      })\n    }\n    this.closeEditModal()\n  }\n\n  closeEditModal(){\n    this.setState({ editModalShow:false})\n  }\n\n  closeClassifyManage() {\n    this.setState({ classifyManageShow: false })\n  }\n\n  closeAddClassifyShow() {\n    this.setState({ addClassifyShow: false })\n  }\n\n\thandleDelProcess(){\n    this.setState({ editModalShow: true, editModalTyle: 'del' })\n\t}\n\n  handleCopyProcess() {\n    this.setState({ editModalShow: true, editModalTyle: 'copy' })\n  }\n\n  handlePublishProcess(){\n    this.setState({ editModalShow: true, editModalTyle: 'publish' })\n  }\n\n  handleStopProcess() {\n    this.setState({ editModalShow: true, editModalTyle: 'stop' })\n  }\n\n  handlePack() {\n    this.setState({ editModalShow: true, editModalTyle: 'pack' })\n  }\n\n\tonProcessClassifyChange(value, label, extra){\n    const id = extra.triggerNode.props.id\n    this.setState({ classifyTreeTargetId: id})\n    if(id === '001'){\n      this.dataSourceMap.getProcessData.load({ page: 1, rows: 20 }).then(res => {\n        this.setState({ page: 1, rows: 20})\n      })\n    }else{\n      this.dataSourceMap.getProcessDataByClassify.load({ page: 1, rows: 20, Folderid: id }).then(res => {\n        this.setState({ page: 1, rows: 20 })\n      })\n    }\n\t}\n\n  onUnlock(e, obj){\n    this.setState({ editModalShow: true, editModalTyle: 'unlock', unlockId: obj.docUnid })\n  \n  }\n\n\tonSearch(value){\n    if (this.state.classifyTreeTargetId === '001') {\n      this.dataSourceMap.getProcessData.load({ page: 1, rows: 20, searchStr: value }).then(res => {\n        this.setState({ page: 1, rows: 20 })\n      })\n    } else {\n      this.dataSourceMap.getProcessDataByClassify.load({ page: 1, rows: 20, Folderid: this.state.classifyTreeTargetId, searchStr: value }).then(res => {\n        this.setState({ page: 1, rows: 20 })\n      })\n    }\n\t}\n\n  onAddClassify(value){\n    this.dataSourceMap.editProcessClassify.load({ ...value, treeid: \"T_S002_001\"})\n    this.closeAddClassifyShow()\n  }\n\n  onDelClassify(){\n    this.setState({ editModalShow: true, editModalTyle: 'delClassify' })\n  }\n\n  onClick_upload() {\n    let token = window.localStorage.getItem(\"identitytoken\")\n    this.setState({\n      uploadModalShow: true\n    })\n    setCookie(\"identitytoken\", token)\n  }\n\n  onCancel_upload() {\n    this.setState({\n      uploadModalShow: false\n    })\n    clearCookie()\n  }\n\n  onClick_uploadOk() {\n    if (this.state.errorLength !== 0) {\n      Next.Message.error(\"请选择正确的文件！\")\n    } else {\n      Next.Message.success(`成功导入${this.state.fileLength}条数据`)\n      this.setState({\n        uploadModalShow: false\n      })\n      clearCookie()\n      this.dataSourceMap.getProcessData.load()\n    }\n\n  }\n\n  setCookie(c_name, value, expiredays) {\n    let exdate = new Date()\n    exdate.setDate(exdate.getDate() + expiredays)\n    let expires = (expiredays === undefined) ? \"\" : \";expires=\" + exdate.toGMTString();\n    document.cookie = c_name + \"=\" + escape(value) + expires + \";path=/\";\n  }\n\n  clearCookie() {\n    var keys = document.cookie.match(/[^ =;]+(?=\\=)/g);\n    if (keys) {\n      for (var i = keys.length; i--;) {\n        document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString(); //清除当前域名下的,例如：m.kevis.com\n        document.cookie =\n          keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString(); //清除当前域名下的，例如 .m.kevis.com\n        document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString(); //清除一级域名下的或指定的，例如 .kevis.com\n      }\n    }\n  };\n\n  onSuccess(file, value) {\n    this.setState({\n      fileLength: value.length\n    })\n  }\n\n  onError(file, value) {\n    this.setState({\n      errorLength: value.length\n    })\n  }\n}",
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "children": [
    {
      "componentName": "NextPage",
      "id": "node_ockzs2vw431",
      "props": {
        "headerDivider": true,
        "minHeight": "100vh",
        "presetNav": true,
        "presetAside": true,
        "footer": false,
        "nav": "",
        "aside": false,
        "placeholderStyle": {
          "gridRowEnd": "span 1",
          "gridColumnEnd": "span 12"
        },
        "headerProps": {
          "background": "surface"
        },
        "isTab": false,
        "contentAlignCenter": false,
        "contentProps": {
          "style": {
            "background": "rgba(255,255,255,0)"
          }
        },
        "navProps": {
          "width": 200
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
          "id": "node_ocl61nb0y85",
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
              "id": "node_ocl61nb0y86",
              "props": {
                "colSpan": 12,
                "rowSpan": 1,
                "mode": "procard",
                "isAutoContainer": true,
                "title": "",
                "hasDivider": false,
                "loading": false,
                "bodyPadding": "",
                "hasCollapse": false,
                "text": true,
                "visibleButtonCount": 3,
                "operationConfig": {
                  "align": "center"
                },
                "operations": []
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "NextRowColContainer",
                  "id": "node_ocl61nb0y87",
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
                      "id": "node_ocl61nb0y88",
                      "props": {},
                      "title": "行",
                      "hidden": false,
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "NextCol",
                          "id": "node_ocl61nb0y89",
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
                              "id": "node_ocl61nb0y8a",
                              "props": {
                                "wrap": false,
                                "type": "body2",
                                "verAlign": "middle",
                                "textSpacing": true,
                                "align": "left"
                              },
                              "title": "段落",
                              "hidden": false,
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Box",
                                  "id": "node_ocl6fwopsg4o",
                                  "props": {
                                    "direction": "row",
                                    "justify": "space-between",
                                    "align": "center",
                                    "style": {
                                      "width": "",
                                      "height": "40px",
                                      "paddingLeft": "10px"
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
                                      "id": "node_ocl6fwopsg4p",
                                      "props": {
                                        "direction": "row",
                                        "justify": "flex-start",
                                        "align": "center",
                                        "style": {},
                                        "spacing": 10
                                      },
                                      "hidden": false,
                                      "title": "",
                                      "isLocked": false,
                                      "condition": true,
                                      "conditionGroup": "",
                                      "children": [
                                        {
                                          "componentName": "Button",
                                          "id": "node_ocl6fwopsg5o",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "primary",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "新增",
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
                                                  "relatedEventName": "handleAddProcessShow"
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
                                              "value": "function(){this.handleAddProcessShow.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg5p",
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
                                          "id": "node_ocl6fwopsg5s",
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
                                                  "relatedEventName": "handleDelProcess"
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
                                              "value": "function(){this.handleDelProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg5t",
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
                                        },
                                        {
                                          "componentName": "Button",
                                          "id": "node_ocl6fwopsg5w",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "normal",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "复制",
                                            "icon": "copy",
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
                                                  "relatedEventName": "handleCopyProcess"
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
                                              "value": "function(){this.handleCopyProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg5x",
                                              "props": {
                                                "type": "copy",
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
                                          "id": "node_ocl6fwopsg60",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "normal",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "发布",
                                            "icon": "select",
                                            "iconSize": "xxs",
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
                                                  "relatedEventName": "handlePublishProcess"
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
                                              "value": "function(){this.handlePublishProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg6l",
                                              "props": {
                                                "type": "select",
                                                "style": {
                                                  "marginRight": 5
                                                },
                                                "size": "medium"
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
                                          "id": "node_ocl6fwopsg63",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "normal",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "停止",
                                            "icon": "prompt",
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
                                                  "relatedEventName": "handleStopProcess"
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
                                              "value": "function(){this.handleStopProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg6m",
                                              "props": {
                                                "type": "prompt",
                                                "style": {
                                                  "marginRight": 5
                                                },
                                                "size": "medium"
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
                                          "id": "node_ocl6fwopsg6h",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "normal",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "打包下载（仅流程）",
                                            "icon": "download",
                                            "iconSize": "xxs",
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
                                                  "relatedEventName": "handlePack"
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
                                              "value": "function(){this.handlePack.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg6n",
                                              "props": {
                                                "type": "download",
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
                                          "id": "node_ocl6fwopsg6k",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "primary",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "导入",
                                            "icon": "upload",
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
                                                  "relatedEventName": "onClick_upload"
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
                                              "value": "function(){this.onClick_upload.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6fwopsg6o",
                                              "props": {
                                                "type": "upload",
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
                                          "id": "node_ocl6kdjo0b4",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "normal",
                                            "size": "medium",
                                            "htmlType": "button",
                                            "component": "button",
                                            "children": "刷新",
                                            "icon": "refresh",
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
                                                  "relatedEventName": "refresh"
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
                                              "value": "function(){this.refresh.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                              "id": "node_ocl6kdjo0b5",
                                              "props": {
                                                "type": "refresh",
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
                                          "componentName": "Box",
                                          "id": "node_ocl6kdjo0b1f",
                                          "props": {
                                            "direction": "row",
                                            "justify": "center",
                                            "align": "center",
                                            "style": {
                                              "paddingTop": "22px"
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
                                              "componentName": "RcTreeSelect",
                                              "id": "node_ocl6kdjo0b1g",
                                              "props": {
                                                "treeData": {
                                                  "type": "JSExpression",
                                                  "value": "this.state.processClassifyList",
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
                                                  "width": "200px"
                                                },
                                                "__events": {
                                                  "eventDataList": [
                                                    {
                                                      "type": "componentEvent",
                                                      "name": "onChange",
                                                      "relatedEventName": "onProcessClassifyChange"
                                                    }
                                                  ],
                                                  "eventList": [
                                                    {
                                                      "name": "onChange",
                                                      "disabled": true
                                                    },
                                                    {
                                                      "name": "onDropdownVisibleChange",
                                                      "disabled": false
                                                    },
                                                    {
                                                      "name": "onSearch",
                                                      "disabled": false
                                                    },
                                                    {
                                                      "name": "onSelect",
                                                      "disabled": false
                                                    },
                                                    {
                                                      "name": "onTreeExpand",
                                                      "disabled": false
                                                    }
                                                  ]
                                                },
                                                "onChange": {
                                                  "type": "JSFunction",
                                                  "value": "function(){this.onProcessClassifyChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                },
                                                "treeIcon": true,
                                                "value": {
                                                  "type": "JSExpression",
                                                  "value": ""
                                                },
                                                "defaultValue": {
                                                  "type": "JSExpression",
                                                  "value": "this.state.classifyTreeTargetKey"
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
                                          "id": "node_ocl6lt16p2f",
                                          "props": {
                                            "prefix": "next-",
                                            "type": "primary",
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
                                        }
                                      ]
                                    },
                                    {
                                      "componentName": "Search",
                                      "id": "node_ocl6lt0th7s",
                                      "props": {
                                        "dataSource": [],
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
                                          "width": "200px",
                                          "height": "28px"
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
                                  "id": "node_ocl61nb0y8b",
                                  "props": {
                                    "dataSource": {
                                      "type": "JSExpression",
                                      "value": "this.state.dataSource",
                                      "mock": [
                                        {
                                          "WF_Appid": "",
                                          "Status": "1",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "22d26ed003266041a0092f00dd3875ba976d",
                                          "NodeName": "请假流程3.0(copy)",
                                          "WF_OrUnid": "a20233f20d1e304d5f0a98606b3c12ecf6e3",
                                          "FormNumber": "F_test0001_P003",
                                          "WF_LastModified": "2022-07-21 18:33:51",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "请假表单3.0",
                                          "id": "a20233f20d1e304d5f0a98606b3c12ecf6e3"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "1137520aa57d4f64a0e6d5919e6f0242",
                                          "NodeName": "测试事件",
                                          "WF_OrUnid": "e15bd2f10894a0425508dd602ba51c8f4419",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-07-07 16:10:45",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "e15bd2f10894a0425508dd602ba51c8f4419"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "566da15b643a428786a904a9e769afe5",
                                          "NodeName": "流程并行测试",
                                          "WF_OrUnid": "231ab170080fe045420bd4f0a1b448c3c6d8",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-07-06 15:34:43",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "231ab170080fe045420bd4f0a1b448c3c6d8"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "f4bcb9c50e1b44ab923952a08e26de6a",
                                          "NodeName": "含网关判断的复杂流程",
                                          "WF_OrUnid": "26d0ba82056270433f09d2107d283a078089",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-07-06 15:21:01",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "26d0ba82056270433f09d2107d283a078089"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "zmm测试分类",
                                          "WF_Version": "1.0",
                                          "Processid": "d954b4ea73c841c89c18594589ca4ec0",
                                          "NodeName": "简单子流程",
                                          "WF_OrUnid": "8f72ab0109995048fb09d8a04d6f6da7da9d",
                                          "FormNumber": "F_S029_P0145",
                                          "WF_LastModified": "2022-07-06 11:01:31",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "内部子表单",
                                          "id": "8f72ab0109995048fb09d8a04d6f6da7da9d"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "80d2adff41ac4c30a63388f7c437b205",
                                          "NodeName": "内部子流程测试",
                                          "WF_OrUnid": "86c5ebdf08d430478208fa2047a18ecbcf3c",
                                          "FormNumber": "F_S029_P0144",
                                          "WF_LastModified": "2022-07-06 10:07:11",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "简单流转主表单",
                                          "id": "86c5ebdf08d430478208fa2047a18ecbcf3c"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "1",
                                          "Folderid": "演示流程",
                                          "WF_Version": "1.0",
                                          "Processid": "26f1cc7900a1e0457c08e3506e9a2e449c67",
                                          "NodeName": "请假流程管理V2.0",
                                          "WF_OrUnid": "755ae294046ff044b0097b50fd4008d2ee02",
                                          "FormNumber": "F_test0001_P003",
                                          "WF_LastModified": "2022-07-05 15:35:03",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "请假表单3.0",
                                          "id": "755ae294046ff044b0097b50fd4008d2ee02"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "894685f553184b42b2f1510184fd7dae",
                                          "NodeName": "请假流程",
                                          "WF_OrUnid": "3e3d7b380bbc504ddb0b7010b412d0a4180a",
                                          "FormNumber": "F_test0001_P001",
                                          "WF_LastModified": "2022-07-05 15:24:26",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "请假表单1.0",
                                          "id": "3e3d7b380bbc504ddb0b7010b412d0a4180a"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "e074875f729d4fd592eabcb4fb7bf3bc",
                                          "NodeName": "单个网关组件测试",
                                          "WF_OrUnid": "94ee5f770f5b5045600a596003ac398658a6",
                                          "FormNumber": "F_S029_P0141",
                                          "WF_LastModified": "2022-07-05 14:24:21",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "一个测试数据",
                                          "id": "94ee5f770f5b5045600a596003ac398658a6"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "6a6bda66ea9a4826b152b013b7c1bd33",
                                          "NodeName": "单个组件数据提交",
                                          "WF_OrUnid": "b1a6c5ea0ab5f04b2a0a1c60c94d8027516f",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-07-04 14:33:50",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "b1a6c5ea0ab5f04b2a0a1c60c94d8027516f"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "d66ad6aa8b304dae94a09b37048d9f53",
                                          "NodeName": "外部子流程测试",
                                          "WF_OrUnid": "74eb92f2073c404b3b08e790dfa41c21f639",
                                          "FormNumber": "F_S029_P0140",
                                          "WF_LastModified": "2022-07-04 11:19:16",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "流程测试专用表单",
                                          "id": "74eb92f2073c404b3b08e790dfa41c21f639"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "1",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "4d85af93978c453885d19da88d4eebe2",
                                          "NodeName": "请假流程3.0",
                                          "WF_OrUnid": "4643bff20ee0a04f070871f0e1274ed16833",
                                          "FormNumber": "F_test0001_P003",
                                          "WF_LastModified": "2022-07-04 10:21:06",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "请假表单3.0",
                                          "id": "4643bff20ee0a04f070871f0e1274ed16833"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "be7a90e40a284cc6a8456ddde9721827",
                                          "NodeName": "请假流程2.0",
                                          "WF_OrUnid": "be8ee02f0a31804f0e081810e5d47114df0b",
                                          "FormNumber": "F_test0001_P002",
                                          "WF_LastModified": "2022-07-01 11:55:08",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "请假表单2.0",
                                          "id": "be8ee02f0a31804f0e081810e5d47114df0b"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "388dc6df601b455bbfe7cf86f38eed27",
                                          "NodeName": "新流程测试",
                                          "WF_OrUnid": "309346a60079f04c110bd0f064b0fa734678",
                                          "FormNumber": "F_S029_P0143",
                                          "WF_LastModified": "2022-07-01 10:56:55",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "新表单测试",
                                          "id": "309346a60079f04c110bd0f064b0fa734678"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "7727210709c2d043dc0b6a60d4a948d3f3f2",
                                          "NodeName": "wen测试",
                                          "WF_OrUnid": "1699f80e03c1e044dd083e30563689064c56",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-07-01 10:49:42",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "1699f80e03c1e044dd083e30563689064c56"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "4d9e30666933424aa5341b324656d12c",
                                          "NodeName": "测试",
                                          "WF_OrUnid": "c006f2940f46e048de08e3108dfa407a3e45",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-06-30 19:43:50",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "c006f2940f46e048de08e3108dfa407a3e45"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "977f17dfdc7c474881f78bedb9f6d9b7",
                                          "NodeName": "流程串行",
                                          "WF_OrUnid": "921909e90ff2c04d5f084fe0ac73210dd61d",
                                          "FormNumber": "F_S029_P0141",
                                          "WF_LastModified": "2022-06-29 16:07:50",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "一个测试数据",
                                          "id": "921909e90ff2c04d5f084fe0ac73210dd61d"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "ae02c3f5ce83400e824210ef79215bda",
                                          "NodeName": "wen新测试",
                                          "WF_OrUnid": "887446be04e600458e0a2ed0a1db91fc3c2e",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-06-29 16:02:18",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "887446be04e600458e0a2ed0a1db91fc3c2e"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "b73daa355a48424d9a1e5980a2ed4320",
                                          "NodeName": "HR子流程",
                                          "WF_OrUnid": "08880f300d3d1047bc0ae40060ce1237cb20",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-06-28 14:27:40",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "08880f300d3d1047bc0ae40060ce1237cb20"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "1c4a9f0381f24d81b0f1d413e8f68285",
                                          "NodeName": "流程完整性测试",
                                          "WF_OrUnid": "6f1253bd0e399043c209ed10ae1368a2435b",
                                          "FormNumber": "F_S029_P0140",
                                          "WF_LastModified": "2022-06-28 10:13:10",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "流程测试专用表单",
                                          "id": "6f1253bd0e399043c209ed10ae1368a2435b"
                                        },
                                        {
                                          "WF_Appid": "",
                                          "Status": "1",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "6af94bad27994ec5b95eae9e2a416fb1",
                                          "NodeName": "前端测试流程",
                                          "WF_OrUnid": "5338d0b2012a6048d10ab360320b57ce9f19",
                                          "FormNumber": "F_S029_P0136",
                                          "WF_LastModified": "2022-06-27 10:03:20",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "前端测试表单",
                                          "id": "5338d0b2012a6048d10ab360320b57ce9f19"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "1",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "bcef64620390404e2f0b8410e05a987ecb33",
                                          "NodeName": "流程图测试01",
                                          "WF_OrUnid": "69722d7f08066045e608a360b33365b1fa4e",
                                          "FormNumber": "F_S017_P003",
                                          "WF_LastModified": "2022-06-25 15:06:30",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "前端测试表单1111111111",
                                          "id": "69722d7f08066045e608a360b33365b1fa4e"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "20b7eebf018a5047490ae73089097935055d",
                                          "NodeName": "请假流程管理",
                                          "WF_OrUnid": "c4e9a414022fd043d808fbc0cc43bb8f00eb",
                                          "FormNumber": "F_test0001_P001",
                                          "WF_LastModified": "2022-06-23 14:35:12",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "请假表单1.0",
                                          "id": "c4e9a414022fd043d808fbc0cc43bb8f00eb"
                                        },
                                        {
                                          "WF_Appid": "S029",
                                          "Status": "0",
                                          "Folderid": "",
                                          "WF_Version": "1.0",
                                          "Processid": "922b4204009bb04dcb0b4040559f4bb6840e",
                                          "NodeName": "Chorme测试",
                                          "WF_OrUnid": "336473250407504c1d0849d0412b1a12541f",
                                          "FormNumber": "",
                                          "WF_LastModified": "2022-05-31 09:58:01",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "",
                                          "WF_AddName": "admin",
                                          "FormName": "",
                                          "id": "336473250407504c1d0849d0412b1a12541f"
                                        },
                                        {
                                          "WF_Appid": "gdzx20220426",
                                          "Status": "1",
                                          "Folderid": "工单中心",
                                          "WF_Version": "1.0",
                                          "Processid": "c9c6702d0b3670465f0a3f30cfd489d07bb6",
                                          "NodeName": "业扩督办告警流程",
                                          "WF_OrUnid": "7202a47b09c0c04a200a47404a70088a7536",
                                          "FormNumber": "F_S029_P012",
                                          "WF_LastModified": "2022-05-04 18:02:54",
                                          "WF_AddName_CN": "admin",
                                          "ProcessNumber": "ykdbgj",
                                          "WF_AddName": "admin",
                                          "FormName": "业扩督办表单",
                                          "id": "7202a47b09c0c04a200a47404a70088a7536"
                                        }
                                      ]
                                    },
                                    "loading": false,
                                    "rowKey": "id",
                                    "tableColumns": {
                                      "type": "JSExpression",
                                      "value": "this.state.columns"
                                    },
                                    "expandedRowRender": {
                                      "type": "JSSlot",
                                      "params": [
                                        "record",
                                        "index",
                                        "indent",
                                        "expanded"
                                      ],
                                      "value": [
                                        {
                                          "componentName": "Box",
                                          "id": "node_ocl61nb5zq9",
                                          "props": {
                                            "direction": "column",
                                            "justify": "center",
                                            "align": "center",
                                            "style": {
                                              "width": "",
                                              "display": "block"
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
                                              "id": "node_ocl6esmahe4",
                                              "props": {
                                                "direction": "row",
                                                "justify": "flex-start",
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
                                                  "componentName": "NextText",
                                                  "id": "node_ocl6esmahe5",
                                                  "props": {
                                                    "type": "inherit",
                                                    "children": "流程实例",
                                                    "mark": false,
                                                    "code": false,
                                                    "delete": false,
                                                    "underline": false,
                                                    "strong": true
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
                                              "id": "node_ocl61nbb58h",
                                              "props": {
                                                "dataSource": {
                                                  "type": "JSExpression",
                                                  "value": "this.state.monitorSourceData[this.record.id]",
                                                  "mock": []
                                                },
                                                "loading": false,
                                                "rowKey": "id",
                                                "tableColumns": {
                                                  "type": "JSExpression",
                                                  "value": "this.state.monitorColumns"
                                                },
                                                "expandedRowRender": {
                                                  "type": "JSSlot",
                                                  "params": [
                                                    "record",
                                                    "index",
                                                    "indent",
                                                    "expanded",
                                                    "rowData"
                                                  ],
                                                  "value": [
                                                    {
                                                      "componentName": "TabContainer",
                                                      "id": "node_ocl6ft6e345",
                                                      "props": {
                                                        "shape": "pure",
                                                        "size": "medium",
                                                        "excessMode": "slide",
                                                        "items": [
                                                          {
                                                            "primaryKey": "tab-item-1",
                                                            "title": "文档信息"
                                                          },
                                                          {
                                                            "primaryKey": "tab-item-2",
                                                            "title": "图形监控"
                                                          },
                                                          {
                                                            "primaryKey": "8741",
                                                            "title": "流转记录",
                                                            "closeable": false,
                                                            "disabled": false
                                                          },
                                                          {
                                                            "primaryKey": "3660",
                                                            "title": "文档附件",
                                                            "closeable": false,
                                                            "disabled": false
                                                          }
                                                        ],
                                                        "tabPosition": "top"
                                                      },
                                                      "hidden": false,
                                                      "title": "",
                                                      "isLocked": false,
                                                      "condition": true,
                                                      "conditionGroup": "",
                                                      "children": [
                                                        {
                                                          "componentName": "Tab.Item",
                                                          "id": "node_ocl6ft6e346",
                                                          "props": {
                                                            "title": "文档信息",
                                                            "primaryKey": "tab-item-1"
                                                          },
                                                          "hidden": false,
                                                          "title": "",
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                            {
                                                              "componentName": "RcButton",
                                                              "id": "node_ocl6lhycfl1y",
                                                              "props": {
                                                                "title": "解除锁定",
                                                                "block": false,
                                                                "danger": false,
                                                                "disabled": false,
                                                                "shape": "default",
                                                                "size": "middle",
                                                                "type": "default",
                                                                "loading": false,
                                                                "__events": {
                                                                  "eventDataList": [
                                                                    {
                                                                      "type": "componentEvent",
                                                                      "name": "onClick",
                                                                      "relatedEventName": "onUnlock",
                                                                      "paramStr": "{\n \t \"docUnid\":this.record.id\n}"
                                                                    }
                                                                  ],
                                                                  "eventList": [
                                                                    {
                                                                      "name": "onClick",
                                                                      "disabled": true
                                                                    }
                                                                  ]
                                                                },
                                                                "onClick": {
                                                                  "type": "JSFunction",
                                                                  "value": "function(){this.onUnlock.apply(this,Array.prototype.slice.call(arguments).concat([{\n \t \"docUnid\":this.record.id\n}])) }"
                                                                }
                                                              },
                                                              "hidden": false,
                                                              "title": "",
                                                              "isLocked": false,
                                                              "condition": true,
                                                              "conditionGroup": ""
                                                            },
                                                            {
                                                              "componentName": "RcDescriptions",
                                                              "id": "node_ocl6lhy5oao",
                                                              "props": {
                                                                "descriptionItem": [
                                                                  {
                                                                    "label": "标题",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.Subject",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "创建时间",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.WF_DocCreated",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "创建者",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.WF_AddName_CN",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "当前锁定用户",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.lockUserid",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "锁定时间",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.lockTime",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "当前环节",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.WF_CurrentNodeName",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "流程名称",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.WF_ProcessName",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "当前审批用户",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.state.processExampleData[this.record.id]?.WF_Author_CN",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "文档ID",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.record.WF_OrUnid",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  },
                                                                  {
                                                                    "label": "使用流程ID",
                                                                    "content": {
                                                                      "type": "JSExpression",
                                                                      "value": "this.record.WF_Processid",
                                                                      "mock": ""
                                                                    },
                                                                    "span": 1,
                                                                    "labelStyle": {},
                                                                    "contentStyle": {}
                                                                  }
                                                                ],
                                                                "bordered": true,
                                                                "colon": true,
                                                                "column": 2,
                                                                "contentStyle": {},
                                                                "labelStyle": {},
                                                                "style": {
                                                                  "marginTop": "10px"
                                                                },
                                                                "layout": "horizontal",
                                                                "size": "default"
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
                                                          "componentName": "Tab.Item",
                                                          "id": "node_ocl6ft6e347",
                                                          "props": {
                                                            "title": "图形监控",
                                                            "primaryKey": "tab-item-2"
                                                          },
                                                          "hidden": false,
                                                          "title": "",
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                            {
                                                              "componentName": "NextText",
                                                              "id": "node_ocl6ofsbx64h",
                                                              "props": {
                                                                "type": "inherit",
                                                                "children": {
                                                                  "type": "JSExpression",
                                                                  "value": "this.xflowPreview(this.record.WF_Processid, this.record.id)",
                                                                  "mock": ""
                                                                },
                                                                "mark": false,
                                                                "code": false,
                                                                "delete": false,
                                                                "underline": false,
                                                                "strong": false,
                                                                "style": {
                                                                  "height": "400px",
                                                                  "display": "flex",
                                                                  "flexDirection": "column",
                                                                  "justifyContent": "center",
                                                                  "alignItems": "center"
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
                                                          "componentName": "Tab.Item",
                                                          "id": "node_ocl6ft6e348",
                                                          "props": {
                                                            "primaryKey": "8741",
                                                            "title": "流转记录",
                                                            "closeable": false,
                                                            "disabled": false
                                                          },
                                                          "hidden": false,
                                                          "title": "",
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                            {
                                                              "componentName": "RcExpandedTable",
                                                              "id": "node_ocl6ft6e34s",
                                                              "props": {
                                                                "dataSource": {
                                                                  "type": "JSExpression",
                                                                  "value": "this.state.transferRecordData[this.record.id]",
                                                                  "mock": [
                                                                    {
                                                                      "name": "小明",
                                                                      "age": 18,
                                                                      "id": 1
                                                                    },
                                                                    {
                                                                      "name": "小王",
                                                                      "age": 20,
                                                                      "id": 2
                                                                    }
                                                                  ]
                                                                },
                                                                "loading": false,
                                                                "rowKey": "id",
                                                                "tableColumns": {
                                                                  "type": "JSExpression",
                                                                  "value": "this.state.transferRecordColumns"
                                                                },
                                                                "rowSelection": false,
                                                                "pagination": false
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
                                                          "componentName": "Tab.Item",
                                                          "id": "node_ocl6ft6e349",
                                                          "props": {
                                                            "primaryKey": "3660",
                                                            "title": "文档附件",
                                                            "closeable": false,
                                                            "disabled": false
                                                          },
                                                          "hidden": false,
                                                          "title": "",
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                            {
                                                              "componentName": "RcExpandedTable",
                                                              "id": "node_ocl6lhyj0p8",
                                                              "props": {
                                                                "dataSource": {
                                                                  "type": "JSExpression",
                                                                  "value": "this.state.documentData[this.record.id]",
                                                                  "mock": [
                                                                    {
                                                                      "name": "小明",
                                                                      "age": 18,
                                                                      "id": 1
                                                                    },
                                                                    {
                                                                      "name": "小王",
                                                                      "age": 20,
                                                                      "id": 2
                                                                    }
                                                                  ]
                                                                },
                                                                "loading": false,
                                                                "rowKey": "id",
                                                                "tableColumns": {
                                                                  "type": "JSExpression",
                                                                  "value": "this.state.documentColumns"
                                                                },
                                                                "rowSelection": false,
                                                                "pagination": true,
                                                                "pageSize": 20,
                                                                "pageSizeOptions": [],
                                                                "showSizeChanger": false
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
                                                "rowSelection": true,
                                                "pagination": true,
                                                "showSizeChanger": true,
                                                "pageSizeOptions": [
                                                  10,
                                                  20,
                                                  50,
                                                  100
                                                ],
                                                "__events": {
                                                  "eventDataList": [
                                                    {
                                                      "type": "componentEvent",
                                                      "name": "onExpand",
                                                      "relatedEventName": "onExpandByMonitor"
                                                    }
                                                  ],
                                                  "eventList": [
                                                    {
                                                      "name": "onExpand",
                                                      "disabled": true
                                                    },
                                                    {
                                                      "name": "onChange",
                                                      "disabled": false
                                                    },
                                                    {
                                                      "name": "rowSelection_onChange",
                                                      "disabled": false
                                                    }
                                                  ]
                                                },
                                                "onExpand": {
                                                  "type": "JSFunction",
                                                  "value": "function(){this.onExpandByMonitor.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                    },
                                    "rowSelection": true,
                                    "pagination": true,
                                    "current": {
                                      "type": "JSExpression",
                                      "value": "this.state.page"
                                    },
                                    "showSizeChanger": true,
                                    "type": "checkbox",
                                    "pageSizeOptions": [
                                      20,
                                      25,
                                      30,
                                      50
                                    ],
                                    "pagination_size": "default",
                                    "showTotal": {
                                      "type": "JSFunction",
                                      "value": "function(){ return this.showTotal.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                    },
                                    "__events": {
                                      "eventDataList": [
                                        {
                                          "type": "componentEvent",
                                          "name": "onExpand",
                                          "relatedEventName": "onExpand"
                                        },
                                        {
                                          "type": "componentEvent",
                                          "name": "onChange",
                                          "relatedEventName": "onChange"
                                        },
                                        {
                                          "type": "componentEvent",
                                          "name": "rowSelection_onChange",
                                          "relatedEventName": "onProcessSelected"
                                        }
                                      ],
                                      "eventList": [
                                        {
                                          "name": "onExpand",
                                          "disabled": true
                                        },
                                        {
                                          "name": "onChange",
                                          "disabled": true
                                        },
                                        {
                                          "name": "rowSelection_onChange",
                                          "disabled": true
                                        }
                                      ]
                                    },
                                    "onExpand": {
                                      "type": "JSFunction",
                                      "value": "function(){this.onExpand.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                    },
                                    "onChange": {
                                      "type": "JSFunction",
                                      "value": "function(){this.onChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                    },
                                    "pageSize": {
                                      "type": "JSExpression",
                                      "value": "this.state.rows"
                                    },
                                    "total": {
                                      "type": "JSExpression",
                                      "value": "this.state.total"
                                    },
                                    "rowSelection_onChange": {
                                      "type": "JSFunction",
                                      "value": "function(){this.onProcessSelected.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                    }
                                  },
                                  "docId": "docl61nb0y8",
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
                          "value": "this.state.processClassifyList"
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
                "columns": {
                  "type": "JSExpression",
                  "value": "this.state.classifyColumns"
                },
                "data": {
                  "type": "JSExpression",
                  "value": "this.state.classifyTableList",
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
      "componentName": "Dialog",
      "id": "node_ocl6k6dv7k1k",
      "props": {
        "prefix": "next-",
        "footerAlign": "right",
        "title": {
          "type": "JSExpression",
          "value": "this.state.modalState[this.state.editModalTyle].title",
          "mock": "Title"
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
              "relatedEventName": "closeEditModal"
            },
            {
              "type": "componentEvent",
              "name": "onClose",
              "relatedEventName": "closeEditModal"
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
          "value": "function(){this.closeEditModal.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        },
        "onClose": {
          "type": "JSFunction",
          "value": "function(){this.closeEditModal.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
          "id": "node_ocl6k6dzzp7",
          "props": {
            "wrap": false,
            "type": "body2",
            "verAlign": "middle",
            "textSpacing": true,
            "align": "left"
          },
          "docId": "docl6k6dzzp",
          "title": "段落",
          "hidden": false,
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "NextText",
              "id": "node_ocl6k6dzzp8",
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
              "docId": "docl6k6dzzp",
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
      "id": "node_ocl6fwowpj30",
      "props": {
        "prefix": "next-",
        "footerAlign": "right",
        "title": "新增流程",
        "footer": false,
        "closeable": "esc,close",
        "hasMask": true,
        "align": "cc cc",
        "minMargin": 40,
        "isAutoContainer": true,
        "visible": {
          "type": "JSExpression",
          "value": "this.state.addProcessShow",
          "mock": true
        },
        "style": {
          "width": "500px"
        },
        "footerActions": [
          "ok",
          "cancel"
        ],
        "__events": {
          "eventDataList": [
            {
              "type": "componentEvent",
              "name": "onCancel",
              "relatedEventName": "closeAddProcess"
            },
            {
              "type": "componentEvent",
              "name": "onClose",
              "relatedEventName": "closeAddProcess"
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
          "value": "function(){this.closeAddProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        },
        "onClose": {
          "type": "JSFunction",
          "value": "function(){this.closeAddProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        }
      },
      "hidden": true,
      "title": "新增流程",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "NextP",
          "id": "node_ocl6fwowpj3i",
          "props": {
            "wrap": false,
            "type": "body2",
            "verAlign": "middle",
            "textSpacing": true,
            "align": "left",
            "full": true
          },
          "docId": "docl6fwowpj",
          "title": "段落",
          "hidden": false,
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Form",
              "id": "node_ocl6fwowpj3j",
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
                  "value": "this.state.addProcessField"
                }
              },
              "docId": "docl6fwowpj",
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Form.Item",
                  "id": "node_ocl6fwowpj3k",
                  "props": {
                    "label": "流程名",
                    "required": true,
                    "size": "medium",
                    "labelAlign": "left",
                    "labelTextAlign": "right",
                    "device": "desktop",
                    "labelCol": {
                      "span": 6
                    },
                    "requiredMessage": "流程名不能为空"
                  },
                  "docId": "docl6fwowpj",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Input",
                      "id": "node_ocl6fwowpj3l",
                      "props": {
                        "name": "NodeName",
                        "size": "medium",
                        "placeholder": ""
                      },
                      "docId": "docl6fwowpj",
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
                  "id": "node_ocl6fwowpj3m",
                  "props": {
                    "label": "流程ID",
                    "required": false,
                    "size": "medium",
                    "labelAlign": "left",
                    "labelTextAlign": "right",
                    "device": "desktop",
                    "labelCol": {
                      "span": 6
                    }
                  },
                  "docId": "docl6fwowpj",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Input",
                      "id": "node_ocl6fwowpj3r",
                      "props": {
                        "hasBorder": true,
                        "size": "medium",
                        "autoComplete": "off",
                        "placeholder": "",
                        "disabled": true,
                        "name": "Processid"
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
                  "id": "node_ocl6fwowpj3o",
                  "props": {
                    "label": "",
                    "size": "medium",
                    "labelAlign": "left",
                    "labelTextAlign": "left",
                    "device": "desktop",
                    "labelCol": {
                      "span": 6
                    },
                    "wrapperCol": {
                      "offset": 6
                    }
                  },
                  "docId": "docl6fwowpj",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Form.Submit",
                      "id": "node_ocl6fwowpj3p",
                      "props": {
                        "type": "primary",
                        "validate": true,
                        "children": "完成",
                        "icon": "",
                        "size": "small",
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
                              "relatedEventName": "onClick_processSubmit"
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
                          "value": "function(){this.onClick_processSubmit.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                        }
                      },
                      "docId": "docl6fwowpj",
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    },
                    {
                      "componentName": "Form.Reset",
                      "id": "node_ocl6fwowpj3q",
                      "props": {
                        "style": {
                          "marginLeft": 10
                        },
                        "children": "取消",
                        "type": "primary",
                        "size": "small",
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
                              "relatedEventName": "closeAddProcess"
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
                          "value": "function(){this.closeAddProcess.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                        }
                      },
                      "docId": "docl6fwowpj",
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
      "id": "node_ocl3skx1e15o",
      "props": {
        "prefix": "next-",
        "footerAlign": "right",
        "title": "导入文档",
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
          "value": "this.state.uploadModalShow",
          "mock": true
        },
        "style": {
          "width": "600px"
        },
        "__events": {
          "eventDataList": [
            {
              "type": "componentEvent",
              "name": "onCancel",
              "relatedEventName": "onCancel_upload"
            },
            {
              "type": "componentEvent",
              "name": "onClose",
              "relatedEventName": "onCancel_upload"
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
          "value": "function(){this.onCancel_upload.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        },
        "onClose": {
          "type": "JSFunction",
          "value": "function(){this.onCancel_upload.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        }
      },
      "hidden": true,
      "title": "导入文档",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "NextP",
          "id": "node_ocl3skx1e166",
          "props": {
            "wrap": false,
            "type": "body2",
            "verAlign": "middle",
            "textSpacing": true,
            "align": "left",
            "full": true
          },
          "docId": "docl3skx1e1",
          "title": "段落",
          "hidden": false,
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "NextText",
              "id": "node_ocl61szh7m5",
              "props": {
                "type": "h6",
                "children": {
                  "type": "JSExpression",
                  "value": "this.state.Upload",
                  "mock": "标题标题"
                },
                "mark": false,
                "code": false,
                "delete": false,
                "underline": false,
                "strong": false,
                "style": {
                  "height": "100px"
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
          "componentName": "NextP",
          "id": "node_ocl61t023b8",
          "props": {
            "wrap": false,
            "type": "body2",
            "verAlign": "middle",
            "textSpacing": true,
            "align": "left",
            "full": true
          },
          "docId": "docl61t023b",
          "title": "段落",
          "hidden": false,
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Box",
              "id": "node_ocl61t023b9",
              "props": {
                "direction": "row",
                "justify": "center",
                "align": "center",
                "style": {
                  "width": "",
                  "marginTop": "50px"
                },
                "spacing": 20
              },
              "docId": "docl61t023b",
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Button",
                  "id": "node_ocl61t023ba",
                  "props": {
                    "prefix": "next-",
                    "type": "primary",
                    "size": "medium",
                    "htmlType": "button",
                    "component": "button",
                    "children": "确定",
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
                          "relatedEventName": "onClick_uploadOk"
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
                      "value": "function(){this.onClick_uploadOk.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                },
                {
                  "componentName": "Button",
                  "id": "node_ocl61t023bd",
                  "props": {
                    "prefix": "next-",
                    "type": "normal",
                    "size": "medium",
                    "htmlType": "button",
                    "component": "button",
                    "children": "取消",
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
                          "relatedEventName": "onCancel_upload"
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
                      "value": "function(){this.onCancel_upload.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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