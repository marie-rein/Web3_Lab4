                                                                          
export default  function AddComment({ idPublication }) {
    async function PostComment(commentData) {

        "use server";
        const comment = commentData.get('commentaire');
        await fetch('http://localhost:3000/commentaire', {
            method: 'POST',
            body: JSON.stringify({ 
                idPublication: idPublication, 
                contenu: comment, 
                date: new Date().toISOString().slice(0, 10) }),
            headers: {
                'Content-Type': 'application/json',
            }
            
        });
        //reset le formulaire
        commentData.set('commentaire', '');          //mon reset ne marche pas et la recharge ne fonctionne pas
    }
    //reinitialiser le formulaire
        
   
    return (
        <div className="container mb-5">
            <div className="row">
                <form className="form-group" action={PostComment}>
                    <h3>Commentaires</h3>
                <div className="row">
                    <textarea rows="5" cols="30" name ="commentaire" className="mt-4" />
                </div>
                <div className="row">
                    <div className="text-end">
                        <button type="submit" className="envoyer btn btn-primary btn-lg">Envoyer</button>
                    </div>      
                </div>
                    
                </form>           
            </div>
           
        </div>
    );
   
}

