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
              <span>10 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h2>A Financial Lifeline for Employees-EWA</h2>
          <p>
            Earned Wage Access (EWA) is a service that allows workers to access
            the money they have already earned before their regular payday.
          </p>
          <img src="assets/blog/blog-post-3.jpg" alt="Blog image" />
          <div className="post-content">
            <h3>What is Earned Wage Access (EWA)?</h3>
            <p>
              Earned Wage Access (EWA) is a service that allows workers to
              access the money they have already earned before their regular
              payday. Instead of waiting until the end of the week or month for
              their paycheck, employees can get part of their earnings whenever
              they need it. For example, if you’ve worked five days in a
              two-week pay period and you need money before payday, EWA allows
              you to withdraw a portion of your earnings for those five days,
              even though the official payday hasn’t arrived yet.
            </p>

            <h2>How Does EWA Work?</h2>
            <p>Here’s a simple step-by-step look at how EWA typically works:</p>
            <ol>
              <li>
                <strong>Work Hours:</strong> You work your regular job and
                accumulate earnings as usual. Let’s say you’re paid bi-weekly,
                but you’ve already earned wages for the first week.
              </li>
              <li>
                <strong>Use an EWA Service:</strong> Many companies partner with
                EWA service providers or offer this option directly through
                their payroll system. Some popular EWA platforms include Earnin,
                DailyPay, and Even.
              </li>
              <li>
                <strong>Request Your Earned Wages:</strong> Using the app or
                platform, you can request to access a portion of the wages
                you’ve earned so far.
              </li>
              <li>
                <strong>Receive Funds:</strong> Once you make the request, the
                funds are transferred to your bank account, digital wallet, or
                prepaid card.
              </li>
              <li>
                <strong>Automatic Deduction on Payday:</strong> The amount you
                withdrew early is automatically deducted from your paycheck.
              </li>
            </ol>

            <h2>Benefits of Earned Wage Access</h2>
            <p>
              EWA offers several advantages, especially for those who face
              financial emergencies between paychecks:
            </p>
            <ul>
              <li>
                <strong>Immediate Access to Earnings:</strong> No need to wait
                until payday to access your earned money.
              </li>
              <li>
                <strong>Avoid High-Interest Loans:</strong> Helps you avoid
                payday loans or credit card debt with high interest rates.
              </li>
              <li>
                <strong>Better Financial Flexibility:</strong> Manage unexpected
                expenses like medical bills, car repairs, or urgent purchases.
              </li>
              <li>
                <strong>No Interest or Hidden Fees:</strong> Many EWA services
                charge either a flat fee or a small tip, and some are even free.
              </li>
            </ul>

            <h2>Things to Consider About EWA</h2>
            <p>
              While EWA can be helpful, there are a few things to keep in mind:
            </p>
            <ul>
              <li>
                <strong>Not a Replacement for Budgeting:</strong> Using it too
                frequently can leave you short on your actual payday.
              </li>
              <li>
                <strong>Access Limits:</strong> Most EWA services only allow you
                to access a portion of your wages, typically up to 50%.
              </li>
              <li>
                <strong>Fees:</strong> Some services charge small fees per
                transaction (e.g., $1-5), which can add up if used often.
              </li>
            </ul>

            <h2>How to Get Started with EWA</h2>
            <p>To access your earned wages, follow these simple steps:</p>
            <ol>
              <li>
                <strong>Check if Your Employer Offers EWA:</strong> Some
                companies already partner with EWA providers.
              </li>
              <li>
                <strong>Download the EWA App:</strong> If your employer offers
                EWA, download the app (like Earnin, DailyPay, or Even) and
                create an account.
              </li>
              <li>
                <strong>Link Your Bank Account:</strong> You’ll usually need to
                link your bank account or direct deposit details to receive your
                wages.
              </li>
              <li>
                <strong>Request Your Wages:</strong> After setting everything
                up, you can start requesting portions of your earned wages as
                needed.
              </li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              Earned Wage Access (EWA) is a flexible solution that allows you to
              access a portion of your paycheck before payday. It helps you
              cover unexpected expenses without the need for high-interest loans
              or credit cards. While it’s a great tool for managing short-term
              financial needs, it’s important to use it wisely to avoid
              disrupting your overall financial plan. By using EWA responsibly,
              you can enjoy the peace of mind that comes with having access to
              your hard-earned money whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
