import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function CardComponent(props: CardProps): JSX.Element {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Ver mais</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;