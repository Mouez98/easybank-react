import React from 'react';

import '../../index.css'
import Footer from './footer/Footer';
import NavigationHeader from './navigtionHeader/NavigationHeader';
import Main from './sections/Main';

const Layout = () => {
   return <div className='layout'>
       <NavigationHeader />
       <Main />
       <Footer />
   </div>

}

export default Layout;