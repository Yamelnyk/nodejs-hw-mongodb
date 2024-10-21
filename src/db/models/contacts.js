import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      required: true,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    photo: { type: String },
    // parentId: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  },
);

export const ContactsCollection = model('contacts', contactsSchema);
