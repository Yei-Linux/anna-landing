import classNames from 'classnames';
import { useSignInStore } from '../../../../../../store';
import { Text } from '../../../../../ui/Text';
import { useState } from 'react';

interface IOption {
  text: string;
  isSelected: boolean;
  onClick?: () => void;
}
const Option = ({ text, onClick, isSelected }: IOption) => {
  return (
    <li
      className={classNames(
        'p-4 flex items-center gap-3 bg-neutralPrimaryLight border-2 border-neutralPrimary cursor-pointer'
      )}
      onClick={onClick}
    >
      <div
        className={classNames('rounded-md bg-primary w-[20px] h-[20px]', {
          'bg-primary': isSelected,
          'bg-white': !isSelected,
          'border-2 border-neutralPrimary': !isSelected,
        })}
      ></div>

      <Text
        text={text}
        level="base"
        as="p"
        className="text-neutralStrong text-center"
      />
    </li>
  );
};

export const Options = () => {
  const { setSigninData, signInData } = useSignInStore();
  return (
    <ul className="rounded-lg">
      <Option
        text="Diabetes"
        isSelected={signInData?.cronicDesease === 1}
        onClick={() => setSigninData({ cronicDesease: 1 })}
      />
      <Option
        text="Hipertensión"
        isSelected={signInData?.cronicDesease === 2}
        onClick={() => setSigninData({ cronicDesease: 2 })}
      />
      <Option
        text="Enfermedades respiratorias"
        isSelected={signInData?.cronicDesease === 3}
        onClick={() => setSigninData({ cronicDesease: 3 })}
      />
      <Option
        text="Obesidad"
        isSelected={signInData?.cronicDesease === 4}
        onClick={() => setSigninData({ cronicDesease: 4 })}
      />
      <Option
        text="Dislipidemia"
        isSelected={signInData?.cronicDesease === 5}
        onClick={() => setSigninData({ cronicDesease: 5 })}
      />
      <Option
        text="Tiroides"
        isSelected={signInData?.cronicDesease === 6}
        onClick={() => setSigninData({ cronicDesease: 6 })}
      />
    </ul>
  );
};
