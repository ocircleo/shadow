/* eslint-disable react/prop-types */


const InstractorsCard = ({ data }) => {
    let { email, name, role,img } = data
    return (

            <div className="card card-compact w-96 bg-base-100 shadow-xl text-center flex-row px-4">
          <figure><img src={img || 'https://source.unsplash.com/random/100x100/?profile'} alt={name} className="h-[100px] w-[100px] rounded-full bg-gray-200 object-cover" /></figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title justify-center">{name}</h2>
            <p className="capitalize">role: {role}</p>
            <p className="capitalize">email: {email}</p>
          </div>
     </div>
    );
};

export default InstractorsCard;