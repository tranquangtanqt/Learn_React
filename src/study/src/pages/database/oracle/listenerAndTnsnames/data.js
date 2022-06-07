export const ListenerAndTnsnamesData = {
    listener: `SID_LIST_LISTENER =
    (SID_LIST =
        (SID_DESC =
            (SID_NAME = CLRExtProc)
            (ORACLE_HOME = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1)
            (PROGRAM = extproc)
            (ENVS = "EXTPROC_DLLS=ONLY:D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\bin\\oraclr12.dll")
        )
    )

LISTENER =
    (DESCRIPTION_LIST =
        (DESCRIPTION =
            (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
            (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
        )
    )
`,
    tnsnames: `LISTENER_ORCL =
    (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
  
  
ORACLR_CONNECTION_DATA =
    (DESCRIPTION =
        (ADDRESS_LIST =
            (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
        )
        (CONNECT_DATA =
            (SID = CLRExtProc)
        (PRESENTATION = RO)
    )
)
  
ORCL =
    (DESCRIPTION =
        (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
        (CONNECT_DATA =
            (SERVER = DEDICATED)
            (SERVICE_NAME = orcl.aureole.local)
        )
    )
  `,
}