import styled from 'styled-components'

export const Container = styled.div`
  .colored:nth {
    background-size: cover !important;
    background-position: center !important;
  }
  .colored:nth-child(1) {
    background: #FCBA33;
  }
  .colored:nth-child(2) {
    background: url('https://d-art.ppstatic.pl/kadry/k/r/7/fc/df/5037598bcc4ba_o_original.jpg');
  }
  .colored:nth-child(3) {
    background: url('https://amazonasatual.com.br/wp-content/uploads/2019/06/FOTO.103-1.jpg');
  }
  .colored:nth-child(4) {
    background: url('http://www.jacienydias.com.br/uploads/noticia/noticia-108-59d8d6669bb21.jpg');
  }
  
`

export const Spacer = styled.div`
  height: 15vh;
  background: #FCBA33;
  background-position: bottom;
`
