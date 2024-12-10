import { Router } from "express";
import { use } from "passport";

class CustomRouter {
    constructor() {
        this._router = Router();
    }
    getRouter = () => this._router;
    applyCallback = (callback) => callback.map(cb => async (req, res, next) => {
        try {
            await cb(req, res, next);
        } catch (error) {
            return next(error);
        }
    });

    create = (path, ...cb)=> this._router.post(path, this.applyCallback(cb)); 
    read = (path, ...cb)=> this._router.get(path, this.applyCallback(cb)); 
    update = (path, ...cb)=> this._router.put(path, this.applyCallback(cb)); 
    destoy = (path, ...cb)=> this._router.delete(path, this.applyCallback(cb)); 
    use = (path, ...cb)=> this._router.get(path, this.applyCallback(cb)); 

}

export default CustomRouter;