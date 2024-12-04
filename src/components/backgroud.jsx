import LoginForm from "./form";

function Bground() {
  return (
    <div>
      <div className="flex flex-col bg-red-500 max-h-[38rem] ">
        <img
          className="max-h-[38rem] "
          src="./public/2018031976-olwd3yc26zg57c2a8dyr2r8mr8dq68asmitytunu1s.jpg"
          alt=""
        />
        <LoginForm />
      </div>
    </div>
  );
}

export default Bground;
