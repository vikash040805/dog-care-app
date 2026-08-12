function Login(){
    return (
        <div className="auth-page">
            <div className="auth-card">

                <div className="auth-header">
                    <div className="auth-logo">🐾 PawPal</div>

                    <h1> Welcome back</h1>

                    <p>Log in to continue caring for your best friend.</p>
                </div>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                        type="email"
                        placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                        type="password"
                        placeholder="Enter your password"
                        />
                    </div>
                    <div className="forgot-password">
                        <a href="#"> Forgot password?</a>
                    </div>
                    <button className="auth-button" type ="submit">
                        Login
                    </button>
                </form>
                <p className="auth-switch">
                    Don't have an account?
                    <a href="/register">Create one</a>
                </p>
            </div>
        </div>
    )
}
export default Login;