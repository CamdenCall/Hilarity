import { sendApplication } from '../../../lib/email';
import { NextResponse, NextRequest } from 'next/server';
import rateLimit from '@/middleware/ratelimit';

const limiter = rateLimit({
  maxRequests: 5,
  windowMs: 60 * 1000,
});

export async function POST(req: NextRequest) {
  const rateLimitResponse = await limiter(req);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const { jobName, answers } = await req.json();
    console.log(jobName, answers);
    sendApplication(jobName, answers);
    return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
  }
}
