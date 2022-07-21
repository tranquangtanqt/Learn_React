import { useState } from "react";
import * as XLSX from "xlsx";

const App = () => {

  const [items, setItems] = useState([]);

  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    for (let i = 0; i < file.length; i++) {
      
    }

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      console.log(wb.SheetNames)
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleFiles = (files) => {
    files.map((file) => {
      var filereader = new FileReader();
      filereader.readAsArrayBuffer(file);
      filereader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        let wsname = null;
        wb.SheetNames.forEach((element, index) => {
          if(element === "テーブル・ビュー一覧") {
            wsname = wb.SheetNames[index];
          }
        });
         
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        setItems(data);
      };
    });
  };

  console.log(items);
  return (
    <div>
    {/* <input type="file" onChange={onChange} /> */}
    <input
          type="file"
          className="input-field"
          //accept=".csv, .xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={(e) => {
            const file = [...e.target.files];
            console.log("here", file);
            // const file1 = e.target.files[1];
            handleFiles(file);
          }}
          multiple
        />

  </div>
  );
};

export default App;