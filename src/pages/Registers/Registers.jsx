import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dangkyAction } from '../../redux/action/movie/QuanLyNguoiDungAction';
import { useDispatch } from 'react-redux';


export default function Registers() {

  let dispatch = useDispatch();


  const formik = useFormik({
    //lưu giá trị lấy từ form
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: ""
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống"),
      matKhau: Yup.string().required("Mật khẩu không được để trống").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/, "Mật khẩu từ 6-8 ký tự, phải có ký tự thường, in hoa, đặc biệt, số"),
      email: Yup.string().required("email không được để trống").email("Email không đúng định dạng"),
    }),
    onSubmit: values => {
      console.log("values", values)

      //Gọi hàm dangkyAction để call api đang ký của BE
      let action = dangkyAction(values);
      dispatch(action);
    },
  });





  return (
    <div>
      <h2>Đăng Ký</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tài khoản</label>
          <input type="text" className="form-control" name='taiKhoan'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          // value={formik.values.taiKhoan}
          />
          {formik.errors.taiKhoan ? (
            <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Mật Khẩu</label>
          <input type="password" className="form-control" name='matKhau'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.matKhau ? (
            <div className='alert alert-danger'>{formik.errors.matKhau}</div>
          ) : null}

        </div>
        <div className="form-group">
          <label htmlFor="">Họ tên</label>
          <input type="text" className="form-control" name="hoTen"
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email </label>
          <input type="text" className="form-control" name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? (
            <div className='alert alert-danger'>{formik.errors.email}</div>
          ) : null}

        </div>
        <div className="form-group">
          <label htmlFor="">Sđt</label>
          <input type="text" className="form-control" name="soDt"
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group">
          <button className='btn btn-danger'>Đăng ký</button>
        </div>

      </form>

    </div>
  )
}
