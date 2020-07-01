import React from 'react'

export default () =>
    <header>
        {/*Imagem de logo*/}
        <img></img>

        {/*Campo para a busca*/}        
        <form>
            <label>
                Busca:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
        
        {/*Botão para troca de tema*/}
        <button></button>
    </header>