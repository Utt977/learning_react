import './navbar.css';

function Navbar(props){
    return(
        <div>
            <ul className="container">
                <li>{props.home}</li>
                <li>{props.service}</li>
                <li>{props.about}</li>
                <li>{props.setting}</li>
                <li>{props.profile}</li>
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    setting : "Setting",
    profile : "Profile"
}

export default Navbar;