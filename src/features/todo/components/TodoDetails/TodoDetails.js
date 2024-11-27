import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const params = useParams();
  return (
    <>
      Item Details {params.id}-{params.sad}
    </>
  );
};

export default TodoDetails;
