import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { CardWrapper, SpinnerWrapper } from './style';

const OpenGraph = ({ urls }: { urls: string[] }) => {
  const [loading, setLoading] = useState(true);
  const [op, setOp] = useState({
    title: '',
    image: '',
    description: '',
  });

  // useEffect(() => {
  //   const encodeUrl = urls.map((url) => encodeURIComponent(url));
  //   console.log('!!');
  //   Promise.all(
  //     encodeUrl.map((url) =>
  //       axios(
  //         `https://opengraph.io/api/1.1/site/${url}?accept_lang=auto&app_id=${process.env.REACT_APP_OPEN_GRAPH_ID}`
  //       )
  //     )
  //   ).then((res) => console.log(res));
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const bufferUrl = Buffer.from(
  //       `qwe6293@nate.com:${process.env.REACT_APP_OPEN_GRAPH_KEY}`
  //     ).toString('base64');
  //     const test = encodeURIComponent(urls[0]);
  //     const { data } = await axios('https://api.urlmeta.org/?url=https://moin.im', {
  //       headers: {
  //         Authorization: `Basic ${bufferUrl}`,
  //       },
  //     });

  //     console.log(data);
  //   })();
  // });

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const encodeUrl = encodeURIComponent(urls[0]);
  //       const { data } = await axios(
  //         `https://opengraph.io/api/1.1/site/${encodeUrl}?accept_lang=auto&app_id=${process.env.REACT_APP_OPEN_GRAPH_ID}`
  //       );
  //       console.log(data);
  //       setOp((prev) => ({
  //         ...prev,
  //         title: data.hybridGraph.title,
  //         image: data.hybridGraph.image,
  //         description: data.hybridGraph.description,
  //       }));
  //       console.log(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  return (
    <>
      {/* {loading ? (
        <SpinnerWrapper>
          <Spinner animation="border" />
        </SpinnerWrapper>
      ) : (
        <CardWrapper>
          <a href={url} target="_blank" rel="noreferrer">
            <Card>
              <Card.Img variant="top" src={op.image} />
              <Card.Body>
                <Card.Title>{op.title}</Card.Title>
                <Card.Text>{op.description}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </CardWrapper>
      )} */}
    </>
  );
};

export default OpenGraph;
