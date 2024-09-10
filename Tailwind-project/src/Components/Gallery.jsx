import React from 'react'

const Gallery = () => {
  return (
    <>
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-5xl font-medium title-font text-center text-gray-900 lg:w-full lg:mb-0 mb-4">Gallery</h1>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 mt-11">
      <div className="flex flex-wrap w-1/2 ">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center transform hover:scale-105 transition-transform duration-300 rounded-lg  block" src="https://media.istockphoto.com/id/1073935306/photo/girls-carrying-shopping-bags.jpg?s=612x612&w=0&k=20&c=JB-TrME32dc0VTnaXVxsbJIExZqR71m-iyVOnG-7puM=" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center hover:scale-105 transition-transform duration-300 rounded-lg block" src="https://as2.ftcdn.net/v2/jpg/02/41/12/09/1000_F_241120944_lLWKI0zS2vGyqa7yZbAvCJpOyZLhZxxB.jpg" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300 rounded-lg block" src="https://thumbs.dreamstime.com/b/portrait-girl-standing-mall-doing-shopping-portrait-girl-standing-mall-doing-shopping-179146374.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center hover:scale-105  transition-transform duration-300 rounded-lg block" src="https://img.freepik.com/free-photo/adult-women-happy-shopping-together_23-2148385722.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center hover:scale-105 transition-transform duration-300 rounded-lg block" src="https://st3.depositphotos.com/5444644/15662/i/450/depositphotos_156625116-stock-photo-young-woman-with-shopping-bags.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center hover:scale-105 transition-transform duration-300 rounded-lg block" src="https://cdn.create.vista.com/api/media/small/156624494/stock-photo-young-woman-with-shopping-bags" />
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}

export default Gallery
