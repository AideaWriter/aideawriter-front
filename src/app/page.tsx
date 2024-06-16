import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Main from '@/app/components/home/Main';
import Footer from '@/app/components/home/Footer';

export default function Home() {
  return (
      <RootLayout>

        <Header />
        <Main />
        <Footer />
      </RootLayout>

  )
}
