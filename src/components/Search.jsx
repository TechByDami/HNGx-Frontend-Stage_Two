import search from "../assets/Search.svg";
const Search = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  return (
    <>
      <div className="md:max-w-[520px] w-full px-3 py-2 rounded-md border-[2px] border-gray-300 justify-between flex gap-1">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="w-full items-center gap-2.5 font-dm inline-flex bg-transparent text-white text-[16px] font-normal leading-normal focus:outline-0"
          value={searchQuery}
          onChange={onSearchInputChange}
          onKeyPress={onHandleSearch}
        />
        <img src={search} alt="" />
      </div>
    </>
  );
};

export default Search;
