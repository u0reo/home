import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const result = await axios('https://zenn.dev/api/articles?username=ureo&order=latest');

  return NextResponse.json(result.data, {
    status: result.status,
    statusText: result.statusText,
  });
}
