import { Router } from "express";
import CustomRouter from "../../utils/CustomRouter.util.js";

class ApiRouter extends CustomRouter {
    constructor (){
        super();
        this.init();
    }

    init() {
        this.use("/products", productsApiRouter)
        this.use("/users", usersApiRouter)
        this.use("/carts", cartsApiRouter)
    }
}

let apiRouter = new ApiRouter();
apiRouter = apiRouter.getRouter();

export default apiRouter;