import { model, Schema } from "mongoose";

const paymentsSchema = new Schema({});

const PaymentsModel = model("Payments", paymentsSchema);

export default { PaymentsModel };
