const gridHeightInput = document.querySelector('.js-height-input');
const heightInputText = document.querySelector('.height-input-text');
const gridWidthInput = document.querySelector('.js-width-input');
const widthInputText = document.querySelector('.width-input-text');
const colorInput = document.querySelector('.color-input');
const createGridBtn = document.querySelector('.create-btn');
const clearGridBtn = document.querySelector('.clear-btn');
const deleteGridBtn = document.querySelector('.delete-btn');
const gridDiv = document.querySelector('.grid-box');
let isToggling = false;

gridDiv.style.display = "none";
updateGridSize();

gridHeightInput.addEventListener("input", () => {
    updateGridSize();   
})

gridWidthInput.addEventListener("input", () => {
    updateGridSize();   
})

createGridBtn.addEventListener("click", () => {
    createGrid();
})

clearGridBtn.addEventListener("click", () => {
    clearGrid();
})

deleteGridBtn.addEventListener("click", () => {
    deleteGrid();
})

gridDiv.addEventListener("mouseleave", () => {
    isToggling = false;
})

function updateGridSize() {
    heightInputText.innerText = gridHeightInput.value;
    widthInputText.innerText = gridWidthInput.value;
}

function createGrid() {
    let string = "";
    let html = "";

    clearGridBtn.disabled = false;

    gridDiv.style.display = "grid";
    for (let i = 0; i < gridHeightInput.value; i++) {
        string += "1fr ";
    }
    gridDiv.style.gridTemplateRows = string;

    string = "";
    for (let i = 0; i < gridWidthInput.value; i++) {
        string += "1fr ";
    }
    gridDiv.style.gridTemplateColumns = string;

    for (let i = 0; i < gridHeightInput.value; i++) {
        for (let j = 0; j < gridWidthInput.value; j++) {
            html += `<button class="grid-btn"></button>`;
        }
    }

    gridDiv.innerHTML = html;
    document.body.style.marginBottom = "250px";
    document.querySelectorAll('.grid-btn').forEach((btn) => {  
        btn.addEventListener("click", () => {
            btn.style.backgroundColor = colorInput.value;
        })

        btn.addEventListener("mousedown", () => {
            isToggling = true;
        })
        btn.addEventListener("mouseup", () => {
            isToggling = false;
        })
        drawBox(btn);
    });
}

function clearGrid() {
    document.querySelectorAll('.grid-btn').forEach((btn) => {
        btn.style.backgroundColor = "buttonface";
    });
}

function deleteGrid() {
    gridDiv.style.display = "none";
    gridDiv.innerHTML = "";
    document.body.style.marginBottom = "700px";
    clearGridBtn.disabled = true;
}

function drawBox(btn) {
    btn.addEventListener("mouseover", () => {
        if (isToggling)
        {
            btn.style.backgroundColor = colorInput.value;
        }
    })
}