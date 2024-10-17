let title = document.createElement("title")
title.innerHTML = "Student Counter"
document.head.appendChild(title)


function increment() {
    count = document.getElementById("count-el");
    count.innerHTML = parseInt(count.innerHTML) + 1;
}


function save() {
    let save = document.getElementById("save");
    save.innerHTML = save.innerHTML + count.innerHTML + " - ";
}

function decrement() {
    if (parseInt(count.innerHTML) > 0 ) {
        count.innerHTML = parseInt(count.innerHTML) - 1;
    }
}