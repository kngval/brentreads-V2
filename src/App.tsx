import Featured from "./components/Featured"
import Header from "./components/Header"
import Navbar from "./components/Navbar"



function App() {

  return (
    <>
     <div className=" min-h-screen bg-brmain text-brtext flex justify-center">
       <div className="w-[90%] py-2">
         <Header />
         {/*line break */}
          <div className="h-0.5  bg-brstroke my-10"></div>

          <Navbar />

          {/*Featured*/}
          <Featured />
       </div>


      </div>
    </>
  )
}

export default App
