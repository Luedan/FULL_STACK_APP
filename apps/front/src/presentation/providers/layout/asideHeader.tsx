import { Link } from "react-router-dom";

export function AsideHeader() {
  return (
    <div className="h-[3rem] border-b p-2 flex justify-around items-center">
      <Link to={"/"} className="flex items-center justify-center">
        <span className="text-lg font-bold ml-1 ">FRONT_TEMPLATE</span>
      </Link>
    </div>
  );
}
