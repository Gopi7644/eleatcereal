const TestimonialCard = ({ image, quote, name, role }) => {
  return (
    <div className="bg-white h-80 rounded-lg shadow-lg flex items-center mb-30 text-center ">
      <div className="h-40 w-70 rounded-full ">
        <img
          className=" rounded-full border-1 border-gray-500 "
          src={image}
          alt={name}
        />
      </div>
      <div>
        <p className="text-gray-800 font-middle text-2xl mb-6">"{quote}"</p>
        <p className="text-gray-900 font-bold text-lg mt-2">{name}</p>
        <span className="text-gray-600 text-base font-light">{role}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
