

import Navbar from "./component/navbar";
import Categories from "./component/Categories";
import Sales from "./component/Sales";
import Recomment from "./component/Recomment";
import Topic from "./component/Topic";
import Popular from "./component/Popular";
import Footer from "./component/Footer";


function App()
{
   return(
    <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sales></Sales>
    <Recomment></Recomment>
    <Topic></Topic>
    <Popular></Popular>
    <Footer></Footer>
  </div>
   )
}

export default App

