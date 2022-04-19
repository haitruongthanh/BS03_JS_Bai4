//50 - 100 - 150 -

// 500kw - 50kw đầu - 50kw tiếp theo - 100kw tiếp theo - 150kw tiếp theo; còn lại
// 500 - 50 - 50 - 100 - 150 = 50

//sử dụng < 50 -> 50kw đầu
//sử dụng < 100 -> 50kw đầu + 50kw tiếp theo
//sử dụng < 200 -> 50kw đầu + 50kw tiếp theo + 100kw tiếp theo
//sử dụng < 350 -> 50kw đầu + 50kw tiếp theo + 100kw tiếp theo + 150kw tiếp theo
//sử dụng > 350 ->

var tinhDonGiaDau = function (soKwTieuThu) {
  return soKwTieuThu * 500;
};

var tinhDonGia50Ke = function (soKwTieuThu) {
  return 50 * 500 + (soKwTieuThu - 50) * 650;
};

var tinhDonGia100Ke = function (soKwTieuThu) {
  return 50 * 500 + 50 * 650 + (soKwTieuThu - 100) * 850;
};

var tinhDonGia150Ke = function (soKwTieuThu) {
  return 50 * 500 + 50 * 650 + 100 * 850 + (soKwTieuThu - 200) * 1100;
};

var tinhDonGiaTren350 = function (soKwTieuThu) {
  return (
    50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwTieuThu - 350) * 1300
  );
};

var tinhTienDien = function () {
  var soKwTieuThu = document.getElementById("bai2_soKW").value * 1;
  var user = document.getElementById("bai2_user").value;
  console.log({ soKwTieuThu });

  var soTienDien = null;

  if (soKwTieuThu <= 50) {
    soTienDien = tinhDonGiaDau(soKwTieuThu);
  } else if (soKwTieuThu <= 100) {
    soTienDien = tinhDonGia50Ke(soKwTieuThu);
  } else if (soKwTieuThu <= 200) {
    soTienDien = tinhDonGia100Ke(soKwTieuThu);
  } else if (soKwTieuThu <= 350) {
    soTienDien = tinhDonGia150Ke(soKwTieuThu);
  } else {
    soTienDien = tinhDonGiaTren350(soKwTieuThu);
  }
  console.log({ soTienDien });

  document.getElementById(
    "bai2_ket_qua"
  ).innerHTML = `${user} đã sử dụng ${soKwTieuThu}kW. Số tiền điện là: ${soTienDien} VND`;
};
