import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { CardCloseIcon, CardWrapper, SpinnerWrapper } from './style';

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

interface Tafasd {
  id: string;
  type: 'sub';
  name: string;
  posts: string[];
}

interface OpenGraphImage {
  height: number | null;
  width: number | null;
  type: string;
  url: string;
}

axios.defaults.withCredentials = true;

const OpenGraph = ({ directory }: any) => {
  const [loading, setLoading] = useState(true);
  const [op, setOp] = useState<OpenGraphDTO[]>([]);
  console.log(directory);
  useEffect(() => {
    (async () => {
      const { data } = await axios.post('http://localhost:3001/url', { urls: directory.posts });
      setLoading(false);
      setOp([...data]);
    })();
  }, []);

  const onClickRemoveUrlCard = (index: number) => {};

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
                <CardCloseIcon
                  onClick={() => onClickRemoveUrlCard(directory.posts.indexOf(url.ogUrl))}
                >
                  <IoIosCloseCircleOutline size="20px" color="#dadde2" />
                </CardCloseIcon>
                <Card.Img variant="top" src={url.ogImage.url} />
                <Card.Body>
                  <Card.Title>{`${url.ogTitle.slice(0, 20)}...`}</Card.Title>
                  <Card.Text>{`${url.ogDescription.slice(0, 45)}...`}</Card.Text>
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
