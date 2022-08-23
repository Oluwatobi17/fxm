const SearchPanel = ({ searchByPair }) =>{
    return <div className="searchpanel">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type='text' placeholder='Search bot by strong currency pair' onChange={(e)=>searchByPair(e.target.value)} />
    </div>
}

export default SearchPanel;