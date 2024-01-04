import {useEffect} from 'react';
import {async_getPlayers as getPlayers} from '../model/player';
import {Redux} from 'store';
import {useDispatch, useSelector} from 'react-redux';
import {Player, ThemeName} from 'domain/entities';

export default function useManager() {
  const dispatch = useDispatch();

  const theme = useSelector((state: any) => state.userProperties.theme);

  const changeTheme = (theme: ThemeName) =>
    dispatch(Redux.Actions.UserProperties.update({theme: theme}));

  useEffect(() => {
    const fetchData = async () => {
      const data: Player[] = await getPlayers();
      dispatch(Redux.Actions.UserProperties.updateName(data[0].name));
    };
    fetchData();
  }, [dispatch]);

  const completeLevel = () =>
    dispatch(Redux.Actions.UserProperties.completeLevel());

  const playerData = useSelector((state: any) => state.userProperties);

  const changeName = (name: string) =>
    dispatch(Redux.Actions.UserProperties.updateName(name));

  const levelCurrentNumber = useSelector(
    (state: any) => state.userProperties.level,
  );

  return {
    playerData,
    changeName,
    theme,
    changeTheme,
    completeLevel,
    levelCurrentNumber,
  };
}
