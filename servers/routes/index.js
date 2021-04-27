import postRouter from "./postRouter.js";

const routes = [postRouter];

const appRoutes = (app) => {
  routes.map((route) => {
    return app.use("/", route);
  });
};

export default appRoutes;
