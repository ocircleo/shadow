import { useContext, useEffect, useState } from "react";
import SingleClass from "./cassescompo/SingleClass";
import { Authcontext } from "../../private/provider/Provider";
import Loading from "../../shared/loading/Loading";


const AllClasses = () => {
    const [classe, setClasses] = useState([]),
        [loading, setLoading] = useState(true);
    const { userRefetch } = useContext(Authcontext)
    useEffect(() => {
        fetch('https://assignment-12-server-beta-tan.vercel.app/classes').then(res => res.json()).then(data => {
            setClasses(data)
            setLoading(false)
        })
    }, [userRefetch])
    return (
        <>
            {
                loading ? <Loading para={true}></Loading> : <>
                    <div className="flex gap-3 flex-wrap mx-auto items-center justify-center my-5">
                        {
                            classe.map(element => <SingleClass key={element._id} data={element}></SingleClass>)
                        }
                    </div>
                </>
            }


        </>


    );
};

export default AllClasses;