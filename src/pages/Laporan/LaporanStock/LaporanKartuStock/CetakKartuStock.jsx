import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakKartuStock = (
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
      kode_lokasi: "GUDANG",
      kode_jenis: "BAUT",
      kode_merk: "BAUT GARDAN BESAR",
      stock_awal: "100",
      list_barang: [
        {
          tanggal: "ada",
          keterangan: "ada",
          masuk: "ada",
          keluar: "ada",
          saldo: "ada",
        },
        {
          tanggal: "ada",
          keterangan: "ada",
          masuk: "ada",
          keluar: "ada",
          saldo: "ada",
        },
        {
          tanggal: "ada",
          keterangan: "ada",
          masuk: "ada",
          keluar: "ada",
          saldo: "ada",
        },
        {
          tanggal: "ada",
          keterangan: "ada",
          masuk: "ada",
          keluar: "ada",
          saldo: "ada",
        },
      ],
    },
  ];
  let tableRows = [];
  let finalY = 40;
  let tableColumn = ["Tanggal", "Keterangan", "Masuk", "Keluar", "Saldo"];
  data.forEach((item, index) => {
    doc.setFontSize(10);
    doc.text(`Lokasi : ${item.kode_lokasi}`, 14, index === 0 ? 40 : finalY + 5);
    doc.text(`Jenis : ${item.kode_jenis}`, 110, index === 0 ? 40 : finalY + 5);
    doc.text(`Merk : ${item.kode_merk}`, 14, index === 0 ? 45 : finalY + 5);
    doc.text(
      `Stock Awal : ${item.stock_awal}`,
      110,
      index === 0 ? 45 : finalY + 5
    );

    doc.line(
      20,
      index === 0 ? 48 : finalY + 8,
      180,
      index === 0 ? 48 : finalY + 8
    );
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.tanggal,
        barang.keterangan,
        barang.masuk,
        barang.keluar,
        barang.saldo,
      ];
      tableRows.push(rows);
      console.log(tableRows);
    });
    doc.autoTable(tableColumn, tableRows, {
      startY: index === 0 ? 50 : finalY + 10,
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
  doc.text("LAPORAN KARTU STOCK", 14, 15);
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

export default CetakKartuStock;
