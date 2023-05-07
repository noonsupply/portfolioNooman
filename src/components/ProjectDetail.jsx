import React, { useState } from 'react';
import Image from 'next/image';
import Contags from "../images/projets/Contags.png"
import Examee from "../images/projets/Examee.png"
import Flavorites from "../images/projets/Flavorites.png"
import Troverlance from "../images/projets/Troverlance.png"
import Masonry from 'react-masonry-css';


const products = [
    {
      id: 1,
      name: 'Contags',
      category: 'Mobile',
      href: 'https://github.com/noonsupply/contags-frontend',
      Technologies: '🛠️ React Native, Node.js, MongoDB',
      imageSrc: Contags,
      imageAlt:
        'Technologies : React Native, Node.js, Mongoose',
    },
    {
        id: 2,
        name: 'Examee',
        category: 'Web',
        href: 'https://examee.fr',
        Technologies: '🛠️ React, Node.js, MongoDB',
        imageSrc: Examee,
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 3,
        name: 'Flavorites',
        category: 'Web',
        href: 'https://flavorites.noomanmiled.com',
        Technologies: '🛠️ React, Node.js, MongoDB',
        imageSrc: Flavorites,
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 4,
        name: 'Troverlance',
        category: 'Mobile',
        href: '#',
        Technologies: '🛠️ React, Node.js, MongoDB',
        imageSrc: Troverlance,
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
  ]
export default function ProjectDetail (){


    const [selectedCategory, setSelectedCategory] = useState('Tout');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredProducts = products.filter((product) =>
      selectedCategory === 'Tout' ? true : product.category === selectedCategory
    );

    const breakpointColumnsObj = {
        default: 2, // 2 colonnes par défaut
        1100: 2,
        700: 2,
        500: 1
      };
    

    return(

        <>
        <span className="inline-flex rounded-md shadow-sm isolate">
      <button
        type="button"
        onClick={() => handleCategoryClick('Tout')}
        className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Tout
      </button>
      <button
        type="button"
        onClick={() => handleCategoryClick('Web')}
        className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-semibold text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Web
      </button>
      <button
        type="button"
        onClick={() => handleCategoryClick('Mobile')}
        className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-semibold text-gray-900 bg-white rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Mobile
      </button>
    </span>
        <span className="inline-flex rounded-md shadow-sm isolate">
          {/* ... */}
        </span>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="mt-6 my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative group">
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-3 aspect-w-4">
                <Image src={product.imageSrc} width={500} height={500} alt={product.imageAlt} className="object-cover object-center" />
                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter dark:text-zinc-200">
                    Voir le projet
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900 dark:text-zinc-200">
                <h3>
                  <a href={product.href} target="_blank">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.Technologies}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </Masonry>
      </>

    )
}