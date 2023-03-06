import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  // TODO: implement token security to see the channels ? or let the not loggedin users to see?
  try {
    // const presenceChannelsResponse = await getPresenceChannels();
    return NextResponse.json({ data: true });
  } catch (error) {
    console.log('error on get-presence-channels', error);
    // res.status(500);
    return new NextResponse();
  }
};
