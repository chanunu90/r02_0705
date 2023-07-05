import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 

        <div className="flex justify-between w-[1200px] border-4 border-red-500 mx-auto">

            <div className="logo m-4 text-4xl border-2"><img className="w-[16rem]" src= {require("../../image/logo.png")}></img></div>

            <div className="flex justify-center m-6 p-4 text-white font-extrabold">
                <div className="m-4 text-4xl border-2"><h1 className="text-2xl"><Link to={"/"}>Main</Link></h1></div>
                <div className="m-4 text-4xl border-2"><h1><Link to={"/about"}>About</Link></h1></div>
                <div className="m-4 text-4xl border-2"><h1><Link to={"/board/list"}>Board</Link></h1></div>
            </div>

            <div className="logo m-4 text-4xl border-2">sns</div>

        </div>

     );
}
 
export default SampleNav;