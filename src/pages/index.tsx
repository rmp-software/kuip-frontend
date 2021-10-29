import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@material-ui/core'

import Iterate from '../components/iterate'

interface PageProps {}

const ProductListPage: NextPage<PageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>List - App Store</title>
      </Head>

      <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        <Iterate
          data={[{ id: 1 }]}
          keyExtractor={(product) => product.id}
          render={() => (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  style={{ paddingTop: '56%' }}
                  image="https://github.com/LucasRMP.png"
                />
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h5"
                    color="textPrimary"
                    gutterBottom
                  >
                    {'Lucas Pessone'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="/products/[slug]" as={`/products`} passHref>
                    <Button
                      size="small"
                      color="primary"
                      component="a"
                      fullWidth
                    >
                      Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          )}
        />
      </Grid>
    </>
  )
}

export default ProductListPage
