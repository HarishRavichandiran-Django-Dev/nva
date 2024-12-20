import React from "react";

function Footer() {
    return(
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-md">
                        <h5>Find Us here</h5>
                        <p className="small">find us here
                        25, ISTE Complex, Gandhi Mandapam Road, (Opp: Anna Centenary Library), Kotturpuram, Chennai - 600025</p>
                    </div>
                    <div className="col-12 col-md">
                        <h5>Contact Us</h5>
                        <p>+91 44-2442 1445
                        Call Centre No. :
                         +91 7598730125
                        [Mon-Sat, 9:00AM - 5:30PM]
                        contact.nva@nielit.gov.in</p>
                    </div>
                    <div className="col-12 col-md">
                        <h6>Follow us</h6>
                        <p className="small">
                            <a href="#" className="text-white me-2">Facebook</a> | <a href="#" className="text-white ms-2">Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer;