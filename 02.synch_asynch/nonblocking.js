function makanDitempat() {
    console.log(`Pesanan Makan Ditempat`);
}

function dibungkus() {
    console.log(`Pesanan Dibungkus`);
}

function diambilGojek() {
    console.log(`Pesanan diambil Gojek`);
}

function pesanan(jml, callbackFn){
    setTimeout(callbackFn, jml);
}

pesanan(5000, diambilGojek);
pesanan(9000, dibungkus);
pesanan(10, makanDitempat);