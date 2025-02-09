import { model, Schema } from "mongoose";

const categoriesSchema = new Schema({
  title: { type: String, required: true },
});

const CategoriesModel = model("Categories", categoriesSchema);

export default { CategoriesModel };
