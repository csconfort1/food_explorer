import {FaRegTrashCan, FaPencil} from "react-icons/fa6";
import {Button} from '../Button';
import {Container} from './styles';
import {useAdmButtons} from './useAdmButtons';

export function AdmButtons({ meal_id }) {
  const {handleDeleteMeal, handleEditMeal} = useAdmButtons({ meal_id });

  return (
    <Container>
      <Button
        icon={FaPencil}
        title="Editar"
        isHighlighted={false}
        onClick={handleEditMeal}
      />
      <Button
        icon={FaRegTrashCan}
        title="Excluir"
        onClick={handleDeleteMeal}
      />
    </Container>
  );
}