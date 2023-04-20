import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, editedData } from '../action';
import { editSingleUserAction } from '../action/userSagaActions';

function EditModal() {

    const dispatch = useDispatch();

    const { editUser } = useSelector(state => state.userReducer);
    const { value, index } = editUser;

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            state: "",
            gender: "",
            phone: "",
        },
        validate: (values) => {
            let error = {}

            if (!values.name) {
                error.name = "Please enter a name";
            }

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
                error.email = "Please enter a valid email";
            }

            if (!values.state) {
                error.state = "Please enter a state";
            }

            if (!values.gender) {
                error.gender = "Please enter a gender";
            }

            if (values.gender == "Select a gender...") {
                error.gender = "Please enter a gender";
            }

            if (!values.phone) {
                error.phone = "Please enter a phone";
            }

            return error
        },
        onSubmit: (values) => {
            dispatch(editSingleUserAction(values, index));
        }
    });

    useEffect(() => {
        if (!(value == null)) {
            formik.setValues(value)
        }
    }, [value]);

    return (
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                        <button type="button" class="btn-close" onClick={formik.resetForm} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="modal-body">

                            <label for="name" className='m-2'>NAME</label>
                            <input className='form-control' placeholder='Enter name...' type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.errors.name ? <div style={{ color: "red", fontSize: "small" }}>{formik.errors.name}</div> : ""
                            }

                            <label for="email" className='m-2'>EMAIL</label>
                            <input className='form-control' placeholder='example@gmail.com' type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.errors.email ? <div style={{ color: "red", fontSize: "small" }}>{formik.errors.email}</div> : ""
                            }

                            <label for="state" className='m-2'>STATE</label>
                            <input className='form-control' placeholder='Enter state...' type="text" name="state" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.errors.state ? <div style={{ color: "red", fontSize: "small" }}>{formik.errors.state}</div> : ""
                            }

                            <label for="gender" className='m-2'>GENDER</label>
                            <select className='form-control' name='gender' value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option>Select a gender...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {
                                formik.errors.gender ? <div style={{ color: "red", fontSize: "small" }}>{formik.errors.gender}</div> : ""
                            }

                            <label for="phone" className='m-2'>PHONE NUMBER</label>
                            <input className='form-control' placeholder='1234567890' type="number" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {
                                formik.errors.phone ? <div style={{ color: "red", fontSize: "small" }}>{formik.errors.phone}</div> : ""
                            }

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <input type="submit" value="Submit" class="btn btn-success" data-bs-dismiss="modal" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal