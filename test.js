var headers = {
  "QB-Realm-Hostname": "gosales.quickbase.com",
  "User-Agent": "FileService_Integration_V2.1",
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
}
xmlHttp.onreadystatechange = function() {
  if (xmlHttp.readyState === XMLHttpRequest.DONE) {
    console.log(xmlHttp.responseText);
  }
};

xmlHttp.send(JSON.stringify(body));
