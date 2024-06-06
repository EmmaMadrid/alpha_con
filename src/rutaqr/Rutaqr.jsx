// Rutaqr.jsx
import { useParams } from 'react-router-dom';

export function Rutaqr() {
  let { folio } = useParams();
  // Aquí puedes hacer lo que necesites con el folio del boleto
  // Por ejemplo, podrías buscar en tu base de datos el boleto con este folio
  return (
    <div className="rutaqr-container">
      <h2 className="rutaqr-title">El folio del boleto es: {folio}</h2>
    </div>
  );
}