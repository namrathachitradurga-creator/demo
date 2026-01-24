import "./Appp.css";

function App() {
    const redirectToReact = () => {
        window.open("https://react.dev", "_blank");
    };

    return (
        <div className="app">
            <header className="hero">
                <nav className="nav">
                    <h2 className="logo">ReactUI</h2>
                    <button className="nav-btn" onClick={redirectToReact}>
                        Docs
                    </button>
                </nav>

                <div className="hero-content">
                    <h1>Build Modern UIs with React</h1>
                    <p>
                        A powerful JavaScript library for building fast, interactive user
                        interfaces with reusable .
                    </p>
                    <button className="cta-btn" onClick={redirectToReact}>
                        Get Started
                    </button>
                </div>
            </header>

            <section className="features">
                <div className="feature-card">
                    <h3>Component-Based</h3>
                    <p>Build encapsulated components that manage their own state.</p>
                </div>

                <div className="feature-card">
                    <h3>Fast Rendering</h3>
                    <p>Efficient updates with a virtual DOM for high performance.</p>
                </div>

                <div className="feature-card">
                    <h3>Strong Ecosystem</h3>
                    <p>Thousands of libraries and tools supported by the community.</p>
                </div>
            </section>

            <footer className="footer">
                <p>© 2026 ReactUI. Built for learning and growth.</p>
            </footer>
        </div>
    );
}

export default App;