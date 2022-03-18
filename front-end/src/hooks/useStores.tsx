import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import store from '~/stores';

const useStores = (): typeof store => useContext(MobXProviderContext).rootStore;

export default useStores;
