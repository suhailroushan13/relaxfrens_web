import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import Footer from '../../components/Footer/Footer.component'

const Layout = props => {
    const [sounds, setSounds] = React.useState([{
        name: "",
        file: "",
        volume: 0,
        icon: ""
    }]);

    return <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>

}

export default Layout;