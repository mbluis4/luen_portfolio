import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="h-full transition-all w-full opacity-95 flex flex-col space-y-4 items-center justify-center fixed bg-slate-400 top-0 left-0 z-20">
      <h2 className="text-xl">Message sent!</h2>
      <Link
        className="mb-4 inline-block bg-primary_1 py-2 px-3 uppercase 
          font-bold w-32 text-center shadow-md tracking-wide text-slate-50 border-2 
          border-transparent hover:cursor-pointer scale-100 hover:scale-110 transition-all rounded-md"
        to="/"
      >
        Back to site
      </Link>
    </div>
  );
};

export default Success;
