import foring from '../../../assets/images/foring.jpg'
// eslint-disable-next-line no-unused-vars
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Title = () => {
    return (
        <>        <div className="grid md:grid-cols-2 md:h-[calc(100vh-92px)] h-auto items-center justify-center px-5">
            <div className="col-span-2 md:col-span-1 min-h-[300px] w-full text-center flex flex-col items-center justify-center gap-5 px-5">
                <h2 className="text-4xl font-semibold capitalize">welcome to <span>Fluent verse</span></h2>
                <p>Gateway to Multilingual Proficiency: Expanding Horizons, Empowering Minds, and Connecting Cultures at the Premier International Language Institute</p>
            </div>
            <img src={foring} alt="" className='md:col-span-1 col-span-2 h-[400px] w-full object-cover' />

        </div>
            {/* <p className='text-center flex items-center justify-center '><BsFillArrowDownCircleFill className='text-3xl cursor-pointer'></BsFillArrowDownCircleFill></p> */}
        </>

    );
};

export default Title;