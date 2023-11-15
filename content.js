window.onload = function () {
  var buyButton = document.getElementById("quantityLayoutLow_feature_div");
  if (buyButton) {
    var exportButton = document.createElement("button");
    exportButton.textContent = "Save";
    exportButton.style.backgroundColor = "#07B5F8";
    exportButton.style.width = "100%";
    exportButton.style.borderRadius = "100px";
    exportButton.style.border = "none";
    exportButton.style.marginBottom = "5%";
    exportButton.style.padding = "5%";
    exportButton.style.fontSize = "15px";
    exportButton.onclick = exportProductInfo;
    buyButton.parentNode.insertBefore(exportButton, buyButton.nextSibling);
  }
};

function exportProductInfo(event) {
  event.preventDefault();
  var productTitle = document.getElementById("productTitle").innerText;
  var productPrice = document
    .getElementsByClassName("a-price-whole")[0]
    .innerText.replace(/\n|[\s.]+/g, "");
  console.log(productPrice);
  window.alert(
    "Congratulations!! You have blocked " + productPrice + " Rs in your Account"
  );
  window.location.replace("https://www.google.com");
  // var productInfo = {
  //   title: productTitle,
  //   price: productPrice,
  // };
  // var dataStr =
  //   "data:text/json;charset=utf-8," +
  //   encodeURIComponent(JSON.stringify(productInfo));
  // var downloadAnchorNode = document.createElement("a");
  // downloadAnchorNode.setAttribute("href", dataStr);
  // downloadAnchorNode.setAttribute("download", "product_info.json");
  // document.body.appendChild(downloadAnchorNode);
  // downloadAnchorNode.click();
  // downloadAnchorNode.remove();
}
