function Hero(){
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-tag">
                    🐾 Better care. Happier dogs.
                </p>
                <h1>
                    Everything your dog needs,
                    <span> all in one place.</span>
                </h1>
                <p classname="hero-description">
                    From feeding reminders and daily walks to health records,
                    and finding nearby vets - pawPal helps you take better care of your best friend.
                </p>
                <div className="hero-buttongs">
                    <button className="primary-btn">
                        <a href="/register">
                        Get Started 🐶
                        </a>
                    </button>

                    <button className="secondary-btn">
                        Explore Adoption
                    </button>
                </div>
                <div className="hero-stats">
                    <div>
                        <strong>24/7</strong>
                        <p>Care Support</p>
                    </div>
                    <div> 
                        <strong>🐕</strong> 
                        <p>Happy Dogs</p> 
                    </div>
                    <div>
                        <strong>🏥</strong>
                        <p>Nearby Vets</p>
                    </div>

                </div>

            </div>
            <div className="hero-image"> 
                <div className="dog-card"> 
                    🐶 
                </div>
            </div>
        </section>
    )
}
export default Hero;