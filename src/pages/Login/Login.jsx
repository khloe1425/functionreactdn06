import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dangnhapAction } from '../../redux/action/movie/QuanLyNguoiDungAction';
import { useDispatch } from 'react-redux';

export default function Login() {

  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: ''
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().min(6, 'Tối thiểu 6 ký tự')
        .max(15, 'Tối đa 15 ký tự')
        .required('Tài khoản không để trống'),
      matKhau: Yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/, "Mật khẩu từ 6-8 ký tự, phải có ký tự thường, in hoa, đặc biệt, số")
        .required('Mật khẩu không để trống')
    }),
    onSubmit: values => {
      console.log(values);
      //TODO dispatch action call api dang nhap
      let action = dangnhapAction(values);
      dispatch(action);
    },
  });



  return (
    <div className='container'>
      <h2>Đăng nhập</h2>
      <form className='w-50' onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text" className="form-control" name="taiKhoan" />

          {formik.errors.taiKhoan ? (
            <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
          ) : null}

        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input onChange={formik.handleChange}
            onBlur={formik.handleBlur} type="password" className="form-control" name="matKhau" />

          {formik.errors.matKhau ? (
            <div className='alert alert-danger'>{formik.errors.matKhau}</div>
          ) : null}

        </div>
        <button type="submit" className="btn btn-primary mr-3">Đăng nhập</button>

        <button type="button" className="btn btn-primary">Đăng ký</button>
      </form>

    </div>
  )
}

