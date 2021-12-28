function codeOutput() {
  var iframe = document.getElementById("iframe");
  var html = document.getElementById("html-codepenEditior").value;
  var css = document.getElementById("css-codepenEditior").value;
  var js = document.getElementById("js-codepenEditior").value;

  iframe.srcdoc =
    html + "<style>" + css + "</style>" + "<script>" + js + "</script>";
}