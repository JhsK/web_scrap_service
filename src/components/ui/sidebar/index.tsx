import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';

import { useForm } from 'react-hook-form';
import { BsDot, BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { rootRename, subRename } from '../../../store/directory/directorySlice';
import DirectoryModal from './DirectoryModal';
import {
  DirectoryIcon,
  DirectoryWrapper,
  Input,
  RootAndSubWrapper,
  RootDirectory,
  RootDirectoryAdd,
  SidebarWrapper,
  SubDirectory,
  UserNameWrapper,
} from './style';
import { DirectoryInput, ModalShow } from './types';

function Sidebar() {
  const directroy = useAppSelector((state) => state.directory);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState<number[]>([]);
  const [rootRenameState, setRootRenameState] = useState<number[]>([]);
  const [subRenameState, setSubRenameState] = useState('');
  const [modalShow, setModalShow] = useState<ModalShow>({ show: false, type: 'root' });
  const [rootIndex, setRootIndex] = useState(-1); // 모달을 이용한 디렉터리 생성 시 사용되는 현재 루트 인텍스 상태값

  useEffect(() => {
    try {
      localStorage.setItem('directory', JSON.stringify(directroy));
      console.log('사용자의 디렉터리를 로컬에 저장하였습니다.');
    } catch (err) {
      console.log('사용자의 디렉터리를 로컬 저장에 실패하였습니다.');
    }
  }, [directroy]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DirectoryInput>();

  const onChangeRootNameDispatch = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(rootRename({ name: e.target.value, index }));
  };

  const onChangeSubNameDispatch = (
    e: React.ChangeEvent<HTMLInputElement>,
    includeRootIndex: number,
    subIndex: number
  ) => {
    dispatch(subRename({ rootIndex: includeRootIndex, name: e.target.value, subIndex }));
  };

  const onClickToggle = (index: number) => {
    if (toggle.includes(index)) {
      setToggle((prev) => prev.filter((_, i) => i !== index));
    } else {
      setToggle((prev) => [...prev, index]);
    }
  };

  const onClickRootRename = (index: number) => {
    if (rootRenameState.includes(index)) {
      setRootRenameState((prev) => prev.filter((renameIndex) => renameIndex !== index));
    } else {
      setRootRenameState((prev) => [...prev, index]);
    }
  };

  const onClickSubAddModal = (index: number) => {
    setRootIndex(index);
    setModalShow((prev) => ({ ...prev, show: true, type: 'sub' }));
  };

  return (
    <>
      <DirectoryModal
        modal={modalShow}
        setModal={setModalShow}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        rootIndex={rootIndex}
        reset={reset}
      />
      <SidebarWrapper>
        <UserNameWrapper>
          <span>테스트님</span>
          <div className="icon">
            <BiPencil />
          </div>
        </UserNameWrapper>
        <DirectoryWrapper>
          <RootDirectoryAdd>
            <span>스크랩 저장 폴더</span>
            <div onClick={() => setModalShow((prev) => ({ ...prev, show: true, type: 'root' }))}>
              <AiOutlinePlus size={12} />
            </div>
          </RootDirectoryAdd>
          {directroy.map((root, index) => (
            <RootAndSubWrapper>
              <RootDirectory key={root.id}>
                <div className="directoryLeft">
                  <DirectoryIcon onClick={() => onClickToggle(index)}>
                    {toggle.indexOf(index) ? (
                      <BsFillCaretRightFill size={12} />
                    ) : (
                      <BsFillCaretDownFill size={12} />
                    )}
                  </DirectoryIcon>
                  {rootRenameState.includes(index) ? (
                    <Input
                      type="text"
                      value={root.name}
                      onChange={(e) => onChangeRootNameDispatch(e, index)}
                    />
                  ) : (
                    <span onClick={() => navigate('/')}>{root.name}</span>
                  )}
                </div>
                <div className="directoryRight">
                  <div onClick={() => onClickRootRename(index)}>
                    <BiPencil />
                  </div>
                  <div onClick={() => onClickSubAddModal(index)}>
                    <AiOutlinePlus />
                  </div>
                </div>
              </RootDirectory>
              {toggle.includes(index) &&
                root.subDirectory?.map((sub, subIndex) => (
                  <SubDirectory
                    key={sub.id}
                    onClick={() => navigate(`/${sub.id}?rootIndex=${index}&subIndex=${subIndex}`)}
                  >
                    <div className="directoryLeft">
                      <DirectoryIcon>
                        <BsDot size={15} />
                      </DirectoryIcon>
                      {subRenameState === sub.id ? (
                        <Input
                          type="text"
                          value={sub.name}
                          onChange={(e) => onChangeSubNameDispatch(e, index, subIndex)}
                        />
                      ) : (
                        <span>{sub.name}</span>
                      )}
                    </div>
                    <div className="directoryRight">
                      <div onClick={() => setSubRenameState(sub.id)}>
                        <BiPencil />
                      </div>
                      <div onClick={() => onClickSubAddModal(index)}>
                        <AiOutlinePlus />
                      </div>
                    </div>
                  </SubDirectory>
                ))}
            </RootAndSubWrapper>
          ))}
        </DirectoryWrapper>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
