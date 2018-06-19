"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (React.createElement(component, finalProps));
};
exports.PropsRoute = (_a) => {
    var { component } = _a, rest = __rest(_a, ["component"]);
    return (React.createElement(react_router_dom_1.Route, Object.assign({}, rest, { render: routeProps => {
            return renderMergedProps(component, routeProps, rest);
        } })));
};
