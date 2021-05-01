import postRouter from "./postRouter.js";
import userRouter from "./userRouter.js";

const routes = [postRouter, userRouter];

const appRoutes = (app) => {
  routes.map((route) => {
    return app.use("/", route);
  });
};

export default appRoutes;
