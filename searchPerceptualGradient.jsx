function pgChecker()
{
  if (!app.activeDocument.saved)
  {
    alert("実行する前に保存しといて下さい。");
    return;
  }
  var doc = app.activeDocument;
  var originalPath = doc.fullName;
  var copyFile = new File("~/Desktop/" + doc.name.replace(/\.[^\.]+$/, "") + "_copy.ai");
  var opts = new IllustratorSaveOptions();
  opts.pdfCompatible = false;
  opts.compressed = false;
  doc.saveAs(copyFile, opts);
  doc.close();
  app.open(originalPath);
  copyFile.open("r");
  var n = 0, st = "";
  var re = /\d\s\d\s1\s\d\sBd$/;
  while(!copyFile.eof)
  {
    st = copyFile.readln();
    if (st.match(re)) n++
  }
  copyFile.remove();
  alert("知覚的グラデーションの数＝" + n)
}

pgChecker();
