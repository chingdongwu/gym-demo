const getBMI = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);

const calcEl = document.querySelector("#calc");
console.log(calcEl);

const elements = document.querySelector(".title");
elements.innerText = "BMI Calculator"
console.log(elements);


calcEl.innerText = "計算";

const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");

console.log(heightEl, weightEl);


calcEl.addEventListener("click", () => {
    let height = heightEl.value;
    let weight = weightEl.value;
    console.log(height, weight);
});




