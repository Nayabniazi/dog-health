'use server'

import dbConnect from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export type FormState = {
  success: boolean;
  message: string;
}

export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    await dbConnect();

    const name = formData.get('name') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const petType = formData.get('petType') as string;
    const symptom = formData.get('symptom') as string;

    if (!name || !whatsapp || !petType || !symptom) {
       return {
        success: false,
        message: "Por favor completa todos los campos."
      };
    }

    const newConsultation = new Consultation({
      name,
      whatsapp,
      petType,
      symptom,
    });

    await newConsultation.save();

    console.log(`Lead Saved: Owner ${name}, Pet Type ${petType}`);

    return {
      success: true,
      message: "Solicitud recibida. Un especialista te contactará en breve."
    };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return {
      success: false,
      message: "Algo salió mal. Por favor inténtalo de nuevo."
    };
  }
}
