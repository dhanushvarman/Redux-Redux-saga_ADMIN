import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { search } from '../action/userSagaActions';

function SearchBox() {
    
    const dispatch = useDispatch();

    return (
        <div>
            <label for="exampleDataList" class="form-label">Name Search</label>
            <input class="form-control" onChange={(e)=>dispatch(search(e.target.value))} list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
        </div>
    )
}

export default SearchBox