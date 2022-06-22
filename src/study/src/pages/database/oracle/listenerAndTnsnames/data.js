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
  listenerRemote: `SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (SID_NAME = CLRExtProc)
      (ORACLE_HOME = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1)
      (PROGRAM = extproc)
      (ENVS = "EXTPROC_DLLS=ONLY:D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\bin\\oraclr12.dll")
    )
    (SID_DESC =
      (GLOBAL_DBNAME = ORCL)
      (ORACLE_HOME = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1)
      (SID_NAME = ORCL)
    )
  )

LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
    )
  )

ADR_BASE_LISTENER = D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\log
`,
  tnsnamesRemote: `LISTENER_ORCL =
  (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.145.101)(PORT = 1521))

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
    (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.145.101)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = ORCL)
    )
  )`,

}