// Reference the user input text - submit button function
function Submit(){
    var name = document.querySelector("#namebox").value;
    var message = document.querySelector("#messagebox").value;
    document.getElementById("namewrite").innerHTML = "Hello " + name + "!";
    document.getElementById("messagewrite").innerHTML = message;
    var color = document.querySelector("#dropdown").value;
    document.body.style.backgroundColor = color;
}



// Extra Credit

function newToDo() {
    // This section essentially creates the list, adds li's to ul using id's
    var item = document.getElementById("input").value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    // Resets the box, makes it easier for user to type another task
    document.getElementById("input").value = "";
}
