import React from 'react'
import { useSelector } from 'react-redux';

function Header() {

    const {allUser} = useSelector(state => state.userReducer);

    const res = allUser[0] ? Object.keys(allUser[0]) : [];

    return (
        <thead>
            <tr>
                {
                    res.map((value, index) => {
                        return <th key={index} scope="col">{value == "id" ? "Actions" : value.toUpperCase()}</th>
                    })
                }
            </tr>
        </thead>
    )
}

export default Header