import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}){
     let oldPrice=["200","400","350","700"];
     let newPrice=["199","299","249","599"];
     let description=[["winter cloth","protective warm cloth"],["summer cloth","makeup of cotton"],["rain cloth","waterproof cloth"],["Vasanta cloth","colorful cloth"]];
    return(
        <div className="Product">
            <h2>
                {title}
            </h2>
            <h4>{description[idx][0]}</h4>
            <h4>{description[idx][1]}</h4>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product;