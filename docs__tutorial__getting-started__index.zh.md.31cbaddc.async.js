(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{Dfkm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BlwA");\n/* harmony import */ var dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2NSI");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\nvar DumiDemo1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_5__["default"][\'getting-started-demo\'].component);\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    id: "\\u5FEB\\u901F\\u4E0A\\u624B"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u5FEB\\u901F\\u4E0A\\u624B",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u5FEB\\u901F\\u4E0A\\u624B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u5B89\\u88C5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u5B89\\u88C5",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u901A\\u8FC7 npm \\u6216 yarn \\u547D\\u4EE4\\u5B89\\u88C5\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "#npm\\n$ npm install @antv/xflow --save\\n\\n#yarn\\n$ yarn add @antv/xflow",\n    lang: "shell"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u679C\\u662F\\u76F4\\u63A5\\u901A\\u8FC7 script \\u6807\\u7B7E\\u5F15\\u5165, \\u53EF\\u4EE5\\u4F7F\\u7528\\u4E0B\\u9762\\u4E24\\u4E2A CDN \\u4E2D\\u7684\\u4EFB\\u4F55\\u4E00\\u4E2A, \\u9ED8\\u8BA4\\u8FD4\\u56DE XFlow \\u7684\\u6700\\u65B0\\u7248:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://unpkg.com/@antv/xflow/dist/index.umd.js"\n  }, "https://unpkg.com/@antv/xflow/dist/index.umd.js"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://cdn.jsdelivr.net/npm/@antv/xflow/dist/index.umd.js"\n  }, "https://cdn.jsdelivr.net/npm/@antv/xflow/dist/index.umd.js")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "<script src=\\"https://unpkg.com/@antv/xflow/dist/index.umd.js\\"><\/script>",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5BF9\\u4E8E\\u751F\\u4EA7\\u73AF\\u5883, \\u6211\\u4EEC\\u63A8\\u8350\\u4F7F\\u7528\\u4E00\\u4E2A\\u660E\\u786E\\u7684\\u7248\\u672C\\u53F7, \\u4EE5\\u907F\\u514D\\u65B0\\u7248\\u672C\\u5347\\u7EA7\\u9020\\u6210\\u4E0D\\u53EF\\u9884\\u671F\\u7684\\u7834\\u574F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://unpkg.com/@antv/xflow@0.3.2-beta.1/dist/index.umd.js"\n  }, "https://unpkg.com/@antv/xflow@0.3.2-beta.1/dist/index.umd.js"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://cdn.jsdelivr.net/npm/@antv/xflow@0.3.2-beta.1/dist/index.umd.js"\n  }, "https://cdn.jsdelivr.net/npm/@antv/xflow@0.3.2-beta.1/dist/index.umd.js")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u9700\\u8981\\u6CE8\\u610F\\u7684\\u662F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u662F\\u57FA\\u4E8E X6 \\u56FE\\u7F16\\u8F91\\u5F15\\u64CE\\u3001\\u9762\\u5411 React \\u6280\\u672F\\u6808\\u7528\\u6237\\u7684\\u5E94\\u7528\\u7EA7\\u89E3\\u51B3\\u65B9\\u6848, \\u4F1A\\u9ED8\\u8BA4\\u5B89\\u88C5 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "@antv/x6"), "\\u3001", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "@antv/x6-react-shape"), "\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u652F\\u6301 AntV \\u65D7\\u4E0B\\u7684\\u5E38\\u89C1\\u5E03\\u5C40\\u7B97\\u6CD5, \\u4E0E\\u5144\\u5F1F\\u56E2\\u961F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://g6.antv.vision/zh/docs/api/graphLayout/guide"\n  }, "G6 \\u56FE\\u5E03\\u5C40"), "\\u4FDD\\u6301\\u4E00\\u81F4, \\u4F1A\\u9ED8\\u8BA4\\u5B89\\u88C5 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "@antv/layout"), "\\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u7B2C\\u4E00\\u4E2A\\u793A\\u4F8B"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u7B2C\\u4E00\\u4E2A\\u793A\\u4F8B",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u7B2C\\u4E00\\u4E2A\\u793A\\u4F8B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_5__["default"][\'getting-started-demo\'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u5F00\\u59CB\\u4F7F\\u7528"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u5F00\\u59CB\\u4F7F\\u7528",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u5F00\\u59CB\\u4F7F\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u63A5\\u4E0B\\u6765\\u6211\\u4EEC\\u5C31\\u4E00\\u8D77\\u4F7F\\u7528 XFlow \\u6765\\u6784\\u5EFA\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u56FE\\u5F62\\u5E94\\u7528\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "step1-\\u521B\\u5EFA\\u5DE5\\u4F5C\\u7A7A\\u95F4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#step1-\\u521B\\u5EFA\\u5DE5\\u4F5C\\u7A7A\\u95F4",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "Step1 \\u521B\\u5EFA\\u5DE5\\u4F5C\\u7A7A\\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u9996\\u5148, \\u6211\\u4EEC\\u9700\\u8981\\u6784\\u5EFA\\u4E00\\u4E2A XFlow \\u5DE5\\u4F5C\\u7A7A\\u95F4\\uFF0C\\u5176\\u4E2D XFlowCanvas \\u753B\\u5E03\\u7EC4\\u4EF6\\uFF0CCanvasScaleToolbar \\u5DE5\\u5177\\u680F\\u3001CanvasMiniMap \\u5C0F\\u5730\\u56FE\\u3001CanvasSnapline \\u5BF9\\u9F50\\u7EBF\\u7B49\\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF0C\\u90FD\\u662F XFlow \\u5DE5\\u4F5C\\u7A7A\\u95F4\\u4E2D\\u7684\\u5185\\u5BB9\\u3002", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "\\u9700\\u8981\\u5F3A\\u8C03\\u7684\\u662F\\uFF0C\\u5728XFlow \\u4E2D\\uFF0C\\u4E00\\u5207\\u90FD\\u662FReact \\u7EC4\\u4EF6"), "\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "import { XFlow, XFlowCanvas } from \'@antv/xflow\'\\nimport { CanvasScaleToolbar, CanvasMiniMap, CanvasSnapline } from \'@antv/xflow\'\\nimport { useGraphConfig } from \'./config-graph\'\\n\\nreturn (\\n  <XFlow\\n    className=\\"xflow-uer-container\\"\\n    graphData={graphData}\\n    graphLayuot={{\\n      layoutType: \'dagre\',\\n      layoutOptions: {\\n        type: \'dagre\',\\n        rankdir: \'TB\',\\n        nodesep: 60,\\n        ranksep: 40,\\n      }\\n    }}\\n    onLoad={onLoad}\\n    isAutoCenter={true}\\n  >\\n    <XFlowCanvas config={useGrapConfig()}>\\n      {/** \u5de5\u5177\u680f */}\\n      <CanvasScaleToolbar />\\n      {/** \u5c0f\u5730\u56fe  */}\\n      <CanvasMiniMap minimapOptions={{ width: 200, height: 120 }} />\\n      {/** \u5bf9\u9f50\u7ebf */}\\n      <CanvasSnapline color=\\"#1890ff\\" />\\n    </XFlowCanvas>\\n  </Xflow>\\n)",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "step2-\\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#step2-\\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "Step2 \\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u7136\\u540E, \\u6211\\u4EEC\\u9700\\u8981\\u8BBE\\u7F6E\\u753B\\u5E03\\u5168\\u5C40\\u914D\\u7F6E\\u9879 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "graphConfig"), ", \\u8BE5\\u914D\\u7F6E\\u9879\\u51B3\\u5B9A\\u4E86\\u753B\\u5E03\\u4E0A\\u7684\\u5185\\u5BB9\\u5982\\u4F55\\u5448\\u73B0\\u3002\\u6BD4\\u5982\\u753B\\u5E03\\u662F\\u5426\\u9700\\u8981\\u7F51\\u683C\\u3001\\u753B\\u5E03\\u7684\\u7F29\\u653E\\u7B49\\u7EA7\\u3001\\u753B\\u5E03\\u662F\\u5426\\u652F\\u6301\\u6EDA\\u8F6E\\u7F29\\u653E\\u7B49, \\u518D\\u6BD4\\u5982\\u753B\\u5E03\\u4E0A\\u9700\\u8981\\u6E32\\u67D3\\u54EA\\u79CD\\u7C7B\\u578B\\u7684 React \\u8282\\u70B9/\\u8FDE\\u7EBF\\u7B49\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "import { createGraphConfig } from \'@antv/xflow\'\\nimport Node1 from \'./react-node/node1\'\\nimport Edge1 from \'./react-edge/edge1\'\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  /** \u8bbe\u7f6e\u753b\u5e03\u914d\u7f6e\u9879\uff0c\u4f1a\u8986\u76d6XFlow\u9ed8\u8ba4\u753b\u5e03\u914d\u7f6e\u9879 */\\n  config.setX6Config({\\n    grid: true,\\n    scaling: { min: 0.2, max: 3 },\\n    mousewheel: { enabled: true, zoomAtMousePosition: true },\\n  })\\n\\n  /** \u8bbe\u7f6e\u753b\u5e03\u9700\u8981\u6e32\u67d3\u7684React\u8282\u70b9\u3001\u8fde\u7ebf\u4e0a\u7684React\u5185\u5bb9 */\\n  config.setNodeRender(\'NODE1\', props => <Node1 {...props} />)\\n  config.setEdgeRender(\'EDGE1\', props => <Edge1 {...props} />)\\n})",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "step3-\\u753B\\u5E03\\u6E32\\u67D3\\u7B49\\u903B\\u8F91\\u64CD\\u4F5C"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#step3-\\u753B\\u5E03\\u6E32\\u67D3\\u7B49\\u903B\\u8F91\\u64CD\\u4F5C",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "Step3 \\u753B\\u5E03\\u6E32\\u67D3\\u7B49\\u903B\\u8F91\\u64CD\\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E\\u540E, \\u6211\\u4EEC\\u5C31\\u53EF\\u4EE5\\u5728 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "onLoad"), " \\u65B9\\u6CD5\\u91CC\\u8FDB\\u884C\\u4E00\\u4E9B\\u5FC5\\u8981\\u7684\\u4E1A\\u52A1\\u903B\\u8F91\\u64CD\\u4F5C\\uFF0C\\u6BD4\\u5982\\u4ECE\\u670D\\u52A1\\u7AEF\\u83B7\\u53D6\\u6570\\u636E\\u3001\\u6267\\u884C\\u5E03\\u5C40\\u7B97\\u6CD5\\u3001\\u6E32\\u67D3\\u753B\\u5E03\\u5185\\u5BB9\\u3001\\u76D1\\u542C\\u753B\\u5E03\\u76F8\\u5173\\u4E8B\\u4EF6\\u7B49\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "/** XFlow\u521d\u59cb\u5316\u5b8c\u6210\u540e\u7684\u56de\u8c03 */\\nconst onLoad: IAppLoad = async app => {\\n  /** \u8fd9\u91cc\u6211\u4eec\u5047\u8bbe\u6570\u636e\u5df2\u7ecf\u4ece\u670d\u52a1\u7aef\u53d6\u5230 */\\n  const nodes: NsGraph.INodeConfig[] = [\\n    { id: \'root1\', width: 150, height: 40, renderKey: \'NODE1\', info: { text: \'root1\' } },\\n    { id: \'down1\', width: 150, height: 40, renderKey: \'NODE2\', info: { text: \'down1\' } },\\n    { id: \'down2\', width: 150, height: 40, renderKey: \'NODE2\', info: { text: \'down2\' } },\\n    { id: \'down3\', width: 150, height: 40, renderKey: \'NODE2\', info: { text: \'down3\' } },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: \'root1-down1\',\\n      source: \'root1\',\\n      target: \'down1\',\\n      renderKey: \'EDGE1\',\\n      info: { line: \'root1-down1\' },\\n    },\\n    {\\n      id: \'root1-down2\',\\n      source: \'root1\',\\n      target: \'down2\',\\n      renderKey: \'EDGE2\',\\n      info: { line: \'root1-down2\' },\\n    },\\n    {\\n      id: \'root1-down3\',\\n      source: \'root1\',\\n      target: \'down3\',\\n      label: \'1:N(\u7eaf\u6587\u672c)\',\\n      info: { line: \'root1-down3\' },\\n    },\\n  ]\\n  const graphData = { nodes, edges }\\n  setGraphData(graphData)\\n\\n  /** \u76d1\u542c\u753b\u5e03\u4e8b\u4ef6 */\\n  const graph = await app.getGraphInstance()\\n  graph.on(\'node:click\', ({ e, x, y, node, view }) => {\\n    const nodeData: NsGraph.INodeConfig = node.getData()\\n    message.success(`${nodeData.id}\u8282\u70b9\u88ab\u70b9\u51fb\u4e86`)\\n  })\\n  graph.on(\'edge:click\', ({ e, x, y, edge, view }) => {\\n    edge.toFront()\\n    const edgeData: NsGraph.IEdgeConfig = edge.getData()\\n    message.success(`${edgeData.id}\u8fde\u7ebf\u88ab\u70b9\u51fb\u4e86`)\\n  })\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5230\\u6B64\\uFF0C\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u56FE\\u5F62\\u5E94\\u7528\\u5DF2\\u7ECF\\u5177\\u5907\\u96CF\\u5F62\\u4E86\\u3002\\u4F46 XFlow \\u7684\\u9B45\\u529B\\u8FDC\\u4E0D\\u6B62\\u4E8E\\u6B64\\uFF01\\u5982\\u679C\\u60A8\\u7684\\u5E94\\u7528\\u8FD8\\u9700\\u8981\\u5404\\u79CD\\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF0CXFlow \\u4E3A\\u60A8\\u5185\\u7F6E\\u4E86\\u82E5\\u5E72\\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF0C\\u62FF\\u6765\\u5373\\u7528\\uFF0C\\u6BD4\\u5982\\u4E0A\\u9762\\u4F7F\\u7528\\u7684 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "CanvasScaleToolbar\\u5DE5\\u5177\\u680F"), "\\uFF0C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "CanvasMinimap\\u5C0F\\u5730\\u56FE"), "\\uFF0C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "CanvasSnapline\\u5BF9\\u9F50\\u7EBF"), "\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u53E6\\u5916 XFlow \\u771F\\u6B63\\u5F3A\\u5927\\u4E4B\\u5904\\u5728\\u4E8E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u753B\\u5E03\\u7EC4\\u4EF6\\u4E0E\\u4EA4\\u4E92\\u7EC4\\u4EF6\\u7684\\u8054\\u52A8\\u673A\\u5236\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlow \\u63D0\\u4F9B\\u7684\\u6269\\u5C55\\u673A\\u5236\\u5141\\u8BB8\\u5B9A\\u5236\\u4EFB\\u610F\\u4E1A\\u52A1\\u9700\\u8981\\u7684\\u4EA4\\u4E92\\u7EC4\\u4EF6\\u3002\\u60A8\\u53EF\\u4EE5\\u5728\\u540E\\u9762\\u7684\\u6559\\u7A0B\\u4E2D\\u8BE6\\u7EC6\\u4E86\\u89E3\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u66F4\\u591A"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u66F4\\u591A",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u66F4\\u591A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u672C\\u7AE0\\u4EC5\\u4EC5\\u4ECB\\u7ECD\\u4E86\\u5982\\u4F55\\u5B89\\u88C5 XFlow \\u4EE5\\u53CA\\u7B80\\u5355\\u7684\\u4F7F\\u7528\\u573A\\u666F, \\u5728\\u540E\\u7EED\\u7684\\u6559\\u7A0B\\u4E2D\\u60A8\\u53EF\\u4EE5\\u4E86\\u89E3\\u66F4\\u591A XFlow \\u7684\\u6838\\u5FC3\\u80FD\\u529B\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial/solutions/dag"\n  }, "DAG \\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial/solutions/er"\n  }, "ER \\u5EFA\\u6A21\\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial/solutions/flow"\n  }, "\\u6D41\\u7A0B\\u56FE\\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-core-components/xflow-component"\n  }, "XFlow \\u5DE5\\u4F5C\\u53F0\\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-core-components/xflow-canvas-component"\n  }, "XFlowCanvas \\u753B\\u5E03\\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-toolbar"\n  }, "Toolbar \\u5DE5\\u5177\\u680F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-scale-toolbar"\n  }, "ScaleToolbar \\u7F29\\u653E\\u5DE5\\u5177\\u680F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/context-menu"\n  }, "ContextMenu \\u53F3\\u952E\\u83DC\\u5355")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-snapline"\n  }, "Snapline \\u5BF9\\u9F50\\u7EBF")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-mini-map"\n  }, "Minimap \\u5C0F\\u5730\\u56FE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-keybinding"\n  }, "KeyBindings \\u5FEB\\u6377\\u952E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-node-panel"\n  }, "NodeDndPanel \\u8282\\u70B9\\u62D6\\u62FD\\u9762\\u677F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/canvas-config-form"\n  }, "JsonForm \\u914D\\u7F6E\\u5F0F\\u8868\\u5355")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-ext-components/workspace-panel"\n  }, "WorkspacePanel \\u901A\\u7528\\u9762\\u677F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/docs/tutorial-advanced/advanced"\n  }, "\\u81EA\\u5B9A\\u4E49\\u6269\\u5C55\\u7EC4\\u4EF6"))))));\n});\n\n//# sourceURL=webpack:///./docs/tutorial/getting-started/index.zh.md?')}}]);