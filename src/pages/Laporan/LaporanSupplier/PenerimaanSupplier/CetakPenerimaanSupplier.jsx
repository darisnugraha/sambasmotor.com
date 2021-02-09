import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPenerimaanSupplier = (
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
  let sub_qty = 0;

  doc.setFontSize(15);
  doc.text("LAPORAN PENERIMAAN SUPPLIER", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`Supplier : ${row1isi}`, 14, 25);
  //   row 2
  doc.text(`Tanggal	: ${row2isi}`, 120, 25);
  data.forEach((item, index) => {
    let tableColumn = [
      [
        {
          content: `NO FAKTUR : ${item.no_terima}`,
          colSpan: 5,
        },
        {
          content: `NO BON : ${item.no_bon}`,
          colSpan: 4,
        },
      ],
      [
        {
          content: `TANGGAL : ${item.tanggal_bon}`,
          colSpan: 5,
        },
        {
          content: `TANGGAL TERIMA : ${item.tanggal_terima}`,
          colSpan: 4,
        },
      ],
      [
        "KODE BARCODE",
        "NAMA JENIS",
        "MERK",
        "KWT",
        "TYPE",
        "SATUAN",
        "QTY",
        "H. SATUAN",
        "TOTAL",
      ],
    ];
    item.detail_barang.forEach((barang, index) => {
      let rows = [
        barang.kode_barcode,
        barang.nama_barang,
        barang.merk_barang,
        barang.kwalitas,
        barang.type,
        barang.satuan,
        barang.qty,
        barang.harga_satuan,
        "Rp. " + parseFloat(barang.harga_total).toLocaleString("id-ID"),
      ];
      sub_total = sub_total + parseFloat(barang.harga_total);
      sub_qty = sub_qty + parseInt(barang.qty);
      tableRows.push(rows);
      console.log(tableRows);
    });
    let footer = [
      "",
      "",
      "",
      "",
      "",
      "Sub Total",
      `${sub_qty}`,
      "",
      `Rp. ${parseFloat(sub_total).toLocaleString("id-ID")}`,
    ];
    tableRows.push(footer);
    doc.autoTable({
      head: tableColumn,
      body: tableRows,
      startY: index === 0 ? 35 : finalY + 5,
      theme: "plain",
      rowPageBreak: "avoid",
      pageBreak: "avoid",
      margin: { top: 20 },
    });
    finalY = doc.autoTableEndPosY() + 10;
    tableRows = [];
    sub_total = 0;
    sub_qty = 0;
  });
  // const date = Date().split(" ");
  // we use a date string to generate our filename.
  // const dateStr = date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left

  doc.text(`User	: ${username}`, 14, finalY + 10);
  doc.text(`Cetak	: ${tanggal}`, 14, finalY + 16);
  doc.text(`Valid	: ${validby}`, 14, finalY + 22);
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

export default CetakPenerimaanSupplier;
