// function handleInput(event){
//   event.preventDefault();

// used the window as the event to load the webpage itself
window.addEventListener("load", function(){
  console.log("Works");
  
  let inputFlavorsArr = ["vanilla", "chocolate", "strawberry"];

  console.log("input array: ", inputFlavorsArr);

  // let div = document.createElement("div");
  // document.querySelector("body").append(div);
  let ul = document.createElement("ul");
  ul.setAttribute("id", "iceCream");
  document.querySelector("div").append(ul);
  // div.append(ul);

  let liOne = document.createElement("li");
  liOne.append(inputFlavorsArr[0]);
  // ul.append(liOne);
  console.log("liOne: ", liOne);

  let liTwo = document.createElement("li");
  liTwo.append(inputFlavorsArr[1]);
  ul.append(liTwo);

  let liThree = document.createElement("li");
  liThree.append(inputFlavorsArr[2]);
  ul.append(liThree);

  document.getElementById("iceCream").append(liOne, liTwo, liThree);

  inputFlavorsArr.forEach(function(flavor){
    console.log("flavs ", flavor);
  });

});
