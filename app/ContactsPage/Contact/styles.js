import { css } from 'react-emotion';
import { flexColumn, mobile } from '../../styles';

export const editingGreen = 'rgba(50,90,90,1)';

export const box = css`
  ${flexColumn};
  justify-content: center;
  position: relative;
  margin: 4rem 2vw;
  width: 28rem;
  height: 17rem;
  border-radius: .4rem;
  border: .05rem solid rgba(154,154,154,.2);
  background: white;
  opacity: .8;
  transition: transform .6s;

  ${mobile} {
    width: 75vw;
    height: 20rem;
  }

    img {
      transition: transform .4s, opacity .5s;

      &:hover {
        transform: scale(1.2);
      }
    }

    &:hover {
        img {
          display: block;
          opacity: 1;
          cursor: pointer;
          transition: transform .4s, opacity 1s .2s;
        }
    }
`;

export const editingBox = css`
  transform: scale(1.1);
  border-color: ${editingGreen};
`;

export const deletingBox = css`
  border-color: rgba(170,20,40,.7);
`;

export const newBox = css`
  border-width: .1rem;
  border-color: rgba(40,170,90,1);
`;


export const pencil = css`
  position: absolute;
  top: .8rem;
  right: 1rem;
  width: 1.3rem;
  opacity: 0;
`;

export const trash = css`
  position: absolute;
  top: .8rem;
  left: 1rem;
  width: .85rem;
  opacity: .7 !important;

  &:hover {
    opacity: 1 !important;
    transition: transform .4s, opacity .3s !important;
  }
`;


export const contactField = css`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 1.3rem 0;
  width: 90%;

  ${mobile} {
    margin: 1rem 0;
  }

    span {
      font-size: .7rem;
      margin-right: .5rem;
      opacity: .5;
    }
`;

export const contactDetail = css`
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(150,150,150,.4);
  color: rgba(50,50,50,1);
  padding-left: .2rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

export const special = css`
  box-shadow: 0 0 1rem .4rem rgba(244,250,255,1);
  border: 1.4rem solid white;
  transform: scale(1.08);
`;
