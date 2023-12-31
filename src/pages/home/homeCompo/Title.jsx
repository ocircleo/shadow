// eslint-disable-next-line no-unused-vars
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Title = () => {
  return (
    <>
      {" "}
   
        <div className="col-span-2 md:col-span-1 min-h-[300px] w-full text-center flex flex-col items-center justify-center gap-5 px-5">
          <h2 className="text-4xl font-semibold capitalize">
            welcome to <span>triolingo</span>
          </h2>
          <p>
            We teach people how to talk foreign language and make them <br></br>
            confident. If your looking for a course to learn your desired 
            language just buy one.
          </p>
        </div>
      
      {/* <p className='text-center flex items-center justify-center '><BsFillArrowDownCircleFill className='text-3xl cursor-pointer'></BsFillArrowDownCircleFill></p> */}
    </>
  );
};

export default Title;
