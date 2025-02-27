    let nama = "Dimas", peran = "ksatria";
    if (nama === "") {
        console.log("Nama wajib diisi")
    } else if (peran === "") {
        console.log("Peran harus diisi")
    }else {
        if (peran === "ksatria") {
            console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!` )
        } else if (peran === "tabib") {
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
        } else if (peran === "Penyihir") {
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
        } else {
            console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
        }
    }