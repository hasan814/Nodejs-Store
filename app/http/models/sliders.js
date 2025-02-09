import { model, Schema } from "mongoose";

const slidersSchema = new Schema({
  image: { type: String, required: true },
  type: { type: String, default: "main" },
  title: { type: String },
  text: { type: String },
});

const SlidersModel = model("Sliders", slidersSchema);

export default { SlidersModel };
