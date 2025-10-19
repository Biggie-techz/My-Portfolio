import {
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

const Socials = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="grid p-3 bg-white rounded-full group hover:scale-110 hover:bg-black/50 transition-all duration-300 cursor-pointer ">
        <FaWhatsapp className="text-2xl text-black group-hover:text-purple-600 transition-all duration-300" />
      </div>
      <div className="grid p-3 bg-white rounded-full group hover:scale-110 hover:bg-black/50 transition-all duration-300 cursor-pointer ">
        <FaRegEnvelope className="text-2xl text-black group-hover:text-purple-600 transition-all duration-300" />
      </div>
      <div className="grid p-3 bg-white rounded-full group hover:scale-110 hover:bg-black/50 transition-all duration-300 cursor-pointer ">
        <FaLinkedinIn className="text-2xl text-black group-hover:text-purple-600 transition-all duration-300" />
      </div>
      <div className="grid p-3 bg-white rounded-full group hover:scale-110 hover:bg-black/50 transition-all duration-300 cursor-pointer ">
        <FaXTwitter className="text-2xl text-black group-hover:text-purple-600 transition-all duration-300" />
      </div>
      <div className="grid p-3 bg-white rounded-full group hover:scale-110 hover:bg-black/50 transition-all duration-300 cursor-pointer ">
        <FaInstagram className="text-2xl text-black group-hover:text-purple-600 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Socials;
