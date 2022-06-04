export const ConnectPostgresqlData = {
    function1: `public static void SelectDataFromTablePostgresql1()
{
    var cs = "Host=localhost;Username=postgres;Password=654321;Database=database_name";
    var con = new NpgsqlConnection(cs);
    con.Open();

    string sql = "SELECT * FROM table_name";

    var cmd = new NpgsqlCommand(sql, con);
    NpgsqlDataReader rdr = cmd.ExecuteReader();
    StringBuilder builder = new StringBuilder();

    while (rdr.Read())
    {
        builder.Append(rdr.GetInt32(0) + "---" + rdr.GetString(1));
        builder.Append("\\r\\n");
    }

    con.Close();
    File.WriteAllText(@"D:\\Export\\output.txt", builder.ToString());
}
`,

    function2: `NpgsqlCommand cmd = new NpgsqlCommand(sql, con);
cmd.Parameters.AddWithValue(":jp", lines[i].Trim().ToString());
NpgsqlDataAdapter ad = new NpgsqlDataAdapter(cmd);
DataTable dt = new DataTable();

ad.Fill(dt);
foreach (DataRow row in dt.Rows)
{

}
...
`
}