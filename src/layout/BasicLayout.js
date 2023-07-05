
import SampleNav from "./nav/SampleNav";


const BasicLayout = ({children}) => {
    return ( 
    <div className="container mx-auto min-w-[1280px] bg-blue-500">

        <div>
            <SampleNav></SampleNav>
        </div>

        

        <div className="border-8 bg-violet-600 h-[600px] mx-auto">
            <div className="items-center">{children}</div>
        </div>

    </div> );
}
 
export default BasicLayout;