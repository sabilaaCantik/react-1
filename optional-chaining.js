const mahasiswa = {
    nama: 'Aris Purnama',
    angkatan: {
    nama: 'Neophyte'
    }
   };
  // console.log(mahasiswa.programStudi.nama);
   // output: error
   // karena programStudi bernilai undefined
   // program mencoba mendapatkan nama dari undefined
   console.log(mahasiswa.programStudi?.nama);
   //output : undefined
   