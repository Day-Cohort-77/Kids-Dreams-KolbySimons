import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

// when the celebrity name is clicked it should show the sport
//setup event listener
document.addEventListener("click", (clickEvent) => {
  //check for data type
  if (clickEvent.target.dataset.type === "celebrity") {
    //show alert in browser using targeted dataset attributes
    window.alert(
      `${clickEvent.target.dataset.name} is a ${clickEvent.target.dataset.sport} star`
    );
  }
});

export const Celebrities = () => {
  let html = "<ol>";

  for (const celebrity of celebrities) {
    html += `<li 
                    data-name="${celebrity.name}"
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`;
  }

  html += "</ol>";
  return html;
};
