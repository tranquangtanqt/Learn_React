export const GetAllFileInFolderData = {
    getAllFile: `string dir = @"D:\\Diff\\New folder";
StringBuilder builder = new StringBuilder();
List<String> files = DirSearch(dir);
foreach (var file in files)
{
    builder.Append(file + Environment.NewLine);
}
File.WriteAllText(@"D:\\Export\\123.txt", builder.ToString());`,

    DirSearch: `private List<String> DirSearch(string sDir)
{
    List<String> files = new List<String>();
    try
    {
        //foreach (string f in Directory.GetFiles(sDir, "*.java"))
        foreach (string f in Directory.GetFiles(sDir))
        {
            files.Add(f);
        }
        foreach (string d in Directory.GetDirectories(sDir))
        {
            files.AddRange(DirSearch(d));
        }
    }
    catch (System.Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
    return files;
}
`
}