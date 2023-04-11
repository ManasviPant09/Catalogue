import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Information from '@/components/Information';
import Sidebar from '@/components/Sidebar';
import FetchPokemon from '@/components/FetchPokemon';

export default function Home() {
  return (
    <>
    <Header />
    <Navbar />
    <Sidebar />
    <FetchPokemon />
    </>

  );
}