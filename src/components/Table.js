import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { deleteSingleUserAction, fetchAllAction, fetchSingleUserAction, setEditUser } from '../action/userActions';

function Table() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllAction());
    }, [])

    const { searchResult } = useSelector(state => state.userReducer);

    /* value selected from getData (without saga) */
    // const {allUser} = useSelector(state => state.getData);

    return (
        <table class="table table-striped table-bordered text-center">
            <Header />
            <tbody>
                {
                    searchResult.map((value, index) => {
                        return <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.state}</td>
                            <td>{value.gender}</td>
                            <td>{value.phone}</td>
                            <td>
                                <button className='btn btn-info btn-sm me-3' onClick={() => dispatch(fetchSingleUserAction(value.id))} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                <button className='btn btn-warning btn-sm me-3' onClick={() => dispatch(setEditUser(value, index)) } data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                                <button className='btn btn-danger btn-sm' onClick={() => dispatch(deleteSingleUserAction(value.id,index))}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table