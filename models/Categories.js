const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema(
  {
    childern: [
      {
        leaf: { type: Boolean },
        name: { type: String },
        var: { type: Boolean },
      },
    ],
    leaf: { type: Boolean },
    name: { type: String },
    var: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = { Categories };
