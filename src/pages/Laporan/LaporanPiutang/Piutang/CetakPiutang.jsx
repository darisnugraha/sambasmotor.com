import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPiutang = (
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
      kode_sales: "AMING",
      list_barang: [
        {
          nama: "ada",
          alamat: "ada",
          no_hp: "ada",
          awal: 1000000,
          bayar: 0,
          saldo: 1000000,
        },
        {
          nama: "ada",
          alamat: "ada",
          no_hp: "ada",
          awal: 2000000,
          bayar: 0,
          saldo: 2000000,
        },
        {
          nama: "ada",
          alamat: "ada",
          no_hp: "ada",
          awal: 4000000,
          bayar: 1000000,
          saldo: 3000000,
        },
        {
          nama: "ada",
          alamat: "ada",
          no_hp: "ada",
          awal: 1000000,
          bayar: 0,
          saldo: 1000000,
        },
      ],
    },
  ];
  let tableRows = [];
  let finalY = 40;
  let sub_total = 0;
  let tableColumn = ["NAMA", "ALAMAT", "NO HP", "AWAL", "BAYAR", "SALDO"];
  data.forEach((item, index) => {
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.nama,
        barang.alamat,
        barang.no_hp,
        "Rp. " + parseFloat(barang.awal).toLocaleString("id-ID"),
        "Rp. " + parseFloat(barang.bayar).toLocaleString("id-ID"),
        "Rp. " + parseFloat(barang.saldo).toLocaleString("id-ID"),
      ];
      sub_total = sub_total + parseFloat(barang.saldo);
      tableRows.push(rows);
      console.log(tableRows);
    });
    let footer = [
      "",
      "",
      "",
      "",
      "Grand Total :",
      "Rp. " + parseFloat(sub_total).toLocaleString("id-ID"),
    ];
    tableRows.push(footer);
    doc.autoTable(tableColumn, tableRows, {
      startY: index === 0 ? 40 : finalY + 15,
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
  doc.text("LAPORAN PIUTANG GLOBAL", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`TANGGAL : ${row1isi}`, 14, 25);
  doc.text(`KATEGORI : ${row2isi}`, 14, 30);
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

export default CetakPiutang;
