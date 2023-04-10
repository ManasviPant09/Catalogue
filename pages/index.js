import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FetchData from '@/components/FetchData';
import Information from '@/components/Information';
export default function Home() {
  return (
    <>
    <Header />
    <Navbar />
    <Information />
    <FetchData />
    </>

  )
}
