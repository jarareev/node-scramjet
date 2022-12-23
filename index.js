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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const scramjet_1 = require("scramjet");
const fs = __importStar(require("fs"));
// const pObject = {
//   delimiter: ',',
//   comments: '#',
//   from_line: 6,
//   skip_empty_lines: true,
// };
const pObject = {
    delimiter: ',',
    comments: '#',
    skipEmptyLines: true,
};
const wstream = fs.createWriteStream('./test.txt');
const checkNavianceID = (str) => {
    console.log(str);
    return;
};
let data = [
    'STUDENT',
    'Veera raj',
    '2025',
    '25023',
    '52576925',
    'Employment',
    'Transportation, Distribution & Logistics, Manufacturing',
];
scramjet_1.StringStream.from(fs.createReadStream('./gameplan1.csv'))
    .catch(
/* istanbul ignore next */ (err) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(`[SERVICE] - An unexpected error happened while adding this response into the CSV:`, err);
}))
    // .map((res) => {
    //   // console.log(res);
    //   // return checkNavianceID(res[0]);
    //   console.log(res);
    //   if (res[4] === 'Naviance ID') {
    //     console.log('if', data);
    //     return data;
    //   } else {
    //     data.splice(4, 1);
    //     console.log('else', data);
    //     return data;
    //   }
    // })
    .CSVParse(pObject)
    // .endWith(`${unparse([data], { quotes: true })}\n`)
    .pipe(wstream);
// StringStream.from(fs.createReadStream('./gameplan1.csv'))
//   .catch((err: any) => {
//     console.log(err);
//   })
//   .CSVParse(pObject)
//   .endWith(`${unparse([data], { quotes: true })}\n`)
//   .map((res) => {
//     // console.log(res);
//     // return checkNavianceID(res[0]);
//     console.log(res[4]);
//     if (res[4] === 'Naviance ID') {
//       console.log(data);
//       return data;
//     } else {
//       data.splice(4, 1);
//       console.log(data);
//       return data;
//     }
//   })
//   .CSVStringify({ quotes: true, header: false })
//   .pipe(wstream);
// StringStream.from(fs.createReadStream('./gameplan1.csv'))
//   .catch((err: any) => {
//     console.log(err);
//   })
//   .endWith(`${unparse([data], { quotes: true })}\n`)
//   .CSVParse(pObject)
//   // .JSONStringify()
//   // .toJSONArray()
//   .map((res) => {
//     // console.log(res);
//     // return checkNavianceID(res[0]);
//     console.log(res[4]);
//     if (res[4] === 'Naviance ID') {
//       console.log(data);
//       return data;
//     } else {
//       data.splice(4, 1);
//       console.log(data);
//       return data;
//     }
//   })
//   .CSVStringify({ quotes: true, header: false })
//   .pipe(wstream);
// StringStream.from(fs.createReadStream('./gameplan.csv'))
//   .pipe(parse(pObject))
//   .map((res: any) => {
//     console.log(res[0]);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
