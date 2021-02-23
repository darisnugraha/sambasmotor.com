import jsPDF from "jspdf";
import "jspdf-autotable";
import { formatDateISO } from "../../../../components/notification/function";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakKartuStock = (
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
  let footRows = [];
  let finalY = 40;
  let sub_qty = 0;
  let tableColumn = [];
  doc.setFontSize(15);
  doc.text("LAPORAN KARTU STOCK", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`Tanggal : ${row1isi} s/d ${row2isi}`, 14, 25);
  //   row 2
  // doc.text(`Tanggal	: ${row2isi}`, 120, 25);
  data.forEach((barang, index) => {
    tableColumn = [
      [
        {
          content: `LOKASI : ${barang.lokasi}`,
          colSpan: 3,
        },
        {
          content: `NAMA BARANG : ${barang.nama_barang}`,
          colSpan: 3,
        },
      ],
      [
        {
          content: `MERK BARANG : ${barang.merk_barang}`,
          colSpan: 3,
        },
        {
          content: `SALDO AWAL : ${barang.saldo_awal_barang}`,
          colSpan: 3,
        },
      ],
      [
        {
          content: `TANGGAL`,
        },
        {
          content: `NO BON`,
        },
        {
          content: `KETERANGAN`,
        },
        {
          content: `MASUK`,
        },
        {
          content: `KELUAR`,
        },
        {
          content: `SALDO`,
        },
      ],
    ];
    barang.detail.forEach((data) => {
      let rows = [
        formatDateISO(data.tanggal),
        data.no_bon,
        data.keterangan,
        data.masuk_qty || "",
        data.keluar_qty || "",
        data.saldo_barang,
      ];
      sub_qty = sub_qty + parseInt(data.qty);
      tableRows.push(rows);
      sub_qty = 0;
    });
  });
  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    foot: footRows,
    startY: 35,
    theme: "plain",
    margin: { top: 20 },
    bodyStyles: { lineWidth: 0.02, lineColor: "#000" },
    headStyles: {
      lineWidth: 0.02,
      lineColor: "#000",
      fillColor: [187, 187, 187],
    },
  });
  finalY = doc.autoTableEndPosY() + 10;
  // const date = Date().split(" ");
  // we use a date string to generate our filename.
  // const dateStr = date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left

  doc.text(`User	: ${username}`, 14, finalY);
  doc.text(`Cetak	: ${tanggal}`, 14, finalY + 5);
  doc.text(`Valid	: ${validby}`, 14, finalY + 10);
  const pages = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.width; //Optional
  const pageHeight = doc.internal.pageSize.height; //Optional
  doc.setFontSize(10); //Optional
  for (let j = 1; j < pages + 1; j++) {
    let horizontalPos = pageWidth / 2; //Can be fixed number
    let verticalPos = pageHeight - 10; //Can be fixed number
    doc.setPage(j);
    doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {
      align: "center",
    });
  }
  doc.autoPrint();
  // doc.save(`PenerimaanSUpplier.pdf`);
  var string = doc.output("datauristring");
  var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
  var x = window.open();
  x.document.open();
  x.document.write(embed);
  // setInterval(() => {
  //   x.close();
  // }, 1000);
};

export default CetakKartuStock;
