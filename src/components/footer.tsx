import React from'react';

const Footer: React.FC = () => {
  <footer className="footer footer-center mx-auto max-w-md bg-base-100 text-base-content pt-0">
        <nav className="grid grid-flow-col gap-4">
          <a href="https://lu.ma/daospring" className="link link-hover hover:text-accent">
            Luma
          </a>
          <a href="https://charmverse.io/" className="link link-hover hover:text-accent">
            Charmverse
          </a>
          <a href="https://giveth.io/project/daocember-the-ultimate-dao-playbook-2024" className="link link-hover hover:text-accent">
            Giveth
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/daocember" className="fill-current hover:fill-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M18.234 14.162L26.977 4h-2.072l-7.591 8.824L11.25 4H4.258l9.169 13.343L4.258 28H6.33l8.016-9.318L20.75 28h6.993zm-2.837 3.299l-.93-1.329L7.078 5.56h3.182l5.964 8.532l.93 1.329l7.753 11.09h-3.182z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
};

export default Footer;