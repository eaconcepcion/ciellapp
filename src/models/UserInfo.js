import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  email: {type: String, required: true},
  streetAddress: {type: String},
  postalCode: {type: String},
  city: {type: String},
  country: {type: String},
  phone: {type: String},
  admin: {type: Boolean, default: false},
  businessName: {type: String, required: true},
  businessOwnerName: {type: String, required: true},
  BusinessNumber: {type: String },
}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);