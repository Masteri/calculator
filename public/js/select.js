
function calculate() {
    var cina = document.getElementById('products').value;
    var kst = document.getElementById('kst').value;
    var razom = cina*kst;
    var spanid = document.getElementById('summa');
    spanid.innerHTML = 'Всього: '+ razom + ' грн.';
}