import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import Footer from '../../components/Footer/Footer.component'
import Header from '../../components/Header/Header.component';
import AppContext from '../../context/app.context';

const Layout = props => {
    const [isPlaying, setPlaying] = React.useState(true);
    const [isReset, setReset] = React.useState(false);
    const togglePlaying = () => {
        setPlaying(isPlaying => !isPlaying)
    }
    const clearResetSettings = () => {
        setReset(false);
    }
    const setResetSettings = () => {
        setReset(true);
    }
    return <div>
        <AppContext.Provider value={{ isAudioPlaying: isPlaying, isResetSettings: isReset, togglePlaying, clearResetSettings, setResetSettings }}>
            <Navbar />
            {props.children}
            {
                !props.withoutController &&
                <Footer />
            }
        </AppContext.Provider>
    </div>

}

export default Layout;