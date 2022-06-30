import React, { useEffect } from 'react';

interface SecretProp {
  ativo: boolean;
}

const TopSecret: React.FC<SecretProp> = ({ ativo }) => {

  useEffect(() => {
    ativo
      ? (document.title = 'DANGER | Zona de Descontos')
      : (document.title = 'React App');
  }, [ativo]);

  return (
    <div>
      {ativo && (
        <>
          <h2>Pede um Bauru do Porto 🍔 </h2>
          <h2>50% de desconto só aqui!</h2>
        </>
      )}
    </div>
  );
};

export default TopSecret;