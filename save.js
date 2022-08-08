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
                    "value": "function resolve(res){\r\n  const { status, data } = res\r\n  if (status === 200) {\r\n    const list = data.rows.map(item => ({ ...item, id: item.WF_OrUnid }))\r\n    this.setState({ dataSource: list, total: data.total, loading: false })\r\n    console.log(data.total)\r\n  }\r\n}"
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
                    "value": "function resolve(res) {\r\n  if (res.data.Status === \"ok\") {\r\n    Next.Message.success(res.data.msg)\r\n    this.setState({\r\n      addProcessShow: false\r\n    })\r\n    this.dataSourceMap.getProcessData.load({page:1,rows:this.state.rows})\r\n  } else {\r\n    Next.Message.error(res.data.msg)\r\n  }\r\n}"
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
                "value": "[{\n  title: '编号',\n  dataIndex: 'WF_DocNumber',\n  key: 'WF_DocNumber'\n}, {\n  title: '标题',\n  dataIndex: 'Subject',\n  key: 'Subject'\n}, {\n  title: '当前处理人',\n  dataIndex: 'WF_Author_CN',\n  key: 'WF_Author_CN'\n}, {\n  title: '申请者',\n  dataIndex: 'WF_AddName_CN',\n  key: 'WF_AddName_CN'\n}, {\n  title: '申请时间',\n  dataIndex: 'WF_DocCreated',\n  key: 'WF_DocCreated'\n}, {\n  title: '流程名称',\n  dataIndex: 'WF_ProcessName',\n  key: 'WF_ProcessName'\n}, {\n  title: '当前环节',\n  dataIndex: 'WF_CurrentNodeName',\n  key: 'WF_CurrentNodeName'\n}, {\n  title: '耗时',\n  dataIndex: 'TotalTime',\n  key: 'TotalTime',\n  render: text => {\n    return /*#__PURE__*/React.createElement(\"span\", {\n      style: {\n        color: '#288dff'\n      }\n    }, text);\n  }\n}]"
        },
        "dataSource": {
            "type": "JSExpression",
                "value": "[{\n  \"WF_Appid\": \"\",\n  \"Status\": \"1\",\n  \"Folderid\": \"\",\n  \"WF_Version\": \"1.0\",\n  \"Processid\": \"22d26ed003266041a0092f00dd3875ba976d\",\n  \"NodeName\": \"请假流程3.0(copy)\",\n  \"WF_OrUnid\": \"a20233f20d1e304d5f0a98606b3c12ecf6e3\",\n  \"FormNumber\": \"F_test0001_P003\",\n  \"WF_LastModified\": \"2022-07-21 18:33:51\",\n  \"WF_AddName_CN\": \"admin\",\n  \"ProcessNumber\": \"\",\n  \"WF_AddName\": \"admin\",\n  \"FormName\": \"请假表单3.0\",\n  \"id\": \"a20233f20d1e304d5f0a98606b3c12ecf6e3\"\n}, {\n  \"WF_Appid\": \"\",\n  \"Status\": \"0\",\n  \"Folderid\": \"\",\n  \"WF_Version\": \"1.0\",\n  \"Processid\": \"1137520aa57d4f64a0e6d5919e6f0242\",\n  \"NodeName\": \"测试事件\",\n  \"WF_OrUnid\": \"e15bd2f10894a0425508dd602ba51c8f4419\",\n  \"FormNumber\": \"\",\n  \"WF_LastModified\": \"2022-07-07 16:10:45\",\n  \"WF_AddName_CN\": \"admin\",\n  \"ProcessNumber\": \"\",\n  \"WF_AddName\": \"admin\",\n  \"FormName\": \"\",\n  \"id\": \"e15bd2f10894a0425508dd602ba51c8f4419\"\n}, {\n  \"WF_Appid\": \"\",\n  \"Status\": \"0\",\n  \"Folderid\": \"\",\n  \"WF_Version\": \"1.0\",\n  \"Processid\": \"566da15b643a428786a904a9e769afe5\",\n  \"NodeName\": \"流程并行测试\",\n  \"WF_OrUnid\": \"231ab170080fe045420bd4f0a1b448c3c6d8\",\n  \"FormNumber\": \"\",\n  \"WF_LastModified\": \"2022-07-06 15:34:43\",\n  \"WF_AddName_CN\": \"admin\",\n  \"ProcessNumber\": \"\",\n  \"WF_AddName\": \"admin\",\n  \"FormName\": \"\",\n  \"id\": \"231ab170080fe045420bd4f0a1b448c3c6d8\"\n}]"
        },
        "monitorSourceData": {
            "type": "JSExpression",
                "value": "{\n  \"a20233f20d1e304d5f0a98606b3c12ecf6e3\": [{\n    \"id\": \"0722251501f1304b8009b1c08000154f554c\",\n    \"WF_CurrentNodeName\": \"主管审批\",\n    \"WF_PauseFlag\": \"\",\n    \"WF_OrUnid\": \"0722251501f1304b8009b1c08000154f554c\",\n    \"WF_DocCreated\": \"2022-07-12 14:16:36\",\n    \"WF_Processid\": \"c44dd4064c0c49d3a0b10c0389c82952\",\n    \"WF_AddDeptid\": \"DP1016\",\n    \"WF_Author_CN\": \"admin,谢霆锋\",\n    \"WF_ProcessName\": \"流程并行测试\",\n    \"TotalTime\": \"141(小时)\",\n    \"Subject\": \"流程并行测试\",\n    \"WF_AddName_CN\": \"admin\",\n    \"WF_DocNumber\": \"115466\"\n  }, {\n    \"id\": \"10d55bea09e9004bac091f10dcab9af89929\",\n    \"WF_CurrentNodeName\": \"主管审批\",\n    \"WF_PauseFlag\": \"\",\n    \"WF_OrUnid\": \"10d55bea09e9004bac091f10dcab9af89929\",\n    \"WF_DocCreated\": \"2022-07-13 18:19:40\",\n    \"WF_Processid\": \"c44dd4064c0c49d3a0b10c0389c82952\",\n    \"WF_AddDeptid\": \"DP1016\",\n    \"WF_Author_CN\": \"\",\n    \"WF_ProcessName\": \"流程并行测试\",\n    \"TotalTime\": \"129(小时)\",\n    \"Subject\": \"流程并行测试\",\n    \"WF_AddName_CN\": \"admin\",\n    \"WF_DocNumber\": \"115469\"\n  }, {\n    \"id\": \"410bad63056f704359080c00c93f6d0be354\",\n    \"WF_CurrentNodeName\": \"经理审批,老板审批\",\n    \"WF_PauseFlag\": \"\",\n    \"WF_OrUnid\": \"410bad63056f704359080c00c93f6d0be354\",\n    \"WF_DocCreated\": \"2022-07-12 00:36:58\",\n    \"WF_Processid\": \"c44dd4064c0c49d3a0b10c0389c82952\",\n    \"WF_AddDeptid\": \"DP1016\",\n    \"WF_Author_CN\": \"admin,谢霆锋\",\n    \"WF_ProcessName\": \"流程并行测试\",\n    \"TotalTime\": \"145(小时)\",\n    \"Subject\": \"流程并行测试\",\n    \"WF_AddName_CN\": \"admin\",\n    \"WF_DocNumber\": \"115458\"\n  }]\n}"
        },
        "monitorPagination": {
            "type": "JSExpression",
                "value": "{}"
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
        "showTable": {
            "type": "JSExpression",
                "value": "false"
        },
        "addProcessShow": {
            "type": "JSExpression",
                "value": "false"
        },
        "processValue": {
            "type": "JSExpression",
                "value": "{}"
        },
        "Processid": {
            "type": "JSExpression",
                "value": "''"
        },
        "addProcessField": {
            "type": "JSExpression",
                "value": "new Next.Field(this)"
        }
    },
    "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
        "lifeCycles": {
        "componentDidMount": {
            "type": "JSFunction",
                "value": "function componentDidMount() {\n  this.dataSourceMap.getProcessData.load({\n    page: this.state.page,\n    rows: this.state.rows\n  });\n  this.dataSourceMap.getFormList.load().then(res => {\n    this.setState({\n      formList: res.rows\n    });\n  });\n}"
        },
        "componentWillUnmount": {
            "type": "JSFunction",
                "value": "function componentWillUnmount() {\n  console.log(this.state.monitorSourceData);\n  console.log('will unmount');\n}"
        }
    },
    "methods": {
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
                "value": "function onExpand(expanded, record) {\n  if (!this.state.monitorSourceData[record.id]) {\n    const url = `/bpm/r?wf_num=D_S014_J004&wf_gridnum=V_S014_G008&Processid=${record.Processid}`;\n    this.setState({\n      monitorUrl: url\n    }, () => {\n      this.dataSourceMap.getMonitorData.load({\n        page: 1,\n        rows: 20\n      }).then(res => {\n        console.log(res);\n        const list = res.rows.map(item => ({ ...item,\n          id: item.WF_OrUnid\n        }));\n        this.setState({\n          monitorSourceData: { ...this.state.monitorSourceData,\n            [record.id]: list\n          },\n          monitorPagination: { ...this.state.monitorPagination,\n            [record.id]: {\n              page: 1,\n              rows: 20,\n              total: res.total\n            }\n          }\n        });\n      });\n    });\n  }\n}"
        },
        "onExpandByMonitor": {
            "type": "JSFunction",
                "value": "function onExpandByMonitor(expanded, record) {}"
        },
        "onChange": {
            "type": "JSFunction",
                "value": "function onChange(pagination) {\n  const {\n    current,\n    pageSize\n  } = pagination;\n  this.dataSourceMap.getProcessData.load({\n    page: current,\n    rows: pageSize\n  }).then(() => {\n    this.setState({\n      page: current,\n      rows: pageSize\n    });\n  });\n}"
        },
        "onClick": {
            "type": "JSFunction",
                "value": "function onClick() {\n  this.setState({\n    showTable: !this.state.showTable\n  });\n}"
        },
        "handleAddProcessShow": {
            "type": "JSFunction",
                "value": "function handleAddProcessShow() {\n  const Processid = window.uuidv4().split(\"-\").join(\"\");\n  this.state.addProcessField.setValue(\"Processid\", Processid);\n  this.setState({\n    addProcessShow: true,\n    processValue: {\n      Processid\n    }\n  });\n}"
        },
        "closeAddProcess": {
            "type": "JSFunction",
                "value": "function closeAddProcess() {\n  this.setState({\n    addProcessShow: false\n  });\n}"
        },
        "onClick_processSubmit": {
            "type": "JSFunction",
                "value": "function onClick_processSubmit(value) {\n  this.setState({\n    Processid: value.Processid\n  });\n  console.log(value);\n  this.dataSourceMap.addProcess.load({ ...value,\n    Nodeid: \"Process\",\n    QryNodeType: \"Process\"\n  });\n}"
        }
    },
    "originCode": "class LowcodeComponent extends Component {\n  state = {\n    columns: [\n      {\n        title: '流程名称',\n        dataIndex: 'NodeName',\n        key:'NodeName',\n        render(text, record) {\n          return (\n            <span onClick={this.handleProcess.bind(this, record)} style={{ color: '#0fb3b4', cursor: \"pointer\" }}>{text}</span>\n          )\n        }\n      }, {\n        title: '所属应用',\n        key: 'WF_Appid',\n        dataIndex: 'WF_Appid'\n      }, {\n        title: \"所属分类\",\n        dataIndex: 'Folderid',\n        key: 'Folderid'\n      }, {\n        title: '绑定表单',\n        dataIndex: 'FormName',\n        key: 'FormName',\n        render(text, record) {\n          return (\n            <span onClick={this.handleForm.bind(this, record)} style={{ cursor: \"pointer\", color: \"#0fb3b4\" }}>{text}</span>\n          )\n        }\n      }, {\n        title: '设计者',\n        dataIndex: 'WF_AddName',\n        key: 'WF_AddName',\n      }, {\n        title: '最后更新时间',\n        dataIndex: 'WF_LastModified',\n        key: 'WF_LastModified'\n      }, {\n        title: '版本',\n        dataIndex: 'WF_Version',\n        key: 'WF_Version'\n      }, {\n        title: '状态',\n        dataIndex: 'Status',\n        key: 'Status',\n        render(record) {\n          if (record == \"1\") {\n            return (\n              <span style={{ color: '#0fb3b4' }}>已发布</span>\n            )\n          }\n          if (record == \"0\") {\n            return (\n              <span style={{ color: '#ff3000' }}>未发布</span>\n            )\n          }\n        }\n      }, {\n        title: '启动',\n        dataIndex: '',\n        key:'run',\n        render(text, record) {\n          return (\n            <span onClick={this.handleRun.bind(this, record)} style={{ color: '#0fb3b4', cursor: \"pointer\" }}>启动</span>\n          )\n        }\n      }\n    ],\n    monitorColumns:[\n      {\n        title:'编号',\n        dataIndex:'WF_DocNumber',\n        key:'WF_DocNumber'\n      },\n      {\n        title:'标题',\n        dataIndex:'Subject',\n        key:'Subject'\n      },\n      {\n        title:'当前处理人',\n        dataIndex:'WF_Author_CN',\n        key:'WF_Author_CN'\n      },\n      {\n        title:'申请者',\n        dataIndex:'WF_AddName_CN',\n        key:'WF_AddName_CN'\n      },\n      {\n        title:'申请时间',\n        dataIndex:'WF_DocCreated',\n        key:'WF_DocCreated'\n      },\n      {\n        title:'流程名称',\n        dataIndex:'WF_ProcessName',\n        key:'WF_ProcessName'\n      },\n      {\n        title:'当前环节',\n        dataIndex:'WF_CurrentNodeName',\n        key:'WF_CurrentNodeName'\n      },\n      {\n        title:'耗时',\n        dataIndex:'TotalTime',\n        key:'TotalTime',\n        render: (text) => {\n          return <span style={{color:'#288dff'}}>{text}</span>\n        }\n      }\n    ],\n    dataSource: [{\n      \"WF_Appid\": \"\",\n      \"Status\": \"1\",\n      \"Folderid\": \"\",\n      \"WF_Version\": \"1.0\",\n      \"Processid\": \"22d26ed003266041a0092f00dd3875ba976d\",\n      \"NodeName\": \"请假流程3.0(copy)\",\n      \"WF_OrUnid\": \"a20233f20d1e304d5f0a98606b3c12ecf6e3\",\n      \"FormNumber\": \"F_test0001_P003\",\n      \"WF_LastModified\": \"2022-07-21 18:33:51\",\n      \"WF_AddName_CN\": \"admin\",\n      \"ProcessNumber\": \"\",\n      \"WF_AddName\": \"admin\",\n      \"FormName\": \"请假表单3.0\",\n      \"id\": \"a20233f20d1e304d5f0a98606b3c12ecf6e3\"\n    }, {\n        \"WF_Appid\": \"\",\n        \"Status\": \"0\",\n        \"Folderid\": \"\",\n        \"WF_Version\": \"1.0\",\n        \"Processid\": \"1137520aa57d4f64a0e6d5919e6f0242\",\n        \"NodeName\": \"测试事件\",\n        \"WF_OrUnid\": \"e15bd2f10894a0425508dd602ba51c8f4419\",\n        \"FormNumber\": \"\",\n        \"WF_LastModified\": \"2022-07-07 16:10:45\",\n        \"WF_AddName_CN\": \"admin\",\n        \"ProcessNumber\": \"\",\n        \"WF_AddName\": \"admin\",\n        \"FormName\": \"\",\n        \"id\": \"e15bd2f10894a0425508dd602ba51c8f4419\"\n      }, {\n        \"WF_Appid\": \"\",\n        \"Status\": \"0\",\n        \"Folderid\": \"\",\n        \"WF_Version\": \"1.0\",\n        \"Processid\": \"566da15b643a428786a904a9e769afe5\",\n        \"NodeName\": \"流程并行测试\",\n        \"WF_OrUnid\": \"231ab170080fe045420bd4f0a1b448c3c6d8\",\n        \"FormNumber\": \"\",\n        \"WF_LastModified\": \"2022-07-06 15:34:43\",\n        \"WF_AddName_CN\": \"admin\",\n        \"ProcessNumber\": \"\",\n        \"WF_AddName\": \"admin\",\n        \"FormName\": \"\",\n        \"id\": \"231ab170080fe045420bd4f0a1b448c3c6d8\"\n      }],\n    monitorSourceData: {\n      \"a20233f20d1e304d5f0a98606b3c12ecf6e3\":[\n      {\n        \"id\": \"0722251501f1304b8009b1c08000154f554c\",\n        \"WF_CurrentNodeName\": \"主管审批\",\n        \"WF_PauseFlag\": \"\",\n        \"WF_OrUnid\": \"0722251501f1304b8009b1c08000154f554c\",\n        \"WF_DocCreated\": \"2022-07-12 14:16:36\",\n        \"WF_Processid\": \"c44dd4064c0c49d3a0b10c0389c82952\",\n        \"WF_AddDeptid\": \"DP1016\",\n        \"WF_Author_CN\": \"admin,谢霆锋\",\n        \"WF_ProcessName\": \"流程并行测试\",\n        \"TotalTime\": \"141(小时)\",\n        \"Subject\": \"流程并行测试\",\n        \"WF_AddName_CN\": \"admin\",\n        \"WF_DocNumber\": \"115466\"\n      },\n      {\n        \"id\": \"10d55bea09e9004bac091f10dcab9af89929\",\n        \"WF_CurrentNodeName\": \"主管审批\",\n        \"WF_PauseFlag\": \"\",\n        \"WF_OrUnid\": \"10d55bea09e9004bac091f10dcab9af89929\",\n        \"WF_DocCreated\": \"2022-07-13 18:19:40\",\n        \"WF_Processid\": \"c44dd4064c0c49d3a0b10c0389c82952\",\n        \"WF_AddDeptid\": \"DP1016\",\n        \"WF_Author_CN\": \"\",\n        \"WF_ProcessName\": \"流程并行测试\",\n        \"TotalTime\": \"129(小时)\",\n        \"Subject\": \"流程并行测试\",\n        \"WF_AddName_CN\": \"admin\",\n        \"WF_DocNumber\": \"115469\"\n      },\n      {\n        \"id\": \"410bad63056f704359080c00c93f6d0be354\",\n        \"WF_CurrentNodeName\": \"经理审批,老板审批\",\n        \"WF_PauseFlag\": \"\",\n        \"WF_OrUnid\": \"410bad63056f704359080c00c93f6d0be354\",\n        \"WF_DocCreated\": \"2022-07-12 00:36:58\",\n        \"WF_Processid\": \"c44dd4064c0c49d3a0b10c0389c82952\",\n        \"WF_AddDeptid\": \"DP1016\",\n        \"WF_Author_CN\": \"admin,谢霆锋\",\n        \"WF_ProcessName\": \"流程并行测试\",\n        \"TotalTime\": \"145(小时)\",\n        \"Subject\": \"流程并行测试\",\n        \"WF_AddName_CN\": \"admin\",\n        \"WF_DocNumber\": \"115458\"\n      }\n      ]},\n    monitorPagination:{},\n    formList:[],\n    total:0,\n    loading:true,\n    page:1,\n    rows:20,\n    monitorUrl:'',\n    showTable:false,\n    addProcessShow:false,\n    processValue:{},\n    Processid:'',\n    addProcessField: new Next.Field(this),\n  }\n  componentDidMount() {\n    this.dataSourceMap.getProcessData.load({page:this.state.page,rows:this.state.rows})\n    this.dataSourceMap.getFormList.load().then(res => {\n      this.setState({formList:res.rows})\n    })\n  }\n  componentWillUnmount() {\n    console.log(this.state.monitorSourceData)\n    console.log('will unmount');\n  }\n\n  handleRun(record){\n    const origin = window.location.origin\n    window.open(`${origin}/process.html?processId=${record.Processid}`)\n  }\n\n  handleProcess(record){\n    const origin = window.location.origin\n    window.open(`${origin}/xflow.html?Processid=${record.Processid}`)\n  }\n\n  handleForm(record){\n    const origin = window.location.origin\n    const index = this.state.formList.findIndex(item => item.FormName === record.FormName)\n    window.open(`${origin}/processDesign.html?id=${this.state.formList[index].WF_OrUnid}`)\n  }\n \n  showTotal(total, range) {\n    return `${range[0]}-${range[1]} of ${total} items`\n  }\n\n  onExpand(expanded, record){\n    if (!this.state.monitorSourceData[record.id]){\n      const url = `/bpm/r?wf_num=D_S014_J004&wf_gridnum=V_S014_G008&Processid=${record.Processid}`\n      this.setState({ monitorUrl: url }, () => {\n        this.dataSourceMap.getMonitorData.load({ page: 1, rows: 20 }).then(res => {\n          console.log(res)\n          const list = res.rows.map(item => ({ ...item, id: item.WF_OrUnid }))\n          this.setState({\n            monitorSourceData: {\n              ...this.state.monitorSourceData,\n              [record.id]: list\n            },\n            monitorPagination: {\n              ...this.state.monitorPagination,\n              [record.id]: {\n                page: 1,\n                rows: 20,\n                total: res.total\n              }\n            }\n          })\n        })\n      })\n    }\n\t}\n\n  onExpandByMonitor(expanded, record){\n\t}\n\n  onChange(pagination) {\n    const { current, pageSize } = pagination\n    this.dataSourceMap.getProcessData.load({ page: current, rows: pageSize }).then(() => {\n      this.setState({page:current,rows:pageSize})\n    })\n\n  }\n\n\tonClick(){\n    this.setState({showTable:!this.state.showTable})\n\t}\n\n  // 按钮\n  handleAddProcessShow() {\n    const Processid = window.uuidv4().split(\"-\").join(\"\")\n    this.state.addProcessField.setValue(\"Processid\", Processid)\n    this.setState({\n      addProcessShow: true,\n      processValue: {\n        Processid\n      }\n    })\n  }\n\n  closeAddProcess(){\n    this.setState({\n      addProcessShow: false\n    })\n  }\n\n  onClick_processSubmit(value) {\n    this.setState({\n      Processid: value.Processid\n    })\n    console.log(value)\n    this.dataSourceMap.addProcess.load({\n      ...value,\n      Nodeid: \"Process\",\n      QryNodeType: \"Process\"\n    })\n  }\n}",
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
                                                        "title": "流程管理",
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
                                                            "loopArgs": [
                                                                "",
                                                                ""
                                                            ],
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
                                                                    "loopArgs": [
                                                                        "",
                                                                        ""
                                                                    ],
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
                                                                                                        "style": {
                                                                                                            "width": "800px"
                                                                                                        },
                                                                                                        "spacing": 20
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
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
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
                                                                                                                "disabled": false
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
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
                                                                                                                "disabled": false
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
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
                                                                                                                "disabled": false
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "componentName": "Icon",
                                                                                                                    "id": "node_ocl6fwopsg6l",
                                                                                                                    "props": {
                                                                                                                        "type": "select",
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
                                                                                                                "disabled": false
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
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
                                                                                                                    "conditionGroup": "",
                                                                                                                    "loop": [
                                                                                                                        1
                                                                                                                    ],
                                                                                                                    "loopArgs": [
                                                                                                                        "",
                                                                                                                        ""
                                                                                                                    ]
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
                                                                                                                "disabled": false
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
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
                                                                                                                "disabled": false
                                                                                                            },
                                                                                                            "hidden": false,
                                                                                                            "title": "",
                                                                                                            "isLocked": false,
                                                                                                            "condition": true,
                                                                                                            "conditionGroup": "",
                                                                                                            "loop": {
                                                                                                                "type": "JSExpression",
                                                                                                                "value": "false",
                                                                                                                "mock": []
                                                                                                            },
                                                                                                            "loopArgs": [
                                                                                                                "",
                                                                                                                ""
                                                                                                            ],
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
                                                                                                        }
                                                                                                    ]
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
                                                                                                                                    "loop": {
                                                                                                                                        "type": "JSExpression",
                                                                                                                                        "value": "false",
                                                                                                                                        "mock": []
                                                                                                                                    },
                                                                                                                                    "loopArgs": [
                                                                                                                                        "",
                                                                                                                                        ""
                                                                                                                                    ],
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
                                                                                                                                            "conditionGroup": ""
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
                                                                                                                                            "conditionGroup": ""
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
                                                                                                                                                        "dataSource": [
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
                                                                                                                                                        ],
                                                                                                                                                        "loading": false,
                                                                                                                                                        "rowKey": "id",
                                                                                                                                                        "tableColumns": [
                                                                                                                                                            {
                                                                                                                                                                "dataIndex": "name",
                                                                                                                                                                "title": "姓名",
                                                                                                                                                                "align": "left"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "dataIndex": "age",
                                                                                                                                                                "title": "年龄",
                                                                                                                                                                "aligin": "left"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "rowSelection": true,
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
                                                                                                                                            "conditionGroup": ""
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
                                                                                                                    "conditionGroup": "",
                                                                                                                    "loop": {
                                                                                                                        "type": "JSExpression",
                                                                                                                        "value": "false",
                                                                                                                        "mock": []
                                                                                                                    },
                                                                                                                    "loopArgs": [
                                                                                                                        "",
                                                                                                                        ""
                                                                                                                    ]
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
                                                                                                            "disabled": false
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
                                                                                                }
                                                                                            },
                                                                                            "docId": "docl61nb0y8",
                                                                                            "hidden": false,
                                                                                            "title": "",
                                                                                            "isLocked": false,
                                                                                            "condition": true,
                                                                                            "conditionGroup": "",
                                                                                            "loop": {
                                                                                                "type": "JSExpression",
                                                                                                "value": "false",
                                                                                                "mock": []
                                                                                            },
                                                                                            "loopArgs": [
                                                                                                "",
                                                                                                ""
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
                                        ]
                                    },
                                    "hidden": true,
                                    "title": "新增流程",
                                    "isLocked": false,
                                    "condition": true,
                                    "conditionGroup": "",
                                    "loopArgs": [
                                        "",
                                        ""
                                    ],
                                    "loop": {
                                        "type": "JSExpression",
                                        "value": "false",
                                        "mock": [
                                            1
                                        ]
                                    },
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
                                            "loopArgs": [
                                                "",
                                                ""
                                            ],
                                            "loop": [
                                                1
                                            ],
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
                                                    "loopArgs": [
                                                        "",
                                                        ""
                                                    ],
                                                    "loop": [
                                                        1
                                                    ],
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
                                                            "loopArgs": [
                                                                "",
                                                                ""
                                                            ],
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
                                                                    "conditionGroup": "",
                                                                    "loopArgs": [
                                                                        "",
                                                                        ""
                                                                    ]
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
                                                            "loopArgs": [
                                                                "",
                                                                ""
                                                            ],
                                                            "loop": [
                                                                1
                                                            ],
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
                                                                    "conditionGroup": "",
                                                                    "loopArgs": [
                                                                        "",
                                                                        ""
                                                                    ],
                                                                    "loop": [
                                                                        1
                                                                    ]
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
                                                            "loop": 1,
                                                            "loopArgs": [
                                                                "",
                                                                ""
                                                            ],
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
                                                                    "conditionGroup": "",
                                                                    "loop": 1,
                                                                    "loopArgs": [
                                                                        "",
                                                                        ""
                                                                    ]
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
                                                                    "conditionGroup": "",
                                                                    "loop": 1,
                                                                    "loopArgs": [
                                                                        "",
                                                                        ""
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