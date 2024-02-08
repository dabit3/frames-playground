import Image from 'next/image'

export const runtime = 'edge'

const image = "https://i.imgur.com/E5e7907.png"
const link = 'https://nader.codes'
const buttonText = 'Visit'

export default function Home() {
  return (
    <div>
      <Image
        src={image}
        width={1910}
        height={1000}
        alt='Hello world.'
      />
      <a
      className='button'
      href={link} target="_blank" rel="no-opener">
        {buttonText}
      </a>
    </div>
  );
}

export async function generateMetadata({ params }) {

  const meta = {
    'fc:frame': 'vNext',
    'fc:frame:image': image,
    'fc:frame:button:1': buttonText,
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': link,
    'hey:portal': 'vNext',
    'hey:portal:image': image,
    'hey:portal:button:1': buttonText,
    'hey:portal:button:1:type': 'link',
    'hey:portal:button:1:target': link
  }

  return {
    openGraph: {
      images: [
        {
          url: image,
          width: '1910',
          height: '1000'
        }
      ]
    },
    other: {
      ...meta
    },
  }
}