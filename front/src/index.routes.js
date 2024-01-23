const { default: Add } = require("./pages/Add");
const { default: Basket } = require("./pages/Basket");
const { default: Detail } = require("./pages/Detail");
const { default: Home } = require("./pages/Home");
const { default: MainRoot } = require("./pages/MainRoot");
const { default: WishList } = require("./pages/WishList");

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"Add",
                element:<Add/>
            },
            {
                path:"WishList",
                element:<WishList/>
            },
            {
                path:"Basket",
                element:<Basket/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
        ]
    }
]
export default ROUTES