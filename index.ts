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
StringStream.from(fs.createReadStream('./gameplan.csv'))
  .CSVParse(pObject)
  .map((res) => {
    console.log(res);
  })
  .catch((err: any) => {
    console.log(err);
  });

// StringStream.from(fs.createReadStream('./gameplan.csv'))
//   .pipe(parse(pObject))
//   .map((res: any) => {
//     console.log(res[0]);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });
