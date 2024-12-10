import CustomRouter from "../utils/CustomRouter.util.js";
import apiRouter from "./api/index.api";

class IndexRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.use("/api", apiRouter)
    }
}

let indexRouter = new IndexRouter();
indexRouter = indexRouter.getRouter();

export default indexRouter;