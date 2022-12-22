import { Card, CardContent, Container, Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muxt TS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Typography variant='h1'>Home page</Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
