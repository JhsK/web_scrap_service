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
  RootDirectoryAdd,
  SidebarWrapper,
  UserNameWrapper,
} from './style';
import { useAppDispatch, useAppSelector } from '../../store';
import { DirecotryObjState, rootAdd } from '../../store/directory/directorySlice';

interface DirectoryInput {
  directoryName: string;
}

function Sidebar() {
  const directroy = useAppSelector((state) => state.directory);
  const dispatch = useAppDispatch();

  const [test, setTest] = useState(false);
  const [name, setName] = useState('개발');
  const [rename, setRename] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DirectoryInput>();
  console.log(directroy);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmitDirectory = (data: DirectoryInput) => {
    const addDirectory: DirecotryObjState = {
      type: 'root',
      name: data.directoryName,
    };
    setModalShow(false);
    dispatch(rootAdd(addDirectory));
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
          <RootDirectoryAdd>
            <span>스크랩 저장 폴더</span>
            <div onClick={() => setModalShow(true)}>
              <AiOutlinePlus size={12} />
            </div>
          </RootDirectoryAdd>
          {directroy.directoryList.map((root) => (
            <Directory>
              <DirectoryLeft>
                <DirectoryIcon onClick={() => setTest((prev) => !prev)}>
                  {test ? <BsFillCaretDownFill size={12} /> : <BsFillCaretRightFill size={12} />}
                </DirectoryIcon>
                <span>{root.name}</span>
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
          ))}
          {/* <DirectoryLeft>
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
            </DirectoryRight> */}
        </DirectoryWrapper>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
