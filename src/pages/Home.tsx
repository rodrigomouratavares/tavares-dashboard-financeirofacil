import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
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

  const mockTableData = {
    headers: ['name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@gmail.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>

        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['jan', 'fev', 'mar', 'abr', 'mai', 'jun']}
            data={[1000.12, 2456.56, 987, 82, 390.2, 2987.02]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
