
var data = ' {"allval" : [ {"products": "1", "materials": "1", "price": "6.8"}, {"products": "1", "materials": "2", "price": "6.7" }, {"products": "1", "materials": "3", "price": "6.60" }, {"products": "1", "materials": "4", "price": "6.50" }, {"products": "1", "materials": "5", "price": "6.4" }, {"products": "1", "materials": "6", "price": "6.40" }, {"products": "1", "materials": "7", "price": "6.30" }, {"products": "1", "materials": "8", "price": "6.25" }, {"products": "1", "materials": "9", "price": "6.23"}, {"products": "1", "materials": "10", "price": "7" }, {"products": "1", "materials": "11", "price": "6.50"}, {"products": "1", "materials": "12", "price": "13"} , {"products": "1", "materials": "13", "price": "7.3"} , {"products": "1", "materials": "14", "price": "6"} , {"products": "2", "materials": "1", "price": "0"} , {"products": "2", "materials": "2", "price": "0"} , {"products": "2", "materials": "3", "price": "0"}    ]}';


function GetPrice(summ)
{
    this.paperid = document.getElementById('products').value;
    this.densityid = document.getElementById('materials').value;
    var kst = document.getElementById('kst').value;
    var spanid = document.getElementById('summa');
    var objdata = JSON.parse(data);
    console.log('vseh objectov: '+ objdata.allval.length + ' /paperid: ' + paperid + ' densityid: '+ densityid);

    for (i=0;i<objdata.allval.length; i++){

        if ((objdata.allval[i].products == paperid) && (objdata.allval[i].materials == densityid))  {
            console.log(objdata.allval[i].price);
            var cina = objdata.allval[i].price;
            var razom = cina*kst;
            spanid.innerHTML = 'Всього: '+ razom + ' грн.';
        }
    }
}