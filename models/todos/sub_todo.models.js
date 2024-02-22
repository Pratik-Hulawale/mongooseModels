import mongoose from 'mongoose';

const subTOdoSchema = new mongoose.Schema(
  {
    content: {
      trpe: String,
      required: true,
    },
    Complete: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTOdoSchema);
