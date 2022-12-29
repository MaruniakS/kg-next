import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

const RebrandingLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default RebrandingLayout