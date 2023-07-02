import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../private/provider/Provider";
import Myclassescart from "./Myclassescart";
import Loading from "../shared/loading/Loading";

const MyClasses = () => {
    const { userRole } = useContext(Authcontext)
    let [cart, setCart] = useState([])
    const [refetch, setRefetch] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const promises = userRole.cart.map(async (element) => {
                    const response = await fetch(`https://assignment-12-server-beta-tan.vercel.app/classes/${element}`);
                    const data = await response.json();
                    return data;
                });
                const results = await Promise.all(promises);
                setCart(results)
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false)
            }
        };
        fetchUserData();

    }, [userRole?.cart])
    return (
        <>
            {
                loading ? <Loading para={true}></Loading> : <>
                    <div className="flex gap-3 flex-wrap mx-auto items-center justify-center my-5">
                        {cart.map(element => <Myclassescart key={element._id} setLoading={setLoading} data={element} refetch={refetch} setRefetch={setRefetch}></Myclassescart>)}
                    </div>
                </>
            }
        </>
    );
};

export default MyClasses;