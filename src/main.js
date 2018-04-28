import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDom from "react-dom";

const message = "Hello world from React!";

ReactDom.render(
    <div className="container">
        <div className="jumbotron">
            <h2>{message}</h2>
        </div>
    </div>,
    document.querySelector("#app")
);

module.hot.accept();