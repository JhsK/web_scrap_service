import queryString from 'query-string';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { MdSaveAlt } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';
// import OpengraphReactComponent from 'opengraph-react';
import { usePreviewData } from '@opengraphninja/react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { postAdd } from '../../../store/directory/directorySlice';
import OpenGraph from './OpenGraph';
import { ContentsWrapper, PostRegister } from './style';

const SavedPost = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const { rootIndex } = queryString.parse(search);

  const directory = useAppSelector((state) => state.directory[Number(rootIndex)]);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const data = usePreviewData('https://opengraph.ninja');

  const onChangeValue = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
  };

  const onClickSavePost = () => {
    if (value === '') {
      return;
    }

    let subIndex = -1;
    directory.subDirectory.forEach((sub, index) => {
      if (sub.id === id) {
        subIndex = index;
      }
    });

    dispatch(postAdd({ rootIndex: Number(rootIndex), subIndex, post: value }));
    setValue('');
  };

  return (
    <ContentsWrapper>
      <PostRegister>
        <Form.Control
          type="text"
          value={value}
          onChange={onChangeValue}
          placeholder="저장할 게시글 주소를 넣어주세요"
        />
        <div className="icon" onClick={onClickSavePost}>
          <MdSaveAlt />
        </div>
      </PostRegister>
      <OpenGraph url="https://naver.com" />
      {/* <OpengraphReactComponent
        site="https://github.com/"
        appId="24bbe032-1ff7-442d-9b51-435796749556"
        // loader={A component to display while results are being fetched}
        size="small"
      /> */}
    </ContentsWrapper>
  );
};

export default SavedPost;
