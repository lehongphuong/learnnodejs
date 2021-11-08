# Cho lược đồ CSDL quản lý điểm sinh viên, gồm các lược đồ quan hệ sau:
SinhVien(MaSV, HoTen, Nu, NgaySinh, MaLop, HocBong, Tinh)

Lop(MaLop, TenLop, MaKhoa)

Khoa(MaKhoa, TenKhoa, SoCBGD)

MonHoc(MaMH, TenMH, SoTiet)

KetQua(MaSV, MaMH, DiemThi)

## Post man api
Import: https://www.getpostman.com/collections/b504ffce12d8b415d2f4

## Viết các api sau với NodeJS
Câu 1: Liệt kê danh sách các lớp của khoa, thông tin cần Malop, TenLop, MaKhoa
SELECT *
FROM Lop

Câu 2: Lập danh sách sinh viên gồm: MaSV, HoTen, HocBong
SELECT MaSV, Hoten, HocBong
FROM SinhVien

Câu 3: Lập danh sách sinh viên có học bổng. Danh sách cần MaSV, Nu, HocBong

SELECT MaSV, Nu, HocBong
FROM SinhVien
WHERE HocBong>0

Câu 4: Lập danh sách sinh viên nữ. Danh sách cần các thuộc tính của quan hệ sinhvien
SELECT *
FROM SinhVien
WHERE Nu =Yes

Câu 5: Lập danh sách sinh viên có họ ‘Trần’
SELECT *
FROM SinhVien
WHERE HoTen Like ‘Trần *’

Câu 6: Lập danh sách sinh viên nữ có học bổng
SELECT *
FROM SinhVien
WHERE Nu=Yes AND HocBong>0

Câu 7: Lập danh sách sinh viên nữ hoặc danh sách sinh viên có học bổng
SELECT *
FROM SinhVien
WHERE Nu=Yes OR HocBong>0

Câu 8: Lập danh sách sinh viên có năm sinh từ 1978 đến 1985. Danh sách cần các thuộc tính của quan hệ SinhVien
SELECT *
FROM SinhVien
WHERE YEAR(NgaySinh) BETWEEN 1978 AND 1985

Câu 9: Liệt kê danh sách sinh viên được sắp xếp tăng dần theo MaSV
SELECT *
FROM SinhVien
ORDER BY MaSV

Câu 10: Liệt kê danh sách sinh viên được sắp xếp giảm dần theo HocBong
SELECT *
FROM SinhVien
ORDER BY HocBong DESC
Ví du11: Lập danh sách sinh viên có điểm thi môn CSDL>=8
SELECT SinhVien.MaSV, HoTen, Nu, NgaySinh, DiemThi
FROM SinhVien INNER JOIN KetQua ON SinhVien.MaSV = KetQua.MaSV
WHERE MaMH = ‘CSDL’ AND DiemThi>=8

Ví du 12: Lập danh sách sinh viên có học bổng của khoa CNTT. Thông tin cần: MaSV, HoTen, HocBong,TenLop
SELECT MaSV, HoTen, HocBong, TenLop
FROM Lop INNER JOIN SinhVien ON Lop.MaLop=SinhVien.MaLop
WHERE HocBong>0 AND MaKhoa =’CNTT’

Ví du 13: Lập danh sách sinh viên có học bổng của khoa CNTT. Thông tin cần: MaSV, HoTen, HocBong,TenLop, TenKhoa
SELECT MaSV, HoTen, HocBong, TenLop,TenKhoa
FROM ((Lop INNER JOIN SinhVien ON Lop.MaLop=SinhVien.MaLop) INNER JOIN Khoa ON Khoa.MaKhoa=Lop.MaKhoa)
WHERE HocBong>0 AND Khoa.MaKhoa =’CNTT’

Câu 14: Cho biết số sinh viên của mỗi lớp
SELECT Lop.MaLop, TenLop, Count(MaSV) as SLsinhvien
FROM Lop INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop
GROUP BY Lop.MaLop, TenLop

Câu 15: Cho biết số lượng sinh viên của mỗi khoa.
SELECT Khoa.MaKhoa, TenKhoa, Count(MaSV) as SLsinhvien
FROM ((Khoa INNER JOIN Lop ON Khoa.Makhoa = Lop.MaKhoa)INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop)
GROUP BY Khoa.MaKhoa, TenKhoa

