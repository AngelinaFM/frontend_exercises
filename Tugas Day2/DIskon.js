function menghitungDiskon(harga, diskonPersen) {
    let potongan = (harga * diskonPersen) / 100;
    let hargaSetelahDiskon = harga - potongan;
    return hargaSetelahDiskon;
  }
  let hargaAwal = 200000;
  let diskon = 50; 
  let hargaDiskon = menghitungDiskon(hargaAwal, diskon);
  console.log("Harga setelah diskon: Rp", hargaDiskon);
  