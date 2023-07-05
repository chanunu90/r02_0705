import { Link } from "react-router-dom";

const TestLayout = ({children}) => {
    return ( <div>

        <div>
            <h1><Link to={"/"}>Main</Link></h1>
            <h1><Link to={"/about"}>About</Link></h1>
        </div>
        <div>
            {children}
        </div>

    </div> );
}
 
export default TestLayout;