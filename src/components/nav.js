import * as React from "react";
import { Link } from 'gatsby';
import styled from '@emotion/styled';

/* esta configuracion del styled component es para centrar los links a medida que cambia el tamaño de la pantalla */
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px){
        padding-bottom: 0;
    }
`;
/* Styled Components permitedarle estilos a un componente ya creado, una vez creado el styled component hay que reempalzar las etiquetas */
const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &::last-of-type{
        margin-right: 0;
    }
    &.pagina-actual {
        border-bottom: 2px solid #FFF;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav> 
            <NavLink 
                to={'/'}
                activeClassName='pagina-actual'
                >Inicio</NavLink>
                
            <NavLink 
                to={'/nosotros'}
                activeClassName='pagina-actual'
                >Nosotros</NavLink>
        </Nav>
     );
}
 
export default Navegacion;