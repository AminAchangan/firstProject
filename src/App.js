// import Product from "./components/Product/Product";
// import React, { useState } from 'react';
import React from 'react';

import ProductList from './components/ProductList/ProductList';

import './App.css';


class App extends React.Component {
    state = {
 
        count: 0,

    }

    render() {
        return (
            <div className="container" id="title">
                <h1>shopping App</h1>
                <ProductList />
            </div>
        );
    }
}

export default App;


// // const App = () => {
// //     return (
// //         <div className="container" id="title">
// //             <h1>shopping App</h1>
// //             <Product name="React.js" price="99$" />
// //             <Product name="node.js" price="89$" />
// //             <Product name="JavaScript" price="79$">
// //                 <p>discount is 15%</p>
// //             </Product>
// //         </div>
// //     )
// // }

// // export default App;
// const App = () => {
//     const [products, setProducts] = useState([
//         { title: "React.js", price: "89$", id: 1 },
//         { title: "Node.js", price: "79$", id: 2 },
//         { title: "JavaScript", price: "69$", id: 3 }
//     ]);
//     const clickHandler = () => {
//         setProducts([
//             { title: "React.js", price: "79$", id: 1 },
//             { title: "Node.js", price: "69$", id: 2 },
//             { title: "JavaScript", price: "59$", id: 3 }
//         ])
//     };
//     return (
//         <div className="container" id="title">
//             <h1>shopping App</h1>
//             {products.map((product) => {
//                 return <Product name={product.title} price={product.price} key={product.id} />;
//             })}
//             <button onClick={clickHandler}>change price</button>
//         </div>
//     );
// }

// export default App;
// function App () {
//     return (
//         <div className="App">
//             <Product />
//         </div>
//     );
// }

// export default App;