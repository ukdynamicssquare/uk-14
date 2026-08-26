import Header from "./Header";
import Footer from "./Footer";
import HeaderWork from "./HeaderWork";
import FooterNew from "./FooterNew";

const Layouts = ({children }) => {
 const noHeader = children.type?.noHeader;
const noFooter = children.type?.noFooter;

return(
<>
 {!noHeader && <HeaderWork />}
    {/* <Header /> */}
    {/* <Footer /> */}
    {children}
    {/* <FooterNew /> */}
     {!noFooter && <FooterNew />}
</>

);
}
export default Layouts