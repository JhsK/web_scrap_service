import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { removeUrlCard } from '../../../store/directory/directorySlice';
import { CardCloseIcon, CardWrapper, SpinnerWrapper } from './style';

interface OpenGraphDTO {
  id: number;
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

interface OpenGraphProps {
  directory: { posts: string[] };
  rootIndex: number;
  subIndex: number;
}

axios.defaults.withCredentials = true;

const OpenGraph = ({ directory, rootIndex, subIndex }: OpenGraphProps) => {
  const [loading, setLoading] = useState(true);
  const [op, setOp] = useState<OpenGraphDTO[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data } = await axios.post('http://localhost:3001/url', { urls: directory.posts });
      setLoading(false);
      const descData = data.sort((a: OpenGraphDTO, b: OpenGraphDTO) => a.id - b.id);
      setOp([...descData]);
    })();
  }, [directory]);

  const onClickRemoveUrlCard = (index: number) => {
    dispatch(removeUrlCard({ rootIndex, subIndex, postIndex: index }));
  };

  return (
    <>
      {loading ? (
        <SpinnerWrapper>
          <Spinner animation="border" />
        </SpinnerWrapper>
      ) : (
        <CardWrapper>
          {op.map((url) => (
            <Card key={url.ogUrl || url.requestUrl}>
              <CardCloseIcon onClick={() => onClickRemoveUrlCard(url.id)}>
                <IoIosCloseCircleOutline size="20px" color="#dadde2" />
              </CardCloseIcon>
              <Card.Img variant="top" src={url.ogImage.url} />
              <a href={url.ogUrl || url.requestUrl} target="_blank" rel="noreferrer">
                <Card.Body>
                  <Card.Title>{`${url.ogTitle.slice(0, 20)}...`}</Card.Title>
                  <Card.Text>{`${url.ogDescription.slice(0, 50)}...`}</Card.Text>
                </Card.Body>
              </a>
            </Card>
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default OpenGraph;
