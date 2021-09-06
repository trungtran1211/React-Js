import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../../api/productApi';
import ProductListSkeleton from '../Components/ProductListSkeleton';
import ProductList from '../Components/ProductList'

const useStyle = makeStyles( theme => ({
    root:{},

    left:{
        width: '250px',
    },
    right:{
        flex: '1 1 0',
    },
}));

function ListPage(props) {
    const classes = useStyle();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await productApi.getAll({_page: 1, _limit: 12});
                setProductList(data);
            } catch (error) {;
                console.log('Lỗi k nhận được dữ liệu');
            }
            setLoading(false);
        })();
    }, []);


    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left Column</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <ProductListSkeleton/> : <ProductList data={productList}/>}
                            <Pagination ></Pagination>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;