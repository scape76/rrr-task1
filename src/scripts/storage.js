import { getCreatedTimeToString, getDatesFromString } from "./utils.js";

const storage = {
  active: [
    {
      id: 1,
      category: "task",
      content: "tomatoes, bread 3/9/2021",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "Shopping list",
      isEditing: false,
    },
    {
      id: 2,
      category: "thought",
      content: "build a house 21/01/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "idk",
      isEditing: false,
    },
    {
      id: 3,
      category: "thought",
      content: "build a house 23/09/2022 24/10/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "idk",
      isEditing: false,
    },
    {
      id: 4,
      category: "idea",
      content: "plant a tree",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "3",
      isEditing: false,
    },
    {
      id: 5,
      category: "thought",
      content: "build a house 09/23/2022 10/24/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "idk",
      isEditing: false,
    },
  ],
  archived: [
    {
      id: 6,
      category: "thought",
      content: "build a house",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "idk",
      isEditing: false,
    },
    {
      id: 1,
      category: "idea",
      content: "run",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: new Date(),
      name: "idk",
      isEditing: false,
    },
  ],
};

export default storage;
