"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function App() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var thing = false;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "You clicked ",
            count,
            " times"),
        react_1.default.createElement("button", { onClick: function () { return setCount(count + 1); } }, "Click Me")));
}
exports.default = App;
