import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPengeluaranBarang = (
  row1isi = "",
  row2isi = "",
  username = "",
  tanggal = "",
  validby = ""
) => {
  // initialize jsPDF
  const doc = new jsPDF();
  let data = JSON.parse(localStorage.getItem("tt_pengeluaran_barang")) || [];
  let tableRows = [];
  let finalY = 40;
  let tableColumn = [
    "No Permintaan",
    "Kode Barang",
    "Jenis Barang",
    "Merk",
    "Kwalitas",
    "Qty",
  ];
  data.forEach((item, index) => {
    doc.setFontSize(10);
    doc.text(
      `No Pengeluaran	: ${item.nomor_pengeluaran}`,
      14,
      index === 0 ? 40 : finalY + 5
    );
    //   row 2
    doc.text(`No PB : ${item.nomor_pb}`, 70, index === 0 ? 40 : finalY + 5);

    doc.line(
      20,
      index === 0 ? 43 : finalY + 8,
      180,
      index === 0 ? 43 : finalY + 8
    );
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.nomor_permintaan,
        barang.kode_barcode,
        barang.nama_barang,
        barang.merk,
        barang.kwalitas,
        barang.qty,
      ];
      tableRows.push(rows);
      console.log(tableRows);
    });
    doc.autoTable(tableColumn, tableRows, {
      startY: index === 0 ? 45 : finalY + 10,
      theme: "plain",
    });
    finalY = doc.lastAutoTable.finalY + 10;
    tableRows = [];
  });
  // const date = Date().split(" ");
  // we use a date string to generate our filename.
  // const dateStr = date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.setFontSize(15);
  doc.text("LAPORAN PENGELUARAN BARANG", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`Tanggal	: ${row1isi}`, 14, 25);
  //   row 2
  doc.text(`Sampai Tanggal	: ${row2isi}`, 120, 25);

  doc.text(`User	: ${username}`, 14, finalY + 10);
  doc.text(`Cetak	: ${tanggal}`, 14, finalY + 16);
  doc.text(`Valid	: ${validby}`, 14, finalY + 22);

  // doc.autoPrint();
  // doc.save(`${title}_${dateStr}.pdf`);
  var string = doc.output("datauristring");
  var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
  var x = window.open();
  x.document.open();
  x.document.write(embed);
  x.document.close();
};

export default CetakPengeluaranBarang;
