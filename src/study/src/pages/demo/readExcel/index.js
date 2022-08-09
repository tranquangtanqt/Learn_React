import React from "react";
import * as XLSX from "xlsx";

const ReadExcelDemo = () => {
  // function Upload() {
  //     const fileUpload = (document.getElementById('fileUpload'));
  //     const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
  //     if (regex.test(fileUpload.value.toLowerCase())) {
  //         let fileName = fileUpload.files[0].name;
  //         if (typeof (FileReader) !== 'undefined') {
  //             const reader = new FileReader();
  //             if (reader.readAsBinaryString) {
  //                 reader.onload = (e) => {
  //                     processExcel(reader.result);
  //                 };
  //                 reader.readAsBinaryString(fileUpload.files[0]);
  //             }
  //         } else {
  //             console.log("This browser does not support HTML5.");
  //         }
  //     } else {
  //         console.log("Please upload a valid Excel file.");
  //     }
  // }

  // function processExcel(data) {
  //     const workbook = XLSX.read(data, {type: 'binary'});
  //     const firstSheet = workbook.SheetNames[0];
  //     const excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

  //     console.log(excelRows);
  // }

  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_row_object_array(ws, { header: 1 });
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <>
      <h1>ReadExcelDemo</h1>
      {/* <input class="upload-excel" type="file" id="fileUpload" onchange="Upload()"/> */}
      <input type="file" onChange={onChange} />
    </>
  );
};

export default ReadExcelDemo;
