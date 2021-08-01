// oop //
var Araba = /** @class */ (function () {
    //parametreli constructor
    function Araba(adi, marka) {
        this.adi = adi;
        this.marka = marka;
    }
    //getter setter
    //   get adi(): string {
    //     return this.adi;
    //   }
    //   public set value(v: string) {
    //     this.adi = v;
    //   }
    //fonksiyon
    Araba.prototype.ArabaTuru = function () {
        console.log(this.adi + " " + this.marka);
    };
    return Araba;
}());
