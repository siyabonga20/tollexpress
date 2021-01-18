var numA = 0;
function totalA(valA) {
if (valA) {
		numA = Number(valA);
}
var tots =  numB*numA;
document.getElementById("showTB").value = "K" + tots.toFixed(2);
}

var numB = 0;
function totalB(valB) {
if (valB) {
		numB = Number(valB);
}
var tots =  numB*numA;
document.getElementById("showTB").value = "K" + tots.toFixed(2);
}

src="https://code.jquery.com/jquery-3.5.1.min.js"

$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});