let m = require("mithril");
var root = document.body;

// import "./view/components/my-component/MyComponent.css";

import { MyComponent } from './view/pages/MyComponent';

m.render(root, [
    m(MyComponent),
])