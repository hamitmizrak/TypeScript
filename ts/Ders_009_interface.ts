// interface ==> interface
// enum      ==> enum
// class     ==> class

//ice -l

interface Ders_009_interface {
  televizyonId: number;
  televizyonAdi: string;
  televizyonMarka: string;
}

function satis(televizyon: Ders_009_interface) {
  console.log("satıldı" + televizyon.televizyonAdi);
}

class Deneme66 implements Ders_009_interface {
  televizyonId: number;
  televizyonAdi: string;
  televizyonMarka: string;
}
