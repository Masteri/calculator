/**
 * Created by Ivan Man on 13.01.17.
 */

var data = ' {"allval" : [ {"products": "1", "materials": "1", "price": "6.8"}, {"products": "1", "materials": "2", "price": "6.7" }, {"products": "1", "materials": "3", "price": "6.60" }, {"products": "1", "materials": "4", "price": "6.50" }, {"products": "1", "materials": "5", "price": "6.4" }, {"products": "1", "materials": "6", "price": "6.40" }, {"products": "1", "materials": "7", "price": "6.30" }, {"products": "1", "materials": "8", "price": "6.25" }, {"products": "1", "materials": "9", "price": "6.23"}, {"products": "1", "materials": "10", "price": "7" }, {"products": "1", "materials": "11", "price": "6.50"}, {"products": "1", "materials": "12", "price": "13"} , {"products": "1", "materials": "13", "price": "7.3"} , {"products": "1", "materials": "14", "price": "6"} , {"products": "2", "materials": "1", "price": "12.8"} , {"products": "2", "materials": "2", "price": "12.7"} , {"products": "2", "materials": "3", "price": "12.6"} , {"products": "2", "materials": "4", "price": "12.5"} , {"products": "2", "materials": "5", "price": "12.4"} , {"products": "2", "materials": "6", "price": "12.4"} , {"products": "2", "materials": "7", "price": "12.3"} , {"products": "2", "materials": "8", "price": "12.25"} , {"products": "2", "materials": "9", "price": "12.23"} , {"products": "2", "materials": "10", "price": "13"} , {"products": "2", "materials": "11", "price": "12.5"} , {"products": "2", "materials": "12", "price": "19"} , {"products": "2", "materials": "13", "price": "13.3"} , {"products": "2", "materials": "14", "price": "12"} , {"products": "3", "materials": "1", "price": "13.6"} , {"products": "3", "materials": "2", "price": "13.4"} , {"products": "3", "materials": "3", "price": "13.2"} , {"products": "3", "materials": "4", "price": "13"} , {"products": "3", "materials": "5", "price": "12.8"} , {"products": "3", "materials": "6", "price": "12.8"} , {"products": "3", "materials": "7", "price": "12.6"} , {"products": "3", "materials": "8", "price": "12.5"} , {"products": "3", "materials": "9", "price": "12.46"} , {"products": "3", "materials": "10", "price": "14"} , {"products": "3", "materials": "11", "price": "13"} , {"products": "3", "materials": "12", "price": "26"} , {"products": "3", "materials": "13", "price": "14.6"} , {"products": "3", "materials": "14", "price": "12"} , {"products": "4", "materials": "1", "price": "0"}    ]}';


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