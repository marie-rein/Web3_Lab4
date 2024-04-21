import Image from "next/image";

const FooterReact = () => {
  return (
    <div id="footer-container">
            <footer className="footer text-center bg-dark text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!">
                            <i className="fa fa-google"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!">
                            <i className="fa fa-github"></i>
                        </a>
                    </section>
                    <p className="">Centre d'expertise et de perfectionnement en informatique</p>
                    <p>2022</p>
                </div>
            </footer>
        </div>
  )
}

export default FooterReact
