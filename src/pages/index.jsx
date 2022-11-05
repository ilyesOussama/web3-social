import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl mb-6 font-bold">Web3 Social</h1>
      <p className="text-2xl mb-5">
        This is a (meni) social media application, built using Lens Protocol
        API, Next.js, GraphQL and other technologies.
      </p>
      <p className="text-2xl mb-4">
        You can see the latest publications{" "}
        <Link
          href="/explore"
          className="underline underline-offset-4 decoration-lime-500"
        >
          here
        </Link>
        . <br />
        you can find lens profiles{" "}
        <Link
          href="/profiles"
          className="underline underline-offset-4 decoration-lime-500"
        >
          here
        </Link>
        .
      </p>
      <p className="text-2xl mb-4">
        I will add authentication, follow, like, comment and mirror
        functionalities soon.
      </p>
      <div className="text-2xl">
        <h2>Great Resourses to learn about lens protocol:</h2>
        <Link
          href="https://docs.lens.xyz/docs"
          className="underline underline-offset-4 decoration-lime-500 block"
        >
          Lens docs
        </Link>
        <Link
          href="https://docs.lens.xyz/docs"
          className="underline underline-offset-4 decoration-lime-500 block"
        >
          Developer Quickstart
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=LcxOdWWL8xs&"
          className="underline underline-offset-4 decoration-lime-500 block"
        >
          Nader Dabit video tutorial
        </Link>
        <Link
          href="https://github.com/dabit3/lens-create-publication-example"
          className="underline underline-offset-4 decoration-lime-500 block"
        >
          Nader Dabit Github repo (auth,posting)
        </Link>
      </div>
    </div>
  );
};

export default Home;
