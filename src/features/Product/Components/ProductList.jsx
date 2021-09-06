import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Products from './Products';

ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
}

function ProductList({data}) {
    return (
        <Box>
            <Grid container>
                {data.map((product)=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Products product={product}/>
                    </Grid>
                )
                )}
            </Grid>
        </Box>
    );
}

export default ProductList;