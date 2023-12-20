import {SlCloudUpload} from "react-icons/sl";
import {Container} from './styles';

export function InputImage({ isAMeal, onChange, ...rest }) {
  return (
    <Container>
      <p>Imagem do {isAMeal ? 'prato' : 'ingrediente'}</p>
      <label>
        <SlCloudUpload/>
        <p>Selecione imagem</p>
        <input
          type="file"
          accept="image/png"
          onChange={onChange}
          {...rest}
        />
      </label>
    </Container>
  );
}