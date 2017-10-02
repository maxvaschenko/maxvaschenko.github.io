import React from "react";

const __Button__ = (props) => <button onClick={props.clickEvent} disabled={props.buttonEnable} className={props.className}>{props.buttonName}</button>;

export default __Button__;
