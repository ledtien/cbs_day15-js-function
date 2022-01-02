var maKhachHangEl = document.getElementById("maKhachHang");
var ketNoiInputEl = document.getElementById("ketNoiInput");
var ketNoiEl = document.getElementById("ketNoi");
var soKenhEl = document.getElementById("soKenh");
var tienCapTxt = document.getElementById("tienCapTxt");

ketNoiInputEl.style.display = "none";

function hide() {
  ketNoiInputEl.style.display = "none";
}

function show() {
  ketNoiInputEl.style.display = "block";
}

tienCapBtn.addEventListener("click", function () {
  var maKhachHang = maKhachHangEl.value;
  var loaiKhachHang = document.querySelector(
    'input[name="loaiKhach"]:checked'
  ).value;
  var ketNoi = ketNoiEl.value * 1;
  var soKenh = soKenhEl.value * 1;
  var tongTienCap;

  if (soKenh < 0) {
    alert("Vui lòng nhập lại");
  }

  function checkLoaiKhach(loaiKhachHang) {
    if (loaiKhachHang == "caNhan") {
      return 4.5 + 20.5 + 7.5 * soKenh;
    }
    if (loaiKhachHang == "doanhNghiep") {
      if (ketNoi < 0) {
        alert("Không hợp lệ, vui lòng nhập lại kênh kết nối");
      } else {
        if (ketNoi <= 10) {
          return 15 + 7.5 * ketNoi + 50 * soKenh;
        }
        if (ketNoi > 10) {
          return 15 + 75 + (ketNoi - 10) * 5 + 50 * soKenh;
        }
      }
    } else {
      alert("sai loại khách hàng");
    }
  }

  tongTienCap = checkLoaiKhach(loaiKhachHang);

  tienCapTxt.innerText =
    "Khách hàng: " +
    maKhachHang +
    " - " +
    "Tiền cáp phải thanh toán là: " +
    tongTienCap +
    "$";
});
