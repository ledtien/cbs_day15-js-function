var hoVaTenThueEl = document.getElementById("hoVaTenThue");
var tongThuNhapEl = document.getElementById("tongThuNhap");
var nguoiPhuThuocEl = document.getElementById("nguoiPhuThuoc");
var tienThueTxt = document.getElementById("tienThueTxt");

tienThueBtn.addEventListener("click", function () {
  var hoVaTenThue = hoVaTenThueEl.value;
  var tongThuNhap = tongThuNhapEl.value * 1;
  var nguoiPhuThuoc = nguoiPhuThuocEl.value * 1;
  var tienThue;
  var thuNhapChiuThue;
  thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;

  if (nguoiPhuThuoc < 0) {
    alert("Không hợp lệ, vui lòng nhập lại");
  }

  function checkThuNhap(thuNhapChiuThue) {
    if (thuNhapChiuThue <= 60000000) {
      return 0.05 * thuNhapChiuThue;
    }
    if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
      return 0.1 * (thuNhapChiuThue - 60000000) + 0.05 * 60000000;
    }
    if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
      return (
        0.15 * (thuNhapChiuThue - 120000000) + 0.05 * 60000000 + 0.1 * 60000000
      );
    }
    if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
      return (
        0.2 * (thuNhapChiuThue - 210000000) +
        0.05 * 60000000 +
        0.1 * 60000000 +
        0.15 * 90000000
      );
    }
    if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
      return (
        0.25 * (thuNhapChiuThue - 384000000) +
        0.05 * 60000000 +
        0.1 * 60000000 +
        0.15 * 90000000 +
        174000000 * 0.2
      );
    }
    if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
      return (
        0.3 * (thuNhapChiuThue - 624000000) +
        0.05 * 60000000 +
        0.1 * 60000000 +
        0.15 * 90000000 +
        174000000 * 0.2 +
        240000000 * 0.25
      );
    }
    if (thuNhapChiuThue > 960000000) {
      return (
        0.35 * (thuNhapChiuThue - 960000000) +
        0.05 * 60000000 +
        0.1 * 60000000 +
        0.15 * 90000000 +
        174000000 * 0.2 +
        240000000 * 0.25 +
        336000000 * 0.3
      );
    }
  }
  tienThue = checkThuNhap(thuNhapChiuThue);
  if (tienThue < 0) {
    alert("Không hợp lệ, vui lòng nhập lại!");
  }
  if (tienThue == 0) {
    tienThueTxt.innerText = "Miễn thuế";
  } else {
    tienThueTxt.innerText =
      "Tiền thuế phải đóng của Anh/Chị " +
      hoVaTenThue +
      " là: " +
      tienThue +
      "VND";
  }
});
