import styled from 'styled-components'
<<<<<<< HEAD
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

=======
import { Box, Container, Grid } from '@mui/material'
>>>>>>> 0b18129 (Login e image com mui)
const LoginArea = styled.div`
  background: #666;
`

const LoginImage = styled.div`
  background-image: url(/login-image-tavares.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <LoginArea>LOGIN</LoginArea>
            </Container>
          </Grid>
<<<<<<< HEAD

          {/* Lado direito - imagem */}
          <Grid
            item
            sm={6}
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Container maxWidth="sm">
              <LoginImage />
            </Container>
=======
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <LoginImage />
>>>>>>> 0b18129 (Login e image com mui)
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
