import React from 'react';

import '../../index.css'
import NavigationHeader from './navigtionHeader/NavigationHeader';
import Main from './sections/Main';

const Layout = () => {
   return <div className='layout'>
       <NavigationHeader />
       <Main />
       footer
   </div>

}

export default Layout;