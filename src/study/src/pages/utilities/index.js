import CardList from "../../components/modules/cardList";

const Utilities = () => {
  const cardData = [
    {
      title: "File",
      links: [
        {
          text: "List file selected",
          path: "/utilities/listFileSelected",
        },
        {
          text: "Read content multi file",
          path: "/utilities/readContentMultiFile",
        },
      ],
    },
    {
      title: "Text",
      links: [
        {
          text: "Common",
          path: "/utilities/textCommon",
        },
        {
          text: "Find Text Duplicates",
          path: "/utilities/findTextDuplicates",
        },
        {
          text: "Find Text ColumnJP_EN",
          path: "/utilities/findTextColumnJP_EN",
        },
        {
          text: "Repeat",
          path: "/utilities/textRepeat",
        },
        {
          text: "Replace",
          path: "/utilities/textReplace",
        },
        {
          text: "Special",
          path: "/utilities/textSpecial",
        },
        {
          text: "Tiny MCE",
          path: "/utilities/tinyMC",
        },
      ],
    },
    {
      title: "SQL",
      links: [
        {
          text: "Random Insert SQL",
          path: "/utilities/createTableFromExcel",
        },
        {
          text: "Create Table From Excel",
          path: "/utilities/randomInsertSQL",
        },
      ],
    },
  ];

  return (
    <>
      <h1>Utilities</h1>
      <CardList cardData={cardData}></CardList>
    </>
  );
};

export default Utilities;
