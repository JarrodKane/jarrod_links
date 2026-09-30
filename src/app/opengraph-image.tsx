import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jarrod Kane, Melbourne comedian';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const photo = await fetch(
    new URL('../../public/newJarrod.png', import.meta.url),
  ).then(res => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: 80,
          background:
            'linear-gradient(90deg, rgb(71, 0, 81) 0%, rgb(243, 43, 95) 55%, rgb(252, 134, 69) 100%)',
          color: 'white',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo as unknown as string}
          width={360}
          height={360}
          alt=""
          style={{
            borderRadius: 9999,
            border: '8px solid #111827',
            boxShadow: '16px 16px 0 rgba(0, 0, 0, 0.8)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              textShadow: '6px 6px 0 rgba(0, 0, 0, 0.8)',
            }}
          >
            Jarrod Kane
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 6,
            }}
          >
            Melbourne Comedian
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>
            The Melbourne Comedy Club · The Mic List
          </div>
        </div>
      </div>
    ),
    size,
  );
}
