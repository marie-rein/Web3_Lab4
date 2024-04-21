'use client'
import AjouterPub from "./AjouterPub";
import { useRouter } from "next/navigation";
//ajouter une publication dans indexeddb
import { initDB, addPublication } from '../indexeddb';

export default function EnvoyerPub() {

    const router = useRouter();
    async function ajouterUnePublication(formData) {

        await AjouterPub(formData);
        //rafraichir la liste publications
        //window.location.reload();

        // rediriger vers la page d'accueil
        router.push('../')
    }

    return (
        <div className="container mt-5" id="formulaire">
        <div className="row justify-content-center">
            <div className="col">
                <h1 className="text-center">Ajouter une publication</h1>
                <form action={ajouterUnePublication}>
                    <div className="form-group">
                        <label for="titre">Titre :</label>
                        <input type="text" className="form-control" id="titre" name="titre" required/>
                    </div>
                    <div className="form-group">
                        <label for="auteur">Auteur :</label>
                        <input type="text" className="form-control" id="auteur" name="auteur" required/>
                    </div>
                    <div className="form-group">
                        <label for="contenu">Contenu :</label>
                        <textarea className="form-control" id="contenu" name="contenu" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="envoyer btn btn-primary btn-lg">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
    );

}