import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema({
  category: { type: mongoose.Types.ObjectId, required: true },
  bookmark: { type: [mongoose.Types.ObjectId], default: [] },
  author: { type: mongoose.Types.ObjectId, required: true },
  disLike: { type: [mongoose.Types.ObjectId], default: [] },
  like: { type: [mongoose.Types.ObjectId], default: [] },
  title: { type: String, required: true },
  image: { type: String, required: true },
  text: { type: String, required: true },
  tags: { type: [String], default: [] },
  comments: { type: [], default: [] },
});

const BlogModel = model("Blog", blogSchema);

export default { BlogModel };
