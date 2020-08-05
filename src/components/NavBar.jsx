import React from "react";

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {/* Navbar{" "} */}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>{" "}
                active counters
            </a>
        </nav>
    );
};

export default NavBar;

// class NavBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar{" "}
//                     <span className="badge badge-pill badge-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }

// export default NavBar;
