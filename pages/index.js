
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import JSArticles from '@/components/JSArticles'
import Head from 'next/head'
import NavBar from '@/components/NavBar'


export default function Home() {
  return (
      <main>
      <NavBar>Assignment 2</NavBar>
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Typography variant="h2" component="h2" color="primary" align="center">
              Assignment 2 - React Components
            </Typography>
            <Typography color="secondary" align="center">
              Here's a list of awesome resources that you can use
            </Typography>
          </Box>
          <JSArticles />
        </Container>
      </main>
  )
}
