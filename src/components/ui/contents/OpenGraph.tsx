import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { OpenGraphWrapper } from './style';

const OpenGraph = ({ url }: { url: string }) => {
  const [op, setOp] = useState({
    title: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const encodeUrl = encodeURIComponent(url);
        const { data } = await axios(
          `https://opengraph.io/api/1.1/site/${encodeUrl}?accept_lang=auto&app_id=${process.env.REACT_APP_OPEN_GRAPH_ID}`
        );
        setOp((prev) => ({
          ...prev,
          title: data.hybridGraph.title,
          image: data.hybridGraph.image,
          description: data.hybridGraph.description,
        }));
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <OpenGraphWrapper>
      <Card>
        <Card.Img variant="top" src={op.image} />
        <Card.Body>
          <Card.Title>{op.title}</Card.Title>
          <Card.Text>{op.description}</Card.Text>
        </Card.Body>
      </Card>
    </OpenGraphWrapper>
  );
};

export default OpenGraph;
