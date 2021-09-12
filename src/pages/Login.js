function Login() {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                <div className="login-page elevation rounded">
                    <div className="text-center mb-5 title">
                        <h1>Scopic Test</h1>
                        <hr/>
                        <h4>Login to Your Account</h4>
                        <p className="m-0">Start bidding for free</p>
                    </div>

                    <form className="p-3 pr-5 pl-5">
                        <div className="form-group elevation mb-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder=".e.g johndoe"/>
                        </div>

                        <div className="form-group elevation mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder=".e.g secret" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-5 font-small">Login to Your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
