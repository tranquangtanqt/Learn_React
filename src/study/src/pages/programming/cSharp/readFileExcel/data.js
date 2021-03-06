export const ReadFileExcelData = {
    using: `using Excel = Microsoft.Office.Interop.Excel;`,

    function: `public static void getContentExcel(string fileExcel)
{
    StringBuilder builder = new StringBuilder();
    //Create COM Objects. Create a COM object for everything that is referenced
    Excel.Application xlApp = new Excel.Application();
    //Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(@"C:\\Users\\tantq\\FileName.xlsm");
    Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(fileExcel);
    Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[3];
    Excel.Range xlRange = xlWorksheet.UsedRange;
    int rowCount = xlRange.Rows.Count;
    int colCount = xlRange.Columns.Count;
    //iterate over the rows and columns and print to the console as it appears in the file
    //excel is not zero based!!
    for (int i = 1; i <= rowCount; i++)
    {
        for (int j = 1; j <= colCount; j++)
        {
            //new line
            if (j == 1)
            {
                if (xlRange.Cells[i, j] != null && xlRange.Cells[i, j].Value2 != null)
                {
                    if (xlRange.Cells[i, j].Value2.ToString().Trim().Equals("0"))
                    {
                        //write the value
                        builder.Append(xlRange.Cells[i, j].Value2.ToString() + "\\t");
                        builder.Append("\\r\\n");
                    }
                }
            }
        }
    }

    //cleanup
    GC.Collect();
    GC.WaitForPendingFinalizers();
    //rule of thumb for releasing com objects:
    //  never use two dots, all COM objects must be referenced and released individually
    //  ex: [somthing].[something].[something] is bad
    //release com objects to fully kill excel process from running in the background
    Marshal.ReleaseComObject(xlRange);
    Marshal.ReleaseComObject(xlWorksheet);
    //close and release
    xlWorkbook.Close();
    Marshal.ReleaseComObject(xlWorkbook);
    //quit and release
    xlApp.Quit();
    Marshal.ReleaseComObject(xlApp);
    File.WriteAllText(@"D:\\Export\\output.txt", builder.ToString());
}    
`
}