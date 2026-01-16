import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    let admin = await Admin.findOne({ email });

    // Seed default admin if not exists and trying to login with default credentials
    if (!admin && email === 'admin@gmail.com') {
      const passwordHash = await bcrypt.hash('admin123', 10);
      admin = await Admin.create({
        email: 'admin@gmail.com',
        passwordHash,
      });
    }

    if (!admin) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);

    if (!isMatch) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    // Return success. In a real app we'd use sessions/JWT, but we'll stick to 
    // the simple client-side logic for now as requested, just backed by DB.
    // The client sets 'admin_auth' in localStorage.
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
