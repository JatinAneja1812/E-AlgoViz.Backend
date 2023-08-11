import React from "react";
import BSTTreeOrderInfoBarWrapper from "./BSTTreeOrder.styles";

export default function BSTTreeOrder(props) {
  return (
    <BSTTreeOrderInfoBarWrapper>
      <div className="orderListStyle">
        {/* Display elements in pre-order */}
        <div className="order-elements">
          <h3>Pre-order:</h3>
          <span>{props.getElementsInOrder("preorder").join(", ")}</span>
        </div>

        {/* Display elements in in-order */}
        <div className="order-elements">
          <h3>In-order:</h3>
          <span>{props.getElementsInOrder("inorder").join(", ")}</span>
        </div>

        {/* Display elements in post-order */}
        <div className="order-elements">
          <h3>Post-order:</h3>
          <span>{props.getElementsInOrder("postorder").join(", ")}</span>
        </div>
      </div>
    </BSTTreeOrderInfoBarWrapper>
  );
}
