const Footer = () => {
    return (
      <footer className="bg-blackPrimary text-whitePrimary py-8">
        <div className="container mx-auto text-center space-y-4">
          <p>© 2024 Dream Dealer. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            {['facebook', 'twitter', 'instagram'].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-redPrimary transition duration-300"
              >
                <i className={`fab fa-${platform}`} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  