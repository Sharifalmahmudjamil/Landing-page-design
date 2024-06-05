const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#ECF5FF] text-base-content">
        <aside>
          <img
            className="w-[50px] h-[80px]"
            src="../../../Image/logo.png"
            alt=""
          />
          <p className="text-base font-medium text-[#475467]">
            Design amazing digital experiences
            <br />
            that create more happy in the world.
          </p>
        </aside>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Overview</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Releases</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Media kit</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Newsletter</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Help centre</a>
          <a className="link link-hover">Help centre</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
          <a className="link link-hover">AngelList</a>
          <a className="link link-hover">Dribbble</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Licenses</a>
          <a className="link link-hover">Settings</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