Câu 16: Cho biết số lượng sinh viên nữ của mỗi khoa.
SELECT Khoa.MaKhoa, TenKhoa, Count(MaSV) as SLsinhvien
FROM ((SinhVien INNER JOIN Lop ON Lop.MaLop = SinhVien.MaLop) INNER JOIN khoa ON KHOA.makhoa = Lop.makhoa)
WHERE Nu=Yes
GROUP BY Khoa.MaKhoa, TenKhoa

Câu 17: Cho biết tổng tiền học bổng của mỗi lớp
SELECT Lop.MaLop, TenLop, Sum(HocBong) as TongHB
FROM (Lop INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop)
GROUP BY Lop.MaLop, TenLop

Câu 18: Cho biết tổng số tiền học bổng của mỗi khoa
SELECT Khoa.MaKhoa, TenKhoa, Sum(HocBong) as TongHB
FROM ((Khoa INNER JOIN Lop ON Khoa.Makhoa = Lop.MaKhoa)INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop)
GROUP BY Khoa.MaKhoa, TenKhoa

Câu 19: Lập danh sánh những khoa có nhiều hơn 100 sinh viên. Danh sách cần: MaKhoa, TenKhoa, Soluong
SELECT Khoa.MaKhoa, TenKhoa, Count(MaSV) as SLsinhvien
FROM ((Khoa INNER JOIN Lop ON Khoa.Makhoa = Lop.MaKhoa)INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop)
GROUP BY Khoa.MaKhoa, TenKhoa
HAVING Count(MaSV) >100

Câu 20: Lập danh sánh những khoa có nhiều hơn 50 sinh viên nữ. Danh sách cần: MaKhoa, TenKhoa, Soluong
SELECT Khoa.MaKhoa, TenKhoa, Count(MaSV) as SLsinhvien
FROM ((Khoa INNER JOIN Lop ON Khoa.Makhoa = Lop.MaKhoa)INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop)
WHERE Nu=Yes
GROUP BY Khoa.MaKhoa, TenKhoa
HAVING Count(MaSV)>=50

Câu 21: Lập danh sách những khoa có tổng tiền học bổng >=1000000.
SELECT Khoa.MaKhoa, TenKhoa, Sum(HocBong) as TongHB
FROM ((Khoa INNER JOIN Lop ON Khoa.Makhoa = Lop.MaKhoa)INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop)
GROUP BY Khoa.MaKhoa, TenKhoa
HAVING Sum(HocBong)>= 1000000

Câu22: Lập danh sách sinh viên có học bổng cao nhất
SELECT SinhVien.*
FROM SinhVien
WHERE HocBong>= ALL(SELECT HocBong From Sinhvien)

Câu 23: Lập danh sách sinh viên có điểm thi môn CSDL cao nhất
SELECT SinhVien.MaSV, HoTen, DiemThi
FROM SinhVien INNER JOIN KetQua ON SinhVien.MaSV = KetQua.MaSV
WHERE KetQua.MaMH= ‘CSDL’ AND DiemThi>=
ALL(SELECT DiemThi FROM KetQua WHERE MaMH = ‘CSDL’)

Câu 24: Lập danh sách những sinh viên không có điểm thi môn CSDL.
SELECT SinhVien.MaSV, HoTen, DiemThi,MaMH
FROM SinhVien INNER JOIN KetQua ON SinhVien.MaSV = KetQua.MaSV
WHERE SinhVien.MaSV NOT In (Select MaSV From KetQua Where MaMH=’CSDL’)

Câu 25: Cho biết những khoa nào có nhiều sinh viên nhất
SELECT Khoa.MaKhoa, TenKhoa, Count([MaSV]) AS SoLuongSV
FROM (Khoa INNER JOIN Lop ON Khoa.MaKhoa = Lop.MaKhoa) INNER JOIN SinhVien ON Lop.MaLop = SinhVien.MaLop
GROUP BY Khoa.MaKhoa, Khoa.TenKhoa
HaVing Count(MaSV)>=All(Select Count(MaSV) From ((SinhVien Inner Join Lop On Lop.Malop=SinhVien.Malop)Inner Join Khoa On Khoa.MaKhoa = Lop.MaKhoa )Group By Khoa.Makhoa)