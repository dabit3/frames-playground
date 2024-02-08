import Image from "next/image";
import Head from 'next/head'

const image = "https://i.imgur.com/E5e7907.png"

const meta = {
  'fc:frame': 'vNext',
  'fc:frame:image': image,
  'fc:frame:button:1': 'Visit',
  'fc:frame:button:1:action': 'link',
  'fc:frame:button:1:target': 'https://nader.codes',
  'hey:portal': 'vNext',
  'hey:portal:image': image,
  'hey:portal:button:1': 'Visit',
  'hey:portal:button:1:action': 'link',
  'hey:portal:button:1:target': 'https://nader.codes',
}

export const metadata = {
  openGraph: {
    images: [
      {
        width: '400',
        height: '400'
      }
    ]
  },
  other: {
    ...meta
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
