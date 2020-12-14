import React from 'react';

const GifSearch = (props) => (
    <form onSubmit={props.submitHandler} >
        <input type="text" placeholder="Enter a gif" name="search" />
        <input type="submit" />
    </form>
)

export default GifSearch;