import { Link } from "react-router-dom";

const Navigate = ( ) => {
    return (
        <nav className="navbar">
        <div className="link">
            <Link to={"/"}> View Creators  </Link>
            <Link to={'/person/creation'}>Create</Link>
        </div>
        </nav>
        )
}

export default Navigate;