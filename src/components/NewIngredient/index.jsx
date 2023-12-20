import {TbHemispherePlus} from "react-icons/tb";
import {GiKnifeFork} from "react-icons/gi";
import {Container} from './styles';

export function NewIngredient({ onClick, onChange, isNew, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <>
          <input
            type="text"
            placeholder={isNew && 'Adicionar'}
            value={value}
            onChange={onChange}
            {...rest}
          />
          <button
            type="button"
            onClick={onClick}
          >
            <TbHemispherePlus/>
          </button>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button
            type="button"
            onClick={onClick}
          >
            <GiKnifeFork/>
          </button>
        </>
      )}
    </Container>
  );
}