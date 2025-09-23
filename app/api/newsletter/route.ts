import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let email = '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = (body.email || '').toString();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData();
      email = (form.get('email') || '').toString();
    } else {
      const form = await request.formData();
      email = (form.get('email') || '').toString();
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // For now, just acknowledge subscription (no external provider to keep it simple)
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}


