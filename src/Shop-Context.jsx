import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();

function ShopContext(props) {
  const [subtotal, setSubtotal] = useState([]);
  const [info, setInfo] = useState(0);
  const [productNum, setProductNum] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        info,
        setInfo,
        productNum,
        setProductNum,
        subtotal,
        setSubtotal,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default ShopContext;
