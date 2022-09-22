import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import {
  Directory,
  DirectoryIcon,
  DirectoryLeft,
  DirectoryRight,
  DirectoryWrapper,
  Input,
  SidebarWrapper,
  UserNameWrapper,
} from './style';

function Sidebar() {
  const [test, setTest] = useState(false);
  const [name, setName] = useState('개발');
  const [rename, setRename] = useState(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <SidebarWrapper>
      <UserNameWrapper>
        <span>임성규님</span>
        <div className="icon">
          <BiPencil />
        </div>
      </UserNameWrapper>
      <DirectoryWrapper>
        <span className="title">스크랩 저장 폴더</span>
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
  );
}

export default Sidebar;
