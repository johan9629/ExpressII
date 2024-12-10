import CustomRouter from "../../utils/CustomRouter.util.js";
import { createUser, readUsers, updateUser, destroyUser } from "../../controllers/users.controller.js"

class UsersApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", createUser);
        this.read("/", readUsers);
        this.update("/:id", updateUser);
        this.destroy("/:id", destroyUser);
    };
}

const usersApiRouter = new UsersApiRouter();
export default usersApiRouter.getRouter();
