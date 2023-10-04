import { Link } from "react-router-dom";

function Feedback() {
  return (
      <>
        <h1>Pagina Feedback</h1>
        <p>
          <Link to="/admin/feedback/1">feedback 1</Link>
        </p>
        <p>
          <Link to="/admin/feedback/2">feedback 2</Link>
        </p>
        <p>
          <Link to="/admin/feedback/3">feedback 3</Link>
        </p>
      </>
    )
}
export default Feedback;