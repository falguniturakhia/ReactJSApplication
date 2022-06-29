import react from "react";

function Home() {
    return (
        <div style={{ height: "60vh" }}>

            <nav class="nav nav-pills bg-dark">
                <div style={{ color: "white", marginLeft: "10%" }}>Popular Titles</div>

            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-2 mt-2">

                        <div class="card text-bg-secondary mb-3" >

                            <div class="card-body">
                                <h5 class="card-title"><a href="/series" style={{ color: "white" }}> Series</a></h5>

                            </div>
                        </div>




                    </div>
                    <div className="col-2 mt-2">

                        <div class="card text-bg-secondary mb-3" >

                            <div class="card-body">
                                <h5 class="card-title"><a href="/movies" style={{ color: "white" }}>Movies</a></h5>

                            </div>
                        </div>




                    </div>
                    <div className="col-4">

                    </div>
                </div>

            </div>


        </div >
    );
}

export default Home;
