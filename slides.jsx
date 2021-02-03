/* eslint-disable */

/**
 * styled-system est une libraire qui vient complementer styled-component (ou emotion)
 * 
 * Elle facilite la création des primitives de votre design system (Input, Button, Text)
 * 
 * Ces primitives exposent plus ou moins de properties pour le style
 */


/**
 * Styled-system
 */

/**
 * 
 */
import styled from "styled-components";

const View = styled.div`
  padding: 8px;
  background-color: cyan;
  color: black;
`;

<View>...</View>;

<View padding="8px" backgroundColor="cyan" color="black" />;








/**
 * 
 */
const theme = {
  breakpoints: ["720px", "1080px"],
  colors: {
    primary: "cyan",
    primaryText: "black",
  },
  space: [0, 4, 8, 16, 32, 64],
};


 

/**
 * Avec styled-system, respecter le design system devient le chemin facile
 * Alors que sortir des sentiers battus demande plus d'effort
 */


// Sans styled-system
const Container = styled.div`
  padding: ${({theme}) => theme.space[2]}px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primaryText};
`;
<Container>...</Container>;









// Avec styled-system
<View padding={2} backgroundColor="primary" color="primaryText" />;

// Encore plus court !
<View p={2} bg="primary" color="primaryText" />;

// 5 caractères de plus pour que le padding soit responsive, qui dit mieux ?
<View p={[2, 4]} bg="primary" color="primaryText" />;



/**
 * L'api [class] nous force à choisir une abstraction dès la première occurence d'un pattern
 *
 */