import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'welcome.',
  description: 'to what... to the rantpaper!',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
