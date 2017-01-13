
var data = ' {"allval" : [ {"products": "1", "materials": "1", "price": "10"}, {"products": "1", "materials": "2", "price": "11" }, {"products": "2", "materials": "2", "price": "12"}, {"products": "2", "materials": "2", "price": "13" } ]}';

function calculate() {
    var cina = document.getElementById('products').value;
    var kst = document.getElementById('kst').value;
    var razom = cina*kst;
    var spanid = document.getElementById('summa');
    spanid.innerHTML = 'Всього: '+ razom + ' грн.';
}



function GetPrice(summ)
{
    this.paperid = document.getElementById('products').value;
    this.densityid = document.getElementById('materials').value;
    var kst = document.getElementById('kst').value;
    var spanid = document.getElementById('summa');
    var objdata = JSON.parse(data);
    console.log('vseh objectov: '+ objdata.allval.length + ' /paperid: ' + paperid + ' densityid: '+ densityid);
    console.log(objdata.allval[3].price);
    for (i=0;i<objdata.allval.length; i++){

        if ((objdata.allval[i].products == paperid) && (objdata.allval[i].materials == densityid))  {
            console.log('ura' + objdata.allval[i].price);
        }

        //console.log(objdata.allval[i].products + objdata.allval[i].materials + objdata.allval[i].price);
    }
    //for obj in objdata
    ///var price = objdata[densityid].materials && objdata[paperid].products;


    /*
    $.each(objdata.paperid, function(i, v) {
        if (v.product == "1") {
            alert(v.price);
            return;
        }
    });

    //console.log('objdata[paperid].products: ' + objdata[paperid].products + ' /--objdata[densityid].materials: ' + objdata[densityid].materials);
    summ = 11 * 12;
    spanid.innerHTML = 'Всього: '+ summ + ' грн.';
    console.log(spanid);*/

    //return console.log('vallist: ' + paperid, 'density: ' + densityid, 'summ: ' + this.summ);


}
//console.log('after: '+ GetPrice());
//var mc = new GetPrice();
//mc.myValue1 = mc.myValue2 * 2;
//alert(mc.myValue1);

/*
 function CoffeeMachine(power, capacity) {
 //...
 this.setWaterAmount = function(amount) {
 if (amount < 0) {
 throw new Error("Значение должно быть положительным");
 }
 if (amount > capacity) {
 throw new Error("Нельзя залить воды больше, чем " + capacity);
 }

 waterAmount = amount;
 };

 this.getWaterAmount = function() {
 return waterAmount;
 };
 }

 var coffeeMachine = new CoffeeMachine(1000, 500);
 coffeeMachine.setWaterAmount(450);
 alert( coffeeMachine.getWaterAmount() ); // 450
*/
/*
var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
//var v = '{}';
user = JSON.parse(user);

alert( user.friends[1] ); // 1

*/