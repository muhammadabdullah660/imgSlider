var inputArray = [];
function num() {
    var size = document.getElementById("inputArray").value;
    if (size < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < size; i++) {

            inputArray[i] = prompt('Enter source of image ' + (i + 1));
        }
        console.log(inputArray);
        console.log(inputArray.length);
    }
}
var img = document.getElementById("orgImg");
var i = 0;
function nextImage() {
    if (inputArray == "") {
        alert("Give image sources")
    }
    else {
        i++
        if (i < inputArray.length) {
            img.src = inputArray[i]
        }
        else {
            i = 0;
            img.src = inputArray[i]
        }
    }
}
function previousImage() {
    if (inputArray == "") {
        alert("Give image sources")
    }
    else {
        if (i < inputArray.length && i > 0  ) {
            i--
            img.src = inputArray[i]
        }
        else {
            i = inputArray.length - 1;
            img.src = inputArray[i]
        }
    }
}
