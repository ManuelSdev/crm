'use client'
import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'

import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { drawerContent } from '@/components/drawer/drawerContent'

import Drawer from '@/components/drawer/Drawer'
import Header from '@/components/header/Header'
import { Container } from '@mui/material'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
}))

export default function DashBoardLayout() {
   const theme = useTheme()
   const [open, setOpen] = React.useState(false)

   const handleDesktopDrawerOpen = () => {
      setOpen(true)
   }

   const handleDesktopDrawerClose = () => {
      setOpen(false)
   }

   const [mobileOpen, setMobileOpen] = React.useState(false)
   const [isClosing, setIsClosing] = React.useState(false)

   const handleDrawerClose = () => {
      setIsClosing(true)
      setMobileOpen(false)
   }

   const handleDrawerTransitionEnd = () => {
      setIsClosing(false)
   }

   const handleDrawerToggle = () => {
      if (!isClosing) {
         setMobileOpen(!mobileOpen)
      }
   }
   console.log('open', open)
   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <Header
            drawerWidth={drawerWidth}
            open={open}
            handleDesktopDrawerOpen={handleDesktopDrawerOpen}
            handleDesktopDrawerClose={handleDesktopDrawerClose}
            handleDrawerToggle={handleDrawerToggle}
         />

         <Drawer
            open={open}
            drawerWidth={drawerWidth}
            theme={theme}
            content={drawerContent}
            handleDrawerClose={handleDrawerClose}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            handleDrawerToggle={handleDrawerToggle}
         />

         <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
            <DrawerHeader />
            <Typography sx={{ marginBottom: 2 }}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Rhoncus dolor purus non enim praesent elementum facilisis leo
               vel. Risus at ultrices mi tempus imperdiet. Semper risus in
               hendrerit gravida rutrum quisque non tellus. Convallis convallis
               tellus id interdum velit laoreet id donec ultrices. Odio morbi
               quis commodo odio aenean sed adipiscing. Amet nisl suscipit
               adipiscing bibendum est ultricies integer quis. Cursus euismod
               quis viverra nibh cras. Metus vulputate eu scelerisque felis
               imperdiet proin fermentum leo. Mauris commodo quis imperdiet
               massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
               augue. At augue eget arcu dictum varius duis at consectetur
               lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
               sapien faucibus et molestie ac.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
               Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
               ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
               elementum integer enim neque volutpat ac tincidunt. Ornare
               suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
               volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
               Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
               ornare massa eget egestas purus viverra accumsan in. In hendrerit
               gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
               aliquam sem et tortor. Habitant morbi tristique senectus et.
               Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
               aenean euismod elementum nisi quis eleifend. Commodo viverra
               maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
               aliquam ultrices sagittis orci a.
            </Typography>
         </Box>
      </Box>
   )
}
