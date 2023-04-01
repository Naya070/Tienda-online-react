import React from 'react';
//import icon from '@icons/bt_add_to_cart.svg';
import ProductListDetail from '@components/ProductListDetail';
import '../styles/ProductList.scss'
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="product-list-main-container">
			<div className="product-list">
				{products.map(product => (
					<ProductListDetail product = {product} key = {product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;