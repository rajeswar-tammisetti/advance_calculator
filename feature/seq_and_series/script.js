
function calculate_factorial(){
    const input=parseFloat(document.getElementById("n_input").value);
    const output=document.getElementById("result");

    if(isNaN(input) || input<0){
        output.value="!Enter a valid number!";
    }
    else if (input==0){
        output.value="1";
        return;
    }
    else{
        
        let bigN = BigInt(input);
        let fact = 1n;

        for (let i = 2n; i <= bigN; i++) {
            fact *= i;
        }

        output.value = fact.toString();
    }
    return;
}




const titleEl = document.getElementById("title");
const nthFormula = document.getElementById("nth_formula");
const sumFormula = document.getElementById("sum_formula");
const drInput = document.getElementById("d_r_input");
const toggleBtn = document.getElementById("toggler");
const resultEl = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");

function gp_tog() {
    const current = titleEl.textContent.trim();

    if (current === "Arithmetic Progression") {

        titleEl.textContent = "Geometric Progression";
        drInput.placeholder = "r";

        nthFormula.innerHTML = "a<sub>n</sub> = a × r<sup>n-1</sup>";
        sumFormula.innerHTML = "S<sub>n</sub> = a × (r<sup>n</sup> − 1) / (r − 1)";

        toggleBtn.textContent = "AP";

    } else {

        titleEl.textContent = "Arithmetic Progression";
        drInput.placeholder = "d";

        nthFormula.innerHTML = "a<sub>n</sub> = a + (n - 1)d";
        sumFormula.innerHTML = "S<sub>n</sub> = n/2 [ 2a + (n - 1)d ]";

        toggleBtn.textContent = "GP";
    }

    resultEl.value = "";
}

function calculate_terms() {
    const mode = titleEl.textContent.trim();

    const a = parseFloat(document.getElementById("a_input").value);
    const d_r = parseFloat(document.getElementById("d_r_input").value);
    const n = parseFloat(document.getElementById("n_input").value);

    if (isNaN(a) || isNaN(d_r) || isNaN(n)) {
        resultEl.value = "Enter all values correctly.";
        return;
    }

    let nth, sum;

    if (mode === "Arithmetic Progression") {

        nth = a + (n - 1) * d_r;
        sum = (n / 2) * (2 * a + (n - 1) * d_r);

    } else {

        nth = a * Math.pow(d_r, n - 1);

        if (d_r === 1) {
            sum = a * n;
        } else {
            sum = a * (Math.pow(d_r, n) - 1) / (d_r - 1);
        }
    }

    resultEl.value =
        "nth term = " + nth + "\n" +
        "Sum of first " + n + " terms = " + sum;
}
toggleBtn.addEventListener("click", gp_tog);
calcBtn.addEventListener("click", calculate_terms);
