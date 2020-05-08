import React from 'react'
import './NavLink.css'
function NavLink() {

    return (
        <div >
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="navbar" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar" href="/Add">ADD Member</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar" href="/About">Photo</a>
                    </li>
                   
                </ul>
            </nav>
        </div>
    );
}
export default NavLink