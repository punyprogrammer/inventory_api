const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name must be provided"],
      unique: [true, "product name must be unique"],
      minlength:8,
    },
    price: {
      type: Number,
      required: [true, "product price must be provided"],
      min:1
    },
    rating: {
      type: Number,
      default: 0.0,
      min:0.0,
      max:5.0,
    },
    productImg: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
