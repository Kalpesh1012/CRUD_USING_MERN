import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
    const Tabs=styled(`p`)`
        
        font-size:20px;
        margin-right:200px;
    `
  return (
    
    <div>
      <AppBar sx={{background:"black"}}>
        <Toolbar >
            <Tabs >Add User</Tabs>
            <Tabs >All User</Tabs>
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
