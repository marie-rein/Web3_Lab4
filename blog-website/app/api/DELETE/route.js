export async function DELETE(requete) {
    const { searchParams } = new URL(requete.url);
    const id = searchParams.get('id');

    try {
        if(id === null){
            throw new Error('Invalid ID');
        }
        const reponse = await fetch(`http://localhost:3000/publication/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(!reponse.ok){
            throw new Error('Une erreur est survenue');
        }
        return new Response(JSON.stringify({ message: 'Publication supprimée avec succès' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'La publication n\'existe pas' }), { status: 500 });
    }
}
   


