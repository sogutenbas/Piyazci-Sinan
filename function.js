//Cabbar, Kerem ve Sinan ortaklasa balik ciftligi projesine girerler. Cabbar ve Keremin referansi ile Sinan da bizlerden bir program istemektedir.
//Uc kafadar bizden ciftlikteki baliklarin satisi icin bir online sistem istemektedirler. Online satis sistemi asagidaki sorulara cevap verebilmelidir.

//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
//2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
//3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
//5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
//6) Toplam balik stoku ne kadardir?
//7) En pahali olan balik hangisidir? 
//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
//9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
//10) TC Kantonu icin stokta toplam ne kadar balik mevcuttur?
//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri:

let bul500Uzeriolanlar = [];

function bulBaliklari500Uzeriolanlar() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].stockVolumeInKg
        if (element > 500) {
            bul500Uzeriolanlar.push(fishFarm[index].fishType)
        }
    };
    return console.log("cevap1 ben yaptim 500 kilo uzeri olan baliklar" + bul500Uzeriolanlar)
};
bulBaliklari500Uzeriolanlar()

//2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar:

let bulFiyatAraligi9Fr12Fr = [];

function bulBaliklariFiyatArali9Fr12Fr() {
    for (let index = 0; index < fishFarm.length; index++) {
        const elemment = fishFarm[index].price
        if (element > 9 && element < 12) {
            bulFiyatAraligi9Fr12Fr.push(fishFarm[index].fishType)
        }
    };
    return console.log("cevap2 ben yaptim 9Fr. ile 12 Fr. arasindaki baliklar" + bulFiyatAraligi9Fr12Fr)
};
bulBaliklariFiyatArali9Fr12Fr()

//3) Sadece Bern'de ve kis sezonu satilan baliklar:

let bulBerndeKisinSatilan = [];

function bulBerndeKisinSatilanBaliklari() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].season
        const element1 = fishFarm[index].saleLocations
        if (fishFarm[index].season == "Winter" && fishFarm[index].saleLocations == "BE") {
            bulBerndeKisinSatilan.push(fishFarm[index].fishType)
        }
    };
    return console.log("cevap3 ben yaptim Sadece Bern'de ve kis sezonu satilan baliklar" + bulBerndeKisinSatilan)
};
bulBerndeKisinSatilanBaliklari()

//4) Son kullanma tarihlerine gore baliklarin siralanisi(Son kullanma tarihi yaklasan baliklar once gosterilmelidir):

function tariheGoreSirala() {
    let siraliSonKullanmaTarihi = [];
    fishFarm.sort(function (h, s) {
        return h.entryDate - s.entryDate
    });
    for (let index = 0; index < fishFarm.length; index++) {

        siraliSonKullanmaTarihi.push(fishFarm[index].fishType + " " + fishFarm[index].entryDate + "/n")
    };
    console.log("cevap4 ben yaptim Son kullanma tarihlerine gore baliklarin siralanisi" + siraliSonKullanmaTarihi)
};
tariheGoreSirala()

//5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralanisi:

function alfabetikSirala() {
    let balikSirala = [];

    for (let index = 0; index < fishFarm.length; index++) {
        if (europeanCountry.indexOf(fishFarm[index].originCountry) > 0 && fishFarm[index].price > 10)
            balikSirala.push(fishFarm[index].fishType)
    };
    balikSirala.sort();
    console.log("cevap5 ben yaptim Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralanisi" + balikSirala)
};
alfabetikSirala()

//6) Toplam balik stoku:

function toplamStok() {
    let toplam = 0;
    for (let index = 0; index < fishFarm.length; index++) {
        toplam = toplam + fishFarm[index].stockVolumeInKg
    };
    console.log("cevap6 ben yaptim toplam balik stoku" + toplam)
};
toplamStok()

//7) En pahali olan balik:

function enPahaliBalik() {
    let fiyat = 0
    let isim;
    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].price > fiyat) {
            fiyat = fishFarm[index].price
            isim = fishFarm[index].fishType
        };
    };
    console.log("cevap7 ben yaptim En pahali olan balik fiyati " + fiyat + " " + "cinsi" + isim)
};
enPahaliBalik()

//8) En uzun sureli durabilen baliklar bu ulkelerden gelmistir:

function enUzunSureDuran() {
    let uzunSureDuranBalik = [];
    for (let index = 0; index < fishFarm.length; index++) {
        fishFarm.sort(function (h, s) {
            return s.durationInDays - h.durationInDays
        });
        uzunSureDuranBalik.push(fishFarm[index].fishType + " " + fishFarm[index].durationInDays)
    };
    console.log("sirali")
    console.log(uzunSureDuranBalik[0])
    console.log(uzunSureDuranBalik[1])
    console.log(uzunSureDuranBalik[2])
    console.log(uzunSureDuranBalik[3])
};
enUzunSureDuran()

//9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyat:

function satilanBaliklarinOrtalama() {
    let totalRegion = 0;
    let total = 0;

    for (let index = 0; index < fishFarm.length; index++) {

        if (fishFarm[index].season == "Winter" || fishFarm[index].season == "Autumn") {
            const kesisim = swissRomandeRegion.filter(element => fishFarm[index].saleLocations.includes(element));

            if (kesisim.length > 0) {
                total = total + fishFarm[index].price;
                totalRegion++;
            }
        }
    };
    console.log(total / totalRegion)
};
satilanBaliklarinOrtalama()

//10) TC Kantonu icin stokta toplam balik miktari:

function kantonuTcMiktar() {
    let total = 0;

    for (let index = 0; index < fishFarm.length; index++) {

        if (fishFarm[index].saleLocations.includes("TI")) {

            total = total + fishFarm[index].stockVolumeInKg;
        }
    };
    console.log(total)
};
kantonuTcMiktar()

//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji:

function OrtalamaGramaj() {
    let totalRegion = 0;
    let total = 0;

    for (let index = 0; index < fishFarm.length; index++) {

        if (fishFarm[index].season == "Summer" && europeanCountry.indexOf(fishFarm[index].originCountry) == -1 && fishFarm[index].saleLocations.includes("ZH")) {

            total = total + fishFarm[index].price;
            totalRegion++;
        }
    };
    console.log(total / totalRegion)
};
OrtalamaGramaj()