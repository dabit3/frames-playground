
export default function Home() {
  return (
    <div>
      <h1>Hello world.</h1>
    </div>
  );
}

export async function generateMetadata({ params }) {
  console.log('params', params)
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
    'hey:portal:button:1:type': 'redirect',
    'hey:portal:button:1:target': 'https://nader.codes',
  }

  return {
    openGraph: {
      images: [
        {
          url: image,
          width: '400',
          height: '400'
        }
      ]
    },
    other: {
      ...meta
    },
  }
}