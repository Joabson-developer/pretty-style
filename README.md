# function able to style through javascript without leaving inline traces

Como usar?

```shell
npm i pretty-style
```

```js
import { prettyStyle } from "node_modules/pretty-style/index.js";

prettyStyle.css = `
.container{
  padding: 10px;
  background-color: red;
} 

.card{
  margin: 10px;
  color: blue;
}
`;
```
