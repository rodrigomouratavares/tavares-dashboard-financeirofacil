import styled from 'styled-components'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const LoginArea = styled.div`
  background: #666;
  color: white;
`

const LoginImage = styled.div`
  background-image: url(/login-image-tavares.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '100%' }}>
        {/* Lado esquerdo - área de login */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container maxWidth="sm">
            <LoginArea>LOGIN</LoginArea>
          </Container>
        </Grid>

        {/* Lado direito - imagem */}
        <Grid
          item
          xs={false}
          sm={6}
          sx={{
            display: { xs: 'none', sm: 'block' },
            height: '100vh',
          }}
        >
          <LoginImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login
