
var data = ' {"allval" : [ {"products": "1", "materials": "1", "price": "10"}, {"products": "1", "materials": "2", "price": "11" }, {"products": "2", "materials": "1", "price": "12"}, {"products": "2", "materials": "2", "price": "13" } ]}';


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