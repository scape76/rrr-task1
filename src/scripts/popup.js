import createListItem, {
  categoryElem,
  timeStartElem,
  timeEndElem,
  contentElem,
  nameElem,
} from "./createItems.js";

export const createNoteBtnElem = document.querySelector(".create-btn");
export const exitNoteBtnElem = document.querySelector(".exit-btn");
const saveNoteBtnElem = document.querySelector(".save-btn");
export const popupElem = document.querySelector(".pop-up");

export const handleExitBtnClick = () => {
  popupElem.style.visibility = "hidden";

  categoryElem.value = "";
  timeStartElem.value = "";
  timeEndElem.value = "";
  contentElem.value = "";
  nameElem.value = "";
};

export const handleCreateBtnClick = () => {
  popupElem.style.visibility = "visible";
  saveNoteBtnElem.addEventListener("click", createListItem);
};
