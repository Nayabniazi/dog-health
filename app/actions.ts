'use server'

export type FormState = {
  success: boolean;
  message: string;
}

export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const name = formData.get('name');
  const petName = formData.get('petName');

  // In a real application, you would save this to a database or send an email/WhatsApp
  console.log(`Lead Received: Owner ${name}, Pet ${petName}`);

  return {
    success: true,
    message: "Request received. A specialist will contact you shortly."
  };
}
