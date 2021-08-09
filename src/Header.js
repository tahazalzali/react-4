import React,{Component} from "react";
class Header extends Component {
render(){
    return(
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img style={{width: "20%",height: "40px", objectFit:"fill"}} src="tahalogo-noblue.png"
                    className="me-2" height="20" alt="logo" loading="lazy" />
                <small>Online HTML 5 editor</small>
            </a>
        </div>
    </nav>
    )
}
}
export default Header;