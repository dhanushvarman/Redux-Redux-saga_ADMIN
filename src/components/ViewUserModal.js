import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ViewModal() {

    const { viewUser } = useSelector(state => state.userReducer);

    /* value selected from getData (without saga) */
    // const { viewUser } = useSelector(state => state.getData);

    return (

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <b>Name</b> : {viewUser.name}<br />
                        <b>Email</b> : {viewUser.email}<br />
                        <b>State</b> : {viewUser.state}<br />
                        <b>Gender</b> : {viewUser.gender}<br />
                        <b>Phone Number</b> : {viewUser.phone}<br />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewModal