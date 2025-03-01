export default function Page() {
  return (
    <div>
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
            click me!
          </a>
        </p>
        <p className="mb-4">
          {`secondly, my monero address:`}
        </p>
        <pre>
          <code>
            {`49XVAsnVEyNdX4P73uzuEcioy4wAUmKUD6NbMgG3dGoYZEVjiMmBRoq6QnQdpcWmNgFpQLbniK7BU1weNB3DGL6S9nysDjd`}
          </code>
        </pre>
      </section>
      <div className="my-8">
      </div>
    </div>
  );
}