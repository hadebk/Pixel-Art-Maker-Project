// Invoke the elements from HTML
const color_value = document.getElementById("colorPicker");
const width_value = document.getElementById("inputWidth");
const height_value = document.getElementById("inputHeight");
const table_element = document.getElementById("pixelCanvas");
const submit_form = document.getElementById("sizePicker");

/* [ on submit function ] ---------------------------------------------------*/
submit_form.addEventListener("submit", e => {
    e.preventDefault();

    // get width an height values
    let width = width_value.value;
    let height = height_value.value;

    //clear the table first
    while (table_element.hasChildNodes()) {
        table_element.removeChild(table_element.lastChild);
    }
    
    makeGrid(height, width);
});

/* [ create the grid with custom width and height ] -------------------------*/
function makeGrid(height, width) {
    // create rows
    for (let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        table_element.appendChild(row);
        // create columns
        for (let j = 0; j < width; j++) {
            let column = document.createElement('td');
            row.appendChild(column);
            // add event to cell
            column.addEventListener('mousedown', function () {
                let color = color_value.value;
                this.style.backgroundColor = color;
            });
        }
    }
}
