import storage from "./storage.js";
import renderCountTable from "./renderCountTable.js";
import renderListItems from "./renderItems.js";

const sortActiveItems = () => {
  storage.active = storage.active.sort(
    (itemA, itemB) =>
      new Date(itemA.createdInMilliseconds) -
      new Date(itemB.createdInMilliseconds)
  );
};

const handleDeleteItem = ({ currentTarget }) => {
  const deletedElem = currentTarget.closest(".active__item");
  const deletedElemId = deletedElem.getAttribute("id");
  storage.active = storage.active.filter(({ id }) => id !== +deletedElemId);
  deletedElem.remove();
  renderCountTable();
};

const handleDeleteAllItems = () => {
  storage.active = [];
  for (let elem of document.querySelectorAll(".active__item")) {
    elem.remove();
  }
  renderCountTable();
};

const handleArchiveItem = ({ currentTarget }) => {
  const archivedElem = currentTarget.closest(".active__item");
  const archivedElemId = archivedElem.getAttribute("id");
  const archivedObj = storage.active.find((el) => el.id === +archivedElemId);
  storage.active = storage.active.filter(({ id }) => id !== +archivedElemId);
  archivedElem.remove();
  storage.archived.push(archivedObj);
  renderCountTable();
};

const handleEditItem = (id) => {
  storage.active = storage.active.map((el) => {
    return el.id === +id
      ? { ...el, isEditing: true }
      : { ...el, isEditing: false };
  });

  console.log(storage.active);

  renderListItems();
  setListenersOnBtns();
};

const handleSaveItem = (id) => {
  const input = document.querySelector(`.editable-${id}`);
  console.log(input)
  const content = input.value;

  storage.active = storage.active.map((el) => {
    return el.id === +id ? { ...el, content, isEditing: false } : el;
  });

  renderListItems();
  setListenersOnBtns();
};

const handleArchiveAllItems = () => {
  storage.active.forEach((el) => {
    storage.archived.push(el);
  });
  storage.active = [];
  sortActiveItems();
  renderListItems();
  renderCountTable();
  setListenersOnBtns();
};

function setListenersOnBtns() {
  const titleDeleteButton = document.querySelector(".title__del-btn");
  titleDeleteButton.addEventListener("click", handleDeleteAllItems);

  const titleArchiveButton = document.querySelector(".title__arch-btn");
  titleArchiveButton.addEventListener("click", handleArchiveAllItems);

  const elemDeleteButtons = document.querySelectorAll(
    ".active__item__button-del"
  );

  for (let btn of elemDeleteButtons) {
    btn.addEventListener("click", (event) => handleDeleteItem(event));
  }

  const elemArchiveButtons = document.querySelectorAll(
    ".active__item__button-arch"
  );

  for (let btn of elemArchiveButtons) {
    btn.addEventListener("click", (event) => handleArchiveItem(event));
  }

  const elemEditButtons = document.querySelectorAll(
    ".active__item__button-edit"
  );

  for (let btn of elemEditButtons) {
    const id = btn.dataset.id;
    console.log(btn);
    btn.addEventListener("click", () => handleEditItem(id));
  }

  const elemSaveButtons = document.querySelectorAll(
    ".active__item__button-save"
  );

  console.log(elemSaveButtons);

  for (let btn of elemSaveButtons) {
    const id = btn.dataset.id;
    console.log(btn);
    btn.addEventListener("click", () => handleSaveItem(id));
  }
}

export default setListenersOnBtns;
