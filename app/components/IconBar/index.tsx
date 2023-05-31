import Remote from '../../../public/assets/remote.png';
import Mic from '../../../public/assets/mic.png';
import Headphones from '../../../public/assets/headphones.png';
import Trophy from '../../../public/assets/trophy.png';
import Paint from '../../../public/assets/paint.png';
import Image from 'next/image';

const icons = [
  {title: "Games",   img: Remote},
  {title: "IRL",     img: Mic},
  {title: "Music",   img: Headphones},
  {title: "Esports", img: Trophy},
  {title: "Creative",img: Paint },
]

const IconBar = () => {
  return (
    <div className='p-2 md:p-8'>
      {/* Container */}
      <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
        {/* Grid Items */}
        {icons.map((item, i)=>(
          <div key={i} className='w-full h-[50px] bg-[#9147ff] hover:bg-[#663FA6] flex justify-between items-center px-4 rounded cursor-pointer'>
          <p className='text-2xl font-bold'>{item.title}</p>
          <Image src={item.img} alt='/' />
        </div>  
        ))}
      </div>
    </div>
  );
};

export default IconBar;