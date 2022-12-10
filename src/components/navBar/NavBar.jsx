import CardWidget from "../cardWidget/./CardWidget";
import "./NavBar.scss"
import {CgShoppingCart} from "react-icons/cg"

const NavBar = () => {
    return (
        <div>
            <div className="containerHeader container-fluid">
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <div>
                            <img
                                src="https://res.cloudinary.com/demo/image/upload/w_70,h_53,c_scale/turtles.jpg"
                                alt=""
                            />
                        </div>
                        <div class="navbar-brand" href="#">Restaurante el Cangrejo Feliz</div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="containerCrab">
                                <CardWidget />
                            </div>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <div class="nav-link active" aria-current="page" href="#">Menu de dia</div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link" href="#">Comida Italiana</div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link" href="#">Comida Asiatica</div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link active" aria-current="page" href="#">Mi carrito</div>
                                    <CgShoppingCart/>
                                </li>
                                <li class="nav-item dropdown">
                                    <div class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        De la Casa
                                    </div>
                                    <ul class="dropdown-menu">
                                        <li><div class="dropdown-item" href="#">Cangrejo Feliz</div></li>
                                        <li><div class="dropdown-item" href="#">Langosta Feliz</div></li>
                                        <li><div class="dropdown-item" href="#">Salmón Feliz</div></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
