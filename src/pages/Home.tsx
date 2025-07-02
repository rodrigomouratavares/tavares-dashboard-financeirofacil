import { AvatarList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'
function Home() {
  const mockListData = [
    {
      avatar: '/Avatar.svg',
      name: 'Rodrigo',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: '/Avatar.svg',
      name: 'Hanna ',
      subtitle: currencyConverter(2000.54),
    },
    {
      avatar: '/Avatar.svg',
      name: 'Hanna ',
      subtitle: currencyConverter(3452.54),
    },
  ]
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
