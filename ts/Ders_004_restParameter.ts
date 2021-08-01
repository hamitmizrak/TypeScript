// oop //

//rest parameter
//1. parametresi belli ancak 2.3.4 parametreler belli değilse bundan sonra ekleyecek mi eklemeyicek mi
function restParameterMethod(birinci: String, ...ikinci: string[]) {
  return birinci + ikinci.join(" ");
}

var sonuc = restParameterMethod("sayi1");
var sonuc2 = restParameterMethod("sayi1", "sayi2");
var sonuc3 = restParameterMethod("sayi1", "sayi2", "sayi2");
