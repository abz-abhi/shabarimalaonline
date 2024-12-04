function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <p className="text-sm">&copy; 2024 Travancore Devaswom Board - All Rights Reserved</p>
        </div>
        <div className="flex space-x-10">
          <a href="#" className="text-sm hover:text-gray-300">About Us</a>
          <a href="#" className="text-sm hover:text-gray-300">Terms & Conditions</a>
          <a href="#" className="text-sm hover:text-gray-300">Guidelines & FAQ</a>
          <a href="#" className="text-sm hover:text-gray-300">Feedback</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
          <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;