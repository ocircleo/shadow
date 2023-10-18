import { useEffect, useState } from 'react';
import InstractorsCard from './InstractorsCard';

const Instractors = () => {
    const [instractors, setInstractors] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-beta-tan.vercel.app/isntractorlimited').then(res => res.json()).then(data => {    console.log(data)
            setInstractors(data)
        })
    }, [])
    return (
        <>
            <h2 className='text-center font-semibold text-3xl capitalize py-4'>Our Instractors</h2>
        <div className="flex gap-3 flex-wrap mx-auto items-center justify-center my-5">
            {
                instractors.map(element => <InstractorsCard key={element._id} data={element}></InstractorsCard>)
            }
        </div>
        </>
    );
};

export default Instractors;