function hitungKembalian() {
    // Harga telur per kilogram (fixed)
    var hargaPerKilo = 28000;
    
    // Mengambil input jumlah telur yang dibeli (dalam kilogram) dan uang yang dibayarkan
    var jumlahTelur = parseFloat(document.getElementById("jumlahTelur").value);
    var uangDibayar = parseFloat(document.getElementById("uangDibayar").value);

    // Menghitung total bayar
    var totalBayar = jumlahTelur * hargaPerKilo;

    // Menghitung kembalian
    var uangKembalian = uangDibayar - totalBayar;

    // Menampilkan hasil total bayar dan uang kembalian
    document.getElementById("totalBayar").innerHTML = "Total Bayar: Rp " + totalBayar.toLocaleString();
    document.getElementById("uangKembalian").innerHTML = "Uang Kembalian: Rp " + uangKembalian.toLocaleString();
}
