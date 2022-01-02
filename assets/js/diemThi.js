var diemChuanEl = document.getElementById("diemChuan");
var diemThiEl = document.getElementById("diemThi");
var btnResultEl = document.getElementById("btnResult");
var result = document.getElementById("result");

btnResultEl.addEventListener("click", function () {
  var diemChuan = diemChuanEl.value * 1;
  var diemThi = diemThiEl.value * 1;
  var diemThiCuoiCung;
  console.log({ diemChuan, diemThi });

  var doiTuong = document.querySelector('input[name="doiTuong"]:checked').value;
  var khuVuc = document.querySelector('input[name="khuVuc"]:checked').value;
  console.log(doiTuong, khuVuc);

  function checkKhuVuc(khuVuc) {
    if (khuVuc == "x") {
      return 0;
    }
    if (khuVuc == "a") {
      return 2;
    }
    if (khuVuc == "b") {
      return 1;
    }
    if (khuVuc == "c") {
      return 0.5;
    }
  }

  function checkDoiTuong(doiTuong) {
    if (doiTuong == 0) {
      return 0;
    }
    if (doiTuong == 1) {
      return 2.5;
    }
    if (doiTuong == 2) {
      return 1.5;
    }
    if (doiTuong == 3) {
      return 1;
    }
  }

  diemThiCuoiCung = diemThi + checkKhuVuc(khuVuc) + checkDoiTuong(doiTuong);
  console.log({ diemThiCuoiCung });

  if (diemThi < 0 || diemChuan <= 0) {
    alert("Điểm không hợp lệ, vui lòng nhập lại!");
  } else {
    if (diemThiCuoiCung >= diemChuan) {
      result.innerText =
        "Điểm thi đạt được là: " + diemThiCuoiCung + " =>" + " Đậu";
    } else {
      result.innerText =
        "Điểm thi đạt được là: " + diemThiCuoiCung + " =>" + " Rớt";
    }
  }
});
