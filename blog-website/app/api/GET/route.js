export async function GET(requete) {
  const { searchParams } = new URL(requete.url);
  const id = searchParams.get('id');


    try {
        if(id === null){
            const reponse = await fetch('http://localhost:3000/publication',{  
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
        
            if(!reponse.ok){
                throw new Error('Une erreur est survenue');
            }
            const data = await reponse.json();
            return new Response(JSON.stringify(data), { status: 200 });
        }
        else{
            const reponse = await fetch('http://localhost:3000/publication/'+id,{
                headers: { 
                    'Content-Type': 'application/json',
        
                }});
                if(!reponse.ok){
                    throw new Error('Une erreur est survenue');
                }
                const data = await reponse.json();
                return new Response(JSON.stringify(data), { status: 200 });
        }
       
      
      } catch (error) {
          return new Response(JSON.stringify({ message: 'La publication n\'existe pas' }), { status: 500 });
      }
}