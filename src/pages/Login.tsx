import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

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
          {/* Lado esquerdo - login */}
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

          {/* Lado direito - imagem */}
          <Grid
            item
            xs={false}
            sm={6}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <LoginImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
