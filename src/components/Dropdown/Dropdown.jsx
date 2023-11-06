/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

export default function Dropdown(props) {
    const { list } = props;

    const [state, setState] = useState(false);

    function clickHandler() {
        setState(prev => !prev);
    }

    return (
        state ?
            <div data-id="wrapper" className="dropdown-wrapper open">
                <button data-id="toggle" className="btn" onClick={clickHandler} >
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <DropdownList items={list}></DropdownList>
            </div>
            :
            <div data-id="wrapper" className="dropdown-wrapper ">
                <button data-id="toggle" className="btn" onClick={clickHandler} >
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <DropdownList items={list}></DropdownList>
            </div>
    )
}

function DropdownList(props) {
    const { items } = props;

    return <ul className="dropdown" data-id="dropdown">
        {items.map((el) => (<DropdownItem item={el} />)
        )}
    </ul>
}

function DropdownItem(props) {
    const { item } = props;

    const [state, setState] = useState(false);

    function clickItemHandler() {
        setState(prev => !prev)
    }

    return (
        state ? <li onClick={clickItemHandler} className='active'><a href="#">{item}</a></li> :
            <li onClick={clickItemHandler} ><a href="#">{item}</a></li>
    )
}
