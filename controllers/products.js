const Product = require("../models/Product");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const { category, sortedBy, brand } = req.query;
  const queryObject = {};
  let result;
  if (category) {
    queryObject.category = category;
  }
  if (brand) {
    queryObject.brand = brand;
  }
  result = Product.find(queryObject);
  if (sortedBy) {
    result = result.sort(sortedBy);
  }

  const products = await result;
  res
    .status(200)
    .json({ success: true, nbHits: products.length, data: products });
});
//@desc Get single  bootcamps
//@route GET /api/v1/bootcamps/:id
//access  Public
exports.getProduct = async (req, res, next) => {
  const bootcamp = await Product.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
};

//@desc Create a newProduct
//@route POST /api/v1/bootcamps
//access  Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  const bootcamp = await Product.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});
//@desc UpdateProduct
//@route PUT /api/v1/bootcamps/:id
//access  Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const bootcamp = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});
//@desc DeleteProduct
//@route  DELETE /api/v1/bootcamps/:id
//accessPrivate
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const bootcamp = await Product.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, deletedData: bootcamp });
});
//Route to get all brands in the database
