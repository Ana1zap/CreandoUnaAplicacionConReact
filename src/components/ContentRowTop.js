import React  from 'react';
import ContentrowMovies from './ContentRowMovies';
import GenresinDb from './GenresinDb';
import LastmovieinDb from './LastMovieinDb';

const ContentRowTop = () => {
    return  (
        <div className="Container-fluid">
            <div className="d-sm-flex align-items-center justify-content-betweenmb-4">
                <h1 className='H3 MB-0 TEXT-GRAY-800'>App Dashboard</h1>
            </div>

            <ContentrowMovies/>

            <div className='row'>
                <LastmovieinDb/>
                <GenresinDb/>
                </div>
        </div>
    );
}

export default ContentRowTop;