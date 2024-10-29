import { Box, LinearProgress, Typography } from '@mui/material'
import Layout from "../components/Layout"
import ClientCard from '../components/client/ProductCard'
import { useProduct } from '../hook/useProduct'

const Order = () => {
  const { isPending, ...product } = useProduct()

  if (isPending) return (
    <Layout>
       <LinearProgress />
    </Layout>
  )

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1
      }}>
        {
          !product?.data?.data && (
            <Typography>No hay ordenes</Typography>
          )
        }
        {
          product?.data?.data && product.data.data.map((item, index) => (
            <ClientCard
              key={`client-card-${index}`}
              item={item} />
          ))
        }
      </Box>
    </Layout>
  )
}

export default Order