import React from 'react'


function Tags({ tags }) {
    return (
        <>
            теги: {tags &&
                tags.map(function (val) {
                    return <button key={val} >#{val}</button>
                })}
        </>

    );
}

export default Tags;
