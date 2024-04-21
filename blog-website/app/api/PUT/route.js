export async function PUT(requete) {
    const { searchParams } = new URL(requete.url);
    const id = searchParams.get('id');
    const { titre, auteur, contenu } = await requete.json();

    try {
        if(id === null){
            throw new Error('Invalid ID');
        }
        const reponse = await fetch(`http://localhost:3000/publication/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titre : titre,
                auteur : auteur,
                contenu : contenu
            }), 
        });

        return new Response(JSON.stringify({ message: 'Publication modifiée avec succès' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'La publication n\'existe pas' }), { status: 500 });
    }
   
   
}