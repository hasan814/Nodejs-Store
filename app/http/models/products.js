import { model, Schema } from "mongoose";

const productsSchema = new Schema({
  bookmark: { type: [mongoose.Types.ObjectId], default: [] },
  category: { type: mongoose.Types.ObjectId, required: true },
  teacher: { type: mongoose.Types.ObjectId, required: true },
  dislike: { type: [mongoose.Types.ObjectId], default: [] },
  like: { type: [mongoose.Types.ObjectId], default: [] },
  short_desc: { type: String, required: true },
  total_desc: { type: String, required: true },
  images: { type: [String], required: true },
  title: { type: String, required: true },
  discount: { type: Number, default: 0 },
  type: { type: String, required: true },
  tags: { type: [String], default: [] },
  comments: { type: [], default: [] },
  price: { type: Number, default: 0 },
  format: { type: String },
  count: { type: Number },
  time: { type: String },
  features: {
    type: Object,
    required: {
      length: "",
      height: "",
      width: "",
      weight: "",
      colors: [],
      model: [],
      madein: "",
    },
  },
});

const ProductsModel = model("Products", productsSchema);

export default { ProductsModel };
