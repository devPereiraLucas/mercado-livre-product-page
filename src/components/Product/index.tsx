import  React  from 'react';

import tshirtImage from '../../assets/tshirt.png'

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';


const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-ShReceba o produto que esta esperando ou devolvemos o seu dinheiro" />
          </Gallery>
          <Info />
        </Column>
        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Loren Ipsum</p>
        <p className="description">
          Receba o produto que esta esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">
          Sem Garantia
        </p>
      </span>
    </div>

    <a href="#">
      Saiba mais sobre garantia 
    </a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Phasellus nec consequat elit. In a imperdiet turpis. Nulla dignissim volutpat augue, a blandit augue vulputate eget. 
      Suspendisse euismod ex quis metus iaculis vulputate. Ut commodo luctus enim, 
      sit amet euismod urna eleifend ut. Mauris tristique tellus ac lectus fringilla cursus. 
      Duis pharetra dictum ipsum nec sollicitudin. 
      Etiam enim tortor, convallis in nisl eget, rhoncus dictum purus. Nam elit ligula, 
      mollis vitae molestie nec, ornare eu orci.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Cras mattis, diam sed consequat venenatis, massa nibh congue turpis, 
      vitae maximus risus lorem vitae libero. Nullam quis gravida justo. 
      Aenean placerat tincidunt mauris et auctor. Sed at volutpat tortor. 
      Praesent dapibus, sapien eu finibus semper, quam lorem iaculis tellus, 
      quis porta magna est a nisi. Sed in convallis felis. Mauris ut eros quis libero vehicula hendrerit. 
      Etiam dapibus blandit neque quis venenatis. Nam eget ipsum sed sem venenatis consequat. 
      Nunc sit amet consectetur felis, vitae pellentesque lectus.
    </p>
  </Description>
)

export default Product;
