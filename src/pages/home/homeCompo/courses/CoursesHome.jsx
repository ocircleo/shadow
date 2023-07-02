import { useEffect, useState } from 'react';
import CoursesCartH from './CoursesCartH';
const CoursesHome = () => {
    const [carts, setCart] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-beta-tan.vercel.app/classeslimited').then(res => res.json()).then(data => {
            setCart(data)
        })
    }, [])
    return (
        <>
         <h2 className='text-center font-semibold text-4xl capitalize py-4'>Our popular classes</h2>
            <div className="flex gap-3 flex-wrap mx-auto items-center justify-center my-5">
                {
                    carts.map(element => <CoursesCartH key={element._id} data={element}></CoursesCartH>)
                }
            </div>
        </>
    );
};

export default CoursesHome;