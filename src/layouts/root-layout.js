import {Outlet} from 'react-router-dom'
import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout() {
  return (
      <div className="root-layout">

        <Header/>

        <main className="container">
          <Outlet/>
        </main>

        <Footer/>
      </div>
  )
}