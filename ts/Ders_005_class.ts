// oop //

class Araba {
  //field

  //access identifier
  public adi: string;
  private marka: string;
  protected fiati: number;

  //parametreli constructor
  constructor(adi: string, marka: string) {
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
  ArabaTuru() {
    console.log(this.adi + " " + this.marka);
  }
}
