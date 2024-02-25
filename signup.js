function createNewVisitor(event) {
  event.preventDefault();
  
  const Name = document.getElementById("name").value;
  const coins = document.getElementById("coins").value;

  if (visitorExists(Name)) {
    alert("Visitor already exists.");
    return;
  }
  const newVisitor = {
    Name: Name,
    coins: coins
    
  };
  addVisitorToLocalData(newVisitor);
  window.location.href = "./login.html"
}
  
    const visitorExists= (name)=>
     {
       visitors = JSON.parse(localStorage.getItem("visitors")) || [];
      const exists = visitors.some(visitor => visitor.fullName === name);
      return exists;
   }
  
  
  function addVisitorToLocalData(visitor) {
    visitors = JSON.parse(localStorage.getItem("visitors")) || [];
    visitors.push(visitor);
    // שמירת המערך המעודכן בלוקל סטורג'
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  
  
  const createForm = document.getElementById("create-visitor-form");
  if (createForm) {
    createForm.addEventListener("submit", createNewVisitor);
  }