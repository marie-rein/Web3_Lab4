"use server";
export default async function AjouterPub(formData) {

        const titre = formData.get('titre');
        const auteur = formData.get('auteur');
        const contenu = formData.get('contenu');
        const datePublication = new Date().toISOString().slice(0, 10);

        try {
            const response = await fetch("http://localhost:3000/publication", {
                method: "POST",
                body: JSON.stringify({
                    titre: titre,
                    auteur: auteur,
                    contenu: contenu,
                    datePublication: datePublication
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            if (response.ok) {
                document.getElementById('titre').value = '';
                document.getElementById('auteur').value = '';
                document.getElementById('contenu').value = '';
            } 
           
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la publication :', error);
        }
    }   

