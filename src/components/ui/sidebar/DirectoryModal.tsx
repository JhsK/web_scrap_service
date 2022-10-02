import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ErrorText } from './style';
import { DirectoryInput, ModalShow } from './types';
import {
  DirecotryObjState,
  rootAdd,
  subAdd,
  SubDirectoryObj,
} from '../../../store/directory/directorySlice';
import { useAppDispatch } from '../../../store';

interface RootModalProps {
  modal: ModalShow;
  setModal: React.Dispatch<React.SetStateAction<ModalShow>>;
  register: UseFormRegister<DirectoryInput>;
  handleSubmit: UseFormHandleSubmit<DirectoryInput>;
  errors: FieldErrorsImpl<DirectoryInput>;
  rootIndex: number;
  reset: UseFormReset<DirectoryInput>;
}

const DirectoryModal = ({
  modal,
  setModal,
  register,
  handleSubmit,
  errors,
  rootIndex,
  reset,
}: RootModalProps) => {
  const dispatch = useAppDispatch();

  const onSubmitRootDirectoryDispatch = (data: DirectoryInput) => {
    const addDirectory: DirecotryObjState = {
      id: uuidv4(),
      type: 'root',
      name: data.directoryName,
      subDirectory: [],
    };
    reset({ directoryName: '' });
    setModal((prev) => ({ ...prev, show: false }));
    dispatch(rootAdd(addDirectory));
  };

  const onSubmitSubDirectoryDispatch = (data: DirectoryInput) => {
    const addDirectory: SubDirectoryObj = {
      id: uuidv4(),
      type: 'sub',
      name: data.directoryName,
    };
    reset({ directoryName: '' });
    setModal((prev) => ({ ...prev, show: false }));
    dispatch(subAdd({ data: addDirectory, index: rootIndex }));
  };

  return (
    <Modal show={modal.show} onHide={() => setModal((prev) => ({ ...prev, show: false }))}>
      <Modal.Header closeButton>
        <Modal.Title>{modal.type === 'root' ? '루트 폴더 생성' : '하위 폴더 생성'}</Modal.Title>
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
        <Button variant="secondary" onClick={() => setModal((prev) => ({ ...prev, show: false }))}>
          닫기
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit(
            modal.type === 'root' ? onSubmitRootDirectoryDispatch : onSubmitSubDirectoryDispatch
          )}
        >
          추가
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DirectoryModal;
