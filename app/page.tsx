export const runtime = 'edge'

const image = "https://i.imgur.com/E5e7907.png"
const link = 'https://nader.codes'
const buttonText = 'Visit'

export default function Home() {
  return (
    <div>
      <img
        src={image}
        width={700}
        height={350}
        alt='Hello world.'
      />
      <a
      href={link} target="_blank" rel="no-opener">
        <div className='
        md:w-[700px]
        w-full mt-1 hover:bg-[#f1f1f1] transition rounded py-2 bg-white px-12 flex items-center w-[200px] justify-center'>
         <p className='text-black'>{buttonText}</p>
        </div>
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
    
    'fc:frame:post_url': 'http://localhost:3002/target',
    'fc:frame:button:2': 'NDT',
    'fc:frame:button:2:action': 'post',
    // 'fc:frame:button:2:target':'http://localhost:3002/target',

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