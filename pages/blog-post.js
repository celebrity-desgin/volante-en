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
              <span>20 Sep 2024</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Joey Bertschler</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h2>Blockchain Introduction</h2>
          <p>
            Blockchain is a revolutionary technology that securely records and
            stores information.
          </p>
          <img src="assets/blog/blog-post-1.jpg" alt="Blog image" />
          <div className="post-content">
            <h3>Understanding Blockchain: A Simple Introduction</h3>
            <p>
              Blockchain operates like a digital notebook where each page,
              called a block, is connected to the previous and subsequent ones,
              forming an unalterable chain. Every block contains a list of
              transactions, and once it's filled, the information becomes locked
              and cannot be tampered with.
            </p>

            <h3>Key Characteristics of Blockchain Technology:</h3>
            <ul>
              <li>
                <strong>Decentralization:</strong> Data is not controlled by a
                single authority but by a distributed network of computers
                (nodes), removing the need for banks or governments.
              </li>
              <li>
                <strong>Immutability:</strong> Once recorded, data cannot be
                deleted, ensuring security and preventing fraud.
              </li>
              <li>
                <strong>Security:</strong> Cryptographic techniques make hacking
                extremely difficult.
              </li>
              <li>
                <strong>Transparency:</strong> Transactions are visible to
                everyone while maintaining anonymity.
              </li>
              <li>
                <strong>Efficiency:</strong> Transactions are processed faster
                than traditional banking systems.
              </li>
              <li>
                <strong>Trustless System:</strong> Eliminates the need for
                intermediaries by ensuring verified transactions.
              </li>
            </ul>

            <h3>How Does Blockchain Work?</h3>
            <p>Here’s a simplified step-by-step process:</p>
            <ol>
              <li>
                <strong>Transaction Initiation:</strong> A user creates a
                transaction request.
              </li>
              <li>
                <strong>Verification:</strong> Nodes check transaction validity.
              </li>
              <li>
                <strong>Block Creation:</strong> Verified transactions are
                grouped into a block.
              </li>
              <li>
                <strong>Consensus:</strong> The network agrees on the new block
                using mechanisms like Proof of Work (PoW) or Proof of Stake
                (PoS).
              </li>
              <li>
                <strong>Block Added:</strong> The new block is added to the
                blockchain, securing the chain.
              </li>
              <li>
                <strong>Transaction Completion:</strong> The transaction is
                finalized and permanently recorded.
              </li>
            </ol>

            <h3>Benefits of Blockchain Technology</h3>
            <p>
              Blockchain technology transforms digital transactions and data
              management. Key advantages include:
            </p>
            <ul>
              <li>
                <strong>Trustless Transactions:</strong> No need for middlemen
                like banks, as the system itself guarantees secure transactions.
              </li>
              <li>
                <strong>Enhanced Security:</strong> Distributed ledger and
                encryption make data tampering extremely difficult.
              </li>
              <li>
                <strong>Increased Efficiency:</strong> Faster transactions,
                lower costs, and reduced reliance on intermediaries.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              Blockchain is a revolutionary technology addressing security,
              accountability, and centralized control in new ways. While widely
              known for cryptocurrency, its applications extend to logistics,
              voting systems, and much more.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};

export default BlogPost;
