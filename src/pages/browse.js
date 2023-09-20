import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";



function selectionFilter2({ series, films } = []) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series?.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series?.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series?.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series?.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series?.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films?.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films?.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films?.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films?.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((item) => item.genre === "romance"),
      },
    ],
  };
}



let films2 = [
  {
    "id": "ec571c94-0c39-4cfe-b33e-2106e1f399ac",
    "genre": "children",
    "title": "Hotel Transylvania",
    "description": "Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.",
    "maturity": "0",
    "slug": "hotel-transylvania",
    "docId": "05lEhNHLWcs7RdEDNVZo"
  },
  {
    "title": "A Star Is Born",
    "maturity": "15",
    "genre": "romance",
    "id": "f0617bcc-9ee3-4738-9a6c-f08b8a7812f9",
    "slug": "a-star-is-born",
    "description": "After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.",
    "docId": "23qs3M50bSuNn45000Mk"
  },
  {
    "title": "Joker",
    "description": "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.",
    "genre": "thriller",
    "slug": "joker",
    "maturity": "15",
    "id": "55eb1e49-e0fc-4473-a442-a3cb0463525f",
    "docId": "2ieEbwAS7dfl1MtTbSPm"
  },
  {
    "slug": "zodiac",
    "id": "cdb48160-01e8-4cd9-ad32-da0b7b18c16f",
    "maturity": "15",
    "description": "Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.",
    "genre": "suspense",
    "title": "Zodiac",
    "docId": "4a1h2BUQAoC6AGgPXOme"
  },
  {
    "slug": "seven",
    "maturity": "15",
    "title": "Seven",
    "genre": "suspense",
    "description": "A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.",
    "id": "452017cb-7dd3-4a10-9b28-bb093030fa0d",
    "docId": "52OZFU5NCqADTgrwoefj"
  },
  {
    "genre": "thriller",
    "id": "48fbe435-8695-4610-bb4f-d76abb77f378",
    "slug": "black-swan",
    "title": "Black Swan",
    "description": "Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.",
    "maturity": "15",
    "docId": "89dJSnJfijMcv66orBRT"
  },
  {
    "maturity": "0",
    "id": "ab2796e6-b225-4275-8ed9-b9b3f6b64309",
    "slug": "frozen",
    "description": "Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.",
    "genre": "children",
    "title": "Frozen",
    "docId": "DLE6OXJK3LZoj7Vj4EDv"
  },
  {
    "description": "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    "title": "Shutter Island",
    "maturity": "15",
    "genre": "suspense",
    "id": "1087b947-bb9c-4280-afde-b39394a8ee30",
    "slug": "shutter-island",
    "docId": "Fnq5xp0jBySZJ6OhGGst"
  },
  {
    "maturity": "15",
    "id": "1b75e34f-ac77-4a30-8324-ed4afbb2c942",
    "title": "Nightcrawler",
    "description": "Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.",
    "genre": "thriller",
    "slug": "nightcrawler",
    "docId": "GEbiM3LHcVXhT17RCMiw"
  },
  {
    "title": "Up",
    "id": "e7bac01f-139e-49ba-99d5-e9295bdcfa49",
    "description": "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    "slug": "up",
    "maturity": "0",
    "genre": "children",
    "docId": "GjAoOL54jRR44PPOjShb"
  },
  {
    "maturity": "15",
    "id": "920c6c3c-cd81-4dc6-83a4-f0de9435704c",
    "title": "The Notebook",
    "description": "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
    "genre": "romance",
    "slug": "the-notebook",
    "docId": "JNbAiOWe3KtFTsrKoCf2"
  },
  {
    "description": "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
    "genre": "romance",
    "id": "ef4a708c-20fe-4028-9caf-7c4ffc1afd98",
    "slug": "titanic",
    "title": "Titanic",
    "maturity": "15",
    "docId": "Kb7wtj8HRT6Z2Apr15I2"
  },
  {
    "title": "Spirited Away",
    "maturity": "0",
    "id": "6d6bdb38-1fa5-42f3-9568-bee551d0b678",
    "description": "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.",
    "slug": "spirited-away",
    "genre": "children",
    "docId": "OVFgAwVwWvnAPsNmbZze"
  },
  {
    "title": "The Revenant",
    "description": "Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.",
    "maturity": "15",
    "genre": "drama",
    "id": "b9ce3104-9e40-4874-ac7e-03e42d75a890",
    "slug": "the-revenant",
    "docId": "YRwqaPQLQp9zQ0zc7i7X"
  },
  {
    "id": "80ef2e74-550c-4e18-9c80-f15f8c65bbb3",
    "description": "Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.",
    "title": "Blue Valentine",
    "slug": "blue-valentine",
    "maturity": "15",
    "genre": "romance",
    "docId": "a9aTvqbZJca3Oht8GYpb"
  },
  {
    "maturity": "0",
    "title": "Despicable Me",
    "id": "6722656f-dfe2-442c-8061-b15bea6eb125",
    "genre": "children",
    "slug": "despicable-me",
    "description": "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
    "docId": "d6p4izHesLd2tpkMCDWJ"
  },
  {
    "description": "King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.",
    "maturity": "15",
    "slug": "kings-speech",
    "id": "ba44278f-a5dd-45eb-a12b-eb0198b2da73",
    "genre": "drama",
    "title": "Kings Speech",
    "docId": "dJnmx38wg8hr8EBwIBUC"
  },
  {
    "genre": "romance",
    "maturity": "15",
    "description": "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...",
    "slug": "la-la-land",
    "title": "La La Land",
    "id": "13336041-14df-4095-ba37-5776fe00174a",
    "docId": "h966OFNCDNDURcVzZUKE"
  },
  {
    "title": "Fight Club",
    "description": "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    "slug": "fight-club",
    "id": "5052c6a3-8bdf-49d9-abda-06e58c37f753",
    "genre": "drama",
    "maturity": "15",
    "docId": "hULvoPjxHffcKy6om8i2"
  },
  {
    "title": "The Silence of The Lambs",
    "description": "Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.",
    "maturity": "15",
    "id": "aa1bb89a-ce95-44a1-afa2-a7c93f7a3444",
    "slug": "the-silence-of-the-lambs",
    "genre": "thriller",
    "docId": "kYOO8LJOaOYi3Jr9KUM0"
  },
  {
    "description": "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
    "title": "The Prestige",
    "slug": "the-prestige",
    "id": "b1fe08f9-3cb9-40dc-88f5-38a53d3c3e6f",
    "genre": "drama",
    "maturity": "15",
    "docId": "o2cJev285is64MLC9bR4"
  },
  {
    "maturity": "15",
    "genre": "suspense",
    "id": "dc34ccce-a99f-43cc-bf91-49132319d0fa",
    "title": "Prisoners",
    "description": "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
    "slug": "prisoners",
    "docId": "p8oUWgXQKePY7Wlwaosm"
  },
  {
    "slug": "gone-girl",
    "description": "Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.",
    "title": "Gone Girl",
    "id": "1d9c7441-86ab-468a-89fd-e5b18471914c",
    "genre": "suspense",
    "maturity": "15",
    "docId": "tGKl4hL0e6pSaBnJAMzb"
  },
  {
    "slug": "the-social-network",
    "id": "40c55d53-27d0-4cee-8009-2ba63f83ac45",
    "genre": "drama",
    "title": "The Social Network",
    "description": "Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.",
    "maturity": "12",
    "docId": "vSfpIqWc8DuyW7JwzJK7"
  },
  {
    "title": "A Quiet Place",
    "genre": "thriller",
    "id": "dbe4d149-4c29-4f9b-9858-374ae8c5bc87",
    "maturity": "15",
    "description": "The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    "slug": "a-quiet-place",
    "docId": "z8jMuKLJeoE1eygJzVmw"
  }
];
let series2 = [
  {
    "maturity": "12",
    "genre": "documentaries",
    "title": "Super Size Me",
    "id": "ebf2ab98-53ea-48a9-8530-15dff8671f30",
    "description": "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
    "slug": "super-size-me",
    "docId": "0DTWgPFGVoJPYgEN8awG"
  },
  {
    "title": "Tiger King",
    "genre": "documentaries",
    "id": "43635abd-0c4a-4eca-b16d-e0fbf4438f7f",
    "description": "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
    "slug": "tiger-king",
    "maturity": "18",
    "docId": "4EJIJnqkMnTj0Tgw0x7N"
  },
  {
    "title": "Arthur",
    "description": "Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.",
    "maturity": "0",
    "id": "52dacf7c-fd9d-40b1-8003-d4271e1c29fd",
    "slug": "arthur",
    "genre": "children",
    "docId": "5yMydkXZOssaOOpzPVGt"
  },
  {
    "maturity": "12",
    "id": "604b5585-049c-4340-af57-e279ebe16d66",
    "title": "Amanda Knox",
    "slug": "amanda-knox",
    "genre": "documentaries",
    "description": "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
    "docId": "93fV1VlzXYXyDIr5I05Q"
  },
  {
    "id": "126b8b98-472b-4ff8-bc0e-c85915fe71ff",
    "description": "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.",
    "genre": "crime",
    "maturity": "18",
    "slug": "making-a-murderer",
    "title": "Making a Murderer",
    "docId": "DC2E8frljMXD8L1IZeXK"
  },
  {
    "id": "0f3439ec-0fce-4206-a42c-3ed8b16f242e",
    "genre": "feel-good",
    "description": "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
    "slug": "school-of-rock",
    "maturity": "12",
    "title": "School of Rock",
    "docId": "E0EZiuunsemQXKjDKn7v"
  },
  {
    "id": "24354319-f85e-4d6f-8448-b281837a7c14",
    "slug": "paw-patrol",
    "genre": "children",
    "description": "Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.",
    "maturity": "0",
    "title": "PAW Patrol",
    "docId": "EO06iCs7lVrGm4DomiSH"
  },
  {
    "slug": "south-park",
    "maturity": "15",
    "description": "Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.",
    "id": "35f1f794-5a89-4306-b2b2-5cde03453e0e",
    "title": "South Park",
    "genre": "comedies",
    "docId": "GsIIsnR0X3YoLDuA2A0o"
  },
  {
    "id": "52083097-811a-4183-a4d3-4043b7a19b0a",
    "slug": "juno",
    "title": "Juno",
    "genre": "feel-good",
    "maturity": "12",
    "description": "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
    "docId": "IcwoMop5isJBgP6BLGtp"
  },
  {
    "genre": "crime",
    "maturity": "18",
    "title": "The Confession Killer",
    "description": "Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.",
    "slug": "the-confession-killer",
    "id": "c3ae482d-7f71-4198-98f0-51c276aef8aa",
    "docId": "JzVkltOjoxxKSFBBpHLk"
  },
  {
    "description": "Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.",
    "title": "Forrest Gump",
    "id": "16c8e74a-6d32-49be-983c-49f05ea45132",
    "slug": "forrest-gump",
    "maturity": "12",
    "genre": "feel-good",
    "docId": "KjolD5wjQlffN8LS0ev4"
  },
  {
    "title": "Good Will Hunting",
    "id": "a7a83d8a-4aec-48ca-8550-f56f15a2ed40",
    "maturity": "12",
    "description": "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
    "slug": "good-will-hunting",
    "genre": "feel-good",
    "docId": "OFh8ZtKQST3FpT7uoVU6"
  },
  {
    "id": "58aec05b-34e9-4137-b677-85c04b694bbd",
    "title": "The Innocent Man",
    "description": "Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.",
    "genre": "crime",
    "maturity": "18",
    "slug": "the-innocent-man",
    "docId": "OLdRzXJQnzFrAOzSv5La"
  },
  {
    "id": "b3a493da-a38d-4bdb-b070-643d8c025d18",
    "title": "Citizenfour",
    "genre": "documentaries",
    "slug": "citizenfour",
    "description": "Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.",
    "maturity": "12",
    "docId": "PGLSP7goP0aG4EMsPGYn"
  },
  {
    "title": "Midnight In Paris",
    "genre": "feel-good",
    "description": "Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.",
    "maturity": "12",
    "id": "8217f4be-2899-4566-a1a6-2f020ea4174d",
    "slug": "midnight-in-paris",
    "docId": "QXTpaQ41aXZwkTBnMpVY"
  },
  {
    "id": "38895ad2-69d8-4888-9022-ad5787a3d7d1",
    "title": "The Office",
    "description": "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
    "maturity": "15",
    "slug": "the-office",
    "genre": "comedies",
    "docId": "ULAIsatZaNVEdjaeNbJ9"
  },
  {
    "maturity": "0",
    "title": "SpongeBob",
    "id": "7f19b046-97ae-4340-8582-ebdfb4f95914",
    "genre": "children",
    "description": "A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ",
    "slug": "spongebob",
    "docId": "b3GtUv0jOdeyt2ohk1Mx"
  },
  {
    "id": "bdb41431-dfbe-4a91-8cd7-25d609da330d",
    "genre": "comedies",
    "title": "Family Guy",
    "slug": "family-guy",
    "description": "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
    "maturity": "15",
    "docId": "brDUU9VzuoLMf7Dz0iS8"
  },
  {
    "description": "The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.",
    "genre": "comedies",
    "id": "53e88daf-157f-45b0-b0cb-76a2f57f5650",
    "maturity": "15",
    "slug": "arrested-development",
    "title": "Arrested Development",
    "docId": "dgZAEW60fuzU4IVfhMkn"
  },
  {
    "genre": "comedies",
    "description": "Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.",
    "id": "7f247ef9-b481-4105-b79e-925b9c67525f",
    "title": "Curb Your Enthusiasm",
    "slug": "curb-your-enthusiasm",
    "maturity": "15",
    "docId": "ewKpf7X95qk1G2Q5cCgU"
  },
  {
    "maturity": "18",
    "description": "An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.",
    "title": "Long Shot",
    "slug": "long-shot",
    "id": "1a957cfd-6ae3-46be-96e4-87488f4f1bf0",
    "genre": "crime",
    "docId": "nMpLcyMiUu439iwtB4Ju"
  },
  {
    "slug": "peppa-pig",
    "id": "3d85151b-f1fd-4a0f-9c02-0ffc7845a8a6",
    "description": "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.",
    "genre": "children",
    "title": "Peppa Pig",
    "maturity": "0",
    "docId": "oO48JDkU05lwELy2LzN2"
  },
  {
    "maturity": "18",
    "id": "032342c1-7d92-4c91-b9f5-4fc795080e0b",
    "slug": "the-staircase",
    "description": "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
    "title": "The Staircase",
    "genre": "crime",
    "docId": "v7Gy7SHPxrKyWf8iprRx"
  },
  {
    "maturity": "0",
    "description": "Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.",
    "title": "Dora The Explorer",
    "slug": "dora-the-explorer",
    "id": "cbf20116-0916-4539-878b-2de1676f9a12",
    "genre": "children",
    "docId": "wFeUGbzEzFZpXuISH5dP"
  },
  {
    "maturity": "12",
    "description": "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
    "genre": "documentaries",
    "id": "79b67c6d-35b9-4e54-afa5-6b9b5827b05f",
    "title": "Man on Wire",
    "slug": "man-on-wire",
    "docId": "wYEoIQfsdTm28DmGSWAh"
  }
];

export default function Browse() {
  let { series } = useContent("series");
  let { films } = useContent("films");

  const slides = selectionFilter2({ series, films });
  return <BrowseContainer slides={slides} />;
}
