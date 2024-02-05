import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 mt-44">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <a href="index.html">
                <img src="./logo.png.webp" alt="Footer Logo" />
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li className='mb-5'><a href="#" className="text-gray-400  hover:text-white ">Work</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400  hover:text-white ">Services</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400  hover:text-white ">Products</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400  hover:text-white ">Tips & Tricks</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul>
                <li className='mb-5'><a href="#" className="text-gray-400 hover:text-white">Air freight</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400 hover:text-white">Ocean freight</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400 hover:text-white">Large projects</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul>
                <li className='mb-5'><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400 hover:text-white">Submit Ticket</a></li>
                <li className='mb-5'><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="mb-4 text-gray-400">Subscribe newsletter to get updates.</p>
              <div id="mc_embed_signup">
                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate="true">
                  <input type="email" name="EMAIL" id="newsletter-form-email" placeholder="Enter your email" className="placeholder hide-on-focus" />
                  <div className="form-icon">
                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                      <img src="assets/img/icon/Icon-send.svg" alt="" />
                    </button>
                  </div>
                  <div className="mt-2 text-sm text-gray-400"></div>
                </form>
              </div>
            </div>
            <div className="footer-social mt-4">
              <a href="https://www.fb.com/sai4ull" className="mr-4"><i className="fab fa-facebook text-gray-400 hover:text-white"></i></a>
              <a href="#" className="mr-4"><i className="fab fa-instagram text-gray-400 hover:text-white"></i></a>
              <a href="#" className="mr-4"><i className="fab fa-linkedin-in text-gray-400 hover:text-white"></i></a>
              <a href="#" className="mr-4"><i className="fab fa-youtube text-gray-400 hover:text-white"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
