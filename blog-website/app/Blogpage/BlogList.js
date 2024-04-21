 "use client";

import { useState, useEffect } from 'react';
import BlogCard from "./BlogCard";
import { initPublications, getPublications } from '../indexeddb';

function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;
    const [totalPages, setTotalPages] = useState(0);
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true); // État de chargement

    useEffect(() => {
       
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/publication');
                if (!response.ok) {
                    throw new Error(`Une erreur est survenue : ${response.status}`);
                }
                const data = await response.json();
                setPublications(data);
                //loop dans les publications pour les sauvegarder dans IndexedDB
                for (let publication of data) {
                    if(!publication.id) {
                        await initPublications([publication]);
                    }
                }
                
                console.log(data);
                setTotalPages(Math.ceil(data.length / cardsPerPage));
                setLoading(false); // Mettre fin au chargement lorsque les données sont récupérées
            } catch (error) {
                console.error(error);
                // Récupérer les publications depuis IndexedDB
                try {
                    const pubIndexeddb = await getPublications();
                    setPublications(pubIndexeddb);
                   // console.log(pubIndexeddb);
                    setTotalPages(Math.ceil(pubIndexeddb.length / cardsPerPage));
                } catch (error) {
                    console.error("Erreur lors de l'initialisation des publications dans IndexedDB :", error);
                } finally {
                    setLoading(false); // Mettre fin au chargement même si une erreur se produit
                }
            }
        }
        fetchData();
    }, []);

    function trimText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '........';
        }
        return text;
    }

    function updatePagination() {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, publications.length); 
        const cards = document.querySelectorAll('.col-12.col-lg-4');
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function handlePageChange(page) {
        const newPage = Math.max(1, Math.min(page, totalPages)); 
        setCurrentPage(newPage);
    }

    if (loading) {
        return <div><h1 className='text-center'> Loading...</h1></div>; // Afficher le message de chargement
    }

    return (
        <div className="container">
            <div className="row" id="contenuPublication">
                {publications.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((publication, index) => ( 
                        <BlogCard
                            idPublication={publication.id}                     
                            titre={publication.titre}
                            contenu={trimText(publication.contenu, 40)}
                            key={index}
                        />
                ))}
            </div>
            <div className="pagination d-flex justify-content-center mx-auto" id="pagination">
                <button id="prev" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button key={page} className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                ))}
                <button id="next" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
            <p id="page-numbers" className="text-center">Page {currentPage} of {totalPages}</p>
        </div>
    );
}

export default BlogList;

