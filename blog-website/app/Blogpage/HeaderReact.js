
import Image from "next/image";
import Link from "next/link";

const HeaderReact = () => {
  return (
    <div className="container-fluid mb-5 ">
    <div className="row col">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="../photos/logo2.PNG" alt="logo" height="100" class="rounded-5" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex align-items-center row">
                    <li className="nav-item col-2 " >
                        <a className="nav-link" href="../">ACCUEIL</a> 
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#">NOS SERVICES</a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="../AjouterPublication">AJOUTER PUB</a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#">BLOG</a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                    <li className="nav-item col-2">
                        <a className="nav-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" fill="currentColor" color="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
  );
}

export default HeaderReact





