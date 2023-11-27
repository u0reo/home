import { NextResponse } from 'next/server';

export const fetchCache = 'only-no-store';

export async function GET() {
  const result = await fetch('https://zenn.dev/api/articles?username=ureo&order=latest');

  return NextResponse.json(await result.json(), {
    status: result.status,
    statusText: result.statusText,
  });
}
