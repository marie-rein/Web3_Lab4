"use client"
function Comment(props)
{
    const {contenu} = props;

    return(
        <div className="d-flex flex-start">
        <img className="rounded-circle shadow-1-strong me-3"
            src="../photos/iconcomment.png" alt="avatar" width="40"
            height="40" />
        <div className="flex-grow-1 flex-shrink-1">
            <div className="d-flex">
                <p className="small mb-0 align-items-end">
                    {contenu}
                </p>
            </div>
        </div>   
    </div>
    );
}
export default Comment