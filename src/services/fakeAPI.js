
export let peoplecards = [
  {
    id: 1,
    name:"Kanye West",
    imageurl: '/Kanye.png',
    station: "1 month ago in Entertainment",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    countlikes: 64,
    countdislikes: 36,
    total: 100
  },
  {
    id: 2,
    name: "Mark Zuckerberg",
    imageurl: '/Mark.png',
    station: "1 month ago in Business",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    countlikes: 36,
    countdislikes: 64,
    total: 100
  },
  {
    id: 3,
    name:"Cristina Fernández de Kitchner",
    imageurl: '/Cristina.png',
    station: "1 month ago in Politics",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
    countlikes: 36,
    countdislikes: 64,
    total: 100
  },
  {
    id: 4,
    name:"Malala Yousafzai",
    imageurl: '/Malala.png',
    station: "1 month ago in Entertainment",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
    countlikes: 64,
    countdislikes: 36,
    total: 100
  },
];

export const getAllCards = async () => {
  if (peoplecards.length) {
    return peoplecards;
  }
  /*try {
    const response = await axios.get( `URL` );
    peoplecards = response.data.peoplecards;
    return peoplecards;
  } catch (err) {
    console.error(`Error fetching the data: ${err}`);
    throw err;
  }*/
};
