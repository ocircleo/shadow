import { useEffect, useState } from "react";
import SingleInstractor from "./instractors/SingleInstractor";


const Instractors = () => {
    const [instractors, setInstractors] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-beta-tan.vercel.app/isntractor').then(res => res.json()).then(data => setInstractors(data))
    }, [])
    return (
        <div className="flex gap-3 flex-wrap mx-auto items-center justify-center my-5">
            {
                instractors.map(element => <SingleInstractor key={element._id} data={element}></SingleInstractor>)
            }

        </div>
    );
};

export default Instractors;