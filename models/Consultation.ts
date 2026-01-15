import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IConsultation extends Document {
  name: string;
  whatsapp: string;
  petType: string;
  symptom: string;
  createdAt: Date;
}

const ConsultationSchema: Schema = new Schema({
  name: { type: String, required: true },
  whatsapp: { type: String, required: true },
  petType: { type: String, required: true },
  symptom: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Check if model already exists to prevent overwrite error during hot reload
const Consultation: Model<IConsultation> = mongoose.models.Consultation || mongoose.model<IConsultation>('Consultation', ConsultationSchema);

export default Consultation;
