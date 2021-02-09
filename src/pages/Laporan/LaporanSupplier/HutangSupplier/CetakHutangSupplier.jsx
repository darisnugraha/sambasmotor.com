import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakHutangSupplier = (
  row1isi = "",
  row2isi = "",
  username = "",
  tanggal = "",
  validby = ""
) => {
  // initialize jsPDF
  const doc = new jsPDF();
  //   let data = JSON.parse(localStorage.getItem("tt_pengeluaran_barang")) || [];
  let data = [
    {
      _id: {
        no_faktur: "faktur001",
        no_toko: "noToko001",
      },
      list_barang: [
        {
          kode_supplier: "ada",
          nama_supplier: "ada",
          alamat: "ada",
          saldo_hutang: 1000000,
        },
        {
          kode_supplier: "ada",
          nama_supplier: "ada",
          alamat: "ada",
          saldo_hutang: 1000000,
        },
        {
          kode_supplier: "ada",
          nama_supplier: "ada",
          alamat: "ada",
          saldo_hutang: 1000000,
        },
        {
          kode_supplier: "ada",
          nama_supplier: "ada",
          alamat: "ada",
          saldo_hutang: 1000000,
        },
      ],
    },
  ];
  let tableRows = [];
  let finalY = 40;
  let sub_total = 0;
  let tableColumn = [
    "KODE SUPPLIER",
    "NAMA SUPPLIER",
    "ALAMAT",
    "SALDO HUTANG",
  ];
  data.forEach((item, index) => {
    doc.setFontSize(10);
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.kode_supplier,
        barang.nama_supplier,
        barang.alamat,
        "Rp. " + parseFloat(barang.saldo_hutang).toLocaleString("id-ID"),
      ];
      sub_total = sub_total + parseFloat(barang.saldo_hutang);
      tableRows.push(rows);
      console.log(tableRows);
    });
    let footer = [
      "",
      "",
      "Total : ",
      "Rp, " + parseInt(sub_total).toLocaleString("id-ID"),
    ];
    tableRows.push(footer);
    doc.autoTable(tableColumn, tableRows, {
      startY: index === 0 ? 45 : finalY + 15,
      theme: "plain",
    });
    finalY = doc.lastAutoTable.finalY + 10;
    tableRows = [];
    sub_total = 0;
  });
  // const date = Date().split(" ");
  // we use a date string to generate our filename.
  // const dateStr = date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.setFontSize(15);
  doc.text("LAPORAN HUTANG SUPPLIER", 14, 15);
  doc.setFontSize(10);
  //row 1
  //   doc.text(`Supplier : ${row1isi}`, 14, 25);
  //   row 2
  doc.text(`Tanggal	: ${row2isi}`, 14, 25);

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

export default CetakHutangSupplier;
