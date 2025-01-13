import { LRUCache } from 'lru-cache';
import { NextResponse } from 'next/server';

const rateLimit = ({ maxRequests, windowMs }) => {
  const cache = new LRUCache({
    max: maxRequests,
    ttl: windowMs,
  });

  return async (req) => {
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';
    const hits = cache.get(ip) || 0;

    if (hits >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    cache.set(ip, hits + 1);
    return null; // No rate limit issue
  };
};

export default rateLimit;
