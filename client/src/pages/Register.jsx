function Register() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">PawPal</div>

                    <h1>Create your account</h1>
                    <p>
                        Start taking better care of your best friend.
                    </p>
                </div>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder="Enter your name"
                        />
                    </div>
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
                        placeholder="Create a password"
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                        type="password"
                        placeholder="Confirm your password"
                        />
                    </div>
                    <button className="auth-button" type="submit">
                        Create Account
                    </button>
                    
                </form>
                <p className="auth-switch">
                    Already have an account?
                    <a href="/login">login</a>
                </p>
            </div>
        </div>
    )
}
export default Register;