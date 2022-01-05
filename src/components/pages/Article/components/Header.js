import React from 'react'

const Header = () => {
    return (
        <div style={headerStyle}>
            <p style={pageTitleStyle}>ARTICLE PAGE</p>
            <p style={descStyle}>—Read about past and current projects, tutorials, and announcements—</p>
        </div>
    )
}

const headerStyle = {
    textAlign: 'center',
    
    marginTop: '3%'
},

pageTitleStyle = {
    fontWeight: 'bold',
    color: '#9578D3',
    fontSize: 100,
    margin: 'auto',
    marginBottom: 0,
    paddingBottom: 10,
    width: '50%',
    textShadow: '4px 4px 0px #513096',
    fontFamily: 'Comic Sans MS'
},

descStyle = {
    margin: 50,
    fontSize: 30,
    color: 'gray'
}


export default Header
