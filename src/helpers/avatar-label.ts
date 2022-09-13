interface IGetAvatarLabel {
  name: string;
  surname: string;
}

export const getAvatarLabel = ({ name, surname }: IGetAvatarLabel) => {
  return `${name[0]}${surname[0]}`;
};
