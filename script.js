var calculatorButton = document.querySelectorAll(".c_btn");
var resultInput = document.querySelector(".result");
var ceText = document.querySelector(".CE_text");
var sum = "";
calculatorButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.value === "=") {
        totalFunc();
    }else if(e.target.value === "C"){
        clearFunc();
    }else if(e.target.value === "CE"){
        resultInput.value = "0";
    }
     else {
        sum += e.target.value;
        ceText.innerHTML = sum;
    }
  });
});
var totalFunc = () => {
  var result = eval(sum);
  console.log(result);
  resultInput.value = result
};

var clearFunc = () =>{
    sum = ""
    resultInput.value = "0";
    ceText.innerHTML = "0";
}