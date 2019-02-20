import React from "react"

class Navbar extends React.Component{
    state = {
        input: ""
    }

  

    render() {
        return (
            <div>
                <a href = "/">          
                <button >Home</button> 
                </a> 
                <a href ="/Saved">
                <button >Saved</button>  
                </a>
                          
            </div>
        )
    }
}

export default Navbar;