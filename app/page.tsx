import { BlogPosts } from 'app/components/posts'
<a rel="me" href="https://hachyderm.io/@imcharlie">Mastodon</a>

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
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
