import { useState } from 'react';
import Link from "next/link";

const FilterDetails = ({filterInfo, getDownloadLinks}) =>{
    const [selectedFilter, setSelectedFilter] = useState('all');

    function filter(by, e){
        e.preventDefault();
        const filters = document.querySelectorAll('.filter-link');
        Object.values(filters).map(link => link.classList.remove('active-filter'));
        document.querySelector('#'+by).classList.add('active-filter');
        setSelectedFilter(by);
        filterInfo(by);
    }

    return <div className="filter-container">
        <div className="filter-options">
            <Link href="#filter">
                <a className="filter-link active-filter" title='View Strategy' onClick={(e)=>filter('strat', e)} id="strat">Strategy</a>
            </Link>
            <Link href="#filter">
                <a className="filter-link" title='Download Bot' onClick={(e)=>{
                    filter('download',e);
                    getDownloadLinks();
                }} id="download">Download</a>
            </Link>
            <Link href="#filter">
                <a className="filter-link" title='Warnings' onClick={(e)=>filter('note',e)} id="note">Notes</a>
            </Link>
        </div>
    </div>
}

export default FilterDetails;