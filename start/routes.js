"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.on('/').render('index')
Route.get("/", "JobController.home");
Route.get("carrinho", "JobController.carrinho");

Route.on("/signup").render("auth.signup");
Route.post("/signup", "UserController.create").validator("CreateUser");
Route.on("/login").render("auth.login");

Route.post("/login", "UserController.loginUser").validator("LoginUser");

Route.get("/logout", async ({ auth, response }) => {
  await auth.logout();
  return response.redirect("/");
});

Route.get("/post-a-job", "JobController.userIndex").as("my.jobs");
Route.get("/post-a-job/delete/:id", "JobController.delete").as("delete");
Route.get("/post-a-job/edit/:id", "JobController.edit");
Route.get("/post-a-job/show/:id", "JobController.show").as("show");
Route.post("/post-a-job/create", "JobController.create").validator("CreateJob");
