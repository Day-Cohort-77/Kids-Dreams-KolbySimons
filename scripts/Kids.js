import { getChildren } from "./database.js";

const children = getChildren();

//when the kids name is clicked it should show the wish
//create event listener for click
document.addEventListener("click", (event) => {
  //check if data type child is clicked
  if (event.target.dataset.type === "child") {
    window.alert(
      `${event.target.dataset.name}'s wish is ${event.target.dataset.wish}`
    );
  }
});

export const Kids = () => {
  let html = "<ol>";

  for (const child of children) {
    html += `<li data-id="${child.id}" data-name="${child.name}" data-type="child" data-wish="${child.wish}">${child.name}</li>`;
  }

  html += "</ol>";
  return html;
};
