import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from './Product';
import useSWR from "swr";
import { fetcher } from "../../../helpers/axios";
import axiosService from "../../../helpers/axios";

function DashboardProduct() {
    const products = useSWR("/dashboard/product/", fetcher, { refreshInterval: 10000, });
   return (
    <>
            <Row className="my-4">
            {products.data?.results.map((product, index) => (
                <Product product={product} index={index} refresh={products.mutate}/>
            ))}
            </Row>
    </>
 );
}
export default DashboardProduct;