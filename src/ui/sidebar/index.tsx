import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {
  Directory,
  DirectoryIcon,
  DirectoryLeft,
  DirectoryRight,
  DirectoryWrapper,
  ErrorText,
  Input,
  RootDirectory,
  SidebarWrapper,
  UserNameWrapper,
} from './style';

interface DirectoryInput {
  directoryName: string;
}

function Sidebar() {
  const [test, setTest] = useState(false);
  const [name, setName] = useState('개발');
  const [rename, setRename] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DirectoryInput>();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmitDirectory = (data: DirectoryInput) => {
    console.log(data);
  };

  return (
    <>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>루트 폴더 생성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="폴더명 입력"
            {...register('directoryName', {
              required: true,
            })}
          />
          {errors.directoryName && <ErrorText>폴더명을 입력해주세요</ErrorText>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmitDirectory)}>
            추가
          </Button>
        </Modal.Footer>
      </Modal>
      <SidebarWrapper>
        <UserNameWrapper>
          <span>임성규님</span>
          <div className="icon">
            <BiPencil />
          </div>
        </UserNameWrapper>
        <DirectoryWrapper>
          <RootDirectory>
            <span>스크랩 저장 폴더</span>
            <div onClick={() => setModalShow(true)}>
              <AiOutlinePlus size={12} />
            </div>
          </RootDirectory>
          <Directory>
            <DirectoryLeft>
              <DirectoryIcon onClick={() => setTest((prev) => !prev)}>
                {test ? <BsFillCaretDownFill size={12} /> : <BsFillCaretRightFill size={12} />}
              </DirectoryIcon>
              {!rename ? (
                <span>{name}</span>
              ) : (
                <Input type="text" value={name} onChange={onChangeName} />
              )}
            </DirectoryLeft>
            <DirectoryRight>
              <div onClick={() => setRename((prev) => !prev)}>
                <BiPencil />
              </div>
              <div>
                <AiOutlinePlus />
              </div>
            </DirectoryRight>
          </Directory>
        </DirectoryWrapper>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
