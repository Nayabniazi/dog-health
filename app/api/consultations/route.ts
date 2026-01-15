import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Consultation from '@/models/Consultation';

export async function GET() {
  try {
    await dbConnect();
    const consultations = await Consultation.find({}).sort({ createdAt: -1 });
    return NextResponse.json(consultations);
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return NextResponse.json({ error: 'Error al obtener las consultas' }, { status: 500 });
  }
}
