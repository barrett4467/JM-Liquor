const router = require("express").Router();
const itemRoutes = require("./items");

// Book routes
router.use("/products", itemRoutes);

module.exports = router;
