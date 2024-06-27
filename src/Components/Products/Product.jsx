import React, { useEffect } from 'react';
import './Product.scss';
import Soat from './img/soat.svg';
import Soat1 from './img/soat1.svg';
import Soat2 from './img/soat2.svg';
import { Rating, Pagination, Box } from '@mui/material';
import { useGetProductsQuery } from '../redux/UserApi';

const Product = () => {
    const PerPage = 6;
    const [page, setPage] = React.useState(() => {
        const savedPage = sessionStorage.getItem('currentPage');
        return savedPage ? parseInt(savedPage, 10) : 1;
    });

    const { data, isError, isFetching, isLoading, isSuccess } = useGetProductsQuery({ limit: PerPage, page });

    useEffect(() => {
        sessionStorage.setItem('currentPage', page);
    }, [page]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching products.</div>;
    }

    const handleChangePagination = (_, value) => {
        setPage(value);
    };

    let products = data?.data?.products?.map((product) => (
        <div className="product_cart" key={product.id}>
            <img src={product.urls[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <span><Rating/></span>
            <div className="price">
                <span>${product.oldPrice.toLocaleString()}</span>
                <span>${product.price.toLocaleString()}</span>
            </div>
        </div>
    ));

    return (
        <>
            <div className="product_top container">
                <div className="cart">
                    <div className="img">
                        <img src={Soat} alt="Apple" />
                    </div>
                    <div className="text">
                        <h3>Apple</h3>
                        <p>Apple is one of the most famous smart watches providing company.</p>
                    </div>
                </div>
                <div className="cart">
                    <div className="img">
                        <img src={Soat1} alt="Xiaomi" />
                    </div>
                    <div className="text">
                        <h3>Xiaomi</h3>
                        <p>Xiaomi smart watches are produced by MI company.</p>
                    </div>
                </div>
                <div className="cart">
                    <div className="img">
                        <img src={Soat2} alt="FitBit" />
                    </div>
                    <div className="text">
                        <h3>FitBit</h3>
                        <p>FitBit smart watches are best for their health and fitness features.</p>
                    </div>
                </div>
            </div>

            <p id='pi'>Find your favourite smart watch.</p>
            <h3 id='ph3'>Our Latest Products</h3>

            <div className="product_bottom container">
                {products}
              <Box sx={{ display: 'flex', justifyContent: 'center',textAlign: 'center', mt: 2 }}>
              <Pagination count={999} color="primary" page={page} onChange={handleChangePagination} />
              </Box>
            </div>
        </>
    );
};

export default Product;
