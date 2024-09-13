import { useLocation } from "@remix-run/react";
import { useEffect } from "react";

export default function Index() {
  const location = useLocation();

  // Handle hash scrolling on route change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Custom smooth scroll handler
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", id);
    }
  };

  return (
    <div className="container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to the Remix Contacts App</h1>
        <p className="hero-description">
          Manage your contacts seamlessly with our modern app. Create, update,
          and delete contacts with ease.
        </p>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "#features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => handleSmoothScroll(e, "#gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={(e) => handleSmoothScroll(e, "#contacts")}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2 className="section-title">About Remix Contacts App</h2>
        <p className="section-description">
          This app allows users to create, update, and delete their contacts
          effortlessly. A simple, beautiful interface for managing all your
          contacts in one place.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <h2 className="section-title">App Features</h2>
        <ul className="feature-list">
          <li>Create new contacts</li>
          <li>Update existing contacts</li>
          <li>Delete contacts</li>
          <li>Easy search and filtering options</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <h2 className="section-title">Gallery</h2>
        <div className="image-grid">
          <img
            src="https://plus.unsplash.com/premium_photo-1674677788210-ea8be01cd424?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Technology"
            className="gallery-image"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1676955434748-52f40a03a511?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coding"
            className="gallery-image"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1720649610188-3dfa0defde94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Software Development"
            className="gallery-image"
          />
          <img
            src="https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Design"
            className="gallery-image"
          />
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Networking"
            className="gallery-image"
          />
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="gallery-image"
          />
          <img
            src="https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="gallery-image"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="gallery-image"
          />
          <img
            src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="gallery-image"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="gallery-image"
          />
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="section contacts-section">
        <h2 className="section-title">Manage Your Contacts</h2>
        <p className="section-description">Start managing your contacts now!</p>
        <div className="cta-button">View Contacts</div>
      </section>
    </div>
  );
}
