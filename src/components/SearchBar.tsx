type SearchBarProps = {
    setSearchInput: (value: string) => void;
    searchInput: string;
}

export default function SearchBar({setSearchInput, searchInput}:SearchBarProps ) {
    return (
        <div className="p-6">
            <div className="flex flex-row relative">
                <input type="search" className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-1/2 focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4 transition duration-1000" value={searchInput} onChange={function (event) {setSearchInput(event.target.value)}} />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
        </div> 
    )
}
