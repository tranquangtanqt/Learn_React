import CardList from "../../components/modules/cardList";

const Tips = () => {
  const cardData = [
    {
      title: "Software",
      links: [
        {
          text: "Visual Studio Code - Extention",
          path: "/tips/software/visualStudioCode_Extention",
        },
        {
          text: "Visual Studio Code - Add hotkey",
          path: "/tips/software/visualStudioCode_AddHotkey",
        },
      ],
    },
  ];
  return (
    <>
      <h1>Tips</h1>
      <CardList cardData={cardData}></CardList>
    </>
  );
};

export default Tips;
