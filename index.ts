import { StringStream } from 'scramjet';
import { parse } from 'csv-parse';
import * as fs from 'fs';
import * as path from 'path';
import { unparse } from 'papaparse';
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

const checkNavianceID = (str: String) => {
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

StringStream.from(fs.createReadStream('./gameplan1.csv'))
  .catch(
    /* istanbul ignore next */ async (err: unknown) => {
      console.error(
        `[SERVICE] - An unexpected error happened while adding this response into the CSV:`,
        err
      );
    }
  )

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
