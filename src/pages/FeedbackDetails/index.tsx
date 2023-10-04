import { useParams } from "react-router-dom";

function FeedbackDetails() {
  const {id} = useParams()
  
  return (
      <>
        <h1>Pagina FeedbackDetails</h1>
        <p>Vc esta lendo o feedback numero: {id}</p>
      </>
    )
}
export default FeedbackDetails;