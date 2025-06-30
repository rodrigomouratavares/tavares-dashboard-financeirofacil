import styled from 'styled-components'
import { Logo } from '@/components'
import { Link } from 'react-router-dom'
import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(37)};
  width: 100%;
`
function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: pxToRem(64),
          }}
        >
          <Link to="/home">
            <Logo height={25} width={100} />
          </Link>
          <Link to="/perfil">
            <Avatar
              alt="TAVARES AVATAR"
              src="/Avatar.svg"
              sx={{ width: pxToRem(40), height: pxToRem(40) }}
            ></Avatar>
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
