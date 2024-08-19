import './Container.css'
import SeekBar from "./SeekBar";

 const Container = ({children}) => {
  return (
    <>
    <SeekBar />
        <div className="box_cuerpo">
            {children}
        </div>
    </>
  );
};

export default Container;