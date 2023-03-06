import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const POST = (req: NextRequest, res: NextResponse) => {
  const { channelName, uid } = req.body as unknown as {
    channelName: string;
    uid: string;
  };

  return NextResponse.json({ halu: true });
};
