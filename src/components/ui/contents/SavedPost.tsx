import queryString from 'query-string';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { MdSaveAlt } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { postAdd } from '../../../store/directory/directorySlice';
import OpenGraph from './OpenGraph';
import { ContentsWrapper, OpenGraphWrapper, PostRegister } from './style';

const SavedPost = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const { rootIndex, subIndex } = queryString.parse(search);

  const directory = useAppSelector(
    (state) => state.directory[Number(rootIndex)].subDirectory[Number(subIndex)]
  );
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onChangeValue = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
  };

  const onClickSavePost = () => {
    if (value === '') {
      return;
    }

    // let subIndexA = -1;
    // directory.subDirectory.forEach((sub, index) => {
    //   if (sub.id === id) {
    //     subIndexA = index;
    //   }
    // });

    dispatch(postAdd({ rootIndex: Number(rootIndex), subIndex: Number(subIndex), post: value }));
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
      <OpenGraph urls={directory.posts} />
      {/* <OpenGraphWrapper>
        <OpenGraph url="https://naver.com" />
        <OpenGraph url="https://naver.com" />
        <OpenGraph url="https://naver.com" />
        <OpenGraph url="https://naver.com" />
      </OpenGraphWrapper> */}
    </ContentsWrapper>
  );
};

export default SavedPost;
