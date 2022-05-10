import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp, useFrame} = metaversefile;

export default () => {
  const app = useApp();

  useFrame(() => {

  });
  
  return app;
};
