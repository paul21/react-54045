import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer({ greetings }) {
    return (
        <div className="container mt-3">
            <div className="alert alert-info">{greetings}</div>
        </div>
    );
}

export default ItemListContainer;
