import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakKeuanganBank = (
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
      list_barang: [
        {
          tanggal: "5 februari 2021",
          no_bon: "FJ019203182938",
          kategori: "PENJUALAN",
          deskripsi: "SPAREPART",
          debet: 100000,
          kredit: 0,
        },
        {
          tanggal: "5 februari 2021",
          no_bon: "FJ019203182938",
          kategori: "PENJUALAN",
          deskripsi: "SPAREPART",
          debet: 200000,
          kredit: 0,
        },
        {
          tanggal: "5 februari 2021",
          no_bon: "FJ019203182938",
          kategori: "PENJUALAN",
          deskripsi: "SPAREPART",
          debet: 300000,
          kredit: 0,
        },
        {
          tanggal: "5 februari 2021",
          no_bon: "FJ019203182938",
          kategori: "PENJUALAN",
          deskripsi: "SPAREPART",
          debet: 2380000,
          kredit: 0,
        },
        {
          tanggal: "5 februari 2021",
          no_bon: "FJ019203182938",
          kategori: "PENJUALAN",
          deskripsi: "SPAREPART",
          debet: 4290000,
          kredit: 0,
        },
        {
          tanggal: "5 februari 2021",
          no_bon: "FJ019203182938",
          kategori: "BAYAR SUPPLIER",
          deskripsi: "SUPPLIER BAN",
          debet: 0,
          kredit: 2000000,
        },
      ],
    },
  ];
  let tableRows = [];
  let finalY = 40;
  let debet = 0;
  let kredit = 0;
  let tableColumn = [
    "TANGGAL",
    "NO BON",
    "KATEGORI",
    "DESKRIPSI",
    "DEBET",
    "KREDIT",
  ];
  data.forEach((item, index) => {
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.tanggal,
        barang.no_bon,
        barang.kategori,
        barang.deskripsi,
        "Rp. " + parseFloat(barang.debet).toLocaleString("id-ID"),
        "Rp. " + parseFloat(barang.kredit).toLocaleString("id-ID"),
      ];
      debet = debet + parseFloat(barang.debet);
      kredit = kredit + parseFloat(barang.kredit);
      tableRows.push(rows);
      console.log(tableRows);
    });
    let footer = [
      "",
      "",
      "",
      "Total : ",
      "Rp. " + parseFloat(debet).toLocaleString("id-ID"),
      "Rp. " + parseFloat(kredit).toLocaleString("id-ID"),
    ];
    tableRows.push(footer);
    let footersisa = [
      "",
      "",
      "",
      "Sisa Saldo : ",
      "",
      "Rp. " + (parseFloat(debet) - parseFloat(kredit)).toLocaleString("id-ID"),
    ];
    tableRows.push(footersisa);
    doc.autoTable(tableColumn, tableRows, {
      startY: index === 0 ? 40 : finalY + 15,
      theme: "plain",
    });
    finalY = doc.lastAutoTable.finalY + 10;
    tableRows = [];
    debet = 0;
    kredit = 0;
  });
  // const date = Date().split(" ");
  // we use a date string to generate our filename.
  // const dateStr = date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.setFontSize(15);
  doc.text("LAPORAN KEUANGAN BANK", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`TANGGAL : ${row1isi}`, 14, 25);
  //   doc.text(`KATEGORI : ${row2isi}`, 14, 30);
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

export default CetakKeuanganBank;
