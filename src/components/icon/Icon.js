import React from 'react';
import { FiUpload, FiCamera } from 'react-icons/fi';
import {
  AiOutlineDelete,
  AiOutlineUserAdd,
  AiOutlineTag,
  AiFillTag
} from 'react-icons/ai';
import { RiHomeLine } from 'react-icons/ri';
import { BiMenuAltRight, BiText } from 'react-icons/bi';
import { HiPencil, HiOutlinePencil } from 'react-icons/hi';
import { IoIosAdd } from 'react-icons/io';
import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';

const {
  ICON,
  colors: {
    color: { primary }
  }
} = baseTheme;

const IconSC = styled.span`
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  color: ${({ color }) => color};
`;

IconSC.defaultProps = {
  w: ICON.width,
  h: ICON.height,
  color: primary.santorini
};


const Icon = ({ type, ...rest }) => {
  return (
    <IconSC {...rest}>
      {type === 'upload' ? (
        <FiUpload />
      ) : type === 'delete' ? (
        <AiOutlineDelete />
      ) : type === 'addUser' ? (
        <AiOutlineUserAdd />
      ) : type === 'home' ? (
        <RiHomeLine />
      ) : type === 'menu' ? (
        <BiMenuAltRight />
      ) : type === 'pencil' ? (
        <HiOutlinePencil />
      ) : type === 'pencilHover' ? (
        <HiPencil />
      ) : type === 'tag' ? (
        <AiOutlineTag />
      ) : type === 'tagHover' ? (
        <AiFillTag />
      ) : type === 'textHover' ? (
        <BiText />
      ) : type === 'camera' ? (
        <FiCamera />
      ) : type === 'add' ? (
        <IoIosAdd />
      ) 
       : null}
    </IconSC>
  );
};

export default Icon;
