import { StringStream } from 'scramjet';
import { parse } from 'csv-parse';
import * as fs from 'fs';
import * as path from 'path';

const pObject = {
  delimiter: ',',
  comments: '#',
  from_line: 6,
  skip_empty_lines: true,
};

const wstream = fs.createWriteStream('./test.txt');
const checkNavianceID = (str: String) => {
  console.log(str);
  return;
};

StringStream.from(fs.createReadStream('./gameplan.csv'))
  .catch((err: any) => {
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
