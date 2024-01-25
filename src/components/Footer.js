import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer
        className="text-center text-lg-start text-black"
        style={{ "background-color": "" }}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h2 className="text mb-4 font-weight-bold">
                  iNoteBook<sup>&#174;</sup>
                </h2>
                <p>
                Welcome to <b>iNoteBook,</b> where technology meets convenience in the realm of note-taking and organization. At iNoteBook, we're on a mission to revolutionize..<a className="text-black" href="/about" style={{"textDecoration": "none"}}>Read More</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-black" href="/" style={{"textDecoration": "none"}}>TextUtils</a>
                </p>
                <p>
                  <a className="text-black" href="/" style={{"textDecoration": "none"}}>NewsMonkey</a>
                </p>
                <p>
                  <a className="text-black" href="/" style={{"textDecoration": "none"}}>More</a>
                </p>
                <p>
                  <a className="text-black" href="/" style={{"textDecoration": "none"}}>More</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{"background-color": "#3b5998"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{"background-color": "#55acee"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{"background-color": "#dd4b39"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{"background-color": "#ac2bac"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{"background-color": "#0082ca"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{"background-color": "#333333"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
          © 2024-2100 Copyright <br />
           <a className="text-black" href="https://inotebook.com/" style={{"textDecoration": "none"}} >iNoteBook<sup>&#174;</sup>.com </a> & 
           <a className="text-black" href="https://hamzaayazkhan.netlify.app" style={{"textDecoration": "none"}}> Hamza Ayaz Khan</a> 
        </div>
      </footer>
    </div>
  );
};

export default Footer;
