import React from 'react';

import "./Dropdown.scss";


export default function Dropdown({children, onHandleSelect, selectedItem}){
    const [open, setOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(selectedItem? selectedItem : 0)
  let menuRef = React.useRef();
// console.log(children[0].props.children[0])
  React.useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      //  console.log(menuRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
});

const onClickItem=(i)=>{
    setSelected(i)
    onHandleSelect(i)
    setOpen(!open)
}

    return (
   <div className="Dropdown">
    <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
   {children && children[selected].props.children[0]}
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            {children && children.map((el, i)=>(
<li className='' key={el.props.children[0]+'rrr'} onClick={()=>onClickItem(i)}>
{el}
</li>
             ) )

            }
          </ul>
        </div>
      </div>
   </div>
    )
}

