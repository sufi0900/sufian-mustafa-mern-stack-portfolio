"use strict";(self.webpackChunksufianmustafa=self.webpackChunksufianmustafa||[]).push([[380],{4380:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2658);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5295);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2643);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5998);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9655);\n/* harmony import */ var _redux_features_projectSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8044);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1277);\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6761);\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1797);\n/* harmony import */ var _Componenet_Spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8969);\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\n\n\n\n\n\n\n\n\nvar DashboardProject = function DashboardProject() {\n  var _user$result, _user$result2;\n  var Item = {\n    background: "rgba(255, 255, 255, 0.2)",\n    borderRadius: "16px",\n    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",\n    WebkitBackdropFilter: "blur(5px)",\n    border: "1px solid rgba(255, 255, 255, 0.3)"\n  };\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {\n      return _objectSpread({}, state.auth);\n    }),\n    user = _useSelector.user;\n  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {\n      return _objectSpread({}, state.project);\n    }),\n    userProjects = _useSelector2.userProjects,\n    loading = _useSelector2.loading;\n  var userId = user === null || user === void 0 || (_user$result = user.result) === null || _user$result === void 0 ? void 0 : _user$result._id;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (userId) {\n      dispatch((0,_redux_features_projectSlice__WEBPACK_IMPORTED_MODULE_2__/* .getProjectsByUser */ .oe)(userId)); // Pass the currentPage here\n    }\n  }, [dispatch, userId]);\n  var excerpt = function excerpt(str) {\n    if (str && str.length > 40) {\n      str = str.substring(0, 40) + " ...";\n    }\n    return str;\n  };\n  var handleDelete = function handleDelete(id) {\n    if (window.confirm("Are you sure you want to delete this Project?")) {\n      dispatch((0,_redux_features_projectSlice__WEBPACK_IMPORTED_MODULE_2__/* .deleteProject */ .th)({\n        id: id,\n        toast: react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .Am\n      }));\n    }\n  };\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Componenet_Spin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {\n    container: true,\n    justifyContent: "center",\n    alignItems: "center",\n    spacing: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {\n    variant: "h5",\n    align: "center"\n  }, "Dashboard: ", user === null || user === void 0 || (_user$result2 = user.result) === null || _user$result2 === void 0 ? void 0 : _user$result2.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {\n    style: {\n      maxWidth: "570px"\n    }\n  })), userProjects.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {\n      item: true,\n      xs: 12,\n      lg: 8,\n      key: item._id,\n      sx: {\n        marginRight: "55px"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {\n      style: Item\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {\n      container: true,\n      spacing: 2,\n      alignItems: "center"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {\n      item: true,\n      xs: 12,\n      md: 4\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n      src: item.imageFile,\n      alt: item.title,\n      loading: "lazy",\n      style: {\n        width: "100%",\n        height: "100%",\n        objectFit: "cover"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {\n      item: true,\n      xs: 12,\n      md: 8\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {\n      style: {\n        marginBottom: "1rem"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {\n      variant: "h6",\n      component: "div",\n      align: "left"\n    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {\n      variant: "body2",\n      color: "textSecondary",\n      component: "div",\n      align: "left",\n      width: 110\n    }, excerpt(item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      style: {\n        display: "flex",\n        justifyContent: "flex-end",\n        marginTop: "-40px"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {\n      onClick: function onClick() {\n        return handleDelete(item._id);\n      },\n      style: {\n        color: "#dd4b39",\n        cursor: "pointer"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .rU, {\n      to: "/editProject/".concat(item._id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {\n      style: {\n        color: "#55acee",\n        marginLeft: "10px",\n        cursor: "pointer"\n      }\n    }))))))));\n  }));\n};\n/* harmony default export */ __webpack_exports__["default"] = (DashboardProject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDM4MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1Zmlhbm11c3RhZmEvLi9zcmMvcGFnZXMvRGFzaGJvYXJkUHJvamVjdC5qcz8zZTdlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QsIGdldFByb2plY3RzQnlVc2VyIH0gZnJvbSBcIi4uL3JlZHV4L2ZlYXR1cmVzL3Byb2plY3RTbGljZVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IERlbGV0ZSwgRWRpdCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5pbXBvcnQgU3BpbiBmcm9tIFwiLi4vQ29tcG9uZW5ldC9TcGluXCI7XG52YXIgRGFzaGJvYXJkUHJvamVjdCA9IGZ1bmN0aW9uIERhc2hib2FyZFByb2plY3QoKSB7XG4gIHZhciBfdXNlciRyZXN1bHQsIF91c2VyJHJlc3VsdDI7XG4gIHZhciBJdGVtID0ge1xuICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE2cHhcIixcbiAgICBib3hTaGFkb3c6IFwicmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMTQsIDMwLCAzNywgMC4zMikgMHB4IDJweCAxNnB4IDBweFwiLFxuICAgIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXCJcbiAgfTtcbiAgdmFyIF91c2VTZWxlY3RvciA9IHVzZVNlbGVjdG9yKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLmF1dGgpO1xuICAgIH0pLFxuICAgIHVzZXIgPSBfdXNlU2VsZWN0b3IudXNlcjtcbiAgdmFyIF91c2VTZWxlY3RvcjIgPSB1c2VTZWxlY3RvcihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5wcm9qZWN0KTtcbiAgICB9KSxcbiAgICB1c2VyUHJvamVjdHMgPSBfdXNlU2VsZWN0b3IyLnVzZXJQcm9qZWN0cyxcbiAgICBsb2FkaW5nID0gX3VzZVNlbGVjdG9yMi5sb2FkaW5nO1xuICB2YXIgdXNlcklkID0gdXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgfHwgKF91c2VyJHJlc3VsdCA9IHVzZXIucmVzdWx0KSA9PT0gbnVsbCB8fCBfdXNlciRyZXN1bHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF91c2VyJHJlc3VsdC5faWQ7XG4gIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgZGlzcGF0Y2goZ2V0UHJvamVjdHNCeVVzZXIodXNlcklkKSk7IC8vIFBhc3MgdGhlIGN1cnJlbnRQYWdlIGhlcmVcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgdXNlcklkXSk7XG4gIHZhciBleGNlcnB0ID0gZnVuY3Rpb24gZXhjZXJwdChzdHIpIHtcbiAgICBpZiAoc3RyICYmIHN0ci5sZW5ndGggPiA0MCkge1xuICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCA0MCkgKyBcIiAuLi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcbiAgdmFyIGhhbmRsZURlbGV0ZSA9IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZShpZCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBQcm9qZWN0P1wiKSkge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlUHJvamVjdCh7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdG9hc3Q6IHRvYXN0XG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTcGluLCBudWxsKTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHNwYWNpbmc6IDNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGl0ZW06IHRydWUsXG4gICAgeHM6IDEyXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICB2YXJpYW50OiBcImg1XCIsXG4gICAgYWxpZ246IFwiY2VudGVyXCJcbiAgfSwgXCJEYXNoYm9hcmQ6IFwiLCB1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCB8fCAoX3VzZXIkcmVzdWx0MiA9IHVzZXIucmVzdWx0KSA9PT0gbnVsbCB8fCBfdXNlciRyZXN1bHQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdXNlciRyZXN1bHQyLm5hbWUpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgbWF4V2lkdGg6IFwiNTcwcHhcIlxuICAgIH1cbiAgfSkpLCB1c2VyUHJvamVjdHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICAgIGl0ZW06IHRydWUsXG4gICAgICB4czogMTIsXG4gICAgICBsZzogOCxcbiAgICAgIGtleTogaXRlbS5faWQsXG4gICAgICBzeDoge1xuICAgICAgICBtYXJnaW5SaWdodDogXCI1NXB4XCJcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7XG4gICAgICBzdHlsZTogSXRlbVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgIHNwYWNpbmc6IDIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgIHhzOiAxMixcbiAgICAgIG1kOiA0XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgc3JjOiBpdGVtLmltYWdlRmlsZSxcbiAgICAgIGFsdDogaXRlbS50aXRsZSxcbiAgICAgIGxvYWRpbmc6IFwibGF6eVwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIlxuICAgICAgfVxuICAgIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgIHhzOiAxMixcbiAgICAgIG1kOiA4XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRlbnQsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgICB2YXJpYW50OiBcImg2XCIsXG4gICAgICBjb21wb25lbnQ6IFwiZGl2XCIsXG4gICAgICBhbGlnbjogXCJsZWZ0XCJcbiAgICB9LCBpdGVtLnRpdGxlKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgICAgdmFyaWFudDogXCJib2R5MlwiLFxuICAgICAgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiLFxuICAgICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgd2lkdGg6IDExMFxuICAgIH0sIGV4Y2VycHQoaXRlbS5kZXNjcmlwdGlvbikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIi00MHB4XCJcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGUsIHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVEZWxldGUoaXRlbS5faWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiBcIiNkZDRiMzlcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgfVxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7XG4gICAgICB0bzogXCIvZWRpdFByb2plY3QvXCIuY29uY2F0KGl0ZW0uX2lkKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVkaXQsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiBcIiM1NWFjZWVcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgIH1cbiAgICB9KSkpKSkpKSk7XG4gIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRQcm9qZWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4380\n')}}]);