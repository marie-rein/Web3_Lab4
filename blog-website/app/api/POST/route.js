export async function POST(requete) {
    const { titre, auteur, contenu } = await requete.json();
    const datePublication = new Date().toISOString().split('T')[0];
    

    const reponse = await fetch('http://localhost:3000/publication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titre : titre,
            auteur : auteur,
            contenu : contenu,
            datePublication : datePublication
        }),
        
    });

    if (!reponse.ok) {
        throw new Error('Une erreur est survenue');
    }

    return Response.json({ message: 'Publication ajoutée avec succès' });

}