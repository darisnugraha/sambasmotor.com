import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakMedicalReport = (
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
          tanggal: "5 febaruari 2021",
          km: 1500,
          keterangan_service: "GANTI OLI",
          sparepart: "OLI SHELL EDVANCE",
          qty: "4",
          satuan: "LTR",
          mekanik: "AMING",
        },
        {
          tanggal: "5 febaruari 2021",
          km: 2500,
          keterangan_service: "GANTI OLI",
          sparepart: "OLI SHELL EDVANCE",
          qty: "4",
          satuan: "LTR",
          mekanik: "AMING",
        },
        {
          tanggal: "7 febaruari 2021",
          km: 3500,
          keterangan_service: "GANTI OLI",
          sparepart: "OLI SHELL EDVANCE",
          qty: "4",
          satuan: "LTR",
          mekanik: "AMING",
        },
      ],
    },
  ];
  let tableRows = [];
  let finalY = 40;
  let tableColumn = [
    "TANGGAL",
    "KM",
    "KETERANGAN SERVICE",
    "SPAREPART",
    "QTY",
    "SATUAN",
    "MEKANIK",
  ];
  data.forEach((item, index) => {
    item.list_barang.forEach((barang, index) => {
      let rows = [
        barang.tanggal,
        barang.km,
        barang.keterangan_service,
        barang.sparepart,
        barang.qty,
        barang.satuan,
        barang.mekanik,
      ];
      tableRows.push(rows);
      console.log(tableRows);
    });
    doc.autoTable(tableColumn, tableRows, {
      startY: index === 0 ? 40 : finalY + 15,
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
  doc.text("MEDICAL REPORT", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`TANGGAL : ${row1isi}`, 14, 25);
  doc.text(`NOMOR POLISI : ${row2isi}`, 14, 30);
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

export default CetakMedicalReport;
