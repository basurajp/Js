let addBtn = document.querySelector("#add");

let istatus = document.querySelector("h5");

let removeBtn = document.querySelector("#remove");

let check = 0;

addBtn.addEventListener("click", function (e) {
  if (check == 0) {
    istatus.innerHTML = "Freinds";
    istatus.style.color = "green";
    addBtn.innerHTML = "Remove";
    check = 1;
  } else {
    istatus.innerHTML = "Staranger";
    istatus.style.color = "red";
    // addBtn.style.backgroundColor = "#1111";
    // addBtn.style.color = "black";
    addBtn.innerHTML = "Add Friend ";
    check = 0;
  }
});
