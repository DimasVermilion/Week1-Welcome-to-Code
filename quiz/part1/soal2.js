let tanggal = 12;
let bulan = 2;
let tahun = 2001;

let namabulan = "";
switch(bulan){
    case 1:
        namabulan = "januari";
        break;
    case 2:
        namabulan = "februari";
        break;
    case 3: 
        namabulan = "maret";
        break;
    case 4:
        namabulan = "april";
        break;
    case 5:
        namabulan = "mei";
        break;
    case 6:
        namabulan = "juni";
        break;
    case 7:
        namabulan = "juli";
        break;
    case 8:
        namabulan = "agustus";
        break;
    case 9:
        namabulan = "september";
        break;
    case 10:
        namabulan = "oktober";
        break;
    case 11:
        namabulan = "november";
        break;
    case 12:
        namabulan = "desember";
        break;
    default:
        console.log("bulan tidak valid");
}

console.log(`${tanggal} ${namabulan} ${tahun}`);
