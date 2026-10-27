import { Outlet, useLocation } from 'react-router'
import ScrollToTop from './ScrollToTop.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function RootLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}