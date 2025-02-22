const OurStoryComp = ({ image, name, position, quote }) => {
  return (
    <div className="text-center p-6 max-w-lg mx-auto border rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 mx-auto rounded-full"
      />
      <p className="text-lg italic mt-4">"{quote}"</p>
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p className="text-gray-500">{position}</p>
    </div>



  );
};

export default OurStoryComp;
