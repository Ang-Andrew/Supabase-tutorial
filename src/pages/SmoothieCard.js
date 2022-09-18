import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"

const SmoothieCard = ({ smoothie, onDelete}) => {

  const handleDelete = async(e) => {
    const { data, error } = await supabase
      .from('smoothies')
      .delete()
      .eq('id', smoothie.id)

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log("deleting " + smoothie.id)
      onDelete(smoothie.id)
    }

  }

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={'/' + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>delete</i>
      </div>
    </div>
  )
}

export default SmoothieCard