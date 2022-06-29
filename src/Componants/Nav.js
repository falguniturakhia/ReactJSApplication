import react from "react";

function Nav() {
    return (
        <div>

            <nav class="nav nav-pills flex-column flex-sm-row bg-primary">
                <a class="flex-sm-fill text-sm-center nav-link active" href="/" >DEMO Streaming</a>
                <a class="flex-sm-fill text-sm-center nav-link" ></a>
                <a class="flex-sm-fill text-sm-center nav-link active" href="#">Log in</a>
                <a class="flex-sm-fill text-sm-start nav-link active"><button className="btn btn-dark"> Start Your Free Trial</button></a>
            </nav>


        </div >
    );
}

export default Nav;
