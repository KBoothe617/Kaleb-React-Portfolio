import './navbar.css';

/// Navbar toggle button and links
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navagation Bar">
                    <span className="navbar-toggler-icon custom-navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 custom-nav-list">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
