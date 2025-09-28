
import { getAllCategories } from '@/app/ApiServices/categoriesActions/categories.api'
import { Icategory } from '@/app/interface/category-interface';
import React from 'react'
import CategoryDetails from '@/app/_components/categoryDetails/page';


export default async function Categories() {
      const categoriesList = await getAllCategories();

  return (
    <div className='w-[90%] mx-auto mt-5'>
      <div className='grid md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-5'>
      {
        categoriesList.map((category : Icategory)=>{
          return(
            // <div key={category._id} className='shadow-md rounded-lg border-1 border-gray-300 hover:shadow-green-700 transition-all duration-200'>
            //   <img src={category.image} className='h-[300px] w-full  aspect-auto' alt="" />
            //   <h3 className='text-center my-3 font-blod text-green-700 text-2xl'>{category.name}</h3>
            // </div>
             <CategoryDetails  key={category._id} data={category}></CategoryDetails>
          )

           
        })
      }
      </div>
     
    </div>
  )
}
