import { Fragment, useEffect } from 'react';

const BlogPost = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('blog-page');
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>20 Sep, 2024</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Joey Bertschler</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>34 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h2>Overview of Cryptocurrency</h2>
          <p>
            Cryptocurrency is digital or virtual money that exists online and is
            secured by technology.
          </p>
          <img src="assets/blog/blog-post-2.jpg" alt="Blog image" />
          <div className="post-content">
            <h3>What is Cryptocurrency?</h3>
            <p>
              Cryptocurrency is digital or virtual money that exists online and
              is secured by technology. Unlike traditional money (like dollars
              or euros), cryptocurrency isn’t controlled by any government,
              bank, or company. Instead, it uses cryptography (a method of
              protecting information) to keep transactions secure and prevent
              fraud. The most well-known cryptocurrency is Bitcoin, but there
              are thousands of others, such as Ethereum, Litecoin, and Ripple.
            </p>

            <h3>Cryptocurrencies are characterised by several key features:</h3>
            <ul>
              <li>
                <strong>Digital and Decentralized:</strong> Cryptocurrencies are
                digital assets that exist only online and operate without the
                control of a single central authority, such as a bank or
                government.
              </li>
              <li>
                <strong>Peer-to-Peer Transactions:</strong> With
                cryptocurrencies, individuals can send and receive funds
                directly to and from others without requiring the involvement of
                intermediaries, such as banks.
              </li>
              <li>
                <strong>Secured by Blockchain Technology:</strong> All
                cryptocurrency transactions are recorded on a blockchain, which
                is a public, secure ledger. This technology ensures that
                transactions are transparent, secure, and resistant to
                tampering.
              </li>
              <li>
                <strong>Limited Supply:</strong> Many cryptocurrencies,
                including Bitcoin, have a capped supply, meaning that there is a
                fixed number of coins that will ever be created. This scarcity
                can impact their value and appeal to investors.
              </li>
            </ul>

            <h2>How Do You Use Cryptocurrency?</h2>
            <ol>
              <li>
                <strong>Buying and Selling:</strong> You can think of
                cryptocurrency like digital cash, which you can use to buy
                things or pay for services. However, not every store or service
                accepts it yet.
              </li>
              <li>
                <strong>Investment:</strong> Some people buy cryptocurrency as a
                way to invest, hoping that its value will go up over time.
                However, just like any investment, there’s always a risk that
                its value could go down too.
              </li>
              <li>
                <strong>Trading:</strong> A lot of people trade cryptocurrencies
                like buying and selling stocks, trying to profit from the
                constant changes in prices.
              </li>
            </ol>

            <h2>How to Earn Money From Cryptocurrency?</h2>
            <p>
              There are various ways to make money from cryptocurrency, some of
              which are simpler than others. Below are a few beginner-friendly
              methods:
            </p>

            <h3>1. Buying and Holding (Long-Term Investing)</h3>
            <p>
              One of the simplest ways to earn money from cryptocurrency is by
              buying coins and holding them long-term. This is known as{' '}
              <strong>HODLing</strong> in the crypto world.
            </p>
            <h4>How it Works:</h4>
            <ul>
              <li>
                Buy a cryptocurrency you believe will increase in value over
                time.
              </li>
              <li>Store it in a secure digital wallet.</li>
              <li>Wait for the price to rise, then sell it for a profit.</li>
            </ul>

            <h3>2. Trading Cryptocurrencies (Short-Term Investing)</h3>
            <h4>How it Works:</h4>
            <ul>
              <li>Buy a cryptocurrency when the price is low.</li>
              <li>Sell it when the price is higher.</li>
              <li>Repeat the process over short periods.</li>
            </ul>

            <h3>3. Mining</h3>
            <h4>How it Works:</h4>
            <ul>
              <li>Set up mining hardware.</li>
              <li>Join a mining pool or mine on your own.</li>
              <li>Earn cryptocurrency rewards.</li>
            </ul>

            <h3>4. Earning through Airdrops and Giveaways</h3>
            <h4>How it Works:</h4>
            <ul>
              <li>
                Sign up for airdrops or giveaways announced by cryptocurrency
                projects.
              </li>
              <li>Receive free tokens in your wallet.</li>
              <li>
                Hold or sell these tokens for profit once they gain value.
              </li>
            </ul>

            <h2>Things to Keep in Mind</h2>
            <ul>
              <li>
                <strong>Do Your Research:</strong> Never invest in a
                cryptocurrency without understanding what it is and how it
                works.
              </li>
              <li>
                <strong>Invest What You Can Afford to Lose:</strong>{' '}
                Cryptocurrencies are risky, so don’t invest money you can’t
                afford to lose.
              </li>
              <li>
                <strong>Use Secure Platforms:</strong> Only use reputable
                exchanges and wallets to buy, sell, or store your
                cryptocurrency.
              </li>
              <li>
                <strong>Diversify:</strong> Don’t put all your money in one
                cryptocurrency. Spread your investments to reduce risk.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Cryptocurrency offers several ways to make money, from simple
              methods like buying and holding to more advanced options like
              trading and staking. While it’s an exciting and growing space,
              it’s important to proceed with caution, do thorough research, and
              always consider the risks.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
