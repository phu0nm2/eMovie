import React from 'react'
import Header from '../../components/Header'
import LoadingSpin from '../../components/LoadingSpin';

const Layout = ({ loading, children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            { loading && <LoadingSpin /> }
        </React.Fragment>
    )
}

export default Layout
