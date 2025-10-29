import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary-content text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by SmartsMinds
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
