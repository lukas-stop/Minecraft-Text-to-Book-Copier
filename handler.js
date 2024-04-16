const submitBtn = document.getElementById("submitBtnJS");
submitBtn.addEventListener("click", splitArray);

// splice method
function splitArray() {
    console.log("pressed submit");
    var inputText = document.getElementById("initialTextJs").value;
    let output = []; /*split into chunks of 245 characters or less*/

    //splitting
    for (var i = 0; i < inputText.length; i += 245) {
        output.push(inputText.slice(i, i + 245));
    }
    console.log(output);

    //output
    for (i = 0; i < output.length; i++) {
        let index = i + 1;
        document.getElementById("outputTextJS").innerHTML +=
            `<div class="resultChunk">
                <p class="outputItem chunkNumber" id="chunkNumberJS">`+ index + `</p>
                <p class="chunkTxt" id="chunkTxtJS">` + output[i] + `
            </div>
        `
    }
}

/* 
//copy button html:
+ `</p>
<button class="outputItem clipboardBtn" id="clipboardBtnJS"><img src="./copy.png" height="30px"
        width="30px"></button>
*/

const clearBtn = document.getElementById("clearBtnJS");
clearBtn.addEventListener("click", () => {
    console.log("Clearing Contents");
    document.getElementById("initialTextJs").value = "";
    document.getElementById("outputTextJS").innerHTML = ``;
})



//TODO: add a flag to figure out what one the user is copying
// var chunkTxt = document.getElementById("chunkTxtJS");

// const clipboardBtn = document.getElementById("clipboardBtnJS");
// clipboardBtn.addEventListener("click", () => {
//     navigator.clipboard.writeText(chunkTxt.value);
// })
