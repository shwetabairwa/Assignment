function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
        
        {/* Google Play Badge */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12 border-0 block"
          />
        </a>

        {/* App Store Badge */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12 border-0 block"
          />
        </a>

      </div>
    </footer>
  );
}

export default Footer;
