import react from "react";

function Footer() {
    return (
        <div>

            <footer class="py-3 my-4 bg-dark" >
                <ul class="nav justify-content-start border-bottom pb-3 mb-3" >
                    <li class="nav-item"><a href="#" class="nav-link px-2 " style={{ color: "white" }}>Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 " style={{ color: "white" }}>Terms and conditions</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 " style={{ color: "white" }}>Privacy Policy</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 " style={{ color: "white" }}>Collection Statement</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 " style={{ color: "white" }}>Help</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 " style={{ color: "white" }}>Manage Account</a></li>


                </ul>
                <p style={{ color: "white" }} class="text-start ">© 2016 Demo Streaming All Rights Reserved.</p>

            </footer>

        </div >
    );
}

export default Footer;
