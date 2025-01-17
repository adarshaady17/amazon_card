import Product from "./Product.jsx";

function ProductTab(){
  let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
  }
//let options=[<li>"hi-tech"</li>,<li>"in-price"</li>,<li>"durable"</li>];
    return (
        <div style={styles}>
        
          <Product title="Madfrog Solid Men" idx={0}/>
          <Product title="Jump Cuts Men" idx={1}/>
          <Product title="Styzon Men Car..." idx={2}/>
          <Product title="MANIAC Full slete" idx={3}/>
        </div>
      );
}

export default ProductTab;