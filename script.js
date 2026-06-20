javascript
function calculateCost(){

    let tuition =
    Number(document.getElementById("tuition").value);

    let living =
    Number(document.getElementById("living").value);

    let total = tuition + living;

    document.getElementById("result").innerHTML =
    "Estimated Annual Cost: ¥" + total.toLocaleString();

}

