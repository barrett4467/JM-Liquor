const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Finds the products and lists on page 
router.route("/products")
  .get(itemsController.findAll)
  .then(console.log(findAll));
  // .post(itemsController.create);

//Will update on admin page 
router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
