import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>
        {" "}
        One-liner that will give you smile and insight
      </span>
    </h1>
    <p className='desc text-center'>
      One-liner is all about witty and humorous words, encouraging thoughts,
      insightful perspectives that can give you positive energy.
    </p>

    <Feed />
  </section>
);

export default Home;
