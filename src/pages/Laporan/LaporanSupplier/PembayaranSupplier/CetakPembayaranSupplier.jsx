import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPembayaranSupplier = (
  row1isi = "",
  row2isi = "",
  username = "",
  tanggal = "",
  validby = "",
  data
) => {
  // initialize jsPDF
  const doc = new jsPDF();
  //   let data = JSON.parse(localStorage.getItem("tt_pengeluaran_barang")) || [];
  let tableRows = [];
  let finalY = 40;
  let sub_total = 0;
  let tableColumn = [
    "SUPPLIER",
    "TANGGA BAYAR",
    "NO FAKTUR BAYAR",
    "JENIS PEMBAYARAN",
    "TOTAL",
  ];
  data.forEach((item, index) => {
    let rows = [
      item.kode_supplier,
      item.tanggal_bayar,
      item.no_faktur_bayar,
      item.jenis_pembayaran,
      parseFloat(item.total_bayar).toLocaleString("id-ID"),
    ];
    sub_total = sub_total + parseFloat(item.total_bayar);
    tableRows.push(rows);
    console.log(tableRows);
  });
  doc.autoTable(tableColumn, tableRows, {
    startY: 40,
    theme: "plain",
    bodyStyles: { lineWidth: 0.02, lineColor: "#000" },
    headStyles: {
      lineWidth: 0.02,
      lineColor: "#000",
      fillColor: [187, 187, 187],
    },
  });
  finalY = doc.lastAutoTable.finalY + 10;
  // const date = Date().split(" ");
  // we use a date string to generate our filename.
  // const dateStr = date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.setFontSize(15);
  doc.text("LAPORAN PEMBAYARAN SUPPLIER", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`Tanggal : ${row1isi}`, 14, 25);
  //   row 2
  //   doc.text(`Tanggal	: ${row2isi}`, 120, 25);

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

export default CetakPembayaranSupplier;
