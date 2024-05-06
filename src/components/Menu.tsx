import { IoBatteryFull } from 'react-icons/io5';
import { FaWifi } from 'react-icons/fa';

export default function Menu() {
  // Create a new Date object
  const currentDate = new Date();

  // Extract individual date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the date components as a string in the desired format
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
    day < 10 ? '0' : ''
  }${day} ${hours}:${minutes}:${seconds}`;

  console.log(formattedDate); // Output the formatted date

  return (
    <>
      <div className='w-full bg-black py-1 px-4 text-white backdrop-blur-sm bg-opacity-80'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between space-x-8'>
            <p>Finder</p>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Go</p>
            <p>Window</p>
            <p>Help</p>
          </div>
          <div className='flex items-center justify-between space-x-8 text-sm'>
            <p>User</p>
            <IoBatteryFull className='text-2xl' />
            <FaWifi className='text-xl'  />
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
