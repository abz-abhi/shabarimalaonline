import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="bg-goldenyellow flex justify-center">
        <img
          className="max-w-[1250px] p-5"
          src="./public/headayyappa.png"
          alt=""
        />
      </div>
      <div className="bg-black text-white">
        <ul className="flex space-x-10 ml-5">
          <li className=" flex items-center h-10" >
          <Link to="/"><img src="./public/icons8-home-24.png" alt="" /> </Link> 
          </li>
          <li href="../pages/virtualq.jsx" className="hover:bg-white p-3 flex items-center hover:text-black hover:rounded-tr-lg hover:rounded-bl-lg h-10">
            <Link to="/booking">Virtual-Q </Link>
          </li>
          <li className="hover:bg-white p-3  flex items-center hover:text-black hover:rounded-tr-lg hover:rounded-bl-lg h-10">
            <Link to="/Kanikka">Kanikka</Link>
          </li>
          <li className="hover:bg-white p-3  flex items-center hover:text-black hover:rounded-tr-lg hover:rounded-bl-lg h-10">
            <Link to="/guid">Pilgrim Guide</Link>
          </li>
          <li className="hover:bg-white p-3  flex items-center hover:text-black hover:rounded-tr-lg hover:rounded-bl-lg h-10">
            Bus Booking
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
