// oop //
//OOP
class Keman {
  //nesne değişkenleri
  private turu: string;
  public fiyati: string;

  //yapıcı methodlar
  constructor(turu: string, fiyati: string) {
    this.fiyati = fiyati;
    this.turu = turu;
  }

  //method
  public kemanOzellikleri(): string {
    alert("turu:" + this.turu);
    alert("fiyati:" + this.fiyati);
    return this.fiyati + " " + this.turu;
  }

  //getter

}

// main
let kemanDegiskeni = new Keman("elektro", "15000");

