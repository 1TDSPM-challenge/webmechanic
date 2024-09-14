import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 5vw;
`;

const SecaoTexto = styled.div`
    color: white;
    font-size: 2.5vw;
    font-weight: bold;
    width: 50%;
    line-height: 1.2;
`;

const SubTexto = styled.p`
    margin-top: 10px;
    font-size: 1.2vw;
    font-weight: normal;
`;

const SecaoFormulario = styled.div`
    position: relative;
    width: 50%;
    padding: 50px;
    border-radius: 15px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const FundoBlur = styled.div`
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: linear-gradient(45deg, #ff0080, #6a0dad, #00c6ff);
    filter: blur(100px);
    z-index: -1;
    border-radius: 50%;
`;

const FundoBlur2 = styled(FundoBlur)`
    top: 200px;
    left: 200px;
    width: 600px;
    height: 600px;
    background: linear-gradient(60deg, #ff6b6b, #d65db1, #4a90e2);
`;

const TituloFormulario = styled.h2`
    margin-bottom: 20px;
    font-size: 1.8rem;
`;

const CampoInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 15px;

    i {
        margin-right: 10px;
        color: #3B5998;
    }

    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 1rem;
        color: #333;
    }
`;

const BotaoSubmit = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #3B5998;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #2D4373;
    }
`;

const BotaoToggle = styled.p`
    color: white;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: underline;
    font-size: 1rem;
`;

const PaginaLogin = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container>
            <SecaoTexto>
                <p>Viva a vida com segurança</p>
                <SubTexto>Cadastre-se ou faça login para aproveitar nossos benefícios</SubTexto>
            </SecaoTexto>

            <SecaoFormulario>
                <FundoBlur />
                <FundoBlur2 />
                
                <TituloFormulario>{isLogin ? 'Login' : 'Cadastro'}</TituloFormulario>
                <CampoInput>
                    <i className="fi fi-rr-user"></i>
                    <input type="email" placeholder="Email" />
                </CampoInput>
                <CampoInput>
                    <i className="fi fi-rr-lock"></i>
                    <input type="password" placeholder="Senha" />
                </CampoInput>
                {!isLogin && (
                    <>
                        <CampoInput>
                            <i className="fi fi-rr-id-badge"></i>
                            <input type="text" placeholder="Nome completo" />
                        </CampoInput>
                        <CampoInput>
                            <i className="fi fi-rr-phone-call"></i>
                            <input type="text" placeholder="Telefone" />
                        </CampoInput>
                    </>
                )}
                <BotaoSubmit>{isLogin ? 'Entrar' : 'Cadastrar'}</BotaoSubmit>
                <BotaoToggle onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                </BotaoToggle>
            </SecaoFormulario>
        </Container>
    );
};

export default PaginaLogin;
