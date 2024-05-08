import Header from '../components/Header'
import Aside from '../components/Aside'
import MainStudents from '../components/MainStudents'
import Footer from '../components/Footer'
import '../App.css'
export default function DashBoard() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='flex-1 flex w-full'>
        <Aside />
        <MainStudents />
      </div>
      <Footer />
    </div>
  )
}
