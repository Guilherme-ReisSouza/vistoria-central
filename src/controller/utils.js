import { useState, useEffect } from 'react';

const useResponsiveMode = () => {
  // Define um estado booleano para o modo responsivo
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Função para atualizar o estado com base na largura da janela
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    // Adiciona o event listener para resize
    window.addEventListener('resize', handleResize);

    // Limpa o event listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Dependências vazias = efeito ocorre no mount e unmount

  return isMobile;
}

const verifyTag = (message) => {
    if (message.includes('[END_CHAT]')) { // Verifica se a mensagem contém a tag [END_CHAT]
       return { message: message.replace('[END_CHAT]', ''), type: 'end-tag' }; // Remove a tag da mensagem
    }else{
        return { message: message, type: 'none-tag' }; // Remove a tag da mensagem
    }
}

export { verifyTag, useResponsiveMode };