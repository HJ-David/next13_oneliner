import { Schema, model, models } from 'mongoose';

const OnelinerSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  oneliner: {
    type: String,
    required: [true, "Oneliner is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Oneliner = models.Oneliner || model("Oneliner", OnelinerSchema);

export default Oneliner;