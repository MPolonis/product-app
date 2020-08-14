import React, {Component} from 'react';
import {Provider} from "react-redux";
import dataStore from "./store";
import { Selector } from "./Selector";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";

export default class app extends Component {
  render() {
    return (
    <Provider store={dataStore}>
        <Selector>
          <ProductDisplay name="Products" />
          <SupplierDisplay name="Suppliers" />
        </Selector>
    </Provider>
    )
  }
}
