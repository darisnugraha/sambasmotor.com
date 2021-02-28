import jsPDF from "jspdf";
import "jspdf-autotable";
import { formatDateISO } from "../../../../components/notification/function";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPenjualanSparepart = (
  row1isi = "",
  row2isi = "",
  row3isi = "",
  data
) => {
  // initialize jsPDF
  const doc = new jsPDF("landscape");
  //   let data = JSON.parse(localStorage.getItem("tt_pengeluaran_barang")) || [];
  let tableRows = [];
  let tableColumn = [
    [
      {
        content: `TANGGAL`,
      },
      {
        content: `NO FAKTUR`,
      },
      {
        content: `BARCODE`,
      },
      {
        content: `NAMA`,
      },
      {
        content: `MERK`,
      },
      {
        content: `QTY`,
      },
      {
        content: `SATUAN`,
      },
      {
        content: `TOTAL`,
      },
    ],
  ];
  doc.setFontSize(15);
  doc.text("LAPORAN PENJUALAN SPAREPART", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`TANGGAL : ${row1isi} s/d ${row2isi}`, 14, 25);
  doc.text(`KATEGORI : ${row3isi}`, 14, 30);
  //   row 2
  //   doc.text(`Tanggal	: ${row2isi}`, 120, 25);
  data.forEach((item, index) => {
    let rows = [
      formatDateISO(item.tanggal),
      item.no_faktur_jual,
      item.kode_barcode,
      item.nama_barang,
      item.merk_barang,
      item.qty,
      parseFloat(item.harga_satuan).toLocaleString("id-ID"),
      parseFloat(item.harga_total).toLocaleString("id-ID"),
    ];
    tableRows.push(rows);
  });

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: 35,
    theme: "plain",
    rowPageBreak: "avoid",
    // pageBreak: "avoid",
    margin: { top: 20 },
    bodyStyles: { lineWidth: 0.02, lineColor: "#000" },
    headStyles: {
      lineWidth: 0.02,
      lineColor: "#000",
      fillColor: [212, 212, 211],
    },
  });

  // doc.autoPrint();
  // doc.save(`${title}_${dateStr}.pdf`);
  var string = doc.output("datauristring");
  var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
  var x = window.open();
  x.document.open();
  x.document.write(embed);
  // x.document.close();
  // setInterval(() => {
  //   x.close();
  // }, 1000);
};

export default CetakPenjualanSparepart;
