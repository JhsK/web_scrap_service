import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';

import { useForm } from 'react-hook-form';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../store';
import { rootRename } from '../../store/directory/directorySlice';
import {
  Directory,
  DirectoryIcon,
  DirectoryLeft,
  DirectoryRight,
  DirectoryWrapper,
  Input,
  RootDirectoryAdd,
  SidebarWrapper,
  UserNameWrapper,
} from './style';
import { DirectoryInput } from './types';
import DirectoryModal from './DirectoryModal';

function Sidebar() {
  const directroy = useAppSelector((state) => state.directory);
  const dispatch = useAppDispatch();

  const [toggle, setToggle] = useState<number[]>([]);
  const [rename, setRename] = useState<number[]>([]);
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DirectoryInput>();

  const onChangeNameDispatch = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(rootRename({ name: e.target.value, index }));
  };

  const onClickToggle = (index: number) => {
    if (toggle.includes(index)) {
      setToggle((prev) => prev.filter((_, i) => i !== index));
    } else {
      setToggle((prev) => [...prev, index]);
    }
  };

  const onClickRename = (index: number) => {
    if (rename.includes(index)) {
      setRename((prev) => prev.filter((_, i) => i !== index));
    } else {
      setRename((prev) => [...prev, index]);
    }
  };

  return (
    <>
      <DirectoryModal
        modal={modalShow}
        setModal={setModalShow}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
      />
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
          {directroy.map((root, index) => (
            <Directory key={root.id}>
              <DirectoryLeft>
                <DirectoryIcon onClick={() => onClickToggle(index)}>
                  {toggle.indexOf(index) ? (
                    <BsFillCaretRightFill size={12} />
                  ) : (
                    <BsFillCaretDownFill size={12} />
                  )}
                </DirectoryIcon>
                {rename.includes(index) ? (
                  <Input
                    type="text"
                    value={root.name}
                    onChange={(e) => onChangeNameDispatch(e, index)}
                  />
                ) : (
                  <span>{root.name}</span>
                )}
              </DirectoryLeft>
              <DirectoryRight>
                <div onClick={() => onClickRename(index)}>
                  <BiPencil />
                </div>
                <div>
                  <AiOutlinePlus />
                </div>
              </DirectoryRight>
            </Directory>
          ))}
        </DirectoryWrapper>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
