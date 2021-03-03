import jsPDF from "jspdf";
import "jspdf-autotable";
import { getToday } from "../../../../components/notification/function";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakLaporanPiutang = (data) => {
  // initialize jsPDF
  const doc = new jsPDF("landscape");
  //   let data = JSON.parse(localStorage.getItem("tt_pengeluaran_barang")) || [];
  let tableRows = [];
  let footRows = [];
  let total = 0;
  let tableColumn = [
    [
      {
        content: `NAMA CUSTOMER`,
      },
      {
        content: `ALAMAT`,
      },
      {
        content: `HANDPHONE`,
      },
      {
        content: `PIUTANG AWAL`,
      },
      {
        content: `BAYAR`,
      },
      {
        content: `SALDO`,
      },
    ],
  ];
  doc.setFontSize(15);
  doc.text("LAPORAN PIUTANG GLOBAL", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`TANGGAL : ${getToday()}`, 14, 25);
  //   row 2
  //   doc.text(`Tanggal	: ${row2isi}`, 120, 25);
  data.forEach((item, index) => {
    let rows = [
      item.nama_customer,
      item.alamat,
      item.handphone,
      parseFloat(item.piutang_awal).toLocaleString("id-ID"),
      parseFloat(item.bayar).toLocaleString("id-ID"),
      parseFloat(item.saldo).toLocaleString("id-ID"),
    ];
    tableRows.push(rows);
    total = total + parseFloat(item.saldo);
  });
  let foot = [
    "",
    "",
    "",
    "",
    "Grand Total",
    `${parseFloat(total).toLocaleString("id-ID")}`,
  ];
  footRows.push(foot);
  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    foot: footRows,
    startY: 35,
    theme: "plain",
    rowPageBreak: "avoid",
    pageBreak: "avoid",
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

export default CetakLaporanPiutang;