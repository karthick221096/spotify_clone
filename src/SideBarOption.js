import React from 'react';
import './SideBarOption.css';

function SideBarOption({title, Icon, id}) {
  return (
    <div className='sidebarOption' onClick={() => {alert(id)}}>
        {Icon && <Icon className="sideBarOption__Icon" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SideBarOption