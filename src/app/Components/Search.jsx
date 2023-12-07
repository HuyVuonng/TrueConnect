import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <>
      <div className="bg-white rounded-[9px] lg:h-[50px] lg:flex items-center justify-around hidden">
        <input className="lg:w-[80%] p-[5px] outline-none" />
        <button className="lg:w-[45px] lg:h-[45px] p-3 bg-[#FA541C] rounded-[8px]">
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </button>
      </div>

      <div className="bg-white rounded-[9px] lg:h-[50px] lg:hidden">
        <div className="flex items-center p-5">
          <FontAwesomeIcon className="text-[#919EAB]" icon={faSearch} />
          <input
            className="lg:w-[80%] p-[5px] outline-none block font-normal leading-[26px] text-[14px] "
            placeholder={"Job title, keywords..."}
          />
        </div>
        <button className="lg:w-[45px] lg:h-[45px] p-3 bg-[#FA541C] rounded-[8px] w-full text-white">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
