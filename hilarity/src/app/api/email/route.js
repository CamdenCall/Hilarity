import { sendEmail } from "../../../lib/email";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { email, message } = await req.json();
        await sendEmail(email, message);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

export function GET() {
    return NextResponse.json({ message: 'GET request received' }, { status: 200 });
}