/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

export default function Dropdown(props) {
    const { list } = props;

    const [isOpen, setIsOpen] = useState(false);

    const [selected, setSelected] = useState(null);

    function clickHandler() {
        setIsOpen(prev => !prev);
    }

    function selectItemHandler(el) {
        setSelected(el)
    }

    return (

            <div data-id="wrapper" className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
                <button data-id="toggle" className="btn" onClick={clickHandler} >
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                { isOpen && <DropdownList onSelectItem ={selectItemHandler} selectItem={selected} items={list}></DropdownList>}
            </div>
    )
}

function DropdownList({onSelectItem, selectItem, items}) {

    return <ul className="dropdown" data-id="dropdown">
        {items.map((el, index) => (<DropdownItem item={el} onClick={onSelectItem} isActive={selectItem === el} key={index}/>)
        )}
    </ul>
}

function DropdownItem({item, onClick, isActive}) {
    return (
        <li onClick={() => onClick(item)} className={isActive ? 'active' : ''}><a href="#">{item}</a></li> 
            
    )
}
