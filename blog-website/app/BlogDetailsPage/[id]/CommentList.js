   "use client";
import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import { initDBCommentaire, getAllCommentaires } from '../../indexeddb';

function CommentList({ idPublication }) {
    const [commentaires, setCommentaires] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let lesCommentaires;

                const response = await fetch('http://localhost:3000/commentaire');
                if (response.ok) {
                    const data = await response.json();
                    await initDBCommentaire(data);
                    lesCommentaires = data;
                } else {
                    throw new Error('Erreur lors du chargement des commentaires');
                }

                if (idPublication) {
                    lesCommentaires = lesCommentaires.filter(commentaire => commentaire.idPublication === idPublication);
                }

                setCommentaires(lesCommentaires);
            } catch (error) {
                console.error(error);
                // En cas d'erreur lors du chargement depuis l'API, récupérer les commentaires depuis IndexedDB
                const commentairesIndexedDB = await getAllCommentaires();
                if (idPublication) {
                    const filteredCommentaires = commentairesIndexedDB.filter(commentaire => commentaire.idPublication === idPublication);
                    setCommentaires(filteredCommentaires);
                } else {
                    setCommentaires(commentairesIndexedDB);
                }
            }
        };

        fetchData();
    }, [idPublication]);

    return (
        <div className="container mt-5 mb-5">
            <div className="row mx-auto" id="lescommentaires">
                {commentaires.map(commentaire => (
                    <Comment contenu={commentaire.contenu} key={commentaire.id} />
                ))}
            </div>
        </div>
    );
}

export default CommentList;



