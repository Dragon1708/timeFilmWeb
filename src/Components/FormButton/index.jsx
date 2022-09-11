import React from "react";
import { useDispatch } from 'react-redux'
import { SetCategoryId } from '../../redux/slices/FilterSlice'
import { Link} from "react-router-dom";

import "./FormButton.scss";


export default function FormButton({children, data}){

    return (
    <button type="submit" {...data} className="submit-btn">
        {children}
    </button>
    )
}