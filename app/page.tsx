import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        heya, name's charlie.
      </h1>
      <p className="mb-4">
        {`I'm the founder and owner of mosaic, and i'm a full stack dev based in Lithuania.
I really like developing open source stuff and i really like opensource overall. I'm non-binary, and i'm also a journalist.
I'm also the owner of the Mosaic Foundation, which is a foundation trying to reclaim the internet, and make it free of big tech. any pronouns.`}
        </p>
        <a href="https://t480.dev/donations" target="_blank" rel="noopener noreferrer">
          If you want, you can send me some monero, or buy me a coffee.
        </a>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
