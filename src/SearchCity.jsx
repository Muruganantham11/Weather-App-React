import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const SearchCity = ({ searchCity, setSearchCity, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <label htmlFor="city" className="absolute -left-1000">
          search City
        </label>
        <input
          type="text"
          ref={inputRef}
          autoFocus
          required
          placeholder="Enter The City"
          className="outline-none bg-none border-1 pl-2 text-xl w-80 h-12 mx-2 rounded-4xl absolute left-5 placeholder:p-3 "
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button>
          <CiSearch
            className="absolute right-8 top-0.5 cursor-pointer w-12 h-12 p-2 bg-blue-300 hover:bg-blue-600 rounded-full"
            role="button"
            onClick={() => inputRef.current.focus()}
          />
        </button>
      </div>
    </form>
  );
};

export default SearchCity;
