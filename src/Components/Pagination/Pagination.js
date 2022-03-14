import React from 'react';

const Pagination = ({totalPages, handleClick}) => {
    console.log(totalPages);

    const pages = [...Array(totalPages).keys()].map(num => num+1)

    console.log(pages);

    return (
        <div>
            {
                pages.map(page => <button onClick={()=> handleClick(page)} >{page}</button>)
            }
        </div>
    );
};

export default Pagination;