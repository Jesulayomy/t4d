
var percentForm = document.getElementById('calcPercent');
var portionForm = document.getElementById('calcPortion');
var totalForm = document.getElementById('calcTotal');



percentForm.addEventListener('submit', function(event) {
    var total = document.getElementById('total1');
    var portion = document.getElementById('portion1');
    var result = document.getElementById('result1');
    var percent = 100 * (parseFloat(portion.value) / parseFloat(total.value));

    percent = percent.toFixed(2);
    result.innerText = percent;
    event.preventDefault();
});

portionForm.addEventListener('submit', function(event) {
    var total = document.getElementById('total2');
    var percent = document.getElementById('percent1');
    var result = document.getElementById('result2');
    var portion = (parseFloat(percent.value) / 100) * parseFloat(total.value);

    portion = portion.toFixed(2);
    result.innerText = portion;
    event.preventDefault();
});


totalForm.addEventListener('submit', function(event) {
    var portion = document.getElementById('portion2');
    var percent = document.getElementById('percent2');
    var result = document.getElementById('result3');
    var total = (parseFloat(portion.value) * 100) / parseFloat(percent.value);

    total = total.toFixed(2);
    result.innerText = total;
    event.preventDefault();
});
