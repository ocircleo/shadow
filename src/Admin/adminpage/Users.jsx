import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import Loading from "../../shared/loading/Loading";

const Users = () => {
    let [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(true)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://assignment-12-server-beta-tan.vercel.app/users').then(res => res.json()).then(data => {
            setUsers(data)
            setLoading(false)
        })
    }, [changed])
    return (

        <>
            {
                loading ? <Loading para={true}></Loading> : <>



                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Empower</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map(element => <UsersTable changed={changed} setChanged={setChanged} key={element._id} data={element}></UsersTable>)
                                }
                            </tbody>
                            {/* foot */}
                        </table>
                    </div>
                </>
            }
        </>

    );
};

export default Users;