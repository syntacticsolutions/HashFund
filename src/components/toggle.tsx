import React from 'react'

export default function Toggle ({children, type, rounded, onClick, checked}: any) {
    return (
    <div >
        <label className="toggle-control">
            <input onClick={onClick} type="checkbox" checked={checked}/>
            <span className="control"><i className="fal fa-sun"><i className="fal fa-moon"></i></i></span>
        </label>
    </div>
    )
}