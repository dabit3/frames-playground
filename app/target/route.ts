import { NextResponse } from 'next/server'
const image = "https://i.imgur.com/g6z3BFn.png"

export async function POST(req) {
  const data = await req.json()
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Frame</title>
        <mega property="og:image" content="${image}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${image}" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1" content="SEE SOME CODE" />
        <meta property="fc:frame:button:1:target" content="https://github.com/dabit3" />
      </head>
    </html>
    `
  )
}

export const dynamic = 'force-dynamic'