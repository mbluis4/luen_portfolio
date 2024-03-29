import socialLinks from "../data/socialLinks";

const Footer = () => {
  return (
    <footer
      className="bg-slate-900 text-slate-100 
    h-36 grid text-center place-items-center py-6 mt-auto"
    >
      <div className="flex space-x-4 text-2xl mb-5">
        {socialLinks.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" key={social.id}>
            {social.icon}
          </a>
        ))}
      </div>
      <h2 className="text-lg uppercase">
        copyright&copy;{new Date().getFullYear()}
        <span className="text-primary_1"> DevLuen</span> all rights reserved
      </h2>
    </footer>
  );
};

export default Footer;
