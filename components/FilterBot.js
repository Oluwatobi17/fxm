import { useState } from 'react';
import Link from "next/link";

const FilterBot = ({toggleSearchPanel, filterBot, count}) =>{
    const [selectedFilter, setSelectedFilter] = useState('all');
    function filter(id, e){
        e.preventDefault();
        const filters = document.querySelectorAll('.filter-link');
        Object.values(filters).map(link => link.classList.remove('active-filter'));
        document.querySelector('#'+id).classList.add('active-filter');
        setSelectedFilter(id);
        filterBot(id);
    }

    return <div className="filter-container">
        <div className="filter-options">
            <Link href="#">
                <a className="filter-link active-filter" title='Filter all latest' onClick={(e)=>filter('latest',e)} id="latest">Latest
                    <sup>{selectedFilter==='latest' && count}</sup>
                </a>
            </Link>
            <Link href="#">
                <a className="filter-link" title='Filter by free bots' onClick={(e)=>filter('free',e)} id="free">Free bots
                    <sup>{selectedFilter==='free' && count}</sup>
                </a>
            </Link>
            <Link href="#">
                <a className="filter-link" title='Filter all paid bots' onClick={(e)=>filter('paid',e)} id="paid">Premium bots
                    <sup>{selectedFilter==='paid' && count}</sup>
                </a>
            </Link>
            <Link href="#">
                <a className="filter-link" title='Filter by yield on account' onClick={(e)=>filter('speed',e)} id="speed">Yield %
                    <sup>{selectedFilter==='speed' && count}</sup>
                </a>
            </Link>
        </div>

        <div>
            <span className="transparent-link" onClick={toggleSearchPanel}>Search</span>
        </div>
    </div>
}

export default FilterBot;