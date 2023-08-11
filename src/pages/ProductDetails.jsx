import { Fragment, useContext } from "react";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { selectedProduct, setSelectedProduct } = useContext(DataContainer);
  const { id } = useParams();
  if (!selectedProduct) {
    const storedProduct = localStorage.getItem(`selectedProduct-${id}`);
    setSelectedProduct(JSON.parse(storedProduct));
  }
  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <section className="product-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <img loading="lazy" src={selectedProduct?.imgUrl} alt="" />
            </Col>
            <Col md={6}>
              <h2>{selectedProduct?.productName}</h2>
              <div className="info">
                <span className="price">${selectedProduct?.price}</span>{" "}
              </div>
              <p>{selectedProduct?.shortDesc}</p>
            </Col>
          </Row>
        </Container>
      </section>  
    </Fragment>
  );
};

export default ProductDetails;
