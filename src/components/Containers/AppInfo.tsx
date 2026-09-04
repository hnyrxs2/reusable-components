import CustomHeader from '../Headers/CustomHeader';
import { ExternalLinkIcon, GithubIcon } from '../Icons';
import TextLabel from '../Inputs/Text/TextLabel';

const goToReporsitory = () =>
  window.open('https://github.com/hnyrxs2/reusable-components', '_blank');

const appDescription =
  'A collection of reusable components built with accessibility and consistency in mind';

const AppInfo = () => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      goToReporsitory();
    }
  };

  return (
    <div id="app-info-container">
      <CustomHeader
        label="Design System v1.0.0"
        description={appDescription}
        headerSize="medium"
        descriptionSize="xsmall"
      />
      <div
        id="app-info-github"
        onClick={goToReporsitory}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        aria-label="View on github"
      >
        <TextLabel value="View on Github" icon={<GithubIcon />} tabIndex={-1} />
        <ExternalLinkIcon />
      </div>
    </div>
  );
};

export default AppInfo;
