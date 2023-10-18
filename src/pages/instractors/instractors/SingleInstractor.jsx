/* eslint-disable react/prop-types */

const SingleInstractor = ({ data }) => {
    let { name, email, role, imgUrl } = data
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex gap-4 items-center ">
                     <img src={imgUrl || 'https://source.unsplash.com/random/100x100/?face'} alt={name} className="h-[100px] bg-gray-200 w-[100px] rounded-full border-4 border-red-500" />
                <h2 className="card-title capitalize">{name}</h2>
                </div>
               
                <p className="capitalize">Role: {role}</p>
                <p className=" font-semibold">Email: {email}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-error"> Show more</button>
                </div>
            </div>
        </div>
    );
};

export default SingleInstractor;