import React, { useContext } from 'react'
import { Button } from '../../../jsdc-ui/components/Button'
import { drawerContext } from '../../DrawerProvider'
import './Header.scss'

const tempContent = () => {
  return (
    <ul>
      <li>aaaaaa</li>
      <li>bbbbbb</li>
    </ul>
  )
}

const Header = () => {
  const { settitle, sethide, setcontent } = useContext(drawerContext)
  const handleDrawerOpen = () => {
    settitle('action1')
    sethide(false)
    setcontent(tempContent)
  }
  return (
    <div className="MapPage-Header">
      <div className="MapPage-Header-title">Title</div>
      <div className="MapPage-Header-mainAction">
        <Button varient='flat' onClick={() => handleDrawerOpen()}>action1</Button>
        <Button varient='flat'>action1</Button>
      </div>
      <div className="MapPage-Header-endAction">
        <Button varient='flat'>action1</Button>
      </div>
    </div>
  )
}

export default Header
