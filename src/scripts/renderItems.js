import storage from "./storage.js";
import { getDatesFromString } from "./utils.js";

const tableBodyElem = document.querySelector(".active-body");

export const getCategoryIcon = (category) => {
  if (category === "task") {
    return "fa-solid fa-list-check";
  }
  if (category === "thought") {
    return "fa-solid fa-brain";
  }
  return "fa-regular fa-lightbulb";
};

const renderListItems = () => {
  const items = storage.active
    .map(({ id, category, content, created, name, isEditing }) => {
      return `
        <tr class="active__item" id=${id}>
                <td>
                    <div class="active__item__category-icon">
                        <i class="${getCategoryIcon(category)}"></i>
                    </div>
                    ${name}
                </td>
                <td>${created}</td>
                <td>${category}</td>
                <td>${
                  isEditing
                    ? `<input class='editable-${id}' value="${content}"/>`
                    : content
                }</td>
                <td>${getDatesFromString(content) ?? ""}</td>
                <td>
                    <div class="${isEditing ? "d-none" : ""}">
                    <button class="active__item__button-edit btn" data-id=${id}>
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="active__item__button-arch btn">
                        <i class="fa-solid fa-box-archive"></i>
                    </button>
                    <button class="active__item__button-del btn">
                        <i class="fa-solid fa-delete-left"></i>
                    </button>
                    </div>
                    <div class="${!isEditing ? "d-none" : ""}">
                    <button class="active__item__button-save btn" data-id=${id}>
                        <i class="fa-solid fa-check"></i>
                    </button>
                    </div>
                </td>
            </tr>
            `;
    })
    .join("");

  tableBodyElem.innerHTML = items;
};

export default renderListItems;
