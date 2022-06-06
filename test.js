var headers = {
  "QB-Realm-Hostname": "gosales.quickbase.com",
  // "User-Agent": "FileService_Integration_V2.1",
  Authorization: "b4zk43xsngt3xd7ximtbdbxycvc",
  "Content-Type": "application/json"
};

var body = {
  from: "bsazkzsm2",
  select: [21],
  where: "{33.CT.'6789'}",
  sortBy: [{ fieldId: 3, order: "ASC" }],
  groupBy: [{ fieldId: 33, grouping: "equal-values" }],
  options: { skip: 0, top: 0, compareWithAppLocalTime: false }
};

const xmlHttp = new XMLHttpRequest();

xmlHttp.open("POST", "https://api.quickbase.com/v1/records/query", true);

for (const key in headers) {
  xmlHttp.setRequestHeader(key, headers[key]);
  // xmlHttp.setRequestHeader("Accept", "application/json");
}

xmlHttp.onreadystatechange = function() {
  if (xmlHttp.readyState === XMLHttpRequest.DONE) {
    console.log(xmlHttp.responseText);
    console.log(JSON.parse(xmlHttp.response));
  }
};

xmlHttp.send(JSON.stringify(body));

// xbody = {
//   data: [
//     {
//       "21": {
//         value:
//           "<tr><img  Alt=\"Manny Pinheiro67890\" ' src=&#039;https://gosales.quickbase.com/up/bsazkzsm2/a/r1/e22'/></tr></table>"
//       },
//       "33": {
//         value: "67890"
//       }
//     }
//   ],
//   fields: [
//     {
//       id: 21,
//       label: "Rep Card",
//       type: "rich-text"
//     },
//     {
//       id: 33,
//       label: "Agent ID",
//       type: "text"
//     }
//   ],
//   metadata: {
//     numFields: 2,
//     numRecords: 1,
//     skip: 0,
//     totalRecords: 1
//   }
// };

// console.log(xbody.data[(0.21).value]);
