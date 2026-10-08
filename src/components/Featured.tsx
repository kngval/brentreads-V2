const Featured = () => {
  return (
    <div className="wrapper ">
      <div className="uppercase font-ibm text-brsecondary my-5 px-2 text-sm">
        <div>01 / in the margins</div>
      </div>

      {/*book featured & current read wrapper*/}
      <div className="flex flex-col-reverse  gap-5">
        {/*Book Featured*/}
        <div className="book-featured-wrapper px-5 py-15 lg:p-15 bg-brforeground   items-center border-2 border-brstroke">

          <div className="font-ibm text-xs  flex gap-3 items-center justify-center lg:justify-normal uppercase font-bold tracking-tight  text-brsecondary lg:mb-5">
            <div className="w-2 h-2 bg-brstroke rounded-full"></div>
            <div>Current Favorite</div>
          </div>

          {/*book details container*/}
          <div className="container relative flex justify-center flex-col lg:flex-row lg:justify-normal gap-10">

          <div className="flex flex-col-reverse lg:flex-row-reverse gap-5 justify-center lg:justify-normal">
            {/*rating*/}
            <div className="flex justify-center items-center">
            <div className="text-sm sm:text-md lg:absolute lg:top-0 lg:right-0 py-2 px-5 flex items-center gap-2 font-ibm border-brstroke border-2">
              {/*star icon*/}
                   <svg className="w-6" fill="var(--opposite-color-brmain)"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path></g></svg>
              <div className="">5.0</div>
              <div className="">/</div>
              <div className="">5</div>
            </div>
            </div>

            {/*book img*/}
            <div className="flex justify-center">
                <div className="w-42">
                  <img
              className=""
                src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668075760/pet-sematary-9781668075760_lg.jpg"
                alt=""
              />

              </div>
            </div>

            <div className="uppercase font-ibm flex justify-center lg:hidden gap-3 mt-5 lg:mb-10 text-brsecondary text-xs">
              <div>Horror</div>
              <div>·</div>
              <div>1983</div>
              <div>·</div>
              <div>374 Pages</div>
            </div>
          </div>
            {/*book details */}
            <div className="lg:w-1/2">
              {/*genre,release date, page count*/}
              <div className="hidden uppercase font-ibm lg:flex gap-3 mt-5 mb-10 lg:mt-0  text-brsecondary text-xs">
                <div>Horror</div>
                <div>·</div>
                <div>1983</div>
                <div>·</div>
                <div>374 Pages</div>
              </div>

              {/*description*/}
              <div className="text-center lg:text-start">
                <div className="font-baskerville text-2xl lg:text-4xl ">Pet Sematary</div>
                <div className="font-ibm ">by Stephen King</div>
                <div className="font-baskerville lg:text-3xl my-5 lg:my-10">
                  Sometimes. Dead is Better.
                </div>

                {/*book desc*/}
                <div className="hidden justify-center lg:block font-lora text-center text-sm lg:text-lg sm:text-md text-brsecondary lg:text-start">
                  <div className="w-80 sm:w-92 lg:w-auto">
                  As a family, they've got it all...right down to the friendly
                  car. But the nearby woods hide a blood-chilling truth-more
                  terrifying than death itself-and hideously more powerful. The
                    Creeds are going to learn that sometimes dead is better.
                  </div>
                </div>

                {/*review link*/}
                <div className="font-ibm underline">Read my review {"→"}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/*current read wrapper*/}
          <div className="current-read lg:w-md p-5 bg-brforeground  justify-center items-center border-2 border-brstroke">
            <div>
              <div className="font-ibm flex gap-3 items-center uppercase font-bold tracking-tight mb-5 text-brsecondary">
                <div className="w-2 h-2 bg-brstroke rounded-full"></div>
                <div>Currently Reading</div>
              </div>
            </div>

            <div className="font-baskerville text-3xl mb-5 wrap-break-word">
              The Maid
            </div>

            <div className="font-lora text-xl">Nita Prose</div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
