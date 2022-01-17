const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name must be provided"],
      unique: [true, "product name must be unique"],
      minlength: 8,
    },
    price: {
      type: Number,
      required: [true, "product price must be provided"],
      min: 1,
    },
    rating: {
      type: Number,
      default: 0.0,
      min: 0.0,
      max: 5.0,
    },
    productImg: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png",
    },
    category: {
      type: String,
      enum: {
        values: ["Electric Guitar", "Acoustic Steel", "Classical Guitar"],
        message: "{VALUE} is not supported",
      },
    },

    brand: {
      type: String,
      required: [true, "product brand must be provided"],
    },
    quantity: {
      type: Number,
      required: [true, "The quantity of product should be provided!"],
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
