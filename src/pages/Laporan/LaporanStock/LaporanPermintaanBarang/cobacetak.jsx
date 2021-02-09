import jsPDF from "jspdf";
import "jspdf-autotable";

export const cobacetak = () => {
  var doc = new jsPDF("p", "pt");

  var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
  doc.autoTable(res.columns, res.data, { margin: { top: 200 } });

  var header = function (data) {
    doc.setFontSize(18);
    doc.setTextColor(40);

    //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    doc.text("Testing Report", data.settings.margin.left, 50);
  };

  var options = {
    beforePageContent: header,
    margin: {
      top: 80,
    },
    startY: doc.autoTableEndPosY() + 40,
  };

  doc.autoTable(res.columns, res.data, options);
  doc.autoTable(res.columns, res.data, options);

  var string = doc.output("datauristring");
  var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
  var x = window.open();
  x.document.open();
  x.document.write(embed);
  x.document.close();
};
