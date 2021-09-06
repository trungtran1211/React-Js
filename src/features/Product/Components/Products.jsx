import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST,THUMBNAIL_PLACEHOLDER } from '../../../constants/index';

Products.propTypes = {
    product: PropTypes.object,
};

function Products({ product }) {
    const thumbnailUrl = product.thumbnail 
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
    
    return (
        <div>
            <Box padding={1} minHeight="215px">
                <Box padding={1}>
                <img src={thumbnailUrl}
                 width="100%" 
                 alt={product.name}/>
                </Box>
                <Typography variant="body2">{product.name}</Typography>
                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold">
                        {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                    </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}</Typography>
            </Box>
        </div>
    );
}

export default Products;
