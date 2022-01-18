const Product = require("../models/Product");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
//get all brands
exports.getBrands = asyncHandler(async (req, res, next) => {
  const data = await (
    await Product.find().select("brand")
  )
    .map((item) => item.brand)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  console.log(data);
  res.status(200).json({ success: true, data: data });
});
