

const Featured = () => {
  return (
    <div className="wrapper ">
    <div className="uppercase font-ibm text-brsecondary my-5 px-2 text-sm">
       <div>01 / in the margins</div>
    </div>


      <div className="flex gap-10">
    {/*Book Featured*/}
    <div className="book-featured-wrapper p-15 bg-brforeground  justify-center items-center border-2 border-brstroke">

        <div className="font-ibm flex gap-3 items-center uppercase font-bold tracking-tight mb-5 text-brsecondary">
          <div className="w-2 h-2 bg-brstroke rounded-full"></div>
          <div>My Absolute Favorite</div>
        </div>

      <div className="container relative flex gap-10">
      {/*rating*/}
      <div className="absolute top-0 right-0 py-2 px-5 flex gap-5 font-ibm border-brstroke border-2">
        <div className="">5.0</div>
        <div>/</div>
        <div>5</div>
      </div>

        {/*book img*/}
        <div className="w-52">
          <img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668075760/pet-sematary-9781668075760_lg.jpg" alt="" />
        </div>

       {/*book details */}
      <div className="w-1/2">
        {/*genre,release date, page count*/}
        <div className="uppercase font-ibm flex gap-3 mt-5 mb-10 text-brsecondary text-xs">
          <div>Horror</div>
          <div>·</div>
          <div>1983</div>
          <div>·</div>
          <div>374 Pages</div>
        </div>

        {/*title*/}
        <div>
        <div className="font-baskerville text-4xl ">Pet Sematary</div>
        <div className="font-ibm ">by Stephen King</div>
        <div className="font-baskerville text-3xl my-10">Sometimes. Dead is Better.</div>

          <div className="font-lora text-md text-brsecondary">
           As a family, they've got it all...right down to the friendly car. But the nearby woods hide a blood-chilling truth-more terrifying than death itself-and hideously more powerful. The Creeds are going to learn that sometimes dead is better.
          </div>
        </div>
       </div>
      </div>
    </div>

      <div>

      <div className="current-read w-md p-5 bg-brforeground  justify-center items-center border-2 border-brstroke">

      <div>

        <div className="font-ibm flex gap-3 items-center uppercase font-bold tracking-tight mb-5 text-brsecondary">
          <div className="w-2 h-2 bg-brstroke rounded-full"></div>
          <div>Currently Reading</div>
        </div>
        </div>

        <div className="font-baskerville text-3xl mb-5 wrap-break-word">The Maid</div>

        <div className="font-lora text-xl">Nita Prose</div>

      </div>

          <div></div>
      </div>
    </div>
    </div>
  )

}

export default Featured;
