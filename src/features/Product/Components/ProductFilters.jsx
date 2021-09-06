import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FiltersByCategory from './Filters/FiltersByCategory';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({filters, onChange}) {

    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;
        const newFilters = {
            ...filters,
            "category.id": newCategoryId,
        };
        onChange={newFilters};
    }

    return (
        <Box>
            <FiltersByCategory onChange={handleCategoryChange}/>
        </Box>
    );
}

export default ProductFilters;