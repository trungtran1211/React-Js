import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@material-ui/core';
import { Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};


function ProductSort({currentSort, onChange}) {
    const handleSortChange = (e, newValue) => {
        if (onChange) onChange (newValue)
    };
    return (
        //menu sắp xếp giá
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao tới thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;