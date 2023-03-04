function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl mb-7'>Doggy Daily Blog</h1>
        <h2 className='md:mt-0'>
          Welcome to{" "}
          <span className='underline decoration-4 decoration-[#F7AB0A]'>
            Dog Lovers
          </span>{" "}
          favorite blog in Dogosphere
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-lg'>
        Hellog DoggyBloggers, Welcome to my dog blog, where I share my passion
        for all things canine! From training tips to heartwarming stories, my
        blog is a hub for dog lovers looking to learn, connect, and celebrate
        the special bond between dogs and humans. Join me on this journey as we
        explore the wonderful world of dogs together!
      </p>
    </div>
  );
}

export default Banner;
