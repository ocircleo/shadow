/* eslint-disable react/prop-types */

const SingleInstractor = ({ data }) => {
    let { name, email, role, imgUrl } = data
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex gap-4 items-center ">
                     <img src={imgUrl} alt={name} className="h-[100px] bg-gray-200 w-[100px] rounded-full border-4 border-blue-400" />
                <h2 className="card-title capitalize">{name}</h2>
                </div>
               
                <p className="capitalize">Role: {role}</p>
                <p className=" font-semibold">Email: {email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> Show more</button>
                </div>
            </div>
        </div>
    );
};

export default SingleInstractor;