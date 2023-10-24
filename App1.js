import React, { useState } from "react";
import Products from "./Product";

export default function App1() {
    const DEFAULT_PRODUCT =  {title: '', price: '', quantity: '', description: ''};
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(DEFAULT_PRODUCT);

    function addProduct() {
        setProducts([product, ...products]);
        
    }

    function deleteProduct(index) {
        const newProduct = [...products];
        newProduct.splice(index, 1);
        setProducts(newProduct);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary mt-3" onClick={addProduct}>
                        Добави продукт
                    </button>
                    <input
                        className="form-control mt-3 mb-3"
                        type="text"
                        placeholder="Име на продукта"
                        name="title"
                        value={products.title}
                        onInput={(e) => setProducts(e.target.value)}
                    />
                    <input
                        className="form-control mt-3 mb-3"
                        type="text"
                        placeholder="Цена на продукта"
                        name="price"
                        value={products.price}
                        onInput={(e) => setProducts(e.target.value)}
                    />
                    <input
                        className="form-control mt-3 mb-3"
                        type="text"
                        placeholder="Количество"
                        name="quantity"
                        value={products.quantity}
                        onInput={(e) => setProducts(e.target.value)}
                    />
                    <textarea
                        className="form-control mt-3 mb-3"
                        type="text"
                        placeholder="Описание"
                        name="description"
                        value={products.description}
                        onInput={(e) => setProducts(e.target.value)}
                    />
                </div>
                <div>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <td>Ид</td>
                            <td>Име на продукта</td>
                            <td>Цена на продукта</td>
                            <td>Количество</td>
                            <td>Описание</td>
                            <td>Действия</td>
                        </thead>
                        <tbody>
                            {products.map(p => (
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.title}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.description}</td>
                                    <td>
                                        <button className="btn btn-warning me-3 text-white">
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button onClick={() => deleteProduct(p.index)} className="btn btn-danger text-white">
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}