import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey, i'm charlie.
      </h1>
      <p className="mb-4">
        {`Hey! I'm the founder and owner of loopback, and i'm a full stack dev based in Lithuania.
        I really like developing open source stuff and i really like opensource overall. I'm non-binary, and i'm also a journalist.
        I'm also the owner of the Human Foundation, which is a group of companies ethically working for the people. any pronouns.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
