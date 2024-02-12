const divs = document.querySelectorAll(div);

divs.forEach(div => {
  document.addEventListener("click", () => {
    if (e.target.matches('div')){
      console.log("hi");
    }
    
  })
})

function addGlobalEventListener (type, selector, callback){
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) (e)
  })
}
const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor ="blue";
document.body.append(newDiv);