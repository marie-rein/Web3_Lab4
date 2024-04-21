 "use client";

import { useEffect, useState } from "react";
import { getPublication } from '../../indexeddb';

function BlogDetails({ idPublication }) {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/publication/${idPublication}`);
                if (!response.ok) {
                    throw new Error(`Une erreur est survenue : ${response.status}`);
                }
                const publication = await response.json();
                setDetails(publication);
                setLoading(false); // Fin du chargement lorsque les données sont récupérées
            } catch (error) {
                console.error(error);
                // Récupérer la publication dans indexeddb
                try {
                    const dataindexdb = await getPublication(idPublication);
                    setDetails(dataindexdb);
                } catch (error) {
                    console.error("Erreur lors de la récupération de la publication depuis IndexedDB :", error);
                } finally {
                    setLoading(false); // Fin du chargement même en cas d'erreur
                }
            }
        };
    
        fetchData();
    }, [idPublication]);

    if (loading) {
        return <div><h1 className="text-center">Loading...</h1></div>; // Affichage du message de chargement
    }

    // Affichage des détails de la publication une fois le chargement terminé
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <img src="../photos/cepipic.jpg" id="imageBlog" alt="Blog" />
                </div>
            </div>

            <br />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <p id="title">{details.titre}</p>
                        <p className="contenu">{details.contenu}</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <img src="../photos/caption.jpg" id="caption" alt="caption" />
                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-center" id="auteur">{details.auteur}</p>
                        <p className="text-center mb-4">{details.datePublication}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p id="contenu2" >{details.contenu}</p>
                        <p id="contenu3" >{details.contenu}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
