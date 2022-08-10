import CardList from "../../components/modules/cardList";

const Tips = () => {
  const cardData = [
    {
      title: "Software",
      links: [
        {
          text: "Visual Studio Code",
          path: "/tips/software/visualStudioCode",
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
