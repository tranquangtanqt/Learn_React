import React from "react";
import CardList from "../../../components/modules/cardList";

const DatabaseOracle = () => {
  const cardData = [
    {
      title: "Oracle SQL Developer",
      links: [
        {
          text: "Change Language Oracle SQL Developer",
          path: "/database/oracle/changeLanguageOracleSQLDeveloper",
        },
        {
          text: "Tips for oracle SQL developer",
          path: "/database/oracle/tipsForOracleSQLDeveloper",
        },
      ],
    },
    {
      title: "Dump",
      links: [
        {
          text: "Import file dump Oracle",
          path: "/database/oracle/importDumpOracle",
        },
      ],
    },
    {
      title: "System",
      links: [
        {
          text: "Tips system",
          path: "/database/oracle/tips/system",
        },
        {
          text: "Listener and Tnsnames",
          path: "/database/oracle/listenerAndTnsnames",
        },
        {
          text: "Sqltext Session Process",
          path: "/database/oracle/sqltextSessionProcess",
        },
      ],
    },
    {
      title: "Tips",
      links: [
        {
          text: "String",
          path: "/database/oracle/tips/string",
        },
      ],
    },
  ];
  return (
    <>
      <h1>Database Oracle</h1>
      <CardList cardData={cardData}></CardList>
    </>
  );
};

export default DatabaseOracle;
