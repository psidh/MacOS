import Image from 'next/image';
import Dock from './Dock';

export default function Page() {
  return (
    <div className='background-container h-screen'>
      <Image src='/big-sur.jpg' layout='fill' alt='Background' />
      {/* Your content here */}
      <div className='flex flex-col items-center justify-end h-screen'>
        <Dock />
      </div>
    </div>
  );
}
