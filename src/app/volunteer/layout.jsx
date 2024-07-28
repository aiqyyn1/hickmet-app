import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function RootLayout({ children }) {
  return <div>
    <Header/>
    {children}
    <Footer/>
    </div>;
}
