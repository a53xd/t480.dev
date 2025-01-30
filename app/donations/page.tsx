export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        donation options!
      </h1>
      <p className="mb-4">
        {`hey so, if you wanna support me, you have a couple options.`}
      </p>
      <p className="mb-4">
        {`first, my ko-fi: `}
        <a href="https://ko-fi.com/chardev" target="_blank" rel="noopener noreferrer">
          https://ko-fi.com/chardev
        </a>
      </p>
      <p className="mb-4">
        {`second, my monero address:`}
      </p>
      <pre className="bg-gray-100 p-4 rounded">
        <code>
          {`49XVAsnVEyNdX4P73uzuEcioy4wAUmKUD6NbMgG3dGoYZEVjiMmBRoq6QnQdpcWmNgFpQLbniK7BU1weNB3DGL6S9nysDjd`}
        </code>
      </pre>
      <div className="my-8">
      </div>
    </section>
  )
}
