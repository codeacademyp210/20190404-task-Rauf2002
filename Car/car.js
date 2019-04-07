"use strict"

//Adding tr to table

let addBtn = document.querySelector('.add');
let manufacturerInput = document.querySelector('#Manufacturer');
let modelInput = document.querySelector('#model');
let yearInput = document.querySelector('#year');
let allInputs = document.getElementsByTagName('input')


//Patterns 
let namePattern = /^[a-zA-Z]+$/
let modelPattern = /^([A-zA-z])([A-Za-z0-9\-\_]+)([a-zA-Z0-9]$)/ 
let yearPattern = /^(1879|188[0-9]\d|19\d\d|20[0-1][0-9])$/


addBtn.addEventListener("click", addCar);

function addCar() {
    if (manufacturerInput.value == "" || modelInput.value == "" || yearInput.value == "") {
        alert('Inputs must be filled');
        return false
    }
    if (!manufacturerInput.value.match(namePattern)) {
        alert('Fill manufacturer input correctly')
        return false
    }
    if (!modelInput.value.match(modelPattern)) {
        alert('Fill model input correctly')
        return false
    }
    if (!yearInput.value.match(yearPattern)) {
        alert('Fill year input correctly')
        return false
    }

    else {
        let ul = document.querySelector('.ul');
        let liTag = document.createElement('li');
        let name = manufacturerInput.value;
        let model = modelInput.value;
        let year = yearInput.value;
        let id = idCounter();
        let newCar = new carObject(id, name, model, year);
        console.log(newCar)
        let text = id + "." + " " + manufacturerInput.value + "  " + modelInput.value + " - " + yearInput.value;
        liTag.textContent = text;
        liTag.classList.add("list-group-item");
        let deleteBtn = document.createElement('button');
        let icon = '<i class="fas fa-trash"></i>';
        deleteBtn.innerHTML = icon;
        liTag.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function () {
            liTag.parentNode.removeChild(liTag)
        })
        ul.appendChild(liTag);
        liTag.addEventListener("click", function () {
            manufacturerInput.value = newCar.name;
            modelInput.value = newCar.model;
            yearInput.value = newCar.year;
            addBtn.innerHTML = "Edit";
            for (let i = 0; i < allInputs.length; i++) {
                allInputs[i].addEventListener("input", function () { addBtn.innerHTML = "Save" })
            }
            addBtn.addEventListener("click", editList)
            let editList = (function () {
                newCar.name = manufacturerInput.value;
                newCar.model = modelInput.value;
                newCar.year = yearInput.value;
            })()
        })
        addBtn.innerHTML = "Add"
    }
    manufacturerInput.value = "";
    modelInput.value = "";
    yearInput.value = ""

}

function carObject(id, name, model, year) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.year = year;
}

let idCounter = (function () {
    let counter = 0;
    return function () {
        return counter += 1;
    }
})();

//Filling inputs

