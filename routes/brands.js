const router = require("express").Router();
const { getBrands } = require("../controllers/brands");
router.route("/").get(getBrands);
module.exports = router;
