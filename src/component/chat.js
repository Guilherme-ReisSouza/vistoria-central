import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardFooter } from 'mdb-react-ui-kit';
import { FaRegUser } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import config from '../controller/config';
import '../index.css';
import VCIcon from '../img/logo-vistoria-central.png';
import { verifyTag, useResponsiveMode } from '../controller/utils';

const ChatBox = ({setView}) => {

    const { chatId } = useParams();
    const [messages, setMessages] = useState([{ type: 'message-bot', text: 'Olá, como posso ajudar você? 😊' }]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [typingText, setTypingText] = useState('');
    const [chatIndentification, setChatIndentification] = useState(chatId);
    const [tagType, setTagType] = useState('none-tag');

    const isTypingEffectActive = useRef(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        const chatContainer = messagesEndRef.current?.parentNode;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };

    const isMobile = useResponsiveMode();

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const addMessageLetterByLetter = (message, index, currentText = '') => {

        setIsTyping(false); // Encerra o efeito de digitando

        if (message.length > 0) {
            const nextChar = message.charAt(0);
            const updatedText = currentText + nextChar;

            setMessages(currentMessages => {
                const newMessages = [...currentMessages];
                // Atualiza o texto da mensagem corrente com o texto atualizado
                newMessages[index] = { ...newMessages[index], text: updatedText };
                return newMessages;
            });

            setTimeout(() => {
                // Chama a função recursivamente com o restante da mensagem e o texto atualizado
                addMessageLetterByLetter(message.substring(1), index, updatedText);
            }, 50); // Ajuste o tempo para controlar a velocidade da "digitação"
        }
    };

    // Função para criar o efeito de "digitando..."
    const typingEffect = (message, currentText = '') => {
        if (!isTypingEffectActive.current) {
            return; // Previne que o efeito de "digitando" seja reiniciado enquanto já está ativo
        }
        if (message.length > 0) {
            const nextChar = message.charAt(0);
            const updatedText = currentText + nextChar;
            setTypingText(updatedText);

            setTimeout(() => {
                typingEffect(message.substring(1), updatedText);
            }, 100); // Ajuste o tempo conforme necessário
        } else {
            // Após terminar a digitação, reinicia o efeito após um curto atraso
            setTimeout(() => {
                setTypingText(''); // Reseta o texto para começar a "digitação" novamente
                if (isTypingEffectActive.current) {
                    typingEffect('...');
                }
            }, 500); // Ajuste o tempo de espera antes de reiniciar
        }
    };

    const sendMessage = async () => {
        if (!inputMessage) return;

        const newMessage = { type: 'user', text: inputMessage };
        setMessages(currentMessages => [...currentMessages, newMessage]);
        setInputMessage('');
        setIsTyping(true); // Inicia o efeito de digitação

        try {
            const res = await axios.post(`${config.apiUrlBase.prod}/chat`, {
                new_message: inputMessage,
                chat_id: chatIndentification, // Inclua o chat_id nas próximas solicitações
                type: 'gol-plus',
            });

            // Resposta da API recebida
            const apiResponse = res.data;

            console.log(apiResponse.chat_id);

            setChatIndentification(apiResponse.chat_id);

            // Adiciona a mensagem de resposta no estado com texto vazio inicialmente
            setMessages(currentMessages => {
                const replyIndex = currentMessages.length;
                const newMessages = [...currentMessages, { type: 'bot', text: '' }];

                const responseVerified = verifyTag(apiResponse.message);

                setTagType(responseVerified.type);

                // Chama a função para "digitar" a mensagem da API letra por letra
                addMessageLetterByLetter(responseVerified.message, replyIndex);
                return newMessages;
            });

            // Se houver URL de serviço, adiciona ao estado após a mensagem
            if (apiResponse.serviceUrl) {
                setMessages(currentMessages => [...currentMessages, { type: 'bot', text: apiResponse.serviceUrl }]);
            }

        } catch (error) {
            console.error("Erro ao enviar mensagem", error);
            setIsTyping(false); // Encerra o efeito de digitação em caso de erro
        }
    };

    // useEffect para isTyping
    useEffect(() => {
        if (isTyping) {
            isTypingEffectActive.current = true;
            typingEffect('...');
        } else {
            // Para interromper o efeito de digitação quando não estiver mais "digitando..."
            isTypingEffectActive.current = false;
            setTypingText('');
        }
    }, [isTyping]);

    return (
        <MDBCard className='chat-container'>
            <MDBCardTitle className='chat-title'>
                <div className='card-title-div'>
                    { !isMobile ?
                        <h1 className='chat-title-desktop'>Vistoria Central - ASSISTENTE VIRTUAL</h1>
                        :
                        <h1 className='chat-title-mobile'><span className='title'>Vistoria Central - ASSISTENTE VIRTUAL</span><span className='icon' onClick={() => setView('home')}><AiOutlineClose /></span></h1>
                    }
                </div>
            </MDBCardTitle>
            <MDBCardBody className='card-chat'>
                {messages.map((msg, index) => {
                    return (
                        <div className={`message-container ${msg.type === 'user' ? 'user' : 'bot'}`}>
                            {msg.type !== 'user' &&
                                <span className={`icon-container ${msg.type === 'user' ? 'user' : 'bot'}`}>
                                    <img src={VCIcon} className={`icon-message ${msg.type === 'user' ? 'user' : 'bot'}`} alt='Icone da empresa' />
                                </span>
                            }
                            <p key={index} className={`message ${msg.type === 'user' ? 'message-user' : 'message-bot'}`}>
                                {msg.text}
                            </p>

                            {msg.type === 'user' &&
                                <span className={`icon-container ${msg.type === 'user' ? 'user' : 'bot'}`}>
                                    <FaRegUser className={`icon-message ${msg.type === 'user' ? 'user' : 'bot'}`} />
                                </span>
                            }
                        </div>
                    );
                })}
                {isTyping && <div className='message-container bot'>
                    <span className='icon-container bot'>
                        <img src={VCIcon} className='icon-message bot' alt='Icone da empresa' />
                    </span>
                    <p className='message message-bot'>
                        digitando{typingText}
                    </p>
                </div>}
                <div ref={messagesEndRef} />

            </MDBCardBody>
            <MDBCardFooter className='chat-footer'>
                {tagType === 'none-tag' ?
                    <div className='d-flex justify-content-center align-items-center'>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={e => setInputMessage(e.target.value)}
                            placeholder='Digite sua dúvida'
                            onKeyPress={event => event.key === 'Enter' ? sendMessage() : null}
                            className="message-input"
                            disabled={isTyping}
                        />
                        <button onClick={sendMessage} className="send-button" disabled={isTyping}>Enviar</button>
                    </div>
                    : tagType === 'end-tag' ?
                        <div className='end-message'>
                            <p>Chat encerrado</p>
                            <a href="https://wa.me/5511995902927?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Gol%20Plus%20ABC" rel="noreferrer" target='_blank' className='end-chat-contact'>
                                <span className='icon'><BsWhatsapp /></span>
                                Precisa de mais ajuda? Fale com um consultor através do nosso WhatsApp. Clique aqui!
                            </a>
                        </div>
                        :
                        <p>adicional entre em contato com nosso WhatsApp.</p>
                }
            </MDBCardFooter>
        </MDBCard>
    )
}

export { ChatBox };
