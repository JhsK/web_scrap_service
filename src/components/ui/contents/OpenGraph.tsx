import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { CardWrapper, SpinnerWrapper } from './style';

interface OpenGraphDTO {
  charset: string;
  favicon: string;
  ogDescription: string;
  ogImage: OpenGraphImage;
  ogTitle: string;
  ogType: string;
  ogUrl: string;
  requestUrl: string;
  success: boolean;
  twitterCard: string;
  twitterDescription: string;
  twitterImage: OpenGraphImage;
  twitterTitle: string;
}

interface OpenGraphImage {
  height: number | null;
  width: number | null;
  type: string;
  url: string;
}

axios.defaults.withCredentials = true;

const OpenGraph = ({ urls }: { urls: string[] }) => {
  const [loading, setLoading] = useState(true);
  const [op, setOp] = useState<OpenGraphDTO[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.post('http://localhost:3001/url', { urls });
      console.log(data);
      setLoading(false);
      setOp([...data]);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerWrapper>
          <Spinner animation="border" />
        </SpinnerWrapper>
      ) : (
        <CardWrapper>
          {op.map((url) => (
            <a href={url.ogUrl} key={url.ogUrl} target="_blank" rel="noreferrer">
              <Card>
                <Card.Img variant="top" src={url.ogImage.url} />
                <Card.Body>
                  <Card.Title>{url.ogTitle}</Card.Title>
                  <Card.Text>{url.ogDescription}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default OpenGraph;
