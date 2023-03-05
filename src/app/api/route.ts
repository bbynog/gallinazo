import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const POST = (req: NextRequest, res: NextResponse) => {
  return NextResponse.json({ halu: true });
};
