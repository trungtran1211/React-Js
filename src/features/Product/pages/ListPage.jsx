import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../../api/productApi';
import ProductListSkeleton from '../Components/ProductListSkeleton';
import ProductList from '../Components/ProductList'
import { Pagination } from '@material-ui/lab';
import ProductSort from '../Components/ProductSort';
import ProductFilters from '../Components/ProductFilters';

const useStyle = makeStyles( theme => ({
    root:{},

    left:{
        width: '250px',
    },
    right:{
        flex: '1 1 0',
    },
    pagination:{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '30px',
        paddingBottom: '20px',
    },
}));

function ListPage(props) {
    const classes = useStyle();
    const [productList, setProductList] = useState([]);
    //phân trang product
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1, 
        _limit: 12,
        _sort: 'salePrice:ASC'
    });

    useEffect(() => {
        (async () => {
            try {
                const {data, pagination} = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {;
                console.log('Lỗi k nhận được dữ liệu');
            }
            setLoading(false);
        })();
    }, [filters]);

   const handlePageChange = (e, page) => {
        setFilters ((prevFilters) =>({
            ...prevFilters,
            _page: page,
        }));
    }
    const handleSortChange = (newSortValue) => {
        setFilters ((prevFilters) =>({
            ...prevFilters,
            _sort: newSortValue,
        }));
    }
    //Filters left
    const handleFiltersChange = (newFilters) => {
        setFilters ((prevFilters) =>({
            ...prevFilters,
            ...newFilters,
        }));
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={filters} onChange={handleFiltersChange}/>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>

                        <Paper elevation={0}>
                        <ProductSort currentSort={filters._sort} onChange={handleSortChange}/>

                            {loading ? <ProductListSkeleton/> : <ProductList data={productList}/>}
                            <Box className={classes.pagination}>
                                <Pagination  color="primary" 
                                    count={Math.ceil(pagination.total / pagination.limit)} 
                                    page={pagination.page} onChange={handlePageChange}>
                                </Pagination>
                            </Box>
                        </Paper>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;