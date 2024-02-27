function loginAsVisitor(visitorName) {
    // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
    // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
  }


  
   
let VisitorsForView = [...visitors];
const dialog = document.querySelector("#visitor-dialog");
//const localvalue= localStorage.getItem("visitors");//


const getVisitorHTMLCard = (visitor) => {
  const template = `

        <img class="card-img-top" src="${visitor.image}" alt="${visitor.name}"/>
        <div class="card-body">
          <p class="card-text">${visitor.name} </p>
          <p class="card-text">${visitor.coins} </p>
        </div> `;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handleVisitorClick(visitor));
  return wrapper;
};

const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close visitor";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};

const handleVisitorClick = (visitor) => {
  dialog.innerHTML = "";
  dialog.append(getCloseModalHTMLButton(), getVisitorHTMLCard(visitor));
  dialog.showModal();
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitor";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    VisitorsForView = visitors.filter((visitor) =>
    visitor.name.includes(e.target.value)
    );
    renderVisitors();
  };
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Visitor Found</h2>
    <p>We're sorry, but no visitors match your search or filter criteria.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors();
};

const renderVisitors = () => {
  const VisitorCards = VisitorsForView.map(getVisitorHTMLCard);
  const VisitorsPlaceholder = document.getElementById("placeholder");
  VisitorsPlaceholder.innerHTML = "";

  if (!VisitorCards.length) {
    VisitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  VisitorsPlaceholder.append(...VisitorCards);
};

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
  

  