var hoVaTenEl = document.getElementById("hoVaTen");
var kwDienEl = document.getElementById("kwDien");
var tienDienTxt = document.getElementById("tienDienTxt");

tienDienBtn.addEventListener("click", function () {
  var hoVaTen = hoVaTenEl.value;
  var kwDien = kwDienEl.value * 1;
  var tienDien;

  function checkKw(kwDien) {
    if (kwDien <= 50) {
      return 500 * kwDien;
    }
    if (kwDien > 50 && kwDien <= 100) {
      return 500 * 50 + (kwDien - 50) * 650;
    }
    if (kwDien > 100 && kwDien <= 200) {
      return 500 * 50 + 50 * 650 + (kwDien - 100) * 850;
    }
    if (kwDien > 200 && kwDien <= 350) {
      return 500 * 50 + 50 * 650 + 100 * 850 + (kwDien - 200) * 1100;
    }
    if (kwDien > 350) {
      return (
        500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwDien - 350) * 1300
      );
    }
  }

  if (kwDien <= 0) {
    alert("Số Kw không hợp lệ, vui lòng nhập lại!");
  } else {
    tienDien = checkKw(kwDien);
    tienDienTxt.innerText =
      "Tiền điện mà hách hàng: " +
      hoVaTen +
      " ; cần thanh toán là: " +
      tienDien +
      "VND";
  }
});
