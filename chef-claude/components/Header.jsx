import logo from '../images/chef.png';
function Header(){
    // function mouseHover(){
    //     window.alert("Chef Logo hovered!");
    // }
    return(
        <header className="header">
        <nav className="nav">
        
        <img  className="image-chef" src={logo} alt="chef-logo"/>
        <h2>Chef Claude</h2>
        </nav>
        </header>
    )



}

export default Header;