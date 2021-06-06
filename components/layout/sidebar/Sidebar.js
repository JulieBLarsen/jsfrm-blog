import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import LatestPosts from './LatestPosts';

function Sidebar() {
  return (
    <div className=" max-w-sm mx-auto h-full text-center">
      <div className="p-2 rounded-sm">
        <h3 className="handwritten text-6xl py-4">The author</h3>
        <div className="h-60 w-full relative rounded-sm">
          <Image
            src="/tamara-bellis-JoKS3XweV50-unsplash.jpg"
            alt="Picture of the blog author"
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <p className="text-center py-5 px-2 rounded-b-sm text-sm  bg-teal">
          Hi! My name is Cara and I just <strong>love</strong> coffee! I go
          around town checking out different coffee shops and cafes. My day job
          is to style dogs.
        </p>
        <div className="flex justify-between p-5 px-10">
          <FontAwesomeIcon
            className="mr-2 w-4 text-neutral-700 hover:text-neutral-600 cursor-pointer transition"
            icon={['fab', 'facebook']}
          />
          <FontAwesomeIcon
            className="mr-2 w-4 text-neutral-700 hover:text-neutral-600 cursor-pointer transition"
            icon={['fab', 'twitter']}
          />
          <FontAwesomeIcon
            className="mr-2 w-4 text-neutral-700 hover:text-neutral-600 cursor-pointer transition"
            icon={['fab', 'instagram']}
          />
          <FontAwesomeIcon
            className="mr-2 w-4 text-neutral-700 hover:text-neutral-600 cursor-pointer transition"
            icon={['fab', 'pinterest']}
          />
        </div>
      </div>

      <div className="py-5">
        <label htmlFor="search" className="font-serif font-semibold">
          Search posts:
        </label>
        <div className="flex py-2 gap-2">
          <input type="text" id="search" name="search" className="rounded-sm" />
          <FontAwesomeIcon
            className="mr-2 w-4 text-neutral-700 hover:text-neutral-600  cursor-pointer transition"
            icon={faSearch}
          />
        </div>
      </div>
      <LatestPosts />
    </div>
  );
}

export default Sidebar;
