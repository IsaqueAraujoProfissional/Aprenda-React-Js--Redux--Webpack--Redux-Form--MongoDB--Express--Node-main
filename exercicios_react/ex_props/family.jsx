import React from "react";
import Member from "./member";
import { childrenWithProps } from "../utils/reactUtils";

export default props => (
    <div>
        { childrenWithProps(props.children, props)}
    </div>
)