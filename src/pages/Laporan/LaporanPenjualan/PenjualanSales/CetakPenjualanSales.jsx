import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPenjualanSales = (
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
          tanggal: "03-02-2021",
          no_faktur: "FJ20210203-0001",
          kode_barcode: "1234567",
          jenis: "MICRO BEARING",
          kode_merk: "GENIO",
          qty: 2,
          harga_satuan: 50000,
          total: 50000,
        },
        {
          tanggal: "03-02-2021",
          no_faktur: "FJ20210203-0002",
          kode_barcode: "1234567",
          jenis: "MICRO BEARING",
          kode_merk: "GENIO",
          qty: 2,
          harga_satuan: 100000,
          total: 200000,
        },
      ],
    },
    {
      kode_sales: "AMING1",
      list_barang: [
        {
          tanggal: "03-02-2021",
          no_faktur: "FJ20210203-0001",
          kode_barcode: "1234567",
          jenis: "MICRO BEARING",
          kode_merk: "GENIO",
          qty: 2,
          harga_satuan: 50000,
          total: 50000,
        },
        {
          tanggal: "03-02-2021",
          no_faktur: "FJ20210203-0002",
          kode_barcode: "1234567",
          jenis: "MICRO BEARING",
          kode_merk: "GENIO",
          qty: 2,
          harga_satuan: 100000,
          total: 200000,
        },
        {
          tanggal: "03-02-2021",
          no_faktur: "FJ20210203-0003",
          kode_barcode: "1234567",
          jenis: "MICRO BEARING",
          kode_merk: "GENIO",
          qty: 2,
          harga_satuan: 100000,
          total: 300000,
        },
      ],
    },
    {
      kode_sales: "AMING2",
      list_barang: [
        {
          tanggal: "03-02-2021",
          no_faktur: "FJ20210203-0001",
          kode_barcode: "1234567",
          jenis: "MICRO BEARING",
          kode_merk: "GENIO",
          qty: 2,
          harga_satuan: 50000,
          total: 50000,
        },
      ],
    },
  ];
  let tableRows = [];
  let finalY = 40;
  let sub_total = 0;
  let tableColumn = [
    "TANGGAL",
    "NO FAKTUR",
    "BARCODE",
    "JENIS",
    "MERK",
    "QTY",
    "H.SATUAN",
    "TOTAL",
  ];
  data.forEach((item, index) => {
    doc.setFontSize(10);
    doc.text(`SALES : ${item.kode_sales}`, 14, index === 0 ? 40 : finalY + 5);
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.tanggal,
        barang.no_faktur,
        barang.kode_barcode,
        barang.jenis,
        barang.kode_merk,
        barang.qty,
        "Rp. " + parseFloat(barang.harga_satuan).toLocaleString("id-ID"),
        "Rp. " + parseFloat(barang.total).toLocaleString("id-ID"),
      ];
      sub_total = sub_total + parseFloat(barang.total);
      tableRows.push(rows);
      console.log(tableRows);
    });
    let footer = [
      "",
      "",
      "",
      "",
      "",
      "",
      "Sub Total :",
      "Rp. " + parseFloat(sub_total).toLocaleString("id-ID"),
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
  doc.text("LAPORAN PENJUALAN SALES", 14, 15);
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

export default CetakPenjualanSales;
