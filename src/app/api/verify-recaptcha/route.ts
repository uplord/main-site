import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { token } = await request.json()

  const secret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY
  if (!secret) {
    return NextResponse.json(
      { error: 'Missing reCAPTCHA secret' },
      {
        status: 500,
      },
    )
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secret}&response=${token}`,
  })

  const data = await res.json()

  if (!data.success || data.score < 0.5) {
    return NextResponse.json(
      { success: false, error: 'Failed verification', score: data.score },
      { status: 403 },
    )
  }

  return NextResponse.json({ success: true, score: data.score })
}
