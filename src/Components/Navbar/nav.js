import React,{Component} from 'react';
import './nav.css';

class NavBar extends Component{
    render(){
        return(
            <>
            <nav>
                <div className="Logo">
                    <h3 className="logo-head">The</h3>
                    <span>Siren</span>
                </div>

                <div className="head-list">
                    <ul className="lists">
                        <li>Home</li>
                        <li>Bollywood</li>
                        <li>Technology</li>
                        <li>Hollywoood</li>
                        <li>Fitness</li>
                        <li>Food</li>
                    </ul>

                </div>

                
            </nav>
            </>
        )
    }
}


export default NavBar;