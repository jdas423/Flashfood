const about = document.querySelector(".arw");
const link = document.querySelector(".arw a");
const ins_list = document.querySelector(".inside");
about.addEventListener("mouseover", function () {
    if (ins_list.style.display == "" || ins_list.style.display == "none") {
        ins_list.style.display = "block";
        link.style.color = "aqua";
    }

});

window.addEventListener("mouseover", function (e) {
    if (!(e.target == about || e.target.parentElement == about || e.target.parentElement == ins_list || e.target.parentElement.parentElement == ins_list)) {
        if (ins_list.style.display == "block") {
            ins_list.style.display = "none";
            link.style.color = "white";
        }
    }

});

const drop_down = document.querySelector(".drop-down");
const dp = document.querySelector("#dp");
const li = document.querySelectorAll("#dp li")[2];
const abt = document.querySelectorAll(".arw")[1];
const lst = abt.parentElement.children[1];
const a = li.children[0];
const ul = li.children[1];
drop_down.addEventListener("click", function (e) {

    if (dp.style.display == "" || dp.style.display == "none") {
        console.log("1");
        dp.style.display = "block";
    }
    else if ((dp.style.display == "block") && (!(e.target.classList.contains("s") ||
        e.target.parentElement.classList.contains("s") || e.target.parentElement.parentElement.classList.contains("s") ||
        e.target.parentElement.parentElement.parentElement.classList.contains("s") || e.target.classList.contains("p")
        || e.target.parentElement.classList.contains("p") || e.target.parentElement.parentElement.classList.contains("p")))) {
        console.log("2");
        dp.style.display = "none";
        if (lst.style.display == "block") lst.style.display = "none";
    }
})

window.addEventListener("click", function (e) {
    if (!(e.target == dp || e.target.parentElement == dp || e.target.parentElement.parentElement == dp || e.target.parentElement.parentElement.parentElement == dp || e.target.parentElement == drop_down || e.target == drop_down ||
        e.target.parentElement == drop_down || e.target.parentElement.parentElement == drop_down || e.target.parentElement.parentElement.parentElement == drop_down
        || e.target.parentElement.parentElement == lst || e.target.parentElement == lst || e.target == lst)) {
        if (dp.style.display == "block")
            console.log("3");
        dp.style.display = "none";
        if (lst.style.display == "block") lst.style.display = "none";
    }

})


abt.addEventListener("click", function (e) {
    if (lst.style.display == "" || lst.style.display == "none")
        lst.style.display = "block";
    else if ((lst.style.display = "block") && (e.target == abt)) {
        lst.style.display = "none";
    }
})


