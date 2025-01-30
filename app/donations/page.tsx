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
          {`second, my monero address:`}
        </p>
        <pre>
          <code>
            {`49XVAsnVEyNdX4P73uzuEcioy4wAUmKUD6NbMgG3dGoYZEVjiMmBRoq6QnQdpcWmNgFpQLbniK7BU1weNB3DGL6S9nysDjd`}
          </code>
        </pre>
        <p className="mb-4">
          {`third, my EVM address:`}
        </p>
        <div>
          <pre>
            <code>
              {`0xeE67197329F8Aa4dD30250aeB369DA0Dec5E30E9`}
            </code>
          </pre>
        </div>
        <div className="my-8">
        </div>
      </section>
    </div>
  );
}