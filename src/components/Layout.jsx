import React from 'react'
import { ThemeProvider,createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import MovieLogo from '../movielogo.png'
import { styled } from '@mui/system'
import SearchMovieSuggestion from '../containers/SearchMovieSuggestion'

const darkTheme = createTheme({
    palette:{
        mode : 'dark'
    }
})

const Img = styled('img')({
  marginLeft: 'auto',
  marginRight:'auto',
  display:'block',
  width : 500,
  maxWidth:'100%',
});

const LayoutWrapper = styled('div')(({theme}) => ({
  margin: 24,
  width:'auto',
  [theme.breakpoints.up('lg')]:{
    marginLeft:'auto',
    marginRight:'auto',
    width:theme.breakpoints.values.lg
  }
}))

function Layout({children}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <LayoutWrapper>
        <Link to='/'>
            <Img src={MovieLogo} alt="The movie logo" />
        </Link>
        <SearchMovieSuggestion/>
        {children}
      </LayoutWrapper>
      
    </ThemeProvider>
  )
}

export default Layout
 