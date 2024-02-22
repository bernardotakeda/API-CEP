import { useState } from 'react'
import './App.css'

function App() {

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscarCep = async (event) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Cep não encontrado.');
        }   
        setEndereco(await response.json());  
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <div className='container'>
        <h1>Busca Endereço</h1>
        <input
          type='number'
          placeholder='Digite seu CEP'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={handleBuscarCep}>
          Buscar
        </button>
        <div className='endereco'>
          {endereco ?(<>
          <p>Rua: {endereco.logradouro} <br />Cep: {endereco.cep} <br />Complemento: {endereco.complemento}<br />Localidade: {endereco.localidade} <br /> Bairro: {endereco.bairro} <br />Uf: {endereco.uf} <br />Ibge: {endereco.ibge} <br /> Gia: {endereco.gia} <br />DDD: {endereco.ddd} <br />Siafi: {endereco.siaf}</p>
          
            </>): null}        
        </div>
      </div>
    </>
  )
}

export default App
