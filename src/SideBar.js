import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function SideBar() {
  const[{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sideBar'>
    <img 
        className='sideBar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
    />
    <SideBarOption title={"Home"}  Icon = {HomeIcon}/>
    <SideBarOption title={"Search"} Icon = {SearchIcon}/>
    <SideBarOption title={"Your Library"} Icon = {LibraryMusicIcon}/>
    <br />
    <strong className='sideBar__title'>
      PLAYLISTS
    </strong>
    <hr />
    {playlists?.items?.map(playlists => (
    <SideBarOption title={playlists.name} />
    ))}
    </div>
  )
}

export default SideBar