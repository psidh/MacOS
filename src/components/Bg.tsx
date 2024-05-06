import Image from 'next/image';
import Dock from './Dock';
import Menu from './Menu';

export default function Page() {
  return (
    <div className='background-container h-screen'>
      <Image src='/big-sur.jpg' layout='fill' alt='Background' />
      {/* Your content here */}
      <div className='flex flex-col items-center justify-between h-screen'>
        <Menu />
        <Dock />
      </div>
    </div>
  );
}
