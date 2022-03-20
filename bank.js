let btnList = document.querySelectorAll(".list-item");
let likeList = document.querySelector("#save");

let listDiv = document.querySelector("#save");
let text = document.querySelector("#text");
let aimg = document.querySelector(".list-item-1");
aimg.addEventListener('click', function(){
    listDiv.innerHTML = "";
    let aimg2 = document.createElement('img');
    aimg2.setAttribute("src", "./A형2.png");
    aimg2.setAttribute("width", 500);
    aimg2.setAttribute("height", 500);
    listDiv.append(aimg2);
    text.innerText = "당신의 혈액형은 A형입니다."
})
document.querySelector('#create').addEventListener('click',function(){
    let input = document.querySelector('#search');
    let jsoninput = JSON.stringify(input.value);
    localStorage.setItem('data',jsoninput);
    input.value = "";
    let jsonData = localStorage.getItem("data");
    let data = JSON.parse(jsonData);
    let DIV = document.querySelector('#name');
    DIV.innerHTML = data;
    })

let aimg3 = document.querySelector(".list-item-2");
aimg3.addEventListener('click', function(){
    listDiv.innerHTML = "";
    let aimg2 = document.createElement('img');
    aimg2.setAttribute("src", "./AB형2.png");
    aimg2.setAttribute("width", 500);
    aimg2.setAttribute("height", 500);
    listDiv.append(aimg2);
    text.innerText = "당신의 혈액형은 AB형입니다."
})

let aimg4 = document.querySelector(".list-item-3");
aimg4.addEventListener('click', function(){
    listDiv.innerHTML = "";
    let aimg2 = document.createElement('img');
    aimg2.setAttribute("src", "./B형2.png");
    aimg2.setAttribute("width", 500);
    aimg2.setAttribute("height", 500);
    listDiv.append(aimg2);
    text.innerText = "당신의 혈액형은 B형입니다."
})
let aimg5 = document.querySelector(".list-item-4");
aimg5.addEventListener('click', function(){
    listDiv.innerHTML = "";
    let aimg2 = document.createElement('img');
    aimg2.setAttribute("src", "./O형2.png");
    aimg2.setAttribute("width", 500);
    aimg2.setAttribute("height", 500);
    listDiv.append(aimg2);
    text.innerText = "당신의 혈액형은 O형입니다."
})