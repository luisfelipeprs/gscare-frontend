import { useParams, useNavigate } from "react-router-dom";

export function FeedbackDetails() {
  const {id} = useParams()

  const navigate = useNavigate()

  const handlaRemoveFeedback = () => {
    console.log("feedback removido!")
    return navigate("/admin/feedback")
  }
  
  return (
      <>
        <h1>Pagina FeedbackDetails</h1>
        <p>Vc esta lendo o feedback numero: {id}</p>
        <button onClick={handlaRemoveFeedback}>Excluir feedback</button>
      </>
    )
}
