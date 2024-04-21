'use client';


const dbName = 'publicationDB';
const dbVersion = 1;
let db;


// Ouvrir la base de données
export const OuvrirDB = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(dbName, dbVersion);

        request.onerror = function (event) {
            reject('Erreur lors de l\'ouverture de la base de données : ' + event.target.error);
        };

        request.onsuccess = function (event) {
            db = event.target.result;
            resolve('Base de données ouverte avec succès');
        };

        request.onupgradeneeded = function (event) {
            db = event.target.result;

            // Définir un objet de magasin d'objets pour stocker les publications
            const pubStore = db.createObjectStore('publication', { keyPath: 'id', autoIncrement: true });
            pubStore.createIndex('titre', 'titre', { unique: false });
            pubStore.createIndex('auteur', 'auteur', { unique: false });
            pubStore.createIndex('datePublication', 'datePublication', { unique: false });
            pubStore.createIndex('contenu', 'contenu', { unique: false });

            // Définir un objet de magasin d'objets pour stocker les commentaires
            createCommentaireStore(event.target.transaction);
        };
    });
};

function createCommentaireStore(transaction) {
    const commentaireStore = transaction.db.createObjectStore('commentaire', { keyPath: 'id', autoIncrement: true });
    commentaireStore.createIndex('contenu', 'contenu', { unique: false });
    commentaireStore.createIndex('datePublication', 'datePublication', { unique: false });
    commentaireStore.createIndex('idPublication', 'idPublication', { unique: false });
}

// Définir une fonction pour ajouter une publication à la base de données
export function addPublication(publication) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['publication'], 'readwrite');
        const objectStore = transaction.objectStore('publication');
        const request = objectStore.add(publication);

        request.onsuccess = function (event) {
            console.log('Publication ajoutée avec succès à la base de données.');
            resolve();
        };

        request.onerror = function (event) {
            console.error('Erreur lors de l\'ajout de la publication à la base de données :', event.target.error);
            reject(event.target.error);
        };
    });
   
}


export function initPublications(publications) {
    return new Promise((resolve, reject) => {
        OuvrirDB().then(async () => {
            try {
                for (const publication of publications) {
                    await addPublication(publication);
                }
                resolve(publications);
            } catch (error) {
                reject(error);
            }
        });
    });
}

export function getPublications() {
    return new Promise((resolve, reject) => {
        OuvrirDB().then(() => {
            const transaction = db.transaction(['publication'], 'readonly');
            const objectStore = transaction.objectStore('publication');
            const request = objectStore.getAll();

            request.onsuccess = function (event) {
                resolve(request.result);
            };

            request.onerror = function (event) {
                reject(event.target.error);
            };
        }).catch(error => {
            reject(error);
        });
    });
}


//recuperer une seule publication

export function getPublication(id) {
    return new Promise((resolve, reject) => {
        OuvrirDB().then(() => {
            const transaction = db.transaction(['publication'], 'readonly');
            const objectStore = transaction.objectStore('publication');
            const request = objectStore.get(id);

            request.onsuccess = function (event) {
                
                resolve(request.result);

            };

            request.onerror = function (event) {
                reject(event.target.error);
            };
        }).catch(error => {
            reject(error);
        })
    });
}


//ajouter commentaire
export function addCommentaire(commentaire) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['commentaire'], 'readwrite');
        const objectStore = transaction.objectStore('commentaire');
        const request = objectStore.add(commentaire);
        request.onsuccess = function (event) {
            resolve('Commentaire ajouté avec succès à la base de données.');
        }

        request.onerror = function (event) {
            reject(event.target.error);

        }
    })
}

export function initDBCommentaire(commentaires) {
    OuvrirDB().then(async () => {
        for (const commentaire of commentaires) {
            await addCommentaire(commentaire);
           
        }
    });
    return commentaires;
}

//recuperer tous les commentaires
export function getAllCommentaires() {
    return new Promise((resolve, reject) => {
        OuvrirDB().then(() => {
            const transaction = db.transaction(['commentaire'], 'readonly');
            const objectStore = transaction.objectStore('commentaire');
            const request = objectStore.getAll();

            request.onsuccess = function (event) {
                resolve(request.result);
            };

            request.onerror = function (event) {
                reject(event.target.error);
            }
        }).catch(error => {
            reject(error);
        })
    });
}

//recuperer les commentaires d'une publication

export function getCommentaires(idPublication) {
    return new Promise((resolve, reject) => {
        OuvrirDB().then(() => {
            const transaction = db.transaction(['commentaire'], 'readonly');
            const objectStore = transaction.objectStore('commentaire');
            const index = objectStore.index('idPublication');
            const request = index.getAll(idPublication);

            request.onsuccess = function (event) {
                resolve(request.result);
            };

            request.onerror = function (event) {
                reject(event.target.error);
            };
        }).catch(error => {
            reject(error);
        })
    });
}

export function closeDB() {
    if (db) {
        db.close();
        db = null;
    }
}