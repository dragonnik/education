let m = require("mithril");
var root = document.body;

// import "./view/components/my-component/MyComponent.css";

import { MyComponent } from './view/components/my-component/MyComponent';
 
import arrow from "./images/7.png";
import truck from "./images/Frame 52.png"
import washer from "./images/IMAGE 2020-10-21 17_10_03 4.png"
import minus from "./images/Minus Disabled.png"
import plus from "./images/Plus Enabled.png"
import book from "./images/IMAGE 2020-10-21 10_08_59 3.png"
import house from "./images/Group 6.png"
import search from "./images/Frame 1099.png"
import heart from "./images/Frame 1099.png"
import basket from "./images/Combined Shape.png"
import amount from "./images/1.png"
import list from "./images/Combined Shape1.png"

m.render(root, [
    m(MyComponent),
])