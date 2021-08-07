// oop //
//OOP
var Keman = /** @class */ (function () {
    //yapıcı methodlar
    function Keman(turu, fiyati) {
        this.fiyati = fiyati;
        this.turu = turu;
    }
    //method
    Keman.prototype.kemanOzellikleri = function () {
        alert("turu:" + this.turu);
        alert("fiyati:" + this.fiyati);
        return this.fiyati + " " + this.turu;
    };
    return Keman;
}());
// main
var kemanDegiskeni = new Keman("elektro", "15000");
