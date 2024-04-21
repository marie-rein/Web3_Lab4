import Image from "next/image";
import React from 'react';
import Link from 'next/link'; // Importez Link depuis Next.js

function BlogCard(props) {
    const { idPublication, titre, contenu } = props;

    return (
        <div className='col-12 col-lg-4'>
            <Link href={`BlogDetailsPage/${idPublication}`} className='card p-3 border-secondary border-5 rounded-4 hover-zoom mx-auto'>
                
                    <img src='../photos/blog.jpg' alt='blog image' height="200" width="280" />
                    <div className="card-body">
                        <h5 className='card-title text-white'>{titre}</h5>
                        <p className='card-text'>{contenu}</p>
                    </div>
                
            </Link>
        </div>
    );
}

export default BlogCard;

