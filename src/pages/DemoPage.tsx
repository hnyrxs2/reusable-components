import { Routes, Route } from 'react-router-dom';
import ButtonDemo from './ButtonDemo';
import InputDemo from './InputDemo';

const DemoPage = () => {
  return (
    <div id="demo-page-container">
      <Routes>
        <Route path="/" element={<ButtonDemo />} />
        <Route path="/Input" element={<InputDemo />} />
      </Routes>
    </div>
  );
};

export default DemoPage;
