var tinhDiem = function (diemMon1, diemMon2, diemMon3) {
  var tongDiem = null;
  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    document.getElementById("ket_qua").style.display = "none";
    document.getElementById(
      "diem_liet"
    ).innerHTML = `Thí sinh không trúng tuyển do có môn 0 điểm`;
  } else {
    tongDiem = diemMon1 + diemMon2 + diemMon3;
  }
  return tongDiem;
};

var kiemTraKhuVuc = function (khuVuc) {
  var diemKhuVuc = null;
  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    case "X":
      diemKhuVuc = 0;
      break;
  }
  return diemKhuVuc;
};

var kiemTraDoiTuong = function (doiTuong) {
  var diemDoiTuong = null;
  switch (doiTuong) {
    case 1:
      diemDoiTuong = 2.5;
      break;
    case 2:
      diemDoiTuong = 1.5;
      break;
    case 3:
      diemDoiTuong = 1;
      break;
    case 0:
      diemDoiTuong = 0;
      break;
  }
  return diemDoiTuong;
};

var xacDinhKetQua = function () {
  var diemMon1 = document.getElementById("bai1_diem_mon_1").value * 1;
  var diemMon2 = document.getElementById("bai1_diem_mon_2").value * 1;
  var diemMon3 = document.getElementById("bai1_diem_mon_3").value * 1;
  var diemChuan = document.getElementById("bai1_diem_chuan").value * 1;
  var khuVuc = document.getElementById("khu_vuc").value;

  var doiTuong = document.getElementById("doi_tuong").value * 1;
  console.log({ diemMon1, diemMon2, diemMon3, khuVuc, doiTuong, diemChuan });

  var diemThi = tinhDiem(diemMon1, diemMon2, diemMon3);
  var diemKhuVuc = kiemTraKhuVuc(khuVuc);
  var diemDoiTuong = kiemTraDoiTuong(doiTuong);
  console.log({ diemThi, diemKhuVuc, diemDoiTuong });

  var tongDiem = diemThi + diemKhuVuc + diemDoiTuong;

  console.log({ tongDiem });
  document.getElementById("bang_diem").innerHTML = `
  <table class="table  table-bordered text-center text-white">
  <thead class="thead-light">
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Điểm môn 1</th>
      <th scope="col">Điểm môn 2</th>
      <th scope="col">Điểm môn 3</th>
      <th scope="col">Điểm Khu Vực</th>
      <th scope="col">Điểm Đối Tượng</th>
      <th scope="col">Tổng Điểm</th>
      <th scope="col">Điểm chuẩn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${diemMon1}</td>
      <td>${diemMon2}</td>
      <td>${diemMon3}</td>
      <td>${diemKhuVuc}</td>
      <td>${diemDoiTuong}</td>
      <td>${tongDiem}</td>
      <td>${diemChuan}</td>
    </tr>
  </tbody>
</table>`;
  if (tongDiem >= diemChuan) {
    document.getElementById("bai1_ket_qua").innerHTML = `Thí sinh đã thi đậu`;
  } else {
    document.getElementById("bai1_ket_qua").innerHTML = `Thí sinh đã thi trượt`;
  }
};
