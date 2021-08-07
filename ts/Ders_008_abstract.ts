abstract class Ders_008_abstract {
  //nesne değişkeni
  private para: string;

  constructor() {}

  //getter metodu
  public get getPara(): string {
    return this.para;
  }

  //setter metodu
  public set setPara(para: string) {
    this.para = para;
  }

  //gövdeli method
  public isim() {
    alert("Beyaz eşya");
  }

  //gövdeli method
  public soyisim() {
    alert("Beyaz eşya");
  }

  //gövdesiz method
  public abstract adres();
}

//uygulandığı yer
class Ders_008_abstract_AnaDizin extends Ders_008_abstract {
  public adres() {
    alert("deneme");
  }
}

//main test
//let ana = new Ders_008_abstract();
let sonuc = new Ders_008_abstract_AnaDizin();
// sonuc.isim
