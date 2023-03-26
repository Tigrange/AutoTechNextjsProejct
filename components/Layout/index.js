import Header from "components/Header";
import SeoHead from "components/SeoHead";
import Footer from "components/Footer";

const Layout = ({children}) =>{
    return (
      <>
        <SeoHead />
        <main className="page w-100" tabIndex="-1">
          <Header />
          {children}
          <Footer/>
        </main>
      </>
    );
};
export default Layout;