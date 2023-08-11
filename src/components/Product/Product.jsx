import { useContext} from "react";
import { Col } from "react-bootstrap";
import "./product.css"
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";

const Product = ({title,productItem}) => {
    const {setSelectedProduct} =useContext(DataContainer);
    const router =useNavigate();
    const handelClick =()=> {
        setSelectedProduct(productItem);
        localStorage.setItem(`selectedProduct-${productItem.id}`,JSON.stringify(productItem));
        router(`/shop/${productItem.id}`);
    }
    return (
    <Col md={3} sm={5} xs={10} className="product mtop">
        {title ==="Big Discount"? <span className="discount">{productItem.discount}% Off</span>:null}
        <img loading="lazy" onClick={()=>handelClick()} src={productItem.imgUrl} alt=""/>
        <div className="product-details">
            <h3 onClick={()=>handelClick()}>
                {productItem.productName}
            </h3>
        <div className="price">
            <h4>${productItem.price}</h4>
        </div>
    </div>
    </Col>
    );
};

export default Product;
