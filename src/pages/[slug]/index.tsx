import { GetServerSideProps, NextPage } from 'next'

interface PageProps {}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  { slug: string }
> = async (ctx) => {
  const { slug } = ctx.params

  return {
    redirect: {
      destination: `${
        process.env.NEXT_PUBLIC_REST_API_URL
      }/${slug}?redirect_on_fail=${encodeURIComponent(
        'https://google.com.br'
      )}`,
      permanent: true,
    },
  }
}
