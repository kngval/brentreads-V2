import BracketWord from "../utils/bracketWord";
const Navbar = () => {

  return (
    <div className="hidden lg:flex justify-between items-center  font-ibm font-bold text-brsecondary mb-20">
      {/*Navigation*/}
      <div className="flex gap-8">
        <div><BracketWord>Home</BracketWord></div>
        <div><BracketWord>Bookshelf</BracketWord></div>
        <div><BracketWord>Reviews</BracketWord></div>
        <div><BracketWord>Reading List</BracketWord></div>
        <div><BracketWord>About</BracketWord></div>
      </div>

      {/*Search Bar*/}
      <div className="flex gap-5">
        <input type="text" className="w-60 outline-none" placeholder="Find a book or author..." />
        <span>/</span>
      </div>
    </div>
  )

};

export default Navbar;
