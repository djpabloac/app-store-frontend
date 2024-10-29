import { FC } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Product } from '../../types/product'

interface ProductCardProps {
  item: Product
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      variant='outlined'>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {item.name}
        </Typography>
        <Typography variant="h5" component="div">
          {`${item.unitType}`}
        </Typography>
        <Typography variant="h5" component="div">
          {`${item.price}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard