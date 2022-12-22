"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const scramjet_1 = require("scramjet");
const fs = __importStar(require("fs"));
const pObject = {
    delimiter: ',',
    comments: '#',
    from_line: 6,
    skip_empty_lines: true,
};
const wstream = fs.createWriteStream('./test.txt');
const checkNavianceID = (str) => {
    console.log(str);
    return;
};
scramjet_1.StringStream.from(fs.createReadStream('./gameplan.csv'))
    .catch((err) => {
    console.log(err);
})
    .CSVParse(pObject)
    // .JSONStringify()
    // .toJSONArray()
    .map((res) => {
    console.log(res);
    return checkNavianceID(res[0]);
})
    .pipe(wstream);
// StringStream.from(fs.createReadStream('./gameplan.csv'))
//   .pipe(parse(pObject))
//   .map((res: any) => {
//     console.log(res[0]);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
