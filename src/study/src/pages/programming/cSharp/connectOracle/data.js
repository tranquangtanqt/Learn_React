export const ConnectOracleData = {
    using: `using Oracle.ManagedDataAccess.Client;`,

    function: `var oradb = "Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=localhost)(PORT=1523))(CONNECT_DATA=(SERVICE_NAME=AL32UTF8)));User Id=user_name;Password=password;";
OracleConnection conn = new OracleConnection(oradb);
conn.Open();
OracleCommand cmd = new OracleCommand("select * from user_tab_comments", conn);
OracleDataReader reader = cmd.ExecuteReader();
DataTable dt = new DataTable();
dt.Load(reader);
conn.Close();
conn.Dispose();
`
}