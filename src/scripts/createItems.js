import storage from "./storage.js";
import { popupElem } from "./popup.js";
import renderListItems from "./renderItems.js";
import renderCountTable from "./renderCountTable.js";
import setListenersOnBtns from "./buttonListeners.js";
import { getCreatedTimeToString, getDatesFromString } from "./utils.js";

export const categoryElem = document.querySelector("#categories");
export const timeStartElem = document.querySelector(".time-set__start-date");
export const timeEndElem = document.querySelector(".time-set__end-date");
export const contentElem = document.querySelector(".pop-up__comment");
export const nameElem = document.querySelector(".pop-up__name");

const createListItem = () => {
  const eventId = Math.random();
  const category = categoryElem.value;
  const content = contentElem.value;
  const name = nameElem.value;

  const newItem = {
    id: eventId,
    category,
    created: getCreatedTimeToString(new Date()),
    createdInMilliseconds: new Date(),
    dates: getDatesFromString(content),
    name,
    content,
    isEditing: false,
  };

  categoryElem.value = "";
  timeStartElem.value = "";
  timeEndElem.value = "";
  contentElem.value = "";
  nameElem.value = "";

  popupElem.style.visibility = "hidden";

  storage.active.push(newItem);

  renderListItems();
  renderCountTable();
  setListenersOnBtns();
};

export default createListItem;
