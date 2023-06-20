import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={['#ffc609', '#07d407', '#ff0000']}
      backgroundColor="#150f69"
    />
  );
};
